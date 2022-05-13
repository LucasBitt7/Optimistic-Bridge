// SPDX-License-Identifier: MIT
pragma solidity >0.5.0 <0.9.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Psys is ERC20 {
    constructor() ERC20("Pegasys", "PSYS") {}
    function mint(uint amount) public {
        _mint(msg.sender, amount * 10 **18);
    }
}