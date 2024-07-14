import React from 'react'
import { useEffect, useState } from "react";
import Head from "next/head";
import mapboxgl from "mapbox-gl";

const Track = ({firs}) => {
  const [selectedValue, setSelectedValue] = useState(
    // "mapbox://styles/mapbox/light-v11"
    "mapbox://styles/mapbox/streets-v12"
  );
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: selectedValue,
      center: [81.298854, 21.189892],
      zoom: 10,
    });

    firs?.data.forEach((item) => {
      const popup = new mapboxgl.Popup()
        .setLngLat([-96, 37.8])
        .setHTML(
          `<h1 className="text-red-500 font-semibold">${item?.attributes.complaintDetails.type.toUpperCase()}</h1>\n
          
          \n<p className="text-blue-600 cursor-pointer"><Link><a target={"_blank"} href=${process.env.NEXT_PUBLIC_FHOST+`/crimeinfo/${item?.attributes.firno}`}>More info...</a></Link></p>`
        );

      new mapboxgl.Marker({
        color: item.attributes.location.color
          ? item.attributes.location.color
          : "#1e1e1e",
        scale: 0.5,
      })
        .setLngLat(item.attributes.location.loglat)
        .setPopup(popup)
        .addTo(map);
    });
  }, [firs, selectedValue]);

  return (
    <>
    <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
    <div id='map' className='min-h-screen'>Track</div>
    </>
  )
}

export default Track

export async function getServerSideProps(context) {
  const Currentdate = new Date().getMonth() + 1;
  const month = Currentdate;
  const convert2digit = () => {
    if (parseInt(month) == 0) {
      return "";
    } else if (parseInt(month) < 10) {
      return `-0${month}-`;
    }
  };

  const a = await fetch(
    `${process.env.NEXT_PUBLIC_BHOST}/api/firs?filters[date][$contains]=${convert2digit()}`,
    {
      // headers: headers,
      method: "GET",
    }
  );
  const firs = await a.json();

  return {
    props: { firs }, // will be passed to the page component as props
  };
}
