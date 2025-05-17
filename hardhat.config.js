require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_TESTNET_RPC_URL = vars.get("ALCHEMY_TESTNET_RPC_URL");
const TESTNET_PRIVATE_KEY = vars.get("TESTNET_PRIVATE_KEY");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: ALCHEMY_TESTNET_RPC_URL,
      accounts: [TESTNET_PRIVATE_KEY],
    },
  },
};
