"use client";

import { useState } from "react";
import TextInput from "../module/TextInput";
import styles from "./AddProfilePage.module.css";
import RadioList from "../module/RadioList";

function AddProfilePage() {
  const [profileDate, setProfileDate] = useState({
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
  const submitHandler = () => {
    console.log(profileDate);
  };
  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileDate}
        setProfileData={setProfileDate}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileDate}
        setProfileData={setProfileDate}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileDate}
        setProfileData={setProfileDate}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileDate}
        setProfileData={setProfileDate}
      />
      <TextInput
        title="قیمت"
        name="price"
        profileData={profileDate}
        setProfileData={setProfileDate}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileDate}
        setProfileData={setProfileDate}
      />
      <RadioList profileDate={profileDate} setProfileData={setProfileDate} />
      <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfilePage;
