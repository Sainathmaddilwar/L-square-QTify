import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Logo from "../logo/Logo";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
}

export default Navbar;
