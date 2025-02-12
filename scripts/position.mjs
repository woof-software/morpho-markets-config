import { fetchAccrualPosition } from "@morpho-org/blue-sdk-ethers";
import { getProvider } from "./index.mjs";

(async () => {
  const user = '0x3b742747D36B0F4F633a86D2a6F51BeE91392Ba8';
  const marketId = '0x78d11c03944e0dc298398f0545dc8195ad201a18b0388cb8058b1bcb89440971';

  // Review https://github.com/morpho-org/sdks/blob/main/packages/blue-sdk/src/position/Position.ts#L20
  const position = await fetchAccrualPosition(user, marketId, { provider: getProvider(8453) }, { chainId: 8453 })

  console.log({ position })
  // {
  //   position: AccrualPosition {
  //     user: '0x3b742747D36B0F4F633a86D2a6F51BeE91392Ba8',
  //     marketId: '0x78d11c03944e0dc298398f0545dc8195ad201a18b0388cb8058b1bcb89440971',
  //     supplyShares: 0n,
  //     borrowShares: 111643472814916960254792248n,
  //     collateral: 121031421841469046784n,
  //     market: Market {
  //       params: [MarketParams],
  //       totalSupplyAssets: 3226405137509148448322n,
  //       totalBorrowAssets: 2953749898724281047185n,
  //       totalSupplyShares: 3158697774669933977365742002n,
  //       totalBorrowShares: 2882197538418165984893129476n,
  //       lastUpdate: 1739316991n,
  //       fee: 0n,
  //       price: 1059937260203337270000000000000000000n,
  //       rateAtTarget: 391216671n
  //     }
  //   }
  // }
})()