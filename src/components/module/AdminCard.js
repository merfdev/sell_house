import { sp } from "@/utils/replaceNumber";
import styles from "./AdminCard.module.css";

function AdminCard({ profile: { title, description, location, price } }) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <di className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </di>
      <button>انتشار</button>
    </div>
  );
}

export default AdminCard;
