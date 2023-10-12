import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import ShadowFade from '../components/ShadowFade'
import Create from '../components/Create'
import ExplorePane from '../components/ExplorePane'
import Explore from '../components/Explore'
import Preview from '../components/Preview'

import { useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [explore, setExplore] = useState(0)
  const [show, setShow] = useState(0)

  const [image, setImage] = useState('')
  const [prompt, setPrompt] = useState('')

  const [generating, setGenerating] = useState(0)

  return (
   <div className='bg-[#EEEEEE] w-screen h-screen'>
    <div className='fixed overflow-scroll w-screen h-screen'>
      {show && <div className='fixed w-screen h-screen'>
      <Preview show={show} setShow={setShow} image={image} prompt={prompt} />

        </div>}
      <Explore explore={explore} generating={generating}/>
      </div>
      <div className='relative '>
        <Navbar explore={explore} setExplore={setExplore} />
        </div>
     
    {!explore && <div className='absolute overflow-clip -mb-16'>
        <ShadowFade />
        </div>} 
    
     {!explore && <div className='relative'>
      <Create explore={explore} show={show} setShow={setShow} setExplore={setExplore} prompt={prompt} setPrompt={setPrompt} image={image} setImage={setImage} generating={generating} setGenerating={setGenerating}/>
      </div>} 
        <div>
        </div>
       
        
   </div>
  )
}
