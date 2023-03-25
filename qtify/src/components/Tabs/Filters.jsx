import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../Tabs/Filters.module.css";
import { useSwiper } from "swiper/react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Filters = ({ data, setSelectedFilteredIndex, selectedFilterdIndex }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedFilteredIndex(newValue);
    // console.log(newValue);
  };
  // console.log("filter from filter", data);
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedFilterdIndex}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "var(--color-primary)",
              },
            }}
          >
            {data.map((ele, idx) => {
              return (
                <Tab
                  key={idx}
                  label={ele.label}
                  {...a11yProps(0)}
                  className={styles.tab}
                />
              );
            })}
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};
export default Filters;
