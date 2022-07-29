import React, { Component } from "react";
import { connect } from "react-redux";

class ModalGioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSL(index, false);
              }}
              className="btn btn-success mr-2"
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => {
                this.props.tangGiamSL(index, true);
              }}
              className="btn btn-primary ml-2"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHangIndex(index);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <td colSpan="3"></td>
            <td>Tổng tiền</td>
            <td>
              {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                return (tongTien += spGioHang.quantity * spGioHang.price);
              }, 0)}
            </td>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },
    tangGiamSL: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHang);
