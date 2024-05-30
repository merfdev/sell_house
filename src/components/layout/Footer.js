import styles from "./Footer.module.css";
function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.desc}>
          <h3>سامانه خرید و اجاره ملک</h3>
          <p>
            این سامانه برای ایجاد یک سامانه خرید و اجاره ملک با پایتون و جی اس
            است. این سامانه برای ایجاد یک سامانه خرید و اجاره ملک با پایتون و جی
            اس است.
          </p>
        </div>
        <div>
          <ul>
            <li>تعرفه قانونی</li>
            <li>سیاست حفظ حریم خصوص </li>
            <li>قولنامه محضری</li>
            <li>سیاست های اجاره</li>
            <li>سیاست های خرید و فروش</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
