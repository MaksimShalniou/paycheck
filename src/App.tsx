import React, { useState } from "react";
import "./App.css";
import { WalletService, MetamaskWallet } from "./services/wallet/walletService";


export const App = () => {
  const [filePath, setFilePath] = useState('')
  const [fileType, setFileType] = useState('')
  const walletService = new WalletService(new MetamaskWallet());

  const changeFile = (e: any) => {
    setFileType(e.target.files[0].type)
    const reader = new FileReader();

    reader.onload = (some: any) => {
      setFilePath(some.target.result)
    };

    reader.readAsDataURL(e.target.files[0]);
  }
  
  
  return (
    <>
      <input type='file' onChange={changeFile}/>
      {fileType.match("image") ? (
        <img src={filePath} alt='some' />
      ) : (
        <video src={filePath} autoPlay muted />
      )}
      <button onClick={() => walletService.checkIfMetamaskInstalled()}>
        Check if metamask extension installed
      </button>
      <button onClick={() => walletService.checkIfWalletIsMetamask()}>
        Check if wallet is Metamask
      </button>
      <button onClick={() => walletService.checkNetworkId()}>Check network id</button>
      <button onClick={() => walletService.checkIfAccountIsConnected()}>
        Check account is connected
      </button>
      <button onClick={() => walletService.connect()}>Connect</button>
      <button onClick={() => walletService.sendCoin()}>Send coin</button>
    </>
  );
};
