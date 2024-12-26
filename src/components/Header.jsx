import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../images/cartImg.svg";
import { useSelector } from "react-redux";

function Header() {
    const cart = useSelector((state) => state.cart);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let sum = 0;
        cart.length > 0 &&
            cart.forEach((value) => {
                sum += Number(value.count);
            });
        setCount(sum);
    }, [cart]);

    return (
        <div>
            <div className="top bg-[#021431] p-2">
                <div className="container">
                    <ul className="flex justify-end gap-5">
                        <li>
                            <Link
                                to="/login"
                                className="text-[14px] text-[#C7C9D1] hover:underline"
                            >
                                Sign in / Guest
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/signin"
                                className="text-[14px] text-[#C7C9D1] hover:underline"
                            >
                                Create Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header mb-10 bg-[#F0F6FF]">
                <div className="container flex items-center justify-between p-2 ">
                    <NavLink
                        to="/"
                        className="text-[35px] font-bold text-[#DBE1FF] bg-[#057AFF] rounded-[8px] px-3"
                    >
                        C
                    </NavLink>
                    <ul className="flex">
                        <li className="headLink">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : "nonactive"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="headLink">
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? "active" : "nonactive"
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className="headLink">
                            <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                    isActive ? "active" : "nonactive"
                                }
                            >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                    <div className="relative flex">
                        <Link to="/cart">
                            <img
                                className=""
                                src={image}
                                width={30}
                                height={30}
                                alt=""
                            />
                        </Link>
                        <h1 className="absolute heroCounter right-[-15px] px-2  bg-[#057AFF] text-[10px] text-white rounded-full">
                            {count}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
