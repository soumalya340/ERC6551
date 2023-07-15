const {ethers ,network} = require("hardhat");

async function main() {
  const accounts = await ethers.getSigners()
  const user = accounts[0]

  const Addr = "0x437549f0748C6E3162Ad36FDFF4297118ef4473d"
  const contractArtifact = await artifacts.readArtifact("CyberMaven");
  const contract = new ethers.Contract(
    Addr,
    contractArtifact.abi,
    user
  );
    console.log(`The balance of the contract is ${await contract.getBalance()}`);
  //console.log(`the contract instance created address is ${await contract.contractInstance()}`)

  if (network.config.chainId !== 31337) {
    console.log("Waiting for block confirmations...")
    await contract.deployTransaction().wait(6)
    await verify(Addr, [])
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
