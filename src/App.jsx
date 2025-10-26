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
                  <div className=' justify-center ' >
                    <div className='text-violet-400 font-extrabold text-7xl flex justify-center' >
                          <h1>
                      SOLANA DAPP
                    </h1>
                    <div className='flex absolute right-0'>
                                           <WalletMultiButton/>

                    </div>

                    </div>

                
     <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div  >
                    {/* <RequestAirdrop/> */}
<div className='flex justify-center '>

                    <ShowBalance/>

</div>
                 
                  </div>
                        
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </div>
  )
}

export default App