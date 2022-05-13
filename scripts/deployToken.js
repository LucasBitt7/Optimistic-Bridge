const hre = require("hardhat");

async function main() {

 
  const PSYS = await hre.ethers.getContractFactory("Psys");
  const psys = await PSYS.deploy();
  await psys.deployed();
  console.log("psys deployed to:", psys.address);
/// kovan deploy on 0xAA5029E76Ac3c1BEcd803371dE8E9854cC595b46 and verified

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
