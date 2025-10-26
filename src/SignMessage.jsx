import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { ed25519 } from '@noble/curves/ed25519';
import bs58 from 'bs58';
import { FileSignature } from 'lucide-react';

const SignMessage = () => {
    const { publicKey, signMessage } = useWallet();
    const [loading, setLoading] = useState(false);

    async function onClick() {
        try {
            setLoading(true);
            
            if (!publicKey) throw new Error('⚠️ Wallet not connected!');
            if (!signMessage) throw new Error('⚠️ Wallet does not support message signing!');

            const message = document.getElementById("message").value;
            if (!message) throw new Error('⚠️ Please enter a message.');

            const encodedMessage = new TextEncoder().encode(message);
            const signature = await signMessage(encodedMessage);

            if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) 
                throw new Error('❌ Message signature invalid!');

            alert(`✅ Message signed successfully!\n\nSignature: ${bs58.encode(signature)}`);
            document.getElementById("message").value = '';
        } catch (err) {
            console.error(err);
            alert(err.message || '❌ Signing failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 backdrop-blur-lg border border-orange-300/30 rounded-3xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
                <div className="bg-orange-500/20 p-2.5 rounded-xl">
                    <FileSignature className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sign Message</h3>
            </div>
            <input
                type="text"
                id="message"
                placeholder="Enter message to sign"
                className="w-full bg-white/5 border border-orange-300/20 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 mb-4 transition-all text-lg"
            />
            <button
                onClick={onClick}
                disabled={loading || !publicKey}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 disabled:from-gray-700 disabled:to-gray-800 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-orange-500/50"
            >
                {loading ? 'Signing...' : 'Sign Message'}
            </button>
        </div>
    );
};

export default SignMessage;
