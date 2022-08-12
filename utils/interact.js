const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(proccess.env.NEXT_PUBLIC_API_URL);

const contract = require('../artifacts/contracts/ColoredFaces.sol/ColoredFaces.json');
const contractAddress = '0x8DD490BfC0667856f26f154bEcbF36731C98C8ee';
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

// Tekrar edilecek(metaMask sorgu)
export const connectWallet = async () => {
    if(window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({ method: "eth_requestAccounts" });

            const obj = {
                status: "",
                address: addressArray[0]
            }

            return obj;
        } catch (err) {
            return {
                address: '',
                status: ':(' + err.message
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                    {" "}
                        🦊{' '}
                        <a rel="noopener" href="https://metamask.io/download.html">
                        Tarayıcınıza sanal bir Ethereum cüzdanı olan Metamask yüklemelisiniz.
                        </a>
                    </p>
                </span>
            )
        }
    }
}