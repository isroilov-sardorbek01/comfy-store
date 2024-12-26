import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function handleChange(id, color, count) {
        dispatch(update({ id, color, count: Number(count) }));
        toast.success("Product is Updated", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    function onDel(id, color) {
        dispatch(remove({ id, color }));
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-[30px] mt-20 font-semibold leading-7 mb-4 text-[#384D69]">
                    Shopping Cart
                </h1>
                <hr className="mb-10" />
                <div className="flex flex-col gap-4">
                    {cart.length > 0 ? (
                        cart.map((value, index) => {
                            return (
                                <div
                                    className="flex items-center justify-between mb-10"
                                    key={index}
                                >
                                    <img
                                        src={value.product.attributes.image}
                                        width={200}
                                        height={200}
                                        className="h-[150px] rounded-md object-cover"
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-[18px] text-[#33456F] font-bold">
                                            {value.product.attributes.title}
                                        </h1>
                                        <h1 className="text-[16px] text-[#C7C9D1]">
                                            {value.product.attributes.company}
                                        </h1>
                                        <div className="flex gap-1">
                                            <h1 className="text-[15px]">
                                                Color :{" "}
                                            </h1>
                                            <div
                                                className="w-[18px] h-[18px] rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        value.color,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-[15px] text-[#6F445C]">
                                            Amount
                                        </h1>
                                        <select
                                            className="px-2 py-1 border-[1px] border-[#C7C9D1] rounded-xl"
                                            value={value.count}
                                            onChange={(e) => {
                                                handleChange(
                                                    value.id,
                                                    value.color,
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                        </select>
                                        <h1
                                            onClick={() => {
                                                onDel(value.id, value.color);
                                            }}
                                            className="text-[#5D7AFF] hover:underline cursor-pointer"
                                        >
                                            remove
                                        </h1>
                                    </div>
                                    <div className="">
                                        ${value.product.attributes.price}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h1>No things</h1>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Cart;
