import React from "react";
import { tabale_data } from "../../Constant/Array";

function Product() {
  return (
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
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quolity</th>
                        <th>Quontity</th>
                        <th>Grade</th>
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
    </div>
  );
}

export default Product;
