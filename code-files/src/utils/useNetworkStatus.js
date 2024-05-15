import { useState } from "react";

const useNetworkStatus = () => {
    const [isOffline, setIsOfflineState] = useState(false);

    window.addEventListener("online", () => setIsOfflineState(false));
    window.addEventListener("offline", () => setIsOfflineState(true));

    return isOffline;
};

export default useNetworkStatus;