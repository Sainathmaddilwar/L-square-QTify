import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Logo from "../logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";
function Navbar({ albums }) {
  console.log("from nav", albums);
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search placeHolder="Search album of your choice" albums={albums} />
      <Button />
    </div>
  );
}

export default Navbar;
