import React from "react";
import { BiChevronRight, BiSearch, BiSolidChevronDown, BiMenu, BiChevronLeft, BiShareAlt   } from "react-icons/bi";
const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold flex items-center"> <BiChevronLeft /> Other </h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    )
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex item-center w-1/2 gap-3">
                    <div className="w-18 h-18">
                        <img
                            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                            alt="logo"
                            className="w-full h-full" />
                    </div >
                    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
                        <BiSearch />
                        <input type="search" className="w-full focus:outline-none" placeholder=" Search for movies, events, plays, sports and activities" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                        Monisha <BiSolidChevronDown />
                    </span>
                    <button className="bg-red-600 text text-white text-sm rounded px-2 py-1">Sign In</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
};
const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg  lg:relative bg-NavCol-800 px-4 py-2">
                <div className="md:hidden">
                    {/* Mobile */}
                    <NavSm />
                </div>
                <div className="hidden lg:hidden md:block">
                    {/* Tablet Screen */}
                    <NavSm />
                </div>
                <div className="hidden lg:flex">
                    {/* Desktop Screen */}
                    <NavLg />
                </div>
            </nav>
        </>
    )
}; 
export default MovieNavbar;
