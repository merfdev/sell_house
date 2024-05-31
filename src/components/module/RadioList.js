import styles from "./RadioList.module.css";
function RadioList({ profileDate, setProfileData }) {
  const changeHandler = (e) => {
    setProfileData({ ...profileDate, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={profileDate.category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={profileDate.category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={profileDate.category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={profileDate.category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
