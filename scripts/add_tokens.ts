import { ethers } from "hardhat";

async function main() {
  const shadow = await ethers.getContractAt(
    "OptimisticP2P",
    process.env.OP2P!
  );

  const tx = await shadow.addToken(process.env.CEDIH!);
  // await shadow.removeToken(process.env.RAMP!);
  // await shadow.removeToken(process.env.TRK!);

  console.log("Tokens Added ...", tx.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
