import SolIcon from "./assets/sol-icon.png";

export function Airdrop({ children }) {
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
              placeholder="Enter Amount"
              className="p-2 mx-10"
            />
            <button className="rounded-lg bg-blue-400 p-2">
              Request Airdrop
            </button>
          </div>
          <div className="flex justify-between p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
