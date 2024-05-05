import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";
import Cast from "../config/Cast.config";
import CastSlider from "../components/castSlider.component";
import Crew from "../config/Crew.config";
import settings from "../config/PosterCarousal.config";



const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="my-12 container  px-4 lg:w-1/2 lg:ml-64">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-2xl text-gray-800 font-bold " >About the Movie</h2>
                    <p>After his sister`s suspicious death, a man decides to discover the truth leading to chaos and terror.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-2xl text-gray-800 font-bold my-2 ">Applicable offers</h1>
                    <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96 ">
                        <div className="w-8 h-8"><BiCameraMovie className="w-full h-full" /></div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-900 text-xl">Filmy Pass</h3>
                            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="container mx-auto px-4 py-5 sm:px-10 rounded-ful">
                    <div className="top-5 mx-auto  p-3">
                    <h1 className="text-black font-bold top-5 text-3xl ">Cast</h1>
                    </div>
                    <CastSlider {...settings}
                        images={Cast}
                        title="Cast"
                        className="sm:text-center rounded-full"
                        isDark={false}
                    />
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="container mx-auto px-4 py-5 sm:px-10 rounded-ful">
                <div className="top-5 mx-auto  p-3">
                    <h1 className="text-black font-bold top-5 text-3xl ">Crew</h1>
                    </div>

                    <CastSlider {...settings}
                        images={Crew}
                        title="Crew"
                        className="sm:text-center rounded-full"
                        isDark={false}
                    />
                </div>

            </div>
        </>
    );
}

export default Movie;