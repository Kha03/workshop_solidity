require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    bsctest: {
      url: `https://data-seed-prebsc-1-s2.bnbchain.org:8545`,
      accounts: [process.env.PRIV_KEY],
      gasPrice: 35000000000,
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
