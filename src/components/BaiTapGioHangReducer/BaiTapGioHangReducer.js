import React, { Component } from "react";
import DanhSachSanPhamReducer from "./DanhSachSanPhamReducer";
import ModalGioHang from "./ModalGioHang";

export default class BaiTapGioHangReducer extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-danger">Bài tập giỏ hàng redux</h3>
        <ModalGioHang />
        <DanhSachSanPhamReducer />
      </div>
    );
  }
}
