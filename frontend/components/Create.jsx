const Create = () => {
    return (
        <div className="flex  py-16 w-screen justify-center">
            <div className="flex flex-col justify-center items-center">
        <p className="font-Inter font-semibold text-2xl">
            Create your Art
        </p>
        <div className="flex justify-center mt-12 h-36 items-center align-center w-162 rounded-lg border-2 border-[#c5c5c5]">
                    <div className="backdrop-filter backdrop-blur-sm bg-[#FFFFFF] bg-opacity-10  w-[100%] h-[100%] rounded-lg drop-shadow-md">
                        <div className="w-[100%] h-[100%] px-4 py-3 text-[#000000]">
                            <label className='flex'>
                                {/* <p
                                    className="flex  antialiased accent-slate-500 text-[#636363] font-Inter bg-inherit text-md  w-[94%] focus:outline-none h-44 resize-none"
                                >{bgText}</p> */}
                                <textarea
                                    className="absolute bg-inherit antialiased accent-slate-500 text-[#000000] font-Inter  text-base  w-[94%] focus:outline-none h-36 resize-none"
                                    type="text"
                                    placeholder="Describe your desired art in a detailed manner"
                         
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-108'>
                    <button className="flex font-semibold mt-14 text-xl  justify-center rounded-md bg-[#636363] w-80 h-14 items-center hover:bg-[#3f3f3f]  font-Inter text-white"
                    >Create</button>
                </div>
            </div>
          
        </div>
    )
}

export default Create;