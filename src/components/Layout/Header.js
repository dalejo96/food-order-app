import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

import imageMeal from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Food App</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={imageMeal} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
