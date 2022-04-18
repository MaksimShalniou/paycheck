import { useState } from "react";
import { useEffect } from "react";
import { observer } from "mobx-react";
import "./App.css";
import MetamaskWallet from "./services/wallet/walletService";
import MetaMaskAvatar from "./metamaskAvatar";

export const App = observer(() => {
  const [filePath, setFilePath] = useState("");
  const [fileType, setFileType] = useState("");
  const { account } = MetamaskWallet;

  const changeFile = (e: any) => {
    setFileType(e.target.files[0].type);
    const reader = new FileReader();

    reader.onload = (some: any) => {
      setFilePath(some.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    MetamaskWallet.checkIfAccountIsConnected();
  }, []);

  window.ethereum.on("accountsChanged", () => {
    MetamaskWallet.checkIfAccountIsConnected();
  });

  return (
    <>
      <input type="file" onChange={changeFile} />
      {fileType.match("image") ? (
        <img src={filePath} alt="some" />
      ) : (
        <video src={filePath} autoPlay muted />
      )}
      <MetaMaskAvatar account={account} />
      <button onClick={() => MetamaskWallet.checkIfMetamaskInstalled()}>
        Check if metamask extension installed
      </button>
      <button onClick={() => MetamaskWallet.checkIfWalletIsMetamask()}>
        Check if wallet is Metamask
      </button>
      <button onClick={() => MetamaskWallet.checkNetworkId()}>
        Check network id
      </button>
      <button onClick={() => MetamaskWallet.checkIfAccountIsConnected()}>
        Check account is connected
      </button>
      <button onClick={() => MetamaskWallet.connect()}>Connect</button>
      <button onClick={() => MetamaskWallet.sendCoin()}>Send coin</button>
    </>
  );
});
