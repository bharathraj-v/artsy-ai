import ExplorePane from "./ExplorePane"

const Explore = () => {
    return (
        <div className="flex flex-row mt-12 justify-between px-32 bg-[#EEEEEE]">
            <div className="flex flex-col space-y-16 py-16">
                <ExplorePane source="https://res.cloudinary.com/dqtt1tmgo/image/upload/v1696954572/r5rzzlxbwn2ddxoljtqn.jpg" />
                <ExplorePane source="https://media.wired.com/photos/64f8c8a43e1a7b4810e35753/1:1/w_1365,h_1365,c_limit/AI-Copyright-The%CC%81a%CC%82tre_d'Ope%CC%81ra_Spatial-Culture.jpg" />
                <ExplorePane source="" />
            </div>
            <div className="flex flex-col space-y-16 mt-32 py-16">
                <ExplorePane source="https://i.etsystatic.com/37358077/r/il/a6b777/4589524064/il_fullxfull.4589524064_4pz1.jpg"/>
                <ExplorePane source="https://i.etsystatic.com/37358077/r/il/6a4e94/4814014938/il_fullxfull.4814014938_8z7i.jpg"/>
                <ExplorePane source="https://img6.arthub.ai/64a18521-b51c.webp"/>
            </div>
            <div className="flex flex-col space-y-16 py-16">
                <ExplorePane source="https://artsquarenft.com/cdn/shop/products/Luigi_ArtSquare_1_3eee8a29-0f61-4cb8-aa79-476b17453fa3.png?v=1679742411&width=1946"/>
                <ExplorePane source="https://proaiartgallery.com/cdn/shop/products/preview_9e99dd76-d8af-4882-b362-117d2833b066.jpg?v=1671288607&width=360"/>
                <ExplorePane source=""/>
            </div>
        </div>
    )
}

export default Explore