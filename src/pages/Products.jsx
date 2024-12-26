import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    

    useEffect(() => {
        axios
            .get("https://strapi-store-server.onrender.com/api/products")
            .then((response) => {
                if (response.status == 200) {
                    setProducts(response.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleOpen(product){
        navigate(`/products/${product.id}`)
    }
    return (
        <div className="mb-10">
            <div className="container flex flex-wrap justify-center gap-5 mb-10">
                {products.length > 0 ? (
                    products.map((product, index) => {
                        return (
                            <div onClick={() => {handleOpen(product)}}
                                className="card w-[300px]  p-3 text-center rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-[1s]"
                                key={index}
                            >
                                <img
                                    src={product.attributes.image}
                                    className="object-cover rounded-xl w-full h-[200px]"
                                    alt=""
                                />
                                <h1 className="text-[20px] text-[#394E6A] mt-4 mb-2">
                                    {product.attributes.title}
                                </h1>
                                <h1 className="text-[#394E6A] text-[18px] mb-5">
                                    ${product.attributes.price}
                                </h1>
                            </div>
                        );
                    })
                ) : (
                    <h1 className="mt-20 text-center">LOADING...</h1>
                )}
            </div>
        </div>
    );
}

export default Products;
