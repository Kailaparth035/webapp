import React from "react";
import { doctor_list } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

function Doctor() {
  const route = useRouter();
  console.log("route::", route.pathname);
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
                        <h1>Doctor</h1>
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
                            <h3 class="card-title">Doctore List</h3>
                          </div>

                          <div class="card-body">
                            <table
                              id="example2"
                              class="table table-bordered table-hover"
                            >
                              <thead>
                                <tr>
                                  <th>Doctor ID</th>
                                  <th>Doctor Name</th>
                                  <th>Mobile No</th>
                                  <th>Qualification</th>
                                  <th>Grade</th>
                                  <th>Edit</th>
                                  <th>Delet</th>
                                </tr>
                              </thead>
                              <tbody>
                                {doctor_list.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.doctor_id}</td>
                                      <td>{item.doctor_name}</td>
                                      <td>{item.mobile_number}</td>
                                      <td>{item.qualification}</td>
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
                    style={{ float: "right", margin: 30, color: "white" }}
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
}

export default Doctor;
