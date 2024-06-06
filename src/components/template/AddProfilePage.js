"use client";

import { useState } from "react";
import TextInput from "../module/TextInput";
import styles from "./AddProfilePage.module.css";
import RadioList from "../module/RadioList";
import TextList from "../module/TextList";
import CustomDatePicker from "../module/CustomDatePicker";

import toast, { Toaster } from "react-hot-toast";

import Loader from "../module/Loader";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };
  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileDate={profileData} setProfileData={setProfileData} />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
        title="امکانات رفاهی"
      />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
        title="قوانین "
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
