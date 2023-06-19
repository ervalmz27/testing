import React from "react";
import Image from "next/image";
function Footer() {
    return (
        <footer>
            <div className="   p-8 bg-blue-900 z-50">
                <div className="flex-1 lg:flex lg:flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between h-full">
                    <div className="flex flex-col">
                        <div className="cursor-pointer">
                            <img src={"/Logo.png"} className="object-contain" />
                        </div>
                        <div className="bg-white p-6 mt-4 w-3/4">
                            <select id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   ">
                                <option value="1">TECHNOLOGY DEPARTMENT</option>
                                <option value="2">Canada</option>
                                <option value="3">France</option>
                                <option value="4">Germany</option>
                            </select>
                            <p className="text-cyan-600">Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
                        </div>
                    </div>

                    <div>
                        <ul className="flex flex-col items-start space-y-6 mt-0 sm:mt-4">
                            <li className="text-sky-500 cursor-pointer">Who We Are</li>
                            <li className="text-sky-500 cursor-pointer">Our Values</li>
                            <li className="text-sky-500 cursor-pointer">The Perks</li>
                        </ul>
                        {/* <Image src={"/burger.png"} width={24} height={24} className="object-contain cursor-pointer" /> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
