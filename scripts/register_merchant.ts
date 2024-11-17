import { ethers } from "hardhat";
import "dotenv/config";

async function main() {
  const p2p = await ethers.getContractAt("OptimisticP2P", process.env.OP2P!);

  const cd = await ethers.getContractAt("IXUSDT", process.env.IXUSDT!);

  const merchantStakeAmount = BigInt(1500 * 1e18);

  await cd.approve(process.env.OP2P!, merchantStakeAmount);

  await p2p.registerMerchant();

  console.log("New Merchant Created ...");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
