import { ethers } from "hardhat";
import p2pArgs from "../contract-args/p2p";

async function main() {

  console.log(p2pArgs);

  const p2p = await ethers.getContractAt("OptimisticP2P", process.env.OP2P!);

  await p2p.updateProtocolParams(...p2pArgs as any);

  console.log("updated protocol params ");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
