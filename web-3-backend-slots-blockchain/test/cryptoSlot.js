const CryptoSlot = artifacts.require('CryptoSlot');

contract('CryptoSlot test', async (accounts) => {
  const PRICE = 10000000;

  it('should get PRICE', async () => {
    const instance = await CryptoSlot.deployed();
    const price = await instance.PRICE.call();

    assert.equal(price.valueOf(), PRICE);
  });

  it('function "buyCoins" should return coins', async () => {
    const value = 1000000000;

    const instance = await CryptoSlot.deployed();
    const coins = await instance.buyCoins.call({ value });

    assert.equal(coins.valueOf(), value / PRICE);
  });

  it('function "buyCoins" should return error if money 0', async () => {
    const value = 0;

    const instance = await CryptoSlot.deployed();

    try {
      await instance.buyCoins.call({ value });
    } catch (e) {
      const errorMessage =
        'Returned error: VM Exception while processing transaction: revert You must send some ether value';

      assert.equal(e.message, errorMessage);
    }
  });

  it('function "buyCoins" should correct update coints many time', async () => {
    const instance = await CryptoSlot.deployed();
    const value = 1000000000;

    const coins = await instance.buyCoins.call({ from: accounts[0], value });
    assert.equal(coins.toNumber(), value / PRICE);
  });
});
