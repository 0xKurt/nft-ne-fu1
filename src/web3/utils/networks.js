import chains from './chains.json'

export const getChainName = (chainId) => {
  let network;
  if(chainId == 1) return 'mainnet'
  for(let i = 0; i < chains.length; i++) {
    if(chains[i]["networkId"] == chainId) network = chains[i]["network"]
  }
  return network;
}