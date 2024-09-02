import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import { Airdrop } from "./Airdrop";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import "./App.css";

function App() {
  // const rpcApi = process.env.VITE_RPCDEVNRTAPI;
  // console.log(rpcApi)

  return (
    <ConnectionProvider
      endpoint={
        "https://solana-devnet.g.a"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <Airdrop>
            <WalletMultiButton className="" />
            <WalletDisconnectButton className="" />
          </Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
