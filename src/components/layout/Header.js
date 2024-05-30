"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { FaUserAlt } from "react-icons/fa";

import { FiLogIn } from "react-icons/fi";
import { useSession } from "next-auth/react";
function Header() {
  const { data } = useSession();
  console.log(data);
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residentail">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;