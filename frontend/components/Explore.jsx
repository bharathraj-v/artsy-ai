import ExplorePane from "./ExplorePane"
import { useState, useEffect } from "react";

const Explore = ({explore, generating}) => {
    const [countdown, setCountdown] = useState(100);
    useEffect(() => {
        {
            const interval = setInterval(() => {
                if (generating){
                if (countdown > 0) {
                    setCountdown(countdown - 1);
                } else {
                    setGenerating("Almost done...")
                    setCountdown(30);
                }
            }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [countdown, generating]);
    return (
        <div className="flex flex-row mt-12 justify-between px-32 bg-[#EEEEEE]">
            <div className="flex flex-col space-y-16 py-16">
                <ExplorePane source="https://res.cloudinary.com/dqtt1tmgo/image/upload/v1696954572/r5rzzlxbwn2ddxoljtqn.jpg" />
                <ExplorePane source="https://media.wired.com/photos/64f8c8a43e1a7b4810e35753/1:1/w_1365,h_1365,c_limit/AI-Copyright-The%CC%81a%CC%82tre_d'Ope%CC%81ra_Spatial-Culture.jpg" />
                <ExplorePane source="https://www.siliconrepublic.com/wp-content/uploads/2023/02/a-3-718x523.jpeg" />
                <ExplorePane source="https://i.pinimg.com/originals/49/2c/c1/492cc10fda586444d336cfb23876e7b3.jpg" />
                <ExplorePane source="https://media.newyorker.com/photos/63fd0a142219f46b68fa934f/master/w_1600%2Cc_limit/Gopnik-AI-Art-Seurat-Resized.jpg" />
                <ExplorePane source="https://img6.arthub.ai/637aa8e3-758.webp" />

            </div>
            <div className="flex flex-col space-y-16  py-16">
                <div className="flex justify-center -mb-6 items-center">
                    <div className="px-8 text-6xl text-[#2A2A2A] font-noto-serif-display">Gallery</div>
                </div>
                <ExplorePane source="https://i.etsystatic.com/37358077/r/il/a6b777/4589524064/il_fullxfull.4589524064_4pz1.jpg"/>
                <ExplorePane source="https://i.etsystatic.com/37358077/r/il/6a4e94/4814014938/il_fullxfull.4814014938_8z7i.jpg"/>
                <ExplorePane source="https://img6.arthub.ai/64a18521-b51c.webp"/>
                <ExplorePane source="https://f6e2k7x4.rocketcdn.me/wp-content/uploads/2022/09/JasperArt_2022-08-30_04.18.45_3.jpg" />
                <ExplorePane source="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/clcrvcnm60001la08wfpa3kc3_1/public" />
                <ExplorePane source="https://i.pinimg.com/originals/49/2c/c1/492cc10fda586444d336cfb23876e7b3.jpg" />

            </div>
            <div className="flex flex-col space-y-16 py-16">
                <ExplorePane source="https://artsquarenft.com/cdn/shop/products/Luigi_ArtSquare_1_3eee8a29-0f61-4cb8-aa79-476b17453fa3.png?v=1679742411&width=1946"/>
                <ExplorePane source="https://proaiartgallery.com/cdn/shop/products/preview_9e99dd76-d8af-4882-b362-117d2833b066.jpg?v=1671288607&width=360"/>
                <ExplorePane source="https://imgv3.fotor.com/images/cover-photo-image/AI-generated-girl-in-oil-painting-style.jpg"/>
                <ExplorePane source="https://miro.medium.com/v2/resize:fit:1358/1*pTppOj0MO_1JkexKQ63Eew.jpeg" />
                <ExplorePane source="https://mtgrocks.com/wp-content/uploads/2022/08/Mountain.jpg" />
                <ExplorePane source="https://i.redd.it/a-note-on-ai-art-v0-o278luto0nv91.png?width=1024&format=png&auto=webp&s=e5b55f84cdc7c75270975c9e17da2a8c1cf26876" />
            </div>
            {generating && <div className="flex fixed bottom-0 right-0 mb-8 mr-14 items-center text-xl justify-center  font-Inter text-white bg-[#171717] h-20 w-76 rounded-2xl shadow-2xl shadow-[#242424] border-[#242424] border-1">

               <div>
                   <p className="flex absolute w-12 h-12 mr-6 justify-center align-center items-center  font-bold text-md">{countdown}</p>

                   <svg aria-hidden="true" class="w-12 h-12 mr-6 text-gray-200 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />

                    </svg>
                </div>
               Generating...

             </div>}
        </div>
    )
}

export default Explore