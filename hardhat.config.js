require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity:{ 
    compilers: [
    {
      version: "0.5.16"
    },
    {
      version: "0.6.2"
    },
    {
      version: "0.6.6",
    },
    {
      version: "0.8.0",

    },
    {
      version: "0.8.7",
    },
    {
      version:"0.8.9"
    }
  ]},
  defaultNetwork: "kovan",
  networks: {
    kovan: {
      url: process.env.KOVAN_ENDPOINT || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    optimisticKovan: {
      url: process.env.L2_NODE_URL || 'http://localhost:8545',
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey:{
      kovan: "C7ICRBIQJFZEBE79JPEX6WNFKA51WFGSVR",
      optimisticKovan: "ZFDS6TZNTSIVX22HE5W6G449X47D9US624"
    }
  },
};
