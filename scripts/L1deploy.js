const hre = require("hardhat");

async function main() {

  // const CrossDomainEnabled = await hre.ethers.getContractFactory("contracts/CrossDomainEnabled.sol:CrossDomainEnabled");
  // const crossDomainEnabled = await CrossDomainEnabled.deploy();
  // await crossDomainEnabled.deployed();
  // console.log("CrossDomainEnabled deployed to:", crossDomainEnabled.address);

  const L1StandardBridge = await hre.ethers.getContractFactory("contracts/L1StandardBridge.sol:L1StandardBridge");
  const l1StandardBridge = await L1StandardBridge.deploy();
  await l1StandardBridge.deployed();
  console.log("L1StandardBridge deployed to:", l1StandardBridge.address);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
