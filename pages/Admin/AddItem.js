import React, { useEffect, useState } from "react";
import { tabale_data } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

function AddItem() {
  const [namestate, setNamestate] = useState("");
  const [descriptionstate, setDescriptionstate] = useState("");
  const [pricestate, setPricestate] = useState("");
  const [img, setImg] = useState("");
  const [specializationstate, setSpecializationstate] = useState("");
  const [genderstate, setGenderstate] = useState("");
  const [citystate, setCitystate] = useState("");
  const [registrationstate, setRegistrationstate] = useState("");
  const [councilstate, setCouncilstate] = useState("");
  const [yearstate, setYearstate] = useState("");

  const route = useRouter();

  useEffect(() => {
    if (route.query.key === "Product") {
      const { name, description, price, image } = route.query;
      setNamestate(name);
      setDescriptionstate(description);
      setPricestate(price);
      setImg(image);
    } else {
      const {
        name,
        specialization,
        gender,
        city,
        registration,
        council,
        year,
      } = route.query;
      setNamestate(name);
      setSpecializationstate(specialization);
      setGenderstate(gender);
      setCitystate(city);
      setRegistrationstate(registration);
      setCouncilstate(council);
      setYearstate(year);
    }
  }, []);

  //   console.log("router addItem", route);

  const saveProductData = async () => {
    if (route.query.type === "Edit") {
      let bodyData = {
        id: route.query.id,
        name: namestate,
        description: descriptionstate,
        price: pricestate,
        image: ["gfdgdfg"],
      };
      try {
        const response = await fetch("http://localhost:4585/user/product", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJson = await response.json();
        if (response.status === 200) {
          route.push("/Admin/Product");
        } else {
          alert(responseJson.message);
        }
        console.log("response ::", responseJson);
      } catch (error) {
        console.log("error::", error);
      }
    } else {
      let bodyData = {
        name: namestate,
        description: descriptionstate,
        price: pricestate,
        image: ["gfdgdfg"],
      };
      try {
        const response = await fetch("http://localhost:4585/user/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJson = await response.json();
        if (response.status === 200) {
          route.push("/Admin/Product");
        } else {
          alert(responseJson.message);
        }
        console.log("response ::", responseJson);
      } catch (error) {
        console.log("error::", error);
      }
    }
  };

  const nameset = (e) => {
    // console.log("e :::", e.target.value);
    setNamestate(e.target.value);
  };
  const description = (e) => {
    // console.log("e :::", e.target.value);
    setDescriptionstate(e.target.value);
  };
  const price = (e) => {
    // console.log("e :::", e.target.value);
    setPricestate(e.target.value);
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
          />
        </div>
        <div className="col-10">
          <h1 style={{ marginTop: 30, marginLeft: 30 }}>
            Add {route.query.key} item
          </h1>

          <div
            className="hold-transition sidebar-mini layout-fixed"
            style={{ marginTop: 40, marginLeft: 30 }}
          >
            {route.query.key === "Product" ? (
              <div className="wrapper">
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Name
                  </span>
                  <br />
                  <input
                    placeholder="Enter Enter Name"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={namestate}
                    onChange={nameset}
                    // setNamestate(text)}
                    // onChange={(e) =>
                    //   console.log("e:::", JSON.stringify(e.target.value))
                    // }
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Description
                  </span>
                  <br />
                  <input
                    placeholder="Enter Description"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={descriptionstate}
                    onChange={description}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Price
                  </span>
                  <br />
                  <input
                    placeholder="Enter Price"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={pricestate}
                    onChange={price}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Select Image
                  </span>
                  <br />
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <button
                      style={{
                        marginTop: 7,
                      }}
                      type="button"
                      className="btn btn-secondary btn-lg btn-block"
                    >
                      Attach File
                    </button>
                    <div style={{ marginTop: 15, marginLeft: 10 }}>
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: 20,
                        }}
                      >
                        {img !== "" ? img : "No file Selected"}
                      </span>
                    </div>
                  </div>
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
                    onClick={() => route.push("/Admin/" + route.query.key)}
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
            ) : (
              <div className="wrapper">
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Name
                  </span>
                  <br />
                  <input
                    placeholder="Enter Name"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={namestate}
                    onChange={(text) => setNamestate(text)}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Specialization
                  </span>
                  <br />
                  <input
                    placeholder="Enter Specialization"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={specializationstate}
                    onChange={(text) => setspecializationstate(text)}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Gender
                  </span>
                  <br />
                  <input
                    placeholder="Enter Gender"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={genderstate}
                    onChange={(text) => setGenderstate(text)}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter City
                  </span>
                  <br />
                  <input
                    placeholder="Enter City"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={citystate}
                    onChange={(text) => setCitystate(text)}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter registration
                  </span>
                  <br />
                  <input
                    placeholder="Enter registration"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={registrationstate}
                    onChange={(text) => setRegistrationstate(text)}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter council
                  </span>
                  <br />
                  <input
                    placeholder="Enter council"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={councilstate}
                    onChange={(text) => setCouncilstate(text)}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter year
                  </span>
                  <br />
                  <input
                    placeholder="Enter year"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={yearstate}
                    onChange={(text) => setYearstate(text)}
                  />
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
                    onClick={() => route.push("/Admin/" + route.query.key)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                    onClick={() => route.push("/Admin/" + route.query.key)}
                  >
                    Save
                  </button>
                </div>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
