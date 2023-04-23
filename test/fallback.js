const you = artifacts.require("You");
const bank = artifacts.require("Bank");

contract('You', (accounts) => {

    beforeEach( async () => {

        y = await you.deployed();
        b = await bank.deployed();
    })

    it('Basic test', async() => {

        const result = await y.DepositWithSend(b.address, {from: accounts[0], value: 1e17});
    })


});
