import { ChainUtils } from "@morpho-org/blue-sdk"
import { fetchMarketsWithParams, storeMarketsWithParams } from "./index.mjs"

// run from root
(async () => {
  const res = await fetchMarketsWithParams(ChainUtils.BLUE_AVAILABLE_CHAINS)
  await storeMarketsWithParams(res, './data/market-config.json')
})()