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
            {show && <img src="shadow.png" className="animate-fade   h-screen w-screen scale-100  opacity-100" /> }
        </>
    )
}


export default ShadowFade;