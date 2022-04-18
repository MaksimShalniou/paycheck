import jazzicon from '@metamask/jazzicon';

interface IWallet {
  checkIfMetamaskInstalled: any;
  checkIfWalletIsMetamask: any;
  checkNetworkId: any;
  checkIfAccountIsConnected: any;
  sendCoin: any;
  connect: any;
  getAvatarFromMetamask: any;
  wallet: any;
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
  getAvatarFromMetamask() {
    this.wallet.getAvatarFromMetamask();
  }
}

export class MetamaskWallet implements IWallet {
  wallet: any;
  async connect() {
    const { ethereum } = window;
    console.log("start connecting");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log("account connected");
    const account = accounts[0];
    alert(`Account info: ${account}`);
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
    alert(
      `Account is ${!!window.ethereum.selectedAddress ? "" : "not"} connected`
    );
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

  getAvatarFromMetamask({ account }: any) {
      if (account) {
        const addr = account.slice(2, 10);
        const seed = parseInt(addr, 16);
        const icon = jazzicon(40, seed);
        console.log('asdasdasd', icon)
      }
  }
}
