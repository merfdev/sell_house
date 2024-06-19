import Link from "next/link";
import styles from "./Sidebar.module.css";
import { HiFilter } from "react-icons/hi";
function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      <Link href="/buy-residential?category=villa">ویلا</Link>
      <Link href="/buy-residential?category=apartment">آپارتمان</Link>
      <Link href="/buy-residential?category=office">دفتر</Link>
      <Link href="/buy-residential?category=store">مغازه</Link>
    </div>
  );
}

export default Sidebar;
