import { Keypair } from "@solana/web3.js";

//Generate a new keypair
let kp = Keypair.generate()
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}

To save your wallet, copy and paste the following into a JSON file:

[${kp.secretKey}]`)
// TODO: GJQAQa4nrppKYBRBrGiyXkmLF34rt6qhXfW8i4zJVQLe wallet
