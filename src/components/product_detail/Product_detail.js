import React from "react";

const ProductDetail = (props) => {
    const { tensp, price1, xuatxu } = props;
    return (
        <div>
            <h1>product detail</h1>
            <p>Tên sản phẩm: {props.tensp}</p>
            <p>Giá: {price1}</p>
            <p>Xuất xứ: {xuatxu}</p>
        </div>
    );
};

export default ProductDetail;
