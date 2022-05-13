const hre = require("hardhat");

async function main() {


  // const L2StandardBridge = await hre.ethers.getContractFactory("contracts/L2StandardBridge.sol:L2StandardBridge");
  // const l2StandardBridge = await L2StandardBridge.deploy();
  // await l2StandardBridge.deployed();
  // console.log("L2StandardBridge deployed to:", l2StandardBridge.address);

  const L2StandardERC20 = await hre.ethers.getContractFactory("contracts/L2StandardERC20.sol:L2StandardERC20");
  const l2StandardERC20 = await L2StandardERC20.deploy();
  await l2StandardERC20.deployed();
  console.log("L2StandardERC20 deployed to:", l2StandardERC20.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
