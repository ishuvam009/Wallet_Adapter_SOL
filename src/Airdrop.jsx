import { useEffect, useState } from "react"; // Import useState to manage balance
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import SolIcon from "./assets/sol-icon.png";

export function Airdrop({ children }) {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [userBalance, setUserBalance] = useState(0); // State to manage user balance

  // Function to fetch and set user balance
  const fetchUserBalance = async () => {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      setUserBalance(balance / LAMPORTS_PER_SOL); // Update balance state
      console.log(balance);
    }
  };

  // useEffect to fetch user balance on component mount and wallet change
  useEffect(() => {
    fetchUserBalance();
  }, [wallet.publicKey, connection]);

  async function ClickHandler() {
    const amount = document.getElementById("publickey").value;
    const airdropAmount = amount * LAMPORTS_PER_SOL; // Calculate amount in lamports
    await connection.requestAirdrop(wallet.publicKey, airdropAmount); // Request airdrop
    const sendAmount = amount; // Amount in SOL
    console.log(wallet.publicKey.toString());

    alert(
      `Airdrop sent to ${wallet.publicKey.toString()} of ${sendAmount} SOL`
    );

    fetchUserBalance(); // Refresh balance after airdrop
  }

  return (
    <>
      <div className="flex justify-center pt-16">
        <div className="mx-auto w-2/5 rounded-xl shadow-xl bg-slate-300">
          <p className="text-2xl font-bold text-center m-2">SOL Airdrop</p>
          <img
            className="w-1/6 h-1/7 mx-auto"
            src={SolIcon}
            alt="Solana Airdrop"
          />
          <div className="p-4">
            <input
              type="text"
              id="publickey"
              placeholder="Enter Amount"
              className="p-2 mx-10"
            />
            <button
              onClick={ClickHandler}
              className="rounded-lg bg-blue-400 p-2"
            >
              Request Airdrop
            </button>

            <div className="flex">
              <p className="font-bold mt-4 ml-10">Account Balance:</p>
              <div className="mt-4 ml-2 font-bold" id="userbal">
                {userBalance.toFixed(2)} SOL {/* Display user balance */}
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
