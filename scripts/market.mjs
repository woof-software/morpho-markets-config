import { MarketParams } from "@morpho-org/blue-sdk"
import { getMarketsParamsFromStorage, getProvider } from "./index.mjs"
import { fetchMarket } from "@morpho-org/blue-sdk-ethers"

(async () => {
  const currentNetworkFetch = 1
  const runner = { provider: getProvider(currentNetworkFetch) }
  const markets = getMarketsParamsFromStorage({ chainId: currentNetworkFetch })

  // Review https://github.com/morpho-org/sdks/blob/main/packages/blue-sdk/src/market/Market.ts#L57
  const market = new MarketParams(markets[0])
  console.log({ market })
  // {
  //   market: MarketParams {
  //     collateralToken: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
  //     loanToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  //     oracle: '0xaE4750d0813B5E37A51f7629beedd72AF1f9cA35',
  //     irm: '0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC',
  //     lltv: 770000000000000000n,
  //     id: '0xfd8493f09eb6203615221378d89f53fcd92ff4f7d62cca87eece9a2fff59e86f',
  //     liquidationIncentiveFactor: 1074113856068743286n
  //   }

  // Review https://github.com/morpho-org/sdks/blob/main/packages/blue-sdk/src/market/Market.ts#L57
  const marketWithStats = await fetchMarket(market.id, runner)
  console.log({ marketWithStats })
  // {
  //   marketWithStats: Market {
  //     params: MarketParams {
  //       collateralToken: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
  //       loanToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  //       oracle: '0xaE4750d0813B5E37A51f7629beedd72AF1f9cA35',
  //       irm: '0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC',
  //       lltv: 770000000000000000n,
  //       id: '0xfd8493f09eb6203615221378d89f53fcd92ff4f7d62cca87eece9a2fff59e86f',
  //       liquidationIncentiveFactor: 1074113856068743286n
  //     },
  //     totalSupplyAssets: 100456305138775854026762n,
  //     totalBorrowAssets: 90209789234411596227203n,
  //     totalSupplyShares: 91822313358953599308883017309n,
  //     totalBorrowShares: 81269055274503073577995341227n,
  //     lastUpdate: 1738780703n,
  //     fee: 0n,
  //     price: 1000000000000000000000000000000000000n,
  //     rateAtTarget: 821389797n
  //   }
  // }
})()