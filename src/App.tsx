import React from "react";
import "./App.css";
import { WalletService, MetamaskWallet } from "./services/wallet/walletService";

export const App = () => {
  const walletService = new WalletService(new MetamaskWallet());
  return (
    <>
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
