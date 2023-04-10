import React from "react";
import { useEffect,useState } from "react";
import mapboxgl from "mapbox-gl";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";


const Map = ({ firs }) => {
  const [firsData, setFirsData] = useState(firs);
  
  useEffect(() => {
    setFirsData(firs);
  }, [firs]);
  
  console.log(firs,"firs naye wale")

  const router = useRouter();
  const [reloadkey, setReloadkey] = useState(1)
  const handleRadioChange = (event) => {
    console.log("handlechange is running")
    const month = event.target.value;
    setReloadkey(Math.random())
    console.log(month)
    // const query = month === 'normal' ? {} : { month };
    router.push(`/map/${month}`);
  };
  // useEffect(() => {
  //   setFirs(firs)
  // }, [reloadkey])
  

useEffect(() => {
  console.log('i am running')
  console.log(firs,"firs pehle wale")

 
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [81.298854, 21.189892],
    zoom: 16,
    
})


   

firs?.data.map((item)=>{
  console.log(item,"acha")
  const popup = new mapboxgl.Popup()
  .setLngLat([-96, 37.8])
  // .setText("bro")
  .setHTML(
    `<h1 class="text-red-500">${item?.attributes.complaintDetails.type}</h1>\n<p>I am second line</p>\n<p class="text-blue-600 cursor-pointer"><Link><a target={"_blank"} href=${`http://localhost:3000/crimeinfo/${item?.attributes.firno}`}>More info...</a></Link></p>`
  )

  .addTo(map);

// Set marker options.
new mapboxgl.Marker({
  color: "#1e1e1e",
  scale: 0.5,
  // draggable: true,
})
  .setLngLat(item.attributes.location.loglat)
  .setPopup(popup)
  .addTo(map);
})
  }, [firsData,reloadkey]);

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div className="flex justify-evenly my-4 bg-transparent">
  <label className="bg-white">
    <input type="radio" defaultChecked={true} name="month" value="0" onChange={handleRadioChange} />
    Normal
  </label>
  {[...Array(12)].map((_, index) => {
    const month = index + 1;
    const label = new Date(2023, index, 1).toLocaleString('default', { month: 'long' });
    return (
      <label key={month} className="bg-white">
        <input type="radio" name="month" value={month} onChange={handleRadioChange} />
        {label}
      </label>
    );
  })}
</div>

      <div
        id="map"
        className="min-h-screen"
        key={reloadkey}
        // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
      />
    </>
  );
};

export default Map;

export async function getServerSideProps(context) {
  const month=context.query.map
  const convert2digit= (  ) => {
    if(parseInt(month)==0){
      return ''
    }
    else if (parseInt(month)<10){
      return `-0${month}-`
    }
  }
  console.log(convert2digit(),"aplha",`${convert2digit()=='00'?``:`${convert2digit()}`}`)
  
  let a = await fetch(`http://localhost:1337/api/firs?filters[date][$contains]=${convert2digit()}`, {
    // headers: headers,
    method:"GET"
  });
  let firs = await a.json();

  return {
    props: { firs }, // will be passed to the page component as props
  };
}
