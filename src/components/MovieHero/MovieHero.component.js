import React from "react";
import { BiSolidStar, BiShareAlt, BiChevronRight } from "react-icons/bi";


const launchRazorPay = () => {
    const options = {
      key: "Your_API_KEY",
      amount: 500*100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie Purchase on Rental",
      image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        alert("Payment Done")
      },
      theme: {color: "#c4242d"}
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };


const MovieHero = () => {
    return (
        <>
            <div className="md:hidden">
                <img
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/aranmanai-4-et00393228-1712130155.jpg"
                    alt="Poster"
                />
            </div>

            <div className="hidden md:block lg:hidden">
                <img
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/aranmanai-4-et00393228-1712130155.jpg"
                    alt="Poster"
                />
            </div>

            <div className="relative hidden lg:block" style={{ height: "40rem" }}>
                <div className="absolute h-full w-full z-10" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }} />
                <h1 className="gap-4 p-2 absolute top-10 right-10 border-box h-10 w-20 bg-gray-500 bg-opacity-50 text-sm flex items-center space-between text-black" >
                    <BiShareAlt className="text-black text-xl items-center" />Share</h1>
                <div className="absolute z-30 w-64 h-126 left-36 top-20  ">
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aranmanai-4-et00393228-1712130155.jpg"
                        alt="Poster"
                        className="h-full w-full rounded-xl "
                    />
                </div>
                <img
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/aranmanai-4-et00393228-1712130155.jpg"
                    alt="Poster"
                    className="w-full h-full "
                />
            </div>

            <div className="lg:absolute z-30 top-36 mx-4 left-1/2 transform -translate-x-1/2 text-center w-full max-w-lg flex flex-col items-center"> {/* Centering horizontally and top aligned */}
                <div className="container mx-auto px-2 ">
                    <h1 className="text-white text-3xl text-left font-bold">Shang-Chi and the Legend of the Ten Rings</h1>
                    <div className="mx-auto flex">
                    <h4 className="gap-1 text-white text-justify p-6 text-xl box-border h-30 w-90 p-1 border-transparent rounded-md bg-navCol-900 my-5 flex items-center">
                        <BiSolidStar className=" text-navCol-400 text-3xl" />9/10 (72.4K Votes) <BiChevronRight className="items-center gap-2 flex" />
                        <button className="ml-20 bg-white text-black text-sm w-30 h-15 p-3 rounded-lg right-10 items-end">Rate Now</button>
                    </h4>

                    </div>
                    <button className="text-black bg-gray-300 items-start p-1 rounded flex my-3 hover:underline">2D, 3D, 4DX 3D, MX4D, IMAX 3D, 4DX, IMAX 2D</button>
                    <button className="text-black bg-gray-300 items-start p-1 rounded flex hover:underline">English, Tamil, Malayalam, Hindi, Telugu, Kannada</button>
                    <p className="text-xl text-white text-start my-2">2h 12m • Action, Adventure, Fantasy • UA • 3 Sep, 2024</p>
                    
                    
                    <div className="items-center flex right-1 ">
                        <button onClick={launchRazorPay} className="  my-5 bg-pink-500 text-white text-sm w-40 h-10 rounded-lg right-10 items-center ">Book Tickets</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieHero;
