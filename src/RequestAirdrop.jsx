import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

const RequestAirdrop = () => {
    const { connection } = useConnection();
    const wallet = useWallet();

    const requestAirdrop = async () => {
        try {
            if (!wallet.publicKey) {
                alert('⚠️ Please connect your wallet first.');
                return;
            }

            const amountInput = document.getElementById("amount");
            const amount = parseFloat(amountInput.value);

            if (isNaN(amount) || amount <= 0) {
                alert('⚠️ Please enter a valid amount.');
                return;
            }

            const signature = await connection.requestAirdrop(
                wallet.publicKey,
                amount * LAMPORTS_PER_SOL
            );

            await connection.confirmTransaction(signature, 'confirmed');
            alert(`✅ Successfully airdropped ${amount} SOL!`);
        } catch (err) {
            console.error(err);
            alert('❌ Airdrop failed. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px' }}>
            <input id="amount" type="text" placeholder="Enter SOL amount" />
            <button onClick={requestAirdrop}>Request Airdrop</button>
        </div>
    );
};

export default RequestAirdrop;
