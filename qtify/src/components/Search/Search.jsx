import React from "react";
import { useState } from "react";
import styles from "../Search/Search.module.css";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";

const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  borderRadius: "0px 0px 10px 10px",
  color: "white",
  overflow: "auto",
  maxHeight: 200,
  border: "1px solid var(--color-primary)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ placeHolder, albums }) {
  // const [search, setSearch] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: albums,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.search_bar} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            className={styles.input}
            // value={search}
            {...getInputProps()}
            placeholder={placeHolder}
            required
            // onChange={(e) => {
            //   setSearch(e.target.value);
            // }}
          />
        </div>
        <button className={styles.btn} type="submit">
          <svg
            className={styles.svg}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3257 12.8987L19.7057 18.2787C19.8948 18.468 20.001 18.7246 20.0009 18.9921C20.0008 19.2596 19.8945 19.5161 19.7052 19.7052C19.516 19.8943 19.2594 20.0005 18.9919 20.0004C18.7244 20.0003 18.4678 19.894 18.2787 19.7047L12.8987 14.3247C11.2905 15.5704 9.26802 16.1566 7.24287 15.9641C5.21772 15.7716 3.34198 14.8148 1.99723 13.2884C0.652477 11.7619 -0.0602651 9.78056 0.00399633 7.74729C0.0682577 5.71402 0.904695 3.7816 2.34315 2.34315C3.7816 0.904695 5.71402 0.0682577 7.74729 0.00399633C9.78056 -0.0602651 11.7619 0.652477 13.2884 1.99723C14.8148 3.34198 15.7716 5.21772 15.9641 7.24287C16.1566 9.26802 15.5704 11.2905 14.3247 12.8987H14.3257ZM8.00074 13.9997C9.59204 13.9997 11.1182 13.3676 12.2434 12.2424C13.3686 11.1172 14.0007 9.59104 14.0007 7.99974C14.0007 6.40845 13.3686 4.88232 12.2434 3.7571C11.1182 2.63189 9.59204 1.99974 8.00074 1.99974C6.40944 1.99974 4.88332 2.63189 3.7581 3.7571C2.63289 4.88232 2.00074 6.40845 2.00074 7.99974C2.00074 9.59104 2.63289 11.1172 3.7581 12.2424C4.88332 13.3676 6.40944 13.9997 8.00074 13.9997Z"
              fill="#121212"
            />
          </svg>
        </button>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              className={styles.listElements}
            >
              {option.title}
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

export default Search;
