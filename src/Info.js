import React from 'react';

import {WalletAdapterNetwork, WalletNotConnectedError} from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {Keypair, SystemProgram, Transaction, Connection, clusterApiUrl} from '@solana/web3.js';

const Info = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction, wallets } = useWallet();


    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Devnet;

    const onClick = async () => {
        console.log(' - - - - - - - - - - -')
        console.log(await connection.getBalanceAndContext(publicKey, connection.commitment))
        console.log(await connection.getBalance(publicKey, connection.commitment))
        console.log(await connection.getAccountInfo(publicKey, connection.commitment))
        console.log(publicKey)
        console.log(' - - - - - - - - - - -')
    }

    return (
        <div>
            <button onClick={onClick}>
                Test test test test test test
            </button>
        </div>
    )
}

export default Info
