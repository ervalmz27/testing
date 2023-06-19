"use client";
import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
    const [count, setCount] = useState(1);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
            url: "/bensin.png",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
            url: "/jam.png",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
            url: "/knapot.png",
        },
    ];
    const refs = images.reduce((acc, val, i) => {
        acc[i] = React.createRef();
        return acc;
    }, {});
    const totalImages = images.length;
    const scrollToImage = (i) => {
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
            behavior: "smooth",

            block: "nearest",
            inline: "start",
        });
    };
    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

    // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
    const arrowStyle = "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

    // Let's create dynamic buttons. It can be either left or right. Using
    // isLeft boolean we can determine which side we'll be rendering our button
    // as well as change its position and content.
    const sliderControl = (isLeft) => (
        <button type="button" onClick={isLeft ? previousImage : nextImage} className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`} style={{ top: "40%" }}>
            <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
                {isLeft ? "◀" : "▶"}
            </span>
        </button>
    );
    const handleClickAdd = () => {
        if (count < 3) {
            setCount(count + 1);
        }
    };
    const handleClickMin = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <div>
                    <img src="/benjamin.jpg" className="obejct-contain w-full h-screen" />
                    <div className="relative " style={{ marginTop: -110 }}>
                        <div class="relative w-full h-screen overflow-hidden">
                            <div className="absolute inset-0 bg-cyan-500 transform origin-bottom-right -skew-y-6 " style={{ backgroundColor: "#53A7E9" }}></div>
                            <div className="absolute inset-0 bg-red-500 transform origin-bottom-left skew-y-6" style={{ backgroundColor: "#4097DB" }}></div>
                            <div className="absolute left-10 top-1/3 z-20 ">
                                <h1 className="text-left text-5xl text-white">Discover </h1>
                                <h1 className="text-left text-5xl text-white">Your Wonder </h1>
                                <span style={{ width: 20 }}>
                                    <p className="text-left text-xl mt-10 ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 ">
                    <div className="flex mt-10 flex-col items-center justify-center ">
                        {count === 1 ? (
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center p-4 w-3/5 rounded bg-white shadow">
                                <h1 className="text-cyan-600 text-xl">Who we are</h1>
                                <p className="text-black text-start"> Technology Company</p>
                                <p className="text-gray-400 text-start">
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                    vitae dicta sunt explicabo.
                                </p>
                            </motion.div>
                        ) : null}
                        {count === 2 ? (
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center p-4 w-3/5 rounded bg-white shadow">
                                <h1 className="text-cyan-600 text-xl">What we do</h1>
                                <p className="text-black text-start"> Professional Brand Management</p>
                                <p className="text-gray-400 text-start">
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem.
                                </p>
                            </motion.div>
                        ) : null}
                        {count === 3 ? (
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center p-4 w-3/5 rounded bg-white shadow">
                                <h1 className="text-cyan-600 text-xl">How we do</h1>
                                <p className="text-black text-start"> Strategize, Design, Collaborate</p>
                                <p className="text-gray-400 text-start">
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                    voluptate velit esse sequam nihil molestiae consequatur.
                                </p>
                            </motion.div>
                        ) : null}
                    </div>
                    <div className="flex items-center justify-between p-6">
                        <div className="text-black">
                            <span className="text-black font-semibold">0{count}</span>/ 03
                        </div>
                        <div className="flex">
                            <span className="bg-gray-300 p-2 hover:bg-sky-500 cursor-pointer " onClick={handleClickMin}>
                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.0439 8.57281C20.5961 8.57281 21.0439 8.1251 21.0439 7.57282C21.0439 7.02053 20.5961 6.57281 20.0439 6.57281L20.0439 8.57281ZM0.296707 6.86571C-0.0938167 7.25623 -0.0938168 7.8894 0.296707 8.27992L6.66067 14.6439C7.05119 15.0344 7.68436 15.0344 8.07488 14.6439C8.46541 14.2534 8.46541 13.6202 8.07488 13.2297L2.41803 7.57281L8.07488 1.91596C8.46541 1.52544 8.46541 0.892271 8.07488 0.501746C7.68436 0.111222 7.05119 0.111222 6.66067 0.501746L0.296707 6.86571ZM20.0439 6.57281L1.00381 6.57281L1.00381 8.57281L20.0439 8.57281L20.0439 6.57281Z"
                                        fill="#B6B6B6"
                                        className="hover:fill-white"
                                    />
                                </svg>
                            </span>

                            <span className="bg-gray-300 p-2 hover:bg-sky-500 cursor-pointer " onClick={handleClickAdd}>
                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.37958 6.52167C0.827293 6.52167 0.379578 6.96938 0.379578 7.52167C0.379578 8.07395 0.827293 8.52167 1.37958 8.52167L1.37958 6.52167ZM21.1267 8.22877C21.5172 7.83825 21.5172 7.20508 21.1267 6.81456L14.7627 0.450599C14.3722 0.0600743 13.739 0.0600743 13.3485 0.450599C12.958 0.841123 12.958 1.47429 13.3485 1.86481L19.0053 7.52167L13.3485 13.1785C12.958 13.569 12.958 14.2022 13.3485 14.5927C13.739 14.9833 14.3722 14.9833 14.7627 14.5927L21.1267 8.22877ZM1.37958 8.52167L20.4196 8.52167L20.4196 6.52167L1.37958 6.52167L1.37958 8.52167Z"
                                        fill="#B6B6B6"
                                        className="hover:fill-white"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-4">
                    <div className="flex mt-10 flex-col items-center justify-center ">
                        <h1 className="text-sky-500 text-xl font-sans">Our Core Values</h1>
                        <p className="text-gray-400 w-3/5 p-2">
                            Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam.
                            Montes, vitae, nec amet enim.
                        </p>
                    </div>
                    <div className="flex-1 lg:flex lg:flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center h-full">
                        <div className="flex flex-col p-2 lg:items-center sm:items-start">
                            <div className="lg:w-3/5 sm:w-96">
                                <h1 className="text-black text-2xl font-normal"> - Dedication</h1>
                                <p className="text-start text-gray-400">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
                            </div>
                            <div className="lg:w-3/5 sm:w-96">
                                <h1 className="text-black text-2xl font-normal"> - Intellectual Honesty</h1>
                                <p className="text-start text-gray-400">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</p>
                            </div>
                            <div className="lg:w-3/5 sm:w-96">
                                <h1 className="text-black text-2xl font-normal"> - Curiosity</h1>
                                <p className="text-start text-gray-400">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                            </div>
                        </div>
                        <div className="-m-l-10 mr-20">
                            <img src="/ilustrator.jpg" className="object-contain" />
                        </div>
                    </div>
                </div>
                <div className="bg-sky-500 p-4">
                    <div className=" bg-white p-4 flex flex-col items-center justify-center ">
                        <h1 className="text-sky-500 text-xl font-sans">OUR SPECIALITYs</h1>
                        <p className="text-gray-400 w-3/5 p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                        </p>
                        <div className="p-12 flex justify-center  md:w-1/2 items-center">
                            <div className="relative w-full">
                                <div className="carousel ">
                                    {sliderControl(true)}
                                    {images.map((img, i) => (
                                        <div className="w-full  flex-shrink-0" key={img} ref={refs[i]}>
                                            <img src={img.url} className="w-full object-contain" />
                                            <p className="text-black">{img.title}</p>
                                        </div>
                                    ))}
                                    {sliderControl()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
            </div>
        </>
    );
}
