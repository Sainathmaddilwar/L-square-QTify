import styles from "../logo/logo.module.css";

function Logo() {
  return (
    <img
      className={styles.logo}
      src={require("../../assets/logo.png")}
      alt="logo"
    />
  );
}

export default Logo;
