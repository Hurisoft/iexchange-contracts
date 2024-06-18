// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ramp is ERC20 {
    constructor(uint256 initialSupply) ERC20("Ramp", "RMP") {
        _mint(msg.sender, initialSupply);
    }
}