"use client";
import { LuShare2 } from "react-icons/lu";

import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "./Share.module.css";
import { useEffect, useState } from "react";
function Share() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        اشتراک گذاری
      </div>
    </CopyToClipboard>
  );
}

export default Share;
