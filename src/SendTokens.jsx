import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { Send } from 'lucide-react';

const SendTokens = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return (
        <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg border border-emerald-300/30 rounded-3xl p-6 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
                <div className="bg-emerald-500/20 p-2.5 rounded-xl">
                    <Send className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send Tokens</h3>
            </div>
            <input
                id="to"
                type="text"
                placeholder="Recipient Address"
                className="w-full bg-white/5 border border-emerald-300/20 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 mb-3 transition-all text-lg"
            />
            <input
                id="amount"
                type="number"
                placeholder="Amount (SOL)"
                className="w-full bg-white/5 border border-emerald-300/20 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 mb-4 transition-all text-lg"
            />
            <button
                onClick={sendTokens}
                disabled={!wallet.publicKey}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 disabled:from-gray-700 disabled:to-gray-800 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-emerald-500/50"
            >
                Send Tokens
            </button>
        </div>
    );
}
export default SendTokens;
