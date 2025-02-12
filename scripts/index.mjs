import fsp from 'fs/promises'
import * as ethers from 'ethers'
import { apiSdk } from '@morpho-org/liquidation-sdk-viem'
import { fetchMarketParams } from '@morpho-org/blue-sdk-ethers'

import morphoMarketConfigs from '../data/market-config.json' assert { type: "json" };

export const API_KEY = '';

export const getMarketsParamsFromStorage = ({ chainId }) => {
  return morphoMarketConfigs[chainId]
}

export const getProvider = (chainId) => {
  return new ethers.AnkrProvider(chainId, API_KEY)
}

export const fetchMarketsWithParams = async (chains) => {
  const marketIds = {} // { [network]: ids[] }
  const marketWithParams = {}

  for (const chainId of chains) {
    const marketItems = await apiSdk.getWhitelistedMarketIds({ chainId: chainId })
    marketIds[chainId] = [...marketItems.markets.items.map(item => item.uniqueKey)]
  }

  for (const chainId of chains) {
    const provider = getProvider()
    const ids = marketIds[chainId]
    const params = await Promise.all(ids.map(id => fetchMarketParams(id, { provider }, { chainId })))
    marketWithParams[chainId] = params.filter(param => param.lltv !== 0n)
  }

  return marketWithParams
}

export const storeMarketsWithParams = async (data, pathToFile) => {
  await fsp.writeFile(pathToFile, JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() : value, 4
  ));
}