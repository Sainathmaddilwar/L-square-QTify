import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Logo from "../logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search />
      <Button />
    </div>
  );
}

export default Navbar;
