import ExplorePane from "./ExplorePane"

const Preview = ({image, prompt, show, setShow}) => {
    return (
        <div className="w-screen h-screen flex justify-center bg-[#c2c2c2]  bg-opacity-60 items-center align-middle">        
            <div className="flex flex-col w-[30%]  p-8 rounded-xl border-2 border-gray-600 border-opacity-50 bg-white shadow-xl">
            <ExplorePane source={image}/>
            <div className="flex w-full mt-6 h-32 rounded-xl border-2 border-gray-600 border-opacity-40 p-3 bg-[#e0e0e0]">
                {prompt}
            </div>
            <div className="flex flex-row mt-4 space-x-6">
            <button 
            onClick={() => setShow(false)}
            className="flex font-medium  text-xl  justify-center rounded-md bg-[#3f3f3f] w-80 h-14 items-center hover:bg-[#3f3f3f]  font-Inter text-white"
                    >Save</button>
            <button 
            onClick={() => setShow(false)}
            className="flex font-medium  text-xl  justify-center rounded-md bg-[#636363] w-80 h-14 items-center hover:bg-[#3f3f3f]  font-Inter text-white"
                    >Delete</button>
            </div>
        
        </div>
        </div>

    )
}

export default Preview