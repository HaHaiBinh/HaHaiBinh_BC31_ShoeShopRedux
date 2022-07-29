import React, { Component } from "react";
import { data } from "./data";
import SanPhamReducer from "./SanPhamReducer";

export default class DanhSachSanPhamReducer extends Component {
  renderSanPham = () => {
    return data.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamReducer sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center text-danger">Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
