import { useEffect, useRef } from "react";
import jazzicon from "@metamask/jazzicon";

function MetaMaskAvatar({ account }: any) {
  const avatarRef: any = useRef();
  useEffect(() => {
    const element: any = avatarRef.current;
    if (element && account) {
      const addr = account.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(40, seed);
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }
  }, [account, avatarRef]);
  return account ? <div ref={avatarRef} /> : null;
}

export default MetaMaskAvatar;
