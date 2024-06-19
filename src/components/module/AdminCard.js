"use client";
import { sp } from "@/utils/replaceNumber";
import styles from "./AdminCard.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function AdminCard({ profile: { _id, title, description, location, price } }) {
  const router = useRouter();
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "PATCH",
    });
    const data = await res.json();
    if (data.message) {
      toast.success(data.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <di className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </di>
      <button onClick={publishHandler}>انتشار</button>
      <Toaster />
    </div>
  );
}

export default AdminCard;
