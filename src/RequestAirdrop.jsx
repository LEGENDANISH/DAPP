import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Droplet } from 'lucide-react';

const RequestAirdrop = () => {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [loading, setLoading] = useState(false);

    async function requestAirdrop() {
        try {
            if (!wallet.publicKey) {
                alert('⚠️ Please connect your wallet first.');
                return;
            }

            setLoading(true);
            const amount = document.getElementById('amount').value;
            if (!amount || parseFloat(amount) <= 0) {
                alert('⚠️ Please enter a valid amount.');
                return;
            }

            const signature = await connection.requestAirdrop(
                wallet.publicKey,
                parseFloat(amount) * LAMPORTS_PER_SOL
            );

            await connection.confirmTransaction(signature, 'confirmed');
            alert(`✅ Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
        } catch (err) {
            console.error(err);
            alert('❌ Airdrop failed. Please try again.');
        } finally {
            setLoading(false);
            document.getElementById('amount').value = '';
        }
    }

    return (
        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-cyan-300/30 rounded-3xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
                <div className="bg-cyan-500/20 p-2.5 rounded-xl">
                    <Droplet className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Request Airdrop</h3>
            </div>
            <input
                id="amount"
                type="number"
                placeholder="Enter SOL amount"
                className="w-full bg-white/5 border border-cyan-300/20 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 mb-4 transition-all text-lg"
            />
            <button
                onClick={requestAirdrop}
                disabled={loading || !wallet.publicKey}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-700 disabled:to-gray-800 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-cyan-500/50"
            >
                {loading ? 'Processing...' : 'Request Airdrop'}
            </button>
        </div>
    );
};

export default RequestAirdrop;
