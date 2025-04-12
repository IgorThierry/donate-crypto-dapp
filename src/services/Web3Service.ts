import Web3 from 'web3'

export async function doLogin() {
  if (!window?.ethereum) throw new Error('MetaMask not installed!')

  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.requestAccounts()

  if (!accounts || accounts.length === 0) {
    throw new Error('No accounts found!')
  }

  return accounts[0]
}
