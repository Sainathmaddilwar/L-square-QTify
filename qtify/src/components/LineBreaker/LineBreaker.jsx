import React from "react";
function LineBreaker() {
  return (
    <div>
      <br />
      <hr
        style={{
          background: "var(--color-primary)",
          color: "var(--color-primary)",
          borderColor: "var(--color-primary)",
          height: "1px",
        }}
      />
      <br />
    </div>
  );
}

export default LineBreaker;
