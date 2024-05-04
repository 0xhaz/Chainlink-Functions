const { abi, bytecode } = require("../contracts/abi/FunctionsConsumer.json");
const { wallet, signer } = require("../connection.js");
const { networks } = require("../networks.js");
const { ContractFactory, utils } = require("ethers");

const NETWORK = "ethereumSepolia";

const routerAddress = networks[NETWORK].functionsRouter;
const donIdBytes32 = utils.formatBytes32String(networks[NETWORK].donId);

const deployFunctionsConsumerContract = async () => {
  console.log(routerAddress, donIdBytes32);
};

deployFunctionsConsumerContract().catch(err => {
  console.log("Error deploying the Consumer Contract: ", err);
});
