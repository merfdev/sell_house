import styles from "./CustomDatePicker.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function CustomDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
        value={profileData.constructionDate}
        calendar={persian}
        locale={persian_fa}
        onChange={(e) => changeHandler(e)}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default CustomDatePicker;
