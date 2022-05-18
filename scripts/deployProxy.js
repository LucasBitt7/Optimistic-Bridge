const hre = require("hardhat");

async function main() {
 
  const L1CrossDomainMessenger = await hre.ethers.getContractFactory("OVM_L1CrossDomainMessenger");
  const l1CrossDomainMessenger = await L1CrossDomainMessenger.deploy();
  await l1CrossDomainMessenger.deployed();
  console.log("deployed to:", l1CrossDomainMessenger.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
