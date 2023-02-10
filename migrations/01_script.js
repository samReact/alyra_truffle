const Storage = artifacts.require("Storage");
module.exports = (deployer) => {
 // Deployer le smart contract!
 deployer.deploy(Storage);
} 