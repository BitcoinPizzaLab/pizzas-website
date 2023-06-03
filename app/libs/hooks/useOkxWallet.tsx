import okxWeb3 from "@okwallet/extension";
// import { useMount } from "react-use";

export function useOkxWallet() {
  const initWallet = async () => {
    const walletInfo = await okxWeb3.init();
    console.log(walletInfo);
  };

  //   useMount(() => {
  //     okxWeb3.addListener("connectWallet", (wallet: any) => {
  //       console.log(wallet);
  //       // [
  //       //   {
  //       //     keyringName: 'WalletA',
  //       //     name: 'Account01',
  //       //     address: [
  //       //       {
  //       //         address: '0x81Fc6F6E44a2313743bCAA060681d24597aDbDfB',
  //       //         coinType: '60',
  //       //         name: 'okc',
  //       //       }
  //       //     ]
  //       //   }
  //       //   ...
  //       // ]
  //     });
  //   });

  return {
    initWallet,
  };
}
