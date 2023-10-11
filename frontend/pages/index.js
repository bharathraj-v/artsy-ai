import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import ShadowFade from '../components/ShadowFade'
import Create from '../components/Create'
import ExplorePane from '../components/ExplorePane'
import Explore from '../components/Explore'

export default function Home() {
  return (
   <div className='bg-[#EEEEEE] w-screen h-screen'>
    <div className='fixed w-screen h-screen'>
      <Explore />
      </div> 
    <div className='absolute overflow-clip -mb-16'>
        <ShadowFade />
        </div>
    <div className='relative '>
        <Navbar />
        </div>
    <div className='relative'>
      <Create />
      </div>
         
        
   </div>
  )
}
