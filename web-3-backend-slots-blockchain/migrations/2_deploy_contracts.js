const Contacts = artifacts.require('./CryptoSlot.sol');

module.exports = function (deployer, network, [account]) {
  deployer.deploy(Contacts, account);
};
