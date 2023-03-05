import React from "react";
import styles from "../Search/Search.module.css";
function Search() {
  return (
    <div>
      <input className={styles.input} />
      <button className={styles.btn}>search</button>
    </div>
  );
}

export default Search;
