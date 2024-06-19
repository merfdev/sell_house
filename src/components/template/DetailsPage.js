import styles from "./DetailsPage.module.css";

import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

import ItemList from "../module/ItemList";
import Title from "../module/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import Share from "../module/Share";
import { icons } from "../../../constants/icons";
import { categories } from "../../../constants/strings";

function DetailsPage({ data }) {
  const {
    title,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  } = data;
  

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات</Title>

        <ItemList item={amenities} />
        <Title>قوانین</Title>

        <ItemList item={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>

        <Share />

        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
