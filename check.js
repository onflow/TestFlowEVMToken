const { ethers } = require("ethers");
const privateKey = "0xbcfbb7a124ab1104c3fe6a7806f4950055900ad8ba9fd795322b4c3b11729a2c";
const wallet = new ethers.Wallet(privateKey);
console.log(wallet.address);