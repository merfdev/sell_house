import Card from "../module/Card";
import styles from "./BuyResidentialsPage.module.css";
function BuyResidentialsPage({ fdata }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}></div>
      <div className={styles.main}>
        {fdata.length ? null : <p>هیچ آگهی ثبت نشده</p>}
        {fdata.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
