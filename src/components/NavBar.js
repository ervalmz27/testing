"use client";
import React, { useState } from "react";
import Image from "next/image";
function NavBar() {
    const [open, setOpent] = useState(false);
    return (
        <div className="relative">
            <div className="fixed flex items-center w-full justify-between  p-8 bg-white z-50">
                <div className="cursor-pointer">
                    <Image src={"/Logo.png"} width={150} height={24} className="object-contain" />
                </div>
                <div className="hidden lg:block md:hidden sm:hidden">
                    <ul className="flex items-center space-x-4 ">
                        <li className="text-sky-500 cursor-pointer">Home</li>
                        <li className="text-sky-500 cursor-pointer">About</li>
                        <li className="text-sky-500 cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div
                    className=" lg:hidden sm:block"
                    onClick={() => {
                        setOpent(true);
                    }}
                >
                    <Image src={"/burger.png"} width={24} height={24} className="object-contain cursor-pointer" />
                </div>
            </div>
            <div className={open ? "fixed z-50 right-0 bg-white h-screen w-80 p-4" : "hidden"}>
                <div className="flex flex-col justify-betwen h-full">
                    <div className="flex items-center justify-between">
                        <span>
                            <Image src={"/Logo.png"} width={150} height={24} className="object-contain cursor-pointer" />
                        </span>
                        <span
                            className="cursor-pointer"
                            onClick={() => {
                                setOpent(false);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path
                                    fill="#aeaeae"
                                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="flex items-center justify-center mt-20">
                        <ul className="flex flex-col items-center space-y-4 ">
                            <li className="text-sky-500 cursor-pointer">Home</li>
                            <li className="text-sky-500 cursor-pointer">About</li>
                            <li className="text-sky-500 cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
