import Image from "next/image";
import styles from "./CategoryCard.module.css";
import Link from "next/link";

function CategoryCard({ name, title }) {
  return (
    <div className={styles.card}>
      <Link href="/">
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;