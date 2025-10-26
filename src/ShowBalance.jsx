import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

const ShowBalance = () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            if (wallet.publicKey) {
                try {
                    const bal = await connection.getBalance(wallet.publicKey);
                    setBalance(bal / LAMPORTS_PER_SOL); // convert lamports → SOL
                } catch (error) {
                    console.error('Failed to fetch balance:', error);
                }
            } else {
                setBalance(0);
            }
        };

        fetchBalance();

        // Optional: refresh balance every 10 seconds
        const interval = setInterval(fetchBalance, 10000);
        return () => clearInterval(interval);

    }, [wallet.publicKey, connection]);

    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <strong>Balance:</strong> {balance.toFixed(4)} SOL
        </div>
    );
};

export default ShowBalance;
