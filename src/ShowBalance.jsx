import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Wallet, RefreshCw } from 'lucide-react';

const ShowBalance = () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchBalance = async () => {
        if (wallet.publicKey) {
            try {
                setIsRefreshing(true);
                const bal = await connection.getBalance(wallet.publicKey);
                setBalance(bal / LAMPORTS_PER_SOL);
            } catch (error) {
                console.error('Failed to fetch balance:', error);
            } finally {
                setIsRefreshing(false);
            }
        } else {
            setBalance(0);
        }
    };

    useEffect(() => {
        fetchBalance();
        const interval = setInterval(fetchBalance, 10000);
        return () => clearInterval(interval);
    }, [wallet.publicKey, connection]);

    return (
        <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg border border-violet-300/30 rounded-3xl p-8 shadow-2xl hover:shadow-violet-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="bg-violet-500/20 p-3 rounded-xl">
                        <Wallet className="w-6 h-6 text-violet-300" />
                    </div>
                    <span className="text-gray-200 font-semibold text-lg">Wallet Balance</span>
                </div>
                <button 
                    onClick={fetchBalance}
                    className={`p-2 hover:bg-violet-500/20 rounded-xl transition-all ${isRefreshing ? 'animate-spin' : ''}`}
                >
                    <RefreshCw className="w-5 h-5 text-violet-300" />
                </button>
            </div>
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-purple-200">
                {balance.toFixed(4)} <span className="text-3xl">SOL</span>
            </div>
        </div>
    );
};

export default ShowBalance;
