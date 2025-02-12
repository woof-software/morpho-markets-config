import { fetchToken } from "@morpho-org/blue-sdk-ethers"
import { getProvider } from "./index.mjs"

(async () => {
  const runner = { provider: getProvider(1) }
  const address = '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3'
  // Read https://github.com/morpho-org/sdks/blob/main/packages/blue-sdk/src/token/Token.ts#L16
  const token = await fetchToken(address, runner)
  console.log({ token })
  // {
  //   token: Token {
  //     address: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
  //     name: 'USDe',
  //     symbol: 'USDe',
  //     decimals: 18,
  //     eip5267Domain: Eip5267Domain {
  //       fields: '0x0f',
  //       name: 'USDe',
  //       version: '1',
  //       chainId: 1n,
  //       verifyingContract: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
  //       salt: '0x0000000000000000000000000000000000000000000000000000000000000000',
  //       extensions: Result(0) [],
  //       eip712Domain: [Object]
  //     },
  //     price: undefined
  //   }
  // }
})()