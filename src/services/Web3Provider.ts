import { MyContract } from '@/_types/contract'
import Web3 from 'web3'
import ABI from './ABI.json'

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
  }

  static getInstance(ethereum: unknown): Web3Provider {
    if (!Web3Provider.instance) {
      Web3Provider.instance = new Web3Provider(ethereum)
    }
    return Web3Provider.instance
  }

  async login(): Promise<string> {
    const accounts = await this.web3.eth.requestAccounts()
    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found')
    }
    this.account = accounts[0]
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

  getRawWeb3(): Web3 {
    return this.web3
  }
}
