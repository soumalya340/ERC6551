const {ethers ,network} = require("hardhat");

async function main() {
  const rider = await hre.ethers.deployContract("Rider");

  await rider.waitForDeployment();
  console.log(
    `Rider contract  deployed to ${rider.target}`
  );
  if (network.config.chainId === 80001) {
    console.log("Waiting for block confirmations...")
    await rider.deployTransaction().wait(6)
    await verify(rider.target, [])
  }
}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
