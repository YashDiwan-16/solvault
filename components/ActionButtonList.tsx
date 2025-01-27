//This code is for custom button

// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   useDisconnect,
//   useAppKit,
//   useAppKitNetwork,
// } from "@reown/appkit/react";
// import { networks } from "@/config";
// import { Wallet, Power, SwitchCamera } from "lucide-react";

// export const ActionButtonList = () => {
//   const { disconnect } = useDisconnect();
//   const { open } = useAppKit();
//   const { switchNetwork } = useAppKitNetwork();

//   const handleDisconnect = async () => {
//     try {
//       await disconnect();
//     } catch (error) {
//       console.error("Failed to disconnect:", error);
//     }
//   };
//   return (
//     <div className="flex gap-3">
//       <Button
//         onClick={() => open()}
//         variant="default"
//         className="flex items-center gap-2 hover:scale-105 transition-transform"
//       >
//         <Wallet className="w-4 h-4" />
//         Connect Wallet
//       </Button>

//       <Button
//         onClick={handleDisconnect}
//         variant="destructive"
//         className="flex items-center gap-2 hover:opacity-90 transition-opacity"
//       >
//         <Power className="w-4 h-4" />
//         Disconnect
//       </Button>

//       <Button
//         onClick={() => switchNetwork(networks[1])}
//         variant="outline"
//         className="flex items-center gap-2 hover:bg-secondary transition-colors"
//       >
//         <SwitchCamera className="w-4 h-4" />
//         Switch Network
//       </Button>
//     </div>
//   );
// };
