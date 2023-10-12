const ExplorePane = ({source}) => {
    return (
             <div className="flex w-128 h-128  ">
                <img  src = {source} className="w-128 rounded-xl hover:border-2 hover:shadow-2xl object-fill h-128"/>
                {/* <div className="absolute h-128 hover:cursor-pointer opacity-0 hover:opacity-90">
                <div className="flex mt-120  h-10 text-white rounded-b-xl w-128  bg-black items-center justify-center text-xl font-bold">
                    Buy now
                    </div>
                </div> */}
                
        </div>
        
       
    )
}

export default ExplorePane