"use client";
import { Button } from "@/components/ui/button";
import {
  useDisconnect,
  useAppKit,
  useAppKitNetwork,
} from "@reown/appkit/react";
import { networks } from "@/config";

export const ActionButtonList = () => {
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const { switchNetwork } = useAppKitNetwork();

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };
  return (
    <div className="flex gap-2">
      <Button onClick={() => open()} variant="default">
        Open
      </Button>
      <Button onClick={handleDisconnect} variant="destructive">
        Disconnect
      </Button>
      <Button onClick={() => switchNetwork(networks[1])} variant="outline">
        Switch
      </Button>
    </div>
  );
};
