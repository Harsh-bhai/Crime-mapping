import '@/styles/globals.css'
import Navbar from '@/components/navbar.jsx'
import Footer from '@/components/footer.jsx'
import { useState, useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {

  const [reloadNav, setReloadNav] = useState(1)
  
  const reloadnavbar = () => {
    setReloadNav(Math.random())
  }

  return <>
  <Navbar key={reloadNav}/>
  <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  <Component reloadNav={reloadnavbar} {...pageProps} />
  <Footer/>
  </>
}
