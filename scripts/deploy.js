async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");

  // Example for token CCC1 with a supply of 1,600,000,000 tokens
  // Assuming 18 decimals, the supply is calculated as:
  // 1,600,000,000 * 10^18
  const initialSupplyCCC1 = ethers.parseUnits("1600000000", 18);
  const CCC1 = await MyToken.deploy("CCC1", "CCC1", initialSupplyCCC1);
  await CCC1.waitForDeployment();
  console.log("CCC1 deployed to:", CCC1.target);

  // Similarly, deploy other tokens (PPP1, RRR1, ADD1, ZCC1, TPP1, KAA1) with a supply of 150,000,000 tokens each:
  const initialSupplyOthers = ethers.parseUnits("150000000", 18);

  const PPP1 = await MyToken.deploy("PPP1", "PPP1", initialSupplyOthers);
  await PPP1.waitForDeployment();
  console.log("PPP1 deployed to:", PPP1.target);

  const RRR1 = await MyToken.deploy("RRR1", "RRR1", initialSupplyOthers);
  await RRR1.waitForDeployment();
  console.log("RRR1 deployed to:", RRR1.target);

  const ADD1 = await MyToken.deploy("ADD1", "ADD1", initialSupplyOthers);
  await ADD1.waitForDeployment();
  console.log("ADD1 deployed to:", ADD1.target);

  const ZCC1 = await MyToken.deploy("ZCC1", "ZCC1", initialSupplyOthers);
  await ZCC1.waitForDeployment();
  console.log("ZCC1 deployed to:", ZCC1.target);

  const TPP1 = await MyToken.deploy("TPP1", "TPP1", initialSupplyOthers);
  await TPP1.waitForDeployment();
  console.log("TPP1 deployed to:", TPP1.target);

  const KAA1 = await MyToken.deploy("KAA1", "KAA1", initialSupplyOthers);
  await KAA1.waitForDeployment();
  console.log("KAA1 deployed to:", KAA1.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });