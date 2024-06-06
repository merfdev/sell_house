import Card from "./Card";
import styles from "./DashboardCard.module.css";
function DashboardCard({ data }) {
  return (
    <div>
      <Card data={data} />
    </div>
  );
}

export default DashboardCard;
