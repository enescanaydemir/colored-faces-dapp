require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: 'rinkeby',
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};

//0x8DD490BfC0667856f26f154bEcbF36731C98C8ee