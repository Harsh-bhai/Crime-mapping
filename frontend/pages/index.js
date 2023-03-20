import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {

  const color = '#FF0000';
  return (
   <div className='text-4xl min-h-screen flex justify-center my-10'>
    Crime Mapping
    {/* <Map coordinates={coordinates} color={color} /> */}
   </div>
  )
}
