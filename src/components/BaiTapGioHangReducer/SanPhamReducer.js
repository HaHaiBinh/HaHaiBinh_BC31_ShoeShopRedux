import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamReducer extends Component {
  render() {
    const { sanPham } = this.props;

    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={sanPham.image}
            className="card-img-top"
            alt={sanPham.image}
          />
          <div className="card-body">
            <h5 className="card-title">{sanPham.name}</h5>
            <p className="card-text">
              {sanPham.description.length < 30
                ? sanPham.description
                : sanPham.description.slice(0, 30) + "..."}
            </p>
            <button
              onClick={() => {
                this.props.addToCart(sanPham);
              }}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (sanPham) => {
      const spGioHang = {
        id: sanPham.id,
        name: sanPham.name,
        price: sanPham.price,
        quantity: 1,
      };
      const action = {
        type: "THEM_GIO_HANG",
        spGioHang: spGioHang,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamReducer);
