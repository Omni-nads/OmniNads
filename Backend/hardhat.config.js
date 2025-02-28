require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: __dirname + '/.env' });
require("./tasks/deployment");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.SOURCE_PK],
      native: "ETH"
    },
    opsepolia: {
      url: process.env.OPTIMISM_SEPOLIA_RPC,
      accounts: [process.env.SOURCE_PK],
      native: "ETH"
    },
    monadtestnet: {
      url: process.env.MONAD_TESTNET_RPC,
      accounts: [process.env.SOURCE_PK],
      native: "MON"
    },
    flowtestnet: {
      url: process.env.FLOW_TESTNET_RPC,
      accounts: [process.env.SOURCE_PK],
      native: "ETH"
    }

  }
};
