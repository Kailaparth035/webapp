import React from "react";
import { tabale_data } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

const Product = () => {
  const route = useRouter();
  console.log("route::", route.asPath);
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
            key={route.asPath}
          />
        </div>
        <div className="col-10">
          <div class="hold-transition sidebar-mini layout-fixed">
            <div class="wrapper">
              <div class="content-wrapper">
                <section class="content-header">
                  <div class="container-fluid">
                    <div class="row mb-2">
                      <div class="col-sm-6">
                        <h1>Product</h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="content">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12">
                        <div class="card">
                          <div class="card-header">
                            <h3 class="card-title">Product List</h3>
                          </div>

                          <div class="card-body">
                            <table
                              id="example2"
                              class="table table-bordered table-hover"
                            >
                              <thead>
                                <tr>
                                  <th>Product ID</th>
                                  <th>Product Name</th>
                                  <th>Quolity</th>
                                  <th>Quontity</th>
                                  <th>Grade</th>
                                  <th>Edit</th>
                                  <th>Delet</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tabale_data.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.product_id}</td>
                                      <td>{item.product_name}</td>
                                      <td>{item.quolity}</td>
                                      <td>{item.quontity}</td>
                                      <td>{item.grade}</td>
                                      <td>
                                        <button
                                          type="button"
                                          class="btn btn-link"
                                        >
                                          Edit
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          class="btn btn-danger"
                                        >
                                          Delet
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
                <div className="container-wrapped">
                  <button
                    type="button"
                    class="btn btn-info"
                    style={{ float: "right", margin: 30 }}
                  >
                    Add Item
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
