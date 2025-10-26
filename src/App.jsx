import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
    
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './RequestAirdrop';
import ShowBalance from './ShowBalance';

const App = () => {
  return (
                  <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}} >
     <ConnectionProvider endpoint={"https://devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}} >
                    {/* <RequestAirdrop/> */}
                    <ShowBalance/>
 <WalletMultiButton/>
                 
                  </div>
                        
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </div>
  )
}

export default App