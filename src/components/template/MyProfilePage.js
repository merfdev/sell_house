import DashboardCard from "../module/DashboardCard";
import styles from "./DashboardPage.module.css";
function MyProfilePage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={i} />
      ))}
    </div>
  );
}

export default MyProfilePage;
