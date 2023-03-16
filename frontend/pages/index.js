import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const coordinates = [
    { lat: 37.788022, lng: -122.399797 },
    { lat: 37.7802, lng: -122.4024 },
    { lat: 37.7765, lng: -122.3919 },
    { lat: 37.7876, lng: -122.3952 }
  ];

  const color = '#FF0000';
  return (
   <div className='text-4xl min-h-screen'>
    priyansh singh patel
    {/* <Map coordinates={coordinates} color={color} /> */}
   </div>
  )
}
