import React from "react";

const Drawer = (props) => {
  console.log("props.key ::", props.key);
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.product()}
      >
        Product
      </button>

      <button
        type="button"
        class="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.product()}
      >
        Doctor
      </button>

      {/* <button
        type="button"
        class="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.doctor()}
      >
        Doctor
      </button> */}
      {/* <button
        type="button"
        class="btn btn-primary"
        style={{ width: 245, borderRadius: 0 }}
        onClick={() => props.product()}
      >
        Forget Password
      </button> */}
    </div>
  );
};

export default Drawer;
