import AdminCard from "../module/AdminCard";
import styles from "./AdminPage.module.css";
function AdminPage({ profiles }) {
  return (
    <div>
      {profiles ? null : (
        <p className={styles.text}>آگهی در انتظاری وجود ندارد</p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} profile={i} />
      ))}
    </div>
  );
}

export default AdminPage;
