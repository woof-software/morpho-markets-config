import * as ethers from 'ethers'
import { Options } from '@layerzerolabs/lz-v2-utilities'
import * as ABI from './abi.mjs'

const main = async () => {
  const RPC_API_KEY = ''
  const SWELL_TO_MAINNET_EID = 30101;
  const MAINNET_TO_SWELL_EID = 30335;
  const tokensToSend = ethers.parseEther('1');
  const user_address = '0x2501713A67a3dEdde090E42759088A7eF37D4EAb'

  const options = Options.newOptions().addExecutorLzReceiveOption(200000, 0).toHex().toString()

  const sendParam = [
    MAINNET_TO_SWELL_EID,
    ethers.zeroPadValue(user_address, 32),
    tokensToSend,
    tokensToSend,
    options,
    '0x',
    '0x',
  ];

  const provider = new ethers.AnkrProvider(1, RPC_API_KEY)

  const kingOFTL1 = new ethers.Contract('0x6a2fb8e3d6395fd1e8f7fe64909d47a59d1d4c91', ABI.ABI, provider);

  const quote = await kingOFTL1.quoteSend(sendParam, false)

  console.log({ quote })
  console.log({ sendParam })
}

main().then().catch(console.error)