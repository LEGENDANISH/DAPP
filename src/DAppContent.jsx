import React, { FC, useMemo, useState } from 'react';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { ed25519 } from '@noble/curves/ed25519';
import bs58 from 'bs58';
import { Wallet, Send, Droplet, FileSignature, RefreshCw } from 'lucide-react';

// Default styles
import '@solana/wallet-adapter-react-ui/styles.css';
import SignMessage from './SignMessage';
import SendTokens from './SendTokens';
import RequestAirdrop from './RequestAirdrop';
import ShowBalance from './ShowBalance';



export function DAppContent (){
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-12">
                        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                            SOLANA DAPP
                        </h1>
                        <WalletMultiButton className="!bg-gradient-to-r !from-violet-600 !to-purple-600 hover:!from-violet-500 hover:!to-purple-500 !rounded-2xl !h-14 !px-6 !transition-all !font-bold !shadow-lg hover:!shadow-violet-500/50" />
                    </div>

                    {/* Balance Card */}
                    <div className="flex justify-center mb-10">
                        <div className="w-full max-w-2xl">
                            <ShowBalance />
                        </div>
                    </div>

                    {/* Action Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <RequestAirdrop />
                        <SendTokens />
                        <SignMessage />
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-16">
                        <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                            <p className="text-gray-400 font-medium">
                                🌐 Connected to <span className="text-violet-400 font-semibold">Solana Devnet</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};