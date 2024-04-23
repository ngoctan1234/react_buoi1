import React from "react";
import ProductDetail from "../product_detail/Product_detail";

const Product = () => {
    const tensp = "Đồng hồ treo tường";
    const price = 30000;
    const arr = [
        {
            id: 1,
            name: "Đồng hồ treo tường",
            origin: "Trung quốc",
        },
        {
            id: 2,
            name: "Tranh treo tường",
            origin: "hàn quốc",
        },
        {
            id: 3,
            name: "Apple watch",
            origin: "Ấn độ",
        },
    ];

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            {arr.map((item) => (
                <ProductDetail tensp={item.name} price1={30000} xuatxu={item.origin} />
            ))}
        </div>
    );
};

export default Product;
