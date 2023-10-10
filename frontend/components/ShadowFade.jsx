import React, { useState, useEffect } from 'react';


const ShadowFade = () => {

    // return the image for only a second

    const [show, setShow] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShow(false);
    //     }, 470);
    // }
    // , []);

    return (
        <>
            {show && <img src="shadow2.png" className="animate-fade invert blur-2xl h-screen w-screen scale-200  contrast-150  opacity-70" /> }
        </>
    )
}


export default ShadowFade;