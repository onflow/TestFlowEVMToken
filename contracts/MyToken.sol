// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20Burnable, Ownable {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_
    )
        ERC20(name_, symbol_)
        Ownable(msg.sender)  // Pass msg.sender as the initial owner
    {
        _mint(msg.sender, initialSupply_);
    }

    // Only the owner can mint new tokens
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}