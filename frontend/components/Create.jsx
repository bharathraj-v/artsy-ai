import React, { useState } from "react";
import axios from "axios";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const Create = ({explore, setExplore, image, setImage, prompt, setPrompt, generating, setGenerating, show, setShow}) => {

    const [emptyPrompt, setEmptyPrompt] = useState(false);

    const handlePrompt = (e) => {
        setPrompt(e.target.value);
    }
    const onCreate = async () => {
        if (prompt === "") {
            setEmptyPrompt(true)
            await delay(1000);
            setEmptyPrompt(false)
            return;
        }
        setExplore(true);
        setGenerating(true);
        try {
            const response = await axios.post("https://artsy-ai-backend.vercel.app/", {
                prompt: prompt
            });
            console.log(response);
            setImage(response.data.result);
            setPrompt(response.data.prompt);
            setGenerating(false);
            setShow(true);
        } catch (error) {
            console.log(error);
        }
    }

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
                                    value={prompt}
                                    onChange={handlePrompt}
                         
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-108'>
                    <button 
                    onClick={onCreate}
                    className="flex font-semibold mt-14 text-xl  justify-center rounded-md bg-[#636363] w-80 h-14 items-center hover:bg-[#3f3f3f]  font-Inter text-white"
                    >Create</button>
                    {emptyPrompt &&
                <p className='text-red-400 mt-2 opacity-90  justify-center text-center font-Inter py-2 rounded-md bg-opacity-50 border-opacity-50 border-2 px-2 items-center w-full'>Prompt can&apos;t be empty</p>
                }
                </div>
            </div>
          
        </div>
    )
}

export default Create;