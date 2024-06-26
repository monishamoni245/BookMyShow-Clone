import React from "react";
import Poster from '../components/Poster/poster.component';
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";
const Plays = () => {
   return (
      <>
         <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
               <div className="lg:w-8/12">
                  <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
                  <div className="flex flex-wrap">
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                           src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00392065-vukhhyavvq-portrait.jpg"
                           title="Tvk Cultural presents Ponniyin Selvan"
                           subtitle="Tamil ₹300"
                        />
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/4 ">
                  <h2 className="text-2xl font-bold mb-4">Filters</h2>
                  <div>
                     <PlaysFilter title="Date" tags={["Today", "Tommorow", "Weekend"]} />
                     <PlaysFilter title="Language" tags={["Tamil", "English", "Hindi", "Telugu", "Kannada", "Malayalam", "Bengali", "Marati", "Urdu"]} />
                     <PlaysFilter title="categories" tags={["Theatre", "Story Telling", "Puppetry"]} />
                     <PlaysFilter title="Genres" tags={["Drama", "comedy", "Adventure","Historical", "Romance", "Crime","Thriller", "Action", "Biography", "Mystery"]} />
                     <PlaysFilter title="More Filters" tags={["Outdoor Events", "Fast Filling"]} />
                     <PlaysFilter title="price" tags={["Free", "0-500", "500-100", "Above-2000"]} />

                  </div>
               </div>
            </div>
         </div>
      </>
   )
};
export default Plays;