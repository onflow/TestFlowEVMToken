require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    flowEvmTestnet: {
      url: "https://testnet.evm.nodes.onflow.org/",  // Replace with the official FlowEVM testnet endpoint
      accounts: [process.env.PRIVATE_KEY],
      chainId: 545,  // Example chain ID – verify with FlowEVM docs
    },
    // You can add a mainnet configuration later when you’re ready
  },
};