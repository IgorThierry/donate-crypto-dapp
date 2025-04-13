import { Campaign, CampaignRaw, MyContract } from '@/_types/contract'
import Web3 from 'web3'
import ABI from './ABI.json'
import { getCookie, setCookie } from 'cookies-next/client'

const CONTRACT_ADDRESS = '0x26528e2b7932d049BB9e5dA351962c65F2aFF0fE'

export type AddCampaignParams = {
  title: string
  description: string
  videoUrl: string
  imageUrl: string
}

export class Web3Provider {
  private static instance: Web3Provider | null = null
  private web3: Web3
  private account: string | null = null

  constructor(ethereum: unknown) {
    if (!ethereum) {
      throw new Error('MetaMask not found!')
    }

    this.web3 = new Web3(ethereum)
    this.account = getCookie('wallet') || null
  }

  static getInstance(ethereum: unknown): Web3Provider {
    if (!Web3Provider.instance) {
      Web3Provider.instance = new Web3Provider(ethereum)
    }
    return Web3Provider.instance
  }

  getAccount(): string | null {
    return this.account
  }

  async login(): Promise<string> {
    const accounts = await this.web3.eth.requestAccounts()
    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found')
    }
    this.account = accounts[0]
    setCookie('wallet', accounts[0])
    return accounts[0]
  }

  async getBalance(address: string): Promise<string> {
    const balanceInWei = await this.web3.eth.getBalance(address)
    return this.web3.utils.fromWei(balanceInWei, 'ether')
  }

  async getChainId(): Promise<string> {
    const chainId = await this.web3.eth.getChainId()
    return `0x${chainId.toString(16)}`
  }

  getContract() {
    const from = this.account
    if (!from) {
      throw new Error('No wallet found')
    }
    return new this.web3.eth.Contract(ABI, CONTRACT_ADDRESS, {
      from,
    }) as unknown as MyContract
  }

  async addCampaign(campaign: AddCampaignParams) {
    const contract = this.getContract()
    return contract.methods
      .addCampaign(
        campaign.title,
        campaign.description,
        campaign.videoUrl,
        campaign.imageUrl,
      )
      .send()
  }

  async getLastCampaignId() {
    const contract = this.getContract()
    return contract.methods.nextId().call()
  }

  async getRecentCampaigns(): Promise<Campaign[]> {
    const contract = this.getContract()
    const data: CampaignRaw[] = await contract.methods
      .getRecentCampaigns()
      .call()
    return data.map((item) => ({
      author: item.author,
      title: item.title,
      description: item.description,
      videoUrl: item.videoUrl,
      imageUrl: item.imageUrl,
      balance: this.web3.utils.fromWei(item.balance.toString(), 'ether'),
      supporters: Number(item.supporters),
      active: item.active,
      createdAt: new Date(Number(item.createdAt) * 1000).toLocaleString(),
      id: Number(item.id),
    }))
  }

  async getUserCampaigns(): Promise<Campaign[]> {
    const contract = this.getContract()
    const data: CampaignRaw[] = await contract.methods.getUserCampaigns().call()
    return data.map((item) => ({
      author: item.author,
      title: item.title,
      description: item.description,
      videoUrl: item.videoUrl,
      imageUrl: item.imageUrl,
      balance: this.web3.utils.fromWei(item.balance.toString(), 'ether'),
      supporters: Number(item.supporters),
      active: item.active,
      createdAt: new Date(Number(item.createdAt) * 1000).toLocaleString(),
      id: Number(item.id),
    }))
  }

  async campaigns(id: number | string): Promise<Campaign> {
    const contract = this.getContract()
    const data: CampaignRaw = await contract.methods.campaigns(id).call()
    return {
      author: data.author,
      title: data.title,
      description: data.description,
      videoUrl: data.videoUrl,
      imageUrl: data.imageUrl,
      balance: this.web3.utils.fromWei(data.balance.toString(), 'ether'),
      supporters: Number(data.supporters),
      active: data.active,
      createdAt: new Date(Number(data.createdAt) * 1000).toLocaleString(),
      id: Number(data.id),
    }
  }

  async editCampaign(id: number | string, campaign: AddCampaignParams) {
    const contract = this.getContract()
    const from = this.account
    if (!from) {
      throw new Error('editCampaign - No wallet found')
    }
    return contract.methods
      .editCampaign(
        id,
        campaign.title,
        campaign.description,
        campaign.videoUrl,
        campaign.imageUrl,
      )
      .send({ from })
  }

  async donate(id: number | string, amount: string) {
    await this.login()
    const contract = this.getContract()
    const from = this.account
    if (!from) {
      throw new Error('donate - No wallet found')
    }
    return contract.methods.donate(id).send({
      from,
      value: this.web3.utils.toWei(amount, 'ether'),
    })
  }

  async withdraw(campaignId: number | string) {
    const contract = this.getContract()
    const from = this.account
    if (!from) {
      throw new Error('withdraw - No wallet found')
    }
    return contract.methods.withdraw(campaignId).send({ from })
  }

  getRawWeb3(): Web3 {
    return this.web3
  }
}
