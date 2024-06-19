import styles from "./ItemList.module.css";
function ItemList({ item }) {
  return (
    <div className={styles.container}>
      <ul>
        {item.length ? (
          <ul>
            {item.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>ندارد</p>
        )}
      </ul>
    </div>
  );
}

export default ItemList;
