import AdminCard from "../module/AdminCard";
import styles from "./AdminPage.module.css";
function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.lenght ? null : (
        <p className={styles.text}>آگهی در انتظاری تایید وجود ندارد</p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} profile={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
