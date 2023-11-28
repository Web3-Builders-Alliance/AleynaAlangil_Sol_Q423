import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { createBundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr"

// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');
const bundlrUploader = createBundlrUploader(umi);

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(signerIdentity(signer));

(async () => {
    try {

        const image = await createGenericFile("generug",'./generug.png')
        const metadata = {
            name: "Generug ",
            symbol: "X",
            description: "aleyna",
            image: "https://arweave.net/CVKlKwUiRugINqAtVPzADXDzH-s9RnipAQKXowlrnNA",
            attributes: [
                {trait_type: '?', value: '?'}
            ],
            properties: {
                files: [
                    {
                        type: "image/png",
                        uri: "https://arweave.net/CVKlKwUiRugINqAtVPzADXDzH-s9RnipAQKXowlrnNA"
                    },
                ]
            },
            creators: []
        };
        const myUri = await bundlrUploader.uploadJson(metadata);
        console.log("Your image URI: ", myUri);
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();