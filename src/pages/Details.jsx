import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        if (id) {
            axios
                .get(
                    `https://strapi-store-server.onrender.com/api/products/${id}`
                )
                .then((response) => {
                    console.log(response.data.data);
                    if (response.status == 200) {
                        setProduct(response.data.data);
                    }
                    setSelectedColor(response.data.data.attributes.colors[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <div>
            <div className="container">
                <div className="flex gap-2 mt-20 mb-20">
                    <Link to="/" className="text-[15px] hover:underline">
                        Home
                    </Link>
                    <div className="text-[#B5BCC7]">&gt;</div>
                    <Link
                        to="/products"
                        className="text-[15px] hover:underline"
                    >
                        Products
                    </Link>
                </div>
                {product.id && (
                    <div className="flex justify-between gap-2">
                        <div className="left">
                            <img
                                className="w-[500px] h-[400px] object-cover rounded-md"
                                src={product.attributes.image}
                                width={500}
                                height={300}
                                alt=""
                            />
                        </div>
                        <div className="right w-[550px]">
                            <h1 className="text-[40px] font-bold text-[#394E6A]">
                                {product.attributes.title}
                            </h1>
                            <h1 className="text-[25px] font-bold text-[#C7C9D1] mb-4">
                                {product.attributes.company}
                            </h1>
                            <h1 className="text-[20px] text-[#394E6A] mb-4">
                                ${product.attributes.price}
                            </h1>
                            <p className="text-[16px] leading-7 mb-7 text-[#394E6A] font-medium">
                                {product.attributes.description}
                            </p>
                            <h1 className="font-bold text-[20xp] text-[#394E6A]">
                                Colors
                            </h1>
                            <div className="flex gap-3 mt-4 mb-4">
                                {product.attributes.colors.length &&
                                    product.attributes.colors.map(
                                        (color, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className={`cursor-pointer rounded-full w-[20px] h-[20px] inline-block`}
                                                    style={{
                                                        backgroundColor: color,
                                                        border:
                                                            selectedColor ===
                                                            color
                                                                ? "2px solid black"
                                                                : "none",
                                                    }}
                                                    onClick={() => {
                                                        setSelectedColor(color);
                                                    }}
                                                ></span>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Details;