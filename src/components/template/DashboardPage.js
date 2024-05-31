import styles from "./DashboardPage.module.css";
function DashboardPage({ createAt }) {
  console.log(createAt);
  return (
    <div className={styles.container}>
      <h3>سلام 👋🏻</h3>
      <p>آگهی های خود را ثبت کنید</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت :</p>
        <span>{new Date(createAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
