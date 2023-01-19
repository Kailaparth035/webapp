import React, { useEffect, useState } from "react";
import { tabale_data } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

const Product = () => {
  const [tabaledata, setTabaledata] = useState([]);
  const [page, setPage] = useState(1);
  const route = useRouter();

  useEffect(() => {
    productApicall();
  }, []);

  const productApicall = async () => {
    let bodyData = {
      limit: 1,
      page: page,
      search: "",
      consultionFees: "",
      rating: 0,
    };
    try {
      const response = await fetch("http://localhost:4585/user/product/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "<calculated when request is sent>",
        },
        body: JSON.stringify(bodyData),
      });

      let responseJson = await response.json();
      console.log("response  product list ::;", responseJson);
      if (response.status === 200) {
        setTabaledata(responseJson.data.product_data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletItem = async (item) => {
    try {
      const response = await fetch(
        "http://localhost:4585/user/product/" + item._id,
        {
          method: "DELETE",
        }
      );
      let responseJson = response.json();
      if (response.status === 200) {
        alert("Product breed Successfully Delete");
        productApicall();
      }
      console.log("responseJson ::", responseJson);
    } catch (error) {
      console.log("error ::", error);
    }
  };

  const pagination_next = async () => {
    let bodyData = {
      limit: 1,
      page: page + 1,
      search: "",
      consultionFees: "",
      rating: 0,
    };
    setPage(page + 1);
    try {
      const response = await fetch("http://localhost:4585/user/product/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "<calculated when request is sent>",
        },
        body: JSON.stringify(bodyData),
      });

      let responseJson = await response.json();
      console.log("response  product list ::;", responseJson);
      if (response.status === 200) {
        setTabaledata(responseJson.data.product_data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const pagination_previous = async () => {
    let bodyData = {
      limit: 1,
      page: page - 1,
      search: "",
      consultionFees: "",
      rating: 0,
    };
    setPage(page - 1);
    try {
      const response = await fetch("http://localhost:4585/user/product/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "<calculated when request is sent>",
        },
        body: JSON.stringify(bodyData),
      });

      let responseJson = await response.json();
      console.log("response  product list ::;", responseJson);
      if (response.status === 200) {
        setTabaledata(responseJson.data.product_data);
      }
    } catch (error) {
      console.log(error.message);
    }
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
            key={route.asPath}
          />
        </div>
        <div className="col-10">
          <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
              <div className="content-wrapper">
                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1>Product</h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header">
                            <h3 className="card-title">Product List</h3>
                          </div>

                          <div className="card-body">
                            <table
                              id="example2"
                              className="table table-bordered table-hover"
                            >
                              <thead>
                                <tr>
                                  <th>Product Name</th>
                                  <th>Description</th>
                                  <th>Price</th>
                                  <th>Image</th>
                                  <th>Edit</th>
                                  <th>Delet</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tabaledata.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.name}</td>
                                      <td>{item.description}</td>
                                      <td>{item.price}</td>
                                      <td>{item.image[0]}</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-link"
                                          onClick={() =>
                                            route.push({
                                              pathname: "/Admin/AddItem",
                                              query: {
                                                key: "Product",
                                                type: "Edit",
                                                id: item._id,
                                                name: item.name,
                                                description: item.description,
                                                price: item.price,
                                                image: item.image[0],
                                              },
                                            })
                                          }
                                        >
                                          Edit
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={() => deletItem(item)}
                                        >
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  // className="row"
                  style={{
                    alignItems: "flex-end",
                    display: "flex",
                    padding: 25,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <div>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      disabled={page > 1 ? false : true}
                      onClick={() => pagination_previous()}
                    >
                      <span style={{ textAlign: "center" }}>Previous</span>
                    </button>
                  </div>
                  <div
                    style={{
                      paddingLeft: 15,
                      paddingRight: 15,
                      alignSelf: "center",
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{page}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={() => pagination_next()}
                      disabled={page < tabale_data.length ? false : true}
                    >
                      <span style={{ textAlign: "center" }}>Next</span>
                    </button>
                  </div>
                </div>
                <div className="container-wrapped">
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ float: "right", margin: 30 }}
                    onClick={() =>
                      route.push({
                        pathname: "/Admin/AddItem",
                        query: {
                          key: "Product",
                          type: "Add",
                          length: tabaledata.length,
                        },
                      })
                    }
                  >
                    + Add Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
