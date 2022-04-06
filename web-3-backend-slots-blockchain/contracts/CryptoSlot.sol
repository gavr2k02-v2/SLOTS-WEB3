// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CryptoSlot {
  uint256 private constant PRICE = 10000000;
  uint256 private constant DIFFICULTY_LEVEL = 100;

  address private owner;
  uint256 private incrementingNumber = 1;

  struct Player {
    uint256 coins;
  }

  mapping(address => Player) public players;

  constructor(address _owner) {
    owner = _owner;
  }

  function getPrice() public pure returns (uint256) {
    return PRICE;
  }

  function getCoins() public view returns (uint256) {
    return players[msg.sender].coins;
  }

  function buyCoins() public payable {
    uint256 coins = msg.value / PRICE;
    players[msg.sender].coins += coins;
  }

  function withdrawCoins(uint256 _coins) public payable {
    require(players[msg.sender].coins >= _coins, 'Not enough coins');

    players[msg.sender].coins -= _coins;
    payable(msg.sender).transfer(_coins * PRICE);
  }

  function spin() public {
    require(players[msg.sender].coins > 1, 'Not enough coins');

    if (random() > getChance()) {
      players[msg.sender].coins += 1;
    } else {
      players[msg.sender].coins -= 1;
    }
  }

  function getChance() private pure returns (uint256) {
    return (DIFFICULTY_LEVEL**2) / 2;
  }

  function random() private returns (uint256) {
    return randomByNumber(DIFFICULTY_LEVEL) * randomByDifficulty(DIFFICULTY_LEVEL);
  }

  function randomByDifficulty(uint256 number) private view returns (uint256) {
    return uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % number;
  }

  function randomByNumber(uint256 number) private returns (uint256) {
    return uint256(keccak256(abi.encodePacked(incrementingNumber++))) % number;
  }

  // function randomByBlockchain(uint256 number) private view returns (uint256) {
  //   return uint256(blockhash(block.number - 1)) % number;
  // }
}
