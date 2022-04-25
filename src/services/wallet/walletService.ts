import { makeAutoObservable } from 'mobx';
import { ethers } from 'ethers';

interface IWallet {
  checkIfMetamaskInstalled: any;
  checkIfWalletIsMetamask: any;
  checkNetworkId: any;
  checkIfAccountIsConnected: any;
  sendCoin: any;
  connect: any;
  account: any;
}
export class WalletService {
  wallet: IWallet;
  constructor(wallet: IWallet) {
    this.wallet = wallet;
  }

  connect() {
    this.wallet.connect();
  }

  checkIfMetamaskInstalled() {
    this.wallet.checkIfMetamaskInstalled();
  }
  checkIfWalletIsMetamask() {
    this.wallet.checkIfWalletIsMetamask();
  }
  checkNetworkId() {
    this.wallet.checkNetworkId();
  }
  checkIfAccountIsConnected() {
    this.wallet.checkIfAccountIsConnected();
  }
  sendCoin() {
    this.wallet.sendCoin();
  }
}

export class MetamaskWallet implements IWallet {
  constructor() {
    makeAutoObservable(this);
  }
  wallet: any;
  account: any;
  async connect() {
    const { ethereum } = window;
    console.log("start connecting");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log("account connected");
    this.account = accounts[0];
    alert(`Account info: ${this.account}`);
  }

  checkIfMetamaskInstalled = () => {
    alert(`MetaMask is ${!!window.ethereum ? "" : "not"} installed!`);
  };

  checkIfWalletIsMetamask = () => {
    alert(`Wallet is ${!!window.ethereum.isMetaMask ? "" : "not"} Metamsk!`);
  };

  checkNetworkId = () => {
    alert(`Network id is ${window.ethereum.networkVersion}`);
  };

  checkIfAccountIsConnected = () => {
    console.log('asdasdasdas6666', window.ethereum.selectedAddress)
    this.account = window.ethereum.selectedAddress;
  };

  sendCoin = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970",
            value: "0x29a2241af62c0000",
            gasPrice: "0x09184e72a000",
            gas: "0x2710",
          },
        ],
      })
      .then((txHash: any) => console.log(txHash))
      .catch((error: any) => console.error);
  };

  sign = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const signature = await signer.signMessage("message")
      const address = await signer.getAddress()

      console.log('signSuccess: ', signature, address);
      
    } catch (error) { console.log(222, error) }
  }
}

export default new MetamaskWallet();