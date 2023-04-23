//const add = artifacts.require("add");
//const caller = artifacts.require("caller");
const you = artifacts.require("You");
const bank = artifacts.require("Bank");

module.exports = function(deployer) {
  //deployer.deploy(add);
  //deployer.deploy(caller);
  deployer.deploy(you,{overwrite: false});
  deployer.deploy(bank, {overwrite: false});
};