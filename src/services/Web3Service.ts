import Web3 from 'web3'
import ABI from './ABI.json'
import { CampaignFormData } from '@/components/campaign-form'

const CONTRACT_ADDRESS = '0x26528e2b7932d049BB9e5dA351962c65F2aFF0fE'

export async function doLogin() {
  if (!window?.ethereum) throw new Error('MetaMask not installed!')

  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.requestAccounts()

  if (!accounts || accounts.length === 0) {
    throw new Error('No accounts found!')
  }

  localStorage.setItem('wallet', accounts[0])
  return accounts[0]
}

function getContract() {
  if (!window?.ethereum) throw new Error('MetaMask not installed!')

  const web3 = new Web3(window.ethereum)
  const from = localStorage.getItem('wallet')
  if (!from) throw new Error('No wallet found!')
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from })
}

export async function addCampaign(campaign: CampaignFormData) {
  const contract = getContract()
  return contract.methods
    .addCampaign(
      campaign.title,
      campaign.description,
      campaign.videoUrl || '',
      campaign.imageUrl || '',
    )
    .send()
}

export async function getLastCampaignId() {
  const contract = getContract()
  return contract.methods.nextId().call()
}
