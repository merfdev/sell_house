"use client";
import { useRouter } from "next/navigation";
import Card from "./Card";
import styles from "./DashboardCard.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
function DashboardCard({ data }) {
  const router = useRouter();
  const deleteHandler = () => {};
  const editHandler = () => {
    router.push(`/dashboard/my-profile/${data._id}`);
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
