import React from "react";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Head from "next/head";

const Checkcrime = ({ firs }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [81.298854, 21.189892],
      zoom: 16,
    });

   

firs.data.map((item)=>{
  console.log(item)
  const popup = new mapboxgl.Popup()
  .setLngLat([-96, 37.8])
  // .setText("bro")
  .setHTML(
    `<h1 class="text-red-500">${item.attributes.complaintDetails.type}</h1>\n<p>I am second line</p>\n<p class="text-blue-600 cursor-pointer">More info...</p>`
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
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div
        id="map"
        className="min-h-screen"
        // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
      />
    </>
  );
};

export default Checkcrime;

export async function getServerSideProps(context) {
  // let headers = { Authorization: process.env.getproductstoken }
  let a = await fetch("http://localhost:1337/api/firs", {
    // headers: headers,
  });
  let firs = await a.json();

  return {
    props: { firs }, // will be passed to the page component as props
  };
}
