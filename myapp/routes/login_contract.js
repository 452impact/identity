const Web3 = require('web3');


Web3.setProvider( Web3.providers.HttpProvider('http://localhost:8545'));

// This file is generated by the Solidity compiler to easily interact with

// the contract using the web3 library.

const loginAbi = require('../../build/contracts/Login.json').abi;
const LoginContract = new Web3.eth.contract(loginAbi);
console.log('loginnnncontraaaaaact', LoginContract)
module.exports = LoginContract;