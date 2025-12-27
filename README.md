# Solana dApp 🚀

<div align="center">

![Solana dApp Banner](https://media.licdn.com/dms/image/v2/D4D22AQEAskzEcvgrBw/feedshare-shrink_2048_1536/B4DZpLMnH0IMA0-/0/1762198189448?e=1768435200&v=beta&t=_hVKVokNt9EyNHoNOM8RaBlkhDceMqX4xgOLD69jMMI)

### A Modern Decentralized Application Built on Solana Blockchain

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=vercel)](https://solanadapp-sand.vercel.app)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Solana](https://img.shields.io/badge/Solana-Blockchain-14F195?style=for-the-badge&logo=solana&logoColor=white)](https://solana.com/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

[Live Demo](https://solanadapp-sand.vercel.app) • [Report Bug](https://github.com/LEGENDANISH/DAPP/issues) • [Request Feature](https://github.com/LEGENDANISH/DAPP/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the App](#running-the-app)
- [Project Structure](#-project-structure)
- [Blockchain Integration](#-blockchain-integration)
- [Wallet Integration](#-wallet-integration)
- [Smart Contract Interaction](#-smart-contract-interaction)
- [Deployment](#-deployment)
- [Development Guide](#-development-guide)
- [Testing](#-testing)
- [Performance Optimization](#-performance-optimization)
- [Security Best Practices](#-security-best-practices)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Solana dApp** is a cutting-edge decentralized application built on the Solana blockchain, leveraging its high-speed, low-cost infrastructure to deliver seamless blockchain interactions. This project serves as both a production-ready dApp and a comprehensive template for developers looking to build on Solana.

### Why Solana?

Solana offers several advantages for dApp development:
- **Lightning Fast**: ~400ms block times with sub-second finality
- **Low Cost**: Transaction fees typically under $0.01
- **Scalable**: Capable of processing 65,000+ transactions per second
- **Growing Ecosystem**: Vibrant community and extensive tooling support

### What Makes This dApp Special?

- **Modern Architecture**: Built with React 18+ and Vite for optimal performance
- **Type Safety**: Optional TypeScript support for robust development
- **Wallet Integration**: Seamless connection with popular Solana wallets
- **Responsive Design**: Mobile-first approach ensuring great UX across devices
- **Developer Friendly**: Well-documented, modular code structure
- **Production Ready**: Optimized build configuration and deployment pipeline

---

## ✨ Features

### Core Features

- 🔐 **Wallet Authentication**
  - Support for Phantom, Solflare, and other Solana wallets
  - Secure wallet connection and disconnection
  - Auto-reconnect functionality
  - Multi-wallet support

- 💰 **Transaction Management**
  - Send and receive SOL tokens
  - Real-time transaction status updates
  - Transaction history tracking
  - Gas fee estimation

- 📊 **Blockchain Data**
  - Real-time balance updates
  - Account information display
  - Network status monitoring
  - Block explorer integration

- 🎨 **User Interface**
  - Clean, modern design
  - Responsive layout for all devices
  - Dark/Light mode support (optional)
  - Loading states and error handling
  - Toast notifications for user feedback

### Technical Features

- ⚡ **Lightning Fast Development**
  - Hot Module Replacement (HMR) with Vite
  - Instant server startup
  - Optimized build times

- 🔧 **Developer Tools**
  - ESLint configuration for code quality
  - Pre-configured development environment
  - Debug-friendly error messages
  - Browser DevTools integration

- 🚀 **Production Optimized**
  - Code splitting and lazy loading
  - Tree shaking for minimal bundle size
  - Asset optimization
  - CDN-ready static files

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 18+ | UI Library |
| [Vite](https://vitejs.dev/) | 5+ | Build Tool & Dev Server |
| [JavaScript/TypeScript](https://www.typescriptlang.org/) | ES2020+ | Programming Language |
| CSS3 | - | Styling |

### Blockchain

| Library | Version | Purpose |
|---------|---------|---------|
| [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/) | Latest | Solana JavaScript API |
| [@solana/wallet-adapter-react](https://github.com/solana-labs/wallet-adapter) | Latest | Wallet Integration |
| [@solana/wallet-adapter-wallets](https://github.com/solana-labs/wallet-adapter) | Latest | Wallet Adapters |

### Development Tools

- **ESLint**: Code linting and quality checks
- **Vercel**: Deployment and hosting
- **Git**: Version control

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface (React)                │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────┐  │
│  │ Components │  │   Hooks    │  │  State Management │  │
│  └────────────┘  └────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│              Wallet Adapter Layer                        │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────┐  │
│  │  Phantom   │  │  Solflare  │  │  Other Wallets   │  │
│  └────────────┘  └────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│              Solana Web3.js Library                      │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────┐  │
│  │ Connection │  │Transaction │  │  Account Data    │  │
│  └────────────┘  └────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  Solana Blockchain                       │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────┐  │
│  │   Mainnet  │  │  Devnet    │  │    Testnet       │  │
│  └────────────┘  └────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Interaction** → React components capture user input
2. **Wallet Connection** → Wallet adapter manages authentication
3. **Transaction Creation** → Web3.js constructs blockchain transactions
4. **Blockchain Submission** → Transactions sent to Solana network
5. **Confirmation & Update** → UI updates with transaction results

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
  ```bash
  node --version  # Should be v16+
  ```

- **npm** or **yarn** package manager
  ```bash
  npm --version   # Should be 7+
  # or
  yarn --version  # Should be 1.22+
  ```

- **Git** for version control
  ```bash
  git --version
  ```

- **Solana Wallet** (Browser Extension)
  - [Phantom Wallet](https://phantom.app/) (Recommended)
  - [Solflare Wallet](https://solflare.com/)
  - Or any Solana-compatible wallet

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/LEGENDANISH/DAPP.git
   cd DAPP
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Verify Installation**
   ```bash
   npm list --depth=0
   ```

### Environment Setup

1. **Create Environment File**
   
   Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

2. **Configure Environment Variables**
   
   Add the following to your `.env` file:
   ```env
   # Solana Network Configuration
   VITE_SOLANA_NETWORK=devnet
   # Options: mainnet-beta, devnet, testnet
   
   # RPC Endpoint (Optional - defaults to public endpoint)
   VITE_SOLANA_RPC_HOST=https://api.devnet.solana.com
   
   # Custom RPC for better performance (Optional)
   # Get free RPC endpoint from: https://www.quicknode.com/ or https://www.helius.dev/
   # VITE_SOLANA_RPC_HOST=https://your-custom-rpc-endpoint.com
   
   # Program IDs (if using custom smart contracts)
   # VITE_PROGRAM_ID=YourProgramIdHere
   
   # Feature Flags
   VITE_ENABLE_MAINNET=false
   VITE_ENABLE_ANALYTICS=false
   ```

3. **Network Selection**
   
   Choose your target network:
   - **Devnet**: For development and testing (free SOL from faucet)
   - **Testnet**: For pre-production testing
   - **Mainnet-Beta**: For production deployment (real SOL required)

### Running the App

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The application will start at `http://localhost:5173` (default Vite port)

2. **Open in Browser**
   
   Navigate to the URL shown in your terminal. You should see:
   ```
   VITE v5.x.x  ready in XXX ms
   
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

3. **Connect Your Wallet**
   - Click the "Connect Wallet" button
   - Select your preferred wallet (Phantom, Solflare, etc.)
   - Approve the connection request in your wallet

4. **Get Test SOL** (Devnet only)
   ```bash
   # In a new terminal, use Solana CLI to airdrop test SOL
   solana airdrop 2 <YOUR_WALLET_ADDRESS> --url devnet
   ```
   
   Or use the [Solana Faucet](https://faucet.solana.com/)

---

## 📁 Project Structure

```
DAPP/
├── public/                      # Static assets
│   ├── favicon.ico             # App favicon
│   ├── logo.svg                # App logo
│   └── assets/                 # Images, fonts, etc.
│
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── common/            # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Modal.jsx
│   │   ├── wallet/            # Wallet-related components
│   │   │   ├── WalletButton.jsx
│   │   │   ├── WalletInfo.jsx
│   │   │   └── WalletModal.jsx
│   │   └── features/          # Feature-specific components
│   │       ├── TransactionForm.jsx
│   │       ├── BalanceDisplay.jsx
│   │       └── AccountInfo.jsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useWallet.js       # Wallet connection hook
│   │   ├── useBalance.js      # Balance tracking hook
│   │   └── useTransaction.js  # Transaction management hook
│   │
│   ├── utils/                  # Utility functions
│   │   ├── solana.js          # Solana-specific utilities
│   │   ├── format.js          # Formatting helpers
│   │   └── constants.js       # App constants
│   │
│   ├── services/               # API and service layer
│   │   ├── solanaService.js   # Solana blockchain service
│   │   └── walletService.js   # Wallet interaction service
│   │
│   ├── contexts/               # React Context providers
│   │   └── WalletContext.jsx  # Wallet state context
│   │
│   ├── styles/                 # Stylesheets
│   │   ├── global.css         # Global styles
│   │   ├── variables.css      # CSS variables
│   │   └── components/        # Component-specific styles
│   │
│   ├── config/                 # Configuration files
│   │   └── solana.js          # Solana network config
│   │
│   ├── App.jsx                # Main App component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Base styles
│
├── .env                        # Environment variables
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── package-lock.json          # Locked dependencies
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

### Key Files Explained

#### `src/main.jsx`
Application entry point that sets up React and wallet providers.

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### `src/App.jsx`
Main application component with wallet provider configuration.

```javascript
import { WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useMemo } from 'react'

function App() {
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    // Add more wallet adapters here
  ], [])

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        {/* Your app components */}
      </WalletModalProvider>
    </WalletProvider>
  )
}

export default App
```

#### `vite.config.js`
Vite build configuration with optimizations.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          solana: ['@solana/web3.js', '@solana/wallet-adapter-react']
        }
      }
    }
  }
})
```

---

## 🔗 Blockchain Integration

### Solana Connection Setup

```javascript
import { Connection, clusterApiUrl } from '@solana/web3.js'

// Create connection to Solana cluster
const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
)

// Or use custom RPC endpoint for better performance
const connection = new Connection(
  import.meta.env.VITE_SOLANA_RPC_HOST || clusterApiUrl('devnet'),
  'confirmed'
)
```

### Commitment Levels

Solana offers different commitment levels for transaction confirmation:

- **processed**: Query the most recent block
- **confirmed**: Query the most recent block confirmed by the cluster (recommended)
- **finalized**: Query the most recent block finalized by the cluster

### Network Configuration

```javascript
// src/config/solana.js
export const NETWORKS = {
  'mainnet-beta': {
    name: 'Mainnet Beta',
    url: clusterApiUrl('mainnet-beta')
  },
  devnet: {
    name: 'Devnet',
    url: clusterApiUrl('devnet')
  },
  testnet: {
    name: 'Testnet',
    url: clusterApiUrl('testnet')
  }
}

export const getCurrentNetwork = () => {
  return import.meta.env.VITE_SOLANA_NETWORK || 'devnet'
}
```

---

## 👛 Wallet Integration

### Supported Wallets

This dApp supports multiple Solana wallets:

1. **Phantom** 👻 (Recommended)
   - Most popular Solana wallet
   - Browser extension and mobile app
   - [Download](https://phantom.app/)

2. **Solflare** ☀️
   - Feature-rich wallet
   - Hardware wallet support
   - [Download](https://solflare.com/)

3. **Backpack** 🎒
   - Newer, modern wallet
   - [Download](https://backpack.app/)

### Wallet Connection Implementation

```javascript
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function WalletButton() {
  const { connected, publicKey } = useWallet()

  return (
    <div>
      <WalletMultiButton />
      {connected && (
        <p>Connected: {publicKey.toBase58()}</p>
      )}
    </div>
  )
}
```

### Custom Wallet Hook

```javascript
// src/hooks/useWallet.js
import { useWallet as useWalletAdapter } from '@solana/wallet-adapter-react'
import { useConnection } from '@solana/wallet-adapter-react'

export function useWallet() {
  const { connection } = useConnection()
  const wallet = useWalletAdapter()

  const getBalance = async () => {
    if (!wallet.publicKey) return 0
    const balance = await connection.getBalance(wallet.publicKey)
    return balance / 1e9 // Convert lamports to SOL
  }

  return {
    ...wallet,
    getBalance
  }
}
```

### Wallet State Management

```javascript
// src/contexts/WalletContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'

const WalletContext = createContext()

export function WalletProvider({ children }) {
  const wallet = useWallet()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if (wallet.connected) {
      // Fetch balance
      updateBalance()
    }
  }, [wallet.connected])

  const updateBalance = async () => {
    // Fetch and update balance
  }

  return (
    <WalletContext.Provider value={{ ...wallet, balance }}>
      {children}
    </WalletContext.Provider>
  )
}
```

---

## 💳 Smart Contract Interaction

### Sending SOL Tokens

```javascript
import { 
  Transaction, 
  SystemProgram, 
  LAMPORTS_PER_SOL 
} from '@solana/web3.js'

async function sendTransaction(connection, wallet, recipient, amount) {
  // Create transaction
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: recipient,
      lamports: amount * LAMPORTS_PER_SOL
    })
  )

  // Get latest blockhash
  const { blockhash } = await connection.getLatestBlockhash()
  transaction.recentBlockhash = blockhash
  transaction.feePayer = wallet.publicKey

  // Sign and send transaction
  const signature = await wallet.sendTransaction(transaction, connection)
  
  // Confirm transaction
  await connection.confirmTransaction(signature, 'confirmed')
  
  return signature
}
```

### Reading Account Data

```javascript
async function getAccountInfo(connection, publicKey) {
  const accountInfo = await connection.getAccountInfo(publicKey)
  
  return {
    lamports: accountInfo.lamports,
    owner: accountInfo.owner.toBase58(),
    executable: accountInfo.executable,
    rentEpoch: accountInfo.rentEpoch
  }
}
```

### Token Operations (SPL Tokens)

```javascript
import { 
  getAssociatedTokenAddress,
  createTransferInstruction
} from '@solana/spl-token'

async function transferToken(
  connection,
  wallet,
  tokenMint,
  recipient,
  amount
) {
  // Get or create associated token accounts
  const senderTokenAccount = await getAssociatedTokenAddress(
    tokenMint,
    wallet.publicKey
  )
  
  const recipientTokenAccount = await getAssociatedTokenAddress(
    tokenMint,
    recipient
  )

  // Create transfer instruction
  const transferInstruction = createTransferInstruction(
    senderTokenAccount,
    recipientTokenAccount,
    wallet.publicKey,
    amount
  )

  // Build and send transaction
  const transaction = new Transaction().add(transferInstruction)
  const signature = await wallet.sendTransaction(transaction, connection)
  
  return signature
}
```

### Program Interaction Example

```javascript
import { PublicKey, TransactionInstruction } from '@solana/web3.js'

async function callProgram(connection, wallet, programId, data) {
  const instruction = new TransactionInstruction({
    keys: [
      { pubkey: wallet.publicKey, isSigner: true, isWritable: true }
    ],
    programId: new PublicKey(programId),
    data: Buffer.from(data)
  })

  const transaction = new Transaction().add(instruction)
  const signature = await wallet.sendTransaction(transaction, connection)
  
  return signature
}
```

---

## 🌐 Deployment

### Build for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```

2. **Preview Production Build**
   ```bash
   npm run preview
   ```

### Deploy to Vercel

1. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub Integration** (Recommended)
   - Push your code to GitHub
   - Connect repository to [Vercel](https://vercel.com)
   - Vercel will automatically deploy on push to main branch

3. **Deploy via CLI**
   ```bash
   vercel
   ```

4. **Configure Environment Variables**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add all variables from `.env` file

### Deploy to Netlify

1. **Create `netlify.toml`**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Deploy to IPFS (Decentralized Hosting)

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Upload to IPFS**
   ```bash
   # Using Fleek
   npm install -g @fleek-platform/cli
   fleek sites deploy

   # Or using Pinata
   # Upload dist/ folder to https://pinata.cloud
   ```

### Custom Domain Setup

1. **Add Custom Domain in Vercel/Netlify**
2. **Update DNS Records**
   ```
   Type: CNAME
   Name: www
   Value: your-app.vercel.app
   ```

---

## 🔧 Development Guide

### Adding New Features

1. **Create Component**
   ```bash
   # Create new component file
   touch src/components/features/NewFeature.jsx
   ```

2. **Implement Component**
   ```javascript
   function NewFeature() {
     return (
       <div className="new-feature">
         {/* Component content */}
       </div>
     )
   }

   export default NewFeature
   ```

3. **Add Styles**
   ```bash
   touch src/styles/components/NewFeature.css
   ```

4. **Import and Use**
   ```javascript
   import NewFeature from './components/features/NewFeature'
   ```

### Custom Hooks Best Practices

```javascript
// Good: Focused, reusable hook
function useBalance(publicKey) {
  const [balance, setBalance] = useState(0)
  const { connection } = useConnection()

  useEffect(() => {
    if (!publicKey) return

    const fetchBalance = async () => {
      const bal = await connection.getBalance(publicKey)
      setBalance(bal / LAMPORTS_PER_SOL)
    }

    fetchBalance()
    
    // Optional: Set up polling
    const interval = setInterval(fetchBalance, 10000)
    return () => clearInterval(interval)
  }, [publicKey, connection])

  return balance
}
```

### State Management Patterns

```javascript
// Context for global state
export const AppContext = createContext()

export function AppProvider({ children }) {
  const [state, setState] = useState({
    theme: 'light',
    notifications: []
  })

  const actions = {
    toggleTheme: () => setState(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    })),
    addNotification: (msg) => setState(prev => ({
      ...prev,
      notifications: [...prev.notifications, msg]
    }))
  }

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  )
}
```

### Error Handling

```javascript
async function safeTransaction(transactionFn) {
  try {
    const signature = await transactionFn()
    return { success: true, signature }
  } catch (error) {
    console.error('Transaction failed:', error)
    
    // Handle specific errors
    if (error.message.includes('insufficient funds')) {
      return { success: false, error: 'Insufficient balance' }
    }
    
    return { success: false, error: error.message }
  }
}
```

---

## 🧪 Testing

### Unit Testing Setup

```bash
npm install --save-dev vitest @testing-library/react
```

### Test Example

```javascript
// src/components/__tests__/WalletButton.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WalletButton from '../WalletButton'

describe('WalletButton', () => {
  it('renders connect button when not connected', () => {
    render(<WalletButton />)
    expect(screen.getByText('Connect Wallet')).toBeInTheDocument()
  })
})
```

### Integration Testing

```javascript
// Test wallet connection flow
describe('Wallet Connection', () => {
  it('connects to phantom wallet', async () => {
    // Mock wallet adapter
    const mockWallet = {
      connect: vi.fn(),
      disconnect: vi.fn()
    }

    // Test connection
    await mockWallet.connect()
    expect(mockWallet.connect).toHaveBeenCalled()
  })
})
```

### Run Tests

```bash
npm run test
```

---

## ⚡ Performance Optimization

### Code Splitting

```javascript
// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  )
}
```

### Memoization

```javascript
import { useMemo, useCallback } from 'react'

function ExpensiveComponent({ data }) {
  // Memoize computed values
  const processedData = useMemo(() => {
    return data.map(item => /* expensive operation */)
  }, [data])

  // Memoize callbacks
  const handleClick = useCallback(() => {
    // Handle click
  }, [/* dependencies */])

  return <div>{/* Use processed data */}</div>
}
```

### Bundle Size Optimization

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'solana-vendor': ['@solana/web3.js'],
          'wallet-adapter': ['@solana/wallet-adapter-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

### Image Optimization

```javascript
// Use WebP format
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.png" alt="description" loading="lazy" />
</picture>
```

---

## 🔐 Security Best Practices

### Environment Variables

```javascript
// ❌ Don't expose sensitive data
const SECRET_KEY = "my-secret-key"

// ✅ Use environment variables
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY
```

### Input Validation

```javascript
function validateAddress(address) {
  try {
    new PublicKey(address)
    return true
  } catch (error) {
    return false
  }
}

function validateAmount(amount) {
  const num = parseFloat(amount)
  return !isNaN(num) && num > 0 && num < 1e9
}
```

### Transaction Signing

```javascript
// ✅ Always verify transaction before signing
async function signTransaction(transaction) {
  // Show transaction details to user
  const confirmed = await showTransactionPreview(transaction)
  
  if (!confirmed) {
    throw new Error('Transaction rejected by user')
  }
  
  return await wallet.signTransaction(transaction)
}
```

### Rate Limiting

```javascript
// Implement rate limiting for API calls
class RateLimiter {
  constructor(maxRequests, timeWindow) {
    this.maxRequests = maxRequests
    this.timeWindow = timeWindow
    this.requests = []
  }

  async throttle() {
    const now = Date.now()
    this.requests = this.requests.filter(
      time => now - time < this.timeWindow
    )

    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0]
      const waitTime = this.timeWindow - (now - oldestRequest)
      await new Promise(resolve => setTimeout(resolve, waitTime))
    }

    this.requests.push(now)
  }
}
```

---

## 🐛 Troubleshooting

### Common Issues

#### Wallet Not Connecting

**Problem**: Wallet button doesn't respond or shows error

**Solutions**:
1. Ensure wallet extension is installed and unlocked
2. Check browser console for errors
3. Try refreshing the page
4. Clear browser cache and cookies
5. Verify wallet is set to correct network (devnet/mainnet)

```javascript
// Debug wallet connection
useEffect(() => {
  console.log('Wallet state:', {
    connected: wallet.connected,
    publicKey: wallet.publicKey?.toBase58(),
    connecting: wallet.connecting
  })
}, [wallet])
```

#### Transaction Failures

**Problem**: Transactions fail to send or confirm

**Solutions**:
1. Check account has sufficient balance for transaction + fees
2. Verify network connection
3. Increase commitment level to 'finalized'
4. Check RPC endpoint status

```javascript
// Better error handling for transactions
try {
  const signature = await sendTransaction()
  console.log('Transaction signature:', signature)
} catch (error) {
  if (error.message.includes('0x1')) {
    console.error('Insufficient funds')
  } else if (error.message.includes('blockhash')) {
    console.error('Transaction expired, retry with new blockhash')
  } else {
    console.error('Transaction error:', error)
  }
}
```

#### RPC Rate Limiting

**Problem**: Getting rate limit errors from public RPC

**Solutions**:
1. Use custom RPC endpoint (QuickNode, Helius, etc.)
2. Implement request caching
3. Add retry logic with exponential backoff

```javascript
// Retry logic
async function fetchWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === maxRetries - 1) throw error
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, i) * 1000)
      )
    }
  }
}
```

#### Build Errors

**Problem**: Build fails or warnings appear

**Solutions**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite

# Update dependencies
npm update
```

### Debug Mode

Enable detailed logging:

```javascript
// src/config/debug.js
export const DEBUG = import.meta.env.DEV

export function log(...args) {
  if (DEBUG) {
    console.log('[DEBUG]', ...args)
  }
}

// Usage
log('Wallet connected:', wallet.publicKey.toBase58())
```

### Network Issues

Check Solana network status:
- [Solana Status](https://status.solana.com/)
- [Solana Beach Explorer](https://solanabeach.io/)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/DAPP.git
   cd DAPP
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes

### Contribution Guidelines

- **Code Style**: Follow the existing code style (ESLint config)
- **Commits**: Use clear, descriptive commit messages
- **Documentation**: Update README if adding new features
- **Testing**: Add tests for new functionality
- **Issues**: Check existing issues before creating new ones

### Code Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 LEGENDANISH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

### Author

**LEGENDANISH**

- GitHub: [@LEGENDANISH](https://github.com/LEGENDANISH)
- Project Link: [https://github.com/LEGENDANISH/DAPP](https://github.com/LEGENDANISH/DAPP)
- Live Demo: [https://solanadapp-sand.vercel.app](https://solanadapp-sand.vercel.app)

### Support

- 💬 [GitHub Discussions](https://github.com/LEGENDANISH/DAPP/discussions)
- 🐛 [Issue Tracker](https://github.com/LEGENDANISH/DAPP/issues)
- 📧 Email: Open an issue for contact

---

## 🙏 Acknowledgments

### Built With

- [Solana](https://solana.com/) - High-performance blockchain
- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Wallet Adapter](https://github.com/solana-labs/wallet-adapter) - Wallet integration

### Resources

- [Solana Cookbook](https://solanacookbook.com/)
- [Solana Documentation](https://docs.solana.com/)
- [Anchor Framework](https://www.anchor-lang.com/)
- [Metaplex](https://www.metaplex.com/)

### Community

- [Solana Discord](https://discord.gg/solana)
- [Solana Stack Exchange](https://solana.stackexchange.com/)
- [Solana Reddit](https://reddit.com/r/solana)

### Inspiration

This project draws inspiration from various Solana dApps and aims to provide a solid foundation for developers entering the Web3 space.

---

## 🗺️ Roadmap

### Current Version (v1.0)
- ✅ Basic wallet integration
- ✅ SOL transfer functionality
- ✅ Balance display
- ✅ Responsive UI

### Upcoming Features (v1.1)
- 🔄 SPL token support
- 🔄 Transaction history
- 🔄 Network switching UI
- 🔄 Dark mode toggle

### Future Plans (v2.0)
- 📋 NFT display and transfer
- 📋 Staking interface
- 📋 Token swap integration
- 📋 Multi-signature wallet support
- 📋 Mobile app (React Native)

### Long-term Vision
- 🔮 DAO integration
- 🔮 DeFi features
- 🔮 Cross-chain bridges
- 🔮 Advanced analytics

---

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/LEGENDANISH/DAPP?style=social)
![GitHub forks](https://img.shields.io/github/forks/LEGENDANISH/DAPP?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/LEGENDANISH/DAPP?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/LEGENDANISH/DAPP)
![GitHub issues](https://img.shields.io/github/issues/LEGENDANISH/DAPP)
![GitHub pull requests](https://img.shields.io/github/issues-pr/LEGENDANISH/DAPP)

---

## 💡 Tips & Best Practices

### For Developers

1. **Always test on devnet first** before deploying to mainnet
2. **Use custom RPC endpoints** for production to avoid rate limits
3. **Implement proper error handling** for all blockchain interactions
4. **Cache blockchain data** when possible to reduce RPC calls
5. **Monitor gas fees** and optimize transaction structure

### For Users

1. **Never share your private keys** or seed phrases
2. **Verify transaction details** before signing
3. **Start with small amounts** when testing
4. **Keep your wallet software updated**
5. **Use hardware wallets** for large amounts

### For Contributors

1. **Read the contribution guidelines** before starting
2. **Test your changes thoroughly** on devnet
3. **Document new features** properly
4. **Follow the existing code style**
5. **Be responsive** to code review feedback

---

## 🎓 Learning Resources

### Solana Development
- [Solana Bootcamp](https://www.soldev.app/)
- [Buildspace Solana Course](https://buildspace.so/)
- [Solana Bytes](https://www.youtube.com/playlist?list=PLilwLeBwGuK6NsYMPP_BlVkeQgff0NwvU)

### Web3 Concepts
- [Web3 University](https://www.web3.university/)
- [Ethereum.org](https://ethereum.org/en/developers/docs/)
- [Crypto Zombies](https://cryptozombies.io/)

### React & Frontend
- [React Documentation](https://react.dev/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)

---

## ❓ FAQ

### General Questions

**Q: What is a dApp?**
A: A decentralized application (dApp) is an application that runs on a blockchain network, rather than being controlled by a single entity.

**Q: Why Solana?**
A: Solana offers fast transaction speeds, low fees, and a growing ecosystem, making it ideal for building scalable dApps.

**Q: Is this production-ready?**
A: Yes, this template includes production-grade configurations, but you should thoroughly test before deploying with real funds.

### Technical Questions

**Q: Can I use this with TypeScript?**
A: Yes! Rename files to `.tsx` and add TypeScript configuration. Vite supports TypeScript out of the box.

**Q: How do I add new wallets?**
A: Import the wallet adapter and add it to the wallets array in your WalletProvider configuration.

**Q: Can I deploy to other networks?**
A: Yes, change the `VITE_SOLANA_NETWORK` environment variable to target different Solana clusters.

**Q: How do I reduce RPC calls?**
A: Implement caching, use websockets for real-time updates, and batch multiple queries when possible.

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

### 🚀 Happy Building on Solana!

Made with ❤️ by [LEGENDANISH](https://github.com/LEGENDANISH)

---

**[Back to Top](#solana-dapp-)**

</div>
