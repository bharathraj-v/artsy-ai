import React from "react";

const Navbar = ({explore, setExplore}) => {
    return (
        <div className="h-20 px-32 w-screen bg-opacity-100 border-2 bg-white">
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center">
                    <div className="px-8 text-4xl text-[#2A2A2A] font-noto-serif-display">artsy.ai</div>
                </div>
                <div className="flex flex-row">
                <button className="flex  mr-10 text-base font-semibold  justify-center rounded-md bg-[#636363] w-32 h-12 items-center hover:bg-[#3f3f3f]  font-Inter text-white"
                    onClick={() => setExplore(!explore)}
                    >{explore ? "Create" : "Explore"}</button>
                <div className="h-12 w-12 rounded-full bg-gray-400 mr-8">
                    </div>

                </div>
                
            </div> 

        </div>
    )
}


export default Navbar;