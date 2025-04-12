import Web3 from 'web3'

export class Web3Provider {
  private static instance: Web3Provider | null = null
  private web3: Web3

  constructor(ethereum: unknown) {
    if (!ethereum) {
      throw new Error(
        'Ethereum provider não encontrado! Verifique se o MetaMask está instalado.',
      )
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
      throw new Error('Nenhuma conta encontrada!')
    }
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

  getRawWeb3(): Web3 {
    return this.web3
  }
}
