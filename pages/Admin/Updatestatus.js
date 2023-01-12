import React, { useEffect, useState } from "react";
import { tabale_data } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

function Updatestatus() {
  const [statusstate, setStatusstate] = useState("");
  const route = useRouter();

  useEffect(() => {
    const { id, status } = route.query;
    console.log("id :::", id);
    console.log("status :::", status);

    setStatusstate(status);
  }, []);

  const saveProductData = async () => {
    let Closed = "Closed";
    let Pending = "Pending";
    let bodyData;
    if (statusstate.toLocaleLowerCase() === Closed.toLocaleLowerCase()) {
      bodyData = {
        id: route.query.id,
        status: 0,
      };
      try {
        const response = await fetch("http://localhost:4585/user/orderstatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
            Accept: "*/*",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJson = response.json();
        console.log("resp[onse :::", response);
        if (response.status === 200) {
          alert("Order  Successfully Update");
          route.push("/Admin/Order");
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.log("error:::", error);
      }
    } else if (
      statusstate.toLocaleLowerCase() === Pending.toLocaleLowerCase()
    ) {
      bodyData = {
        id: route.query.id,
        status: 1,
      };
      try {
        const response = await fetch("http://localhost:4585/user/orderstatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
            Accept: "*/*",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJson = response.json();
        console.log("resp[onse :::", response);
        if (response.status === 200) {
          alert("Order  Successfully Update");
          route.push("/Admin/Order");
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.log("error:::", error);
      }
    } else {
      alert("Plese enter proper status");
    }

    setStatusstate("");
  };

  const Status = (e) => {
    console.log("e :::", e);
    setStatusstate(e.target.value);
  };

  return (
    <div className="container-wrapped">
      <div className="row">
        <div
          className="col-2"
          style={{ backgroundColor: "lightblue", height: "100vh" }}
        >
          <Drawer
            product={() => route.push("/Admin/Product")}
            doctor={() => route.push("/Admin/Doctor")}
            order={() => route.push("/Admin/Order")}
            blog={() => route.push("/Admin/Blog")}
          />
        </div>
        <div className="col-10">
          <h1 style={{ marginTop: 30, marginLeft: 30 }}>Update order status</h1>

          <div
            className="hold-transition sidebar-mini layout-fixed"
            style={{ marginTop: 40, marginLeft: 30 }}
          >
            <div className="wrapper">
              <div style={{ marginTop: 10 }}>
                <span style={{ fontWeight: "500", fontSize: 20 }}>Status</span>
                <br />
                <input
                  placeholder="Enter Status"
                  style={{
                    marginTop: 7,
                    borderRadius: 3,
                    width: 300,
                    height: 40,
                    borderColor: "#7e7e7e",
                    borderWidth: 1,
                  }}
                  value={statusstate}
                  onChange={Status}
                  // setNamestate(text)}
                  // onChange={(e) =>
                  //   console.log("e:::", JSON.stringify(e.target.value))
                  // }
                />
                <br />
                <span>(Enter status only "Pending" and "Closed")</span>
              </div>

              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  marginTop: 30,
                }}
              >
                <button
                  style={{ marginRight: 20 }}
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    route.push("/Admin/Order"), setStatusstate("");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                  onClick={() => saveProductData()}
                >
                  Save
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatestatus;
