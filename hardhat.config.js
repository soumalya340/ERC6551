require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-verify")
require("dotenv").config()
const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL ||
  "https://polygon-mumbai.g.alchemy.com/v2/wTwmTZKygB2gbcLqluXq5sb7Q58a9N4c"
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "479ce98801d4cedd19a37f61797c13e410c67e6461a924f4ba187fbf841d63e3"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "V9U9IWP7NWHSFJY2TC5H8642GB4TYKZ3N7"

module.exports = {
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  }
}