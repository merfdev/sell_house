"use client";
import { useRouter } from "next/navigation";
import Card from "./Card";
import styles from "./DashboardCard.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

import { ThreeDots } from "react-loader-spinner";
function DashboardCard({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      setLoading(false);

      toast.success(result.message);
      router.refresh();
    }
  };
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
        {loading ? (
          <ThreeDots
            color="red"
            height={55}
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "0px auto" }}
          />
        ) : (
          <button onClick={deleteHandler}>
            حذف
            <AiOutlineDelete />
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
