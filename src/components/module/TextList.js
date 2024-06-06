import styles from "./TextList.module.css";
function TextList({ profileData, setProfileData, title, type }) {
  const changeHandler = (e, index) => {
    const list = [...profileData[type]];
    list[index] = e.target.value;
    setProfileData({ ...profileData, [type]: list });
  };
  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>

      {profileData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={() => deleteHandler(index)}>حذف</button>
        </div>
      ))}
      <button onClick={addHandler}>افزودن</button>
    </div>
  );
}

export default TextList;
