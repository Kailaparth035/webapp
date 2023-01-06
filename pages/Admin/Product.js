import React from "react";
import { tabale_data } from "../../Constant/Array";
import Image from "next/image";
import Link from "next/link";
import { Button } from "bootstrap";
import Head from "next/head";

function Product() {
  return (
    // <div className="hold-transition sidebar-mini">
    //   <Head>
    //     <link
    //       href="assets/css/style.bundle.css"
    //       rel="stylesheet"
    //       type="text/css"
    //     />
    //     <script src="assets/js/scripts.bundle.js"></script>
    //   </Head>
    //   <div class="wrapper">
    //     <nav
    //       class="main-header navbar navbar-expand navbar-white navbar-light"
    //       style={{ backgroundColor: "red", alignItems: "center" }}
    //     >
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link" data-widget="pushmenu" href="#" role="button">
    //             <i class="fas fa-bars"></i>
    //           </a>
    //         </li>
    //         <li class="nav-item d-none d-sm-inline-block">
    //           <a href="../../index3.html" class="nav-link">
    //             Admin Panel
    //           </a>
    //         </li>
    //         <div style={{ alignSelf: "center", float: "right" }}>
    //           <li class="nav-item d-none d-sm-inline-block">
    //             <a href="../../index3.html" class="nav-link">
    //               Home
    //             </a>
    //           </li>
    //           <li class="nav-item d-none d-sm-inline-block">
    //             <a href="#" class="nav-link">
    //               Contact
    //             </a>
    //           </li>
    //         </div>
    //       </ul>
    //     </nav>
    //     <div className="row">
    //       <div className="col-2 123"></div>
    //       <div className="col-2"></div>
    //     </div>
    //   </div>
    //   {/* <div className="container">
    //     <div className="row">
    //       <div className="container col-2" style={{ backgroundColor: "red" }}>
    //         <button>drower</button>
    //       </div>
    //       <div className="col-10">123</div>
    //     </div>
    //   </div> */}
    //   <button id="kt_drawer_example_basic_button" class="btn btn-primary">
    //     Toggle advanced drawer
    //   </button>
    //   <div
    //     id="kt_drawer_example_advanced"
    //     class="bg-white"
    //     data-kt-drawer="true"
    //     data-kt-drawer-activate="true"
    //     data-kt-drawer-toggle="#kt_drawer_example_advanced_button"
    //     data-kt-drawer-close="#kt_drawer_example_advanced_close"
    //     data-kt-drawer-name="docs"
    //     data-kt-drawer-overlay="true"
    //     data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    //     data-kt-drawer-direction="start"
    //   >
    //     132546
    //   </div>
    // </div>
    <div class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper">
        {/* <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" class="brand-link">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
          </a>
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item menu-open">
                <div>
                  <a href="#" class="nav-link active" className="col-1">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                </div>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="./index.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="./index2.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="./index3.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="pages/widgets.html" class="nav-link">
                  <i class="nav-icon fas fa-th"></i>
                  <p>
                    Widgets
                    <span class="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </aside> */}
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
                                  <button type="button" class="btn btn-info">
                                    Edit
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="btn btn-danger">
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
  );
}

export default Product;
