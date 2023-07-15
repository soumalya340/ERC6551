// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

contract MyContract {
    uint public a = 10;

    function get(uint _a) external {
        a = _a;
    }

    function getChain() external view returns (uint256) {
        return block.chainid;
    }
}
