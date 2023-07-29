import React from "react";
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiFillCloseCircle ,AiFillDownCircle} from 'react-icons/ai';

const Map = ({ firs }) => {
  const [firsData, setFirsData] = useState(firs);
  const [selectedValue, setSelectedValue] = useState("mapbox://styles/mapbox/streets-v12")
  const [options, setOptions] = useState(true)


  // sytlevalues = { 
  //   "Streets": "mapbox://styles/mapbox/streets-v12",
  //   "Outdoors": "mapbox://styles/mapbox/outdoors-v12",
  //   "Light": "mapbox://styles/mapbox/light-v11",
  //   "Dark": "mapbox://styles/mapbox/dark-v11",
  //   "Satellite": "mapbox://styles/mapbox/satellite-v9",
  //   "Satellite Streets": "mapbox://styles/mapbox/satellite-streets-v12",
  //   "Navigation Day": "mapbox://styles/mapbox/navigation-day-v1",
  //   "Navigation Night": "mapbox://styles/mapbox/navigation-night-v1",
  //  };

  useEffect(() => {
    setFirsData(firs);
  }, [firs]);

  // console.log(firs, "firs naye wale");

  const router = useRouter();
  const [reloadkey, setReloadkey] = useState(1);

 
  const handleRadioChange = (event) => {
    // console.log("handlechange is running");
    const month = event.target.value;
    setReloadkey(Math.random());
    // console.log(month);
    // const query = month === 'normal' ? {} : { month };
    router.push(`/map/${month}`);
  };
  // useEffect(() => {
  //   setFirs(firs)
  // }, [reloadkey])
  const toggle=()=>{
    // console.log(options)
    if (options==true){
      setOptions(false)
    }
    else if (options==false){
      setOptions(true)
    }
  }

  useEffect(() => {
    // console.log("i am running");
    // console.log(firs, "firs pehle wale");

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: selectedValue,
      center: [81.298854, 21.189892],
      zoom: 10,
    });
    // {console.log(firs,"here")}

    firs?.data.map((item) => {
      // console.log(item, "acha");
      const popup = new mapboxgl.Popup()
        .setLngLat([-96, 37.8])
        // .setText("bro")
        .setHTML(
          `<h1 class="text-red-500 font-semibold">${
            item?.attributes.complaintDetails.type.toUpperCase()
          }</h1>\n
          
          \n<p class="text-blue-600 cursor-pointer"><Link><a target={"_blank"} href=${process.env.NEXT_PUBLIC_FHOST+`/crimeinfo/${item?.attributes.firno}`}>More info...</a></Link></p>`
        )
        // <p>I am second line</p>

        .addTo(map);

      // Set marker options.
      new mapboxgl.Marker({
        // color: "#1e1e1e",
        color: item.attributes.location.color
          ? item.attributes.location.color
          : "#1e1e1e",
        scale: 0.5,
        // draggable: true,
      })
        .setLngLat(item.attributes.location.loglat)
        .setPopup(popup)
        .addTo(map);
    });
  }, [firsData, reloadkey]);
  // console.log(selectedValue,"selectedvalue")

  return (
    <div>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

        <h1 className="md:hidden text-center mt-4 font-bold">Select Month</h1>
      {options && <div className="  transition-transform md:flex md:flex-row flex-wrap justify-center grid grid-cols-3 mx-8 md:justify-evenly my-4 bg-transparent">
        <label className="bg-white">
          <input
            type="radio"
            defaultChecked={true}
            name="month"
            value="0"
            onChange={handleRadioChange}
          />
          All
        </label>
        {[...Array(12)].map((_, index) => {
          const month = index + 1;
          const label = new Date(2023, index, 1).toLocaleString("default", {
            month: "long",
          });
          return (
            <label key={month} className="bg-white">
              <input
                type="radio"
                name="month"
                value={month}
                onChange={handleRadioChange}
              />
              {label}
            </label>
          );
        })}
      </div>}
      <button onClick={toggle}
          className="flex mx-auto  text-orange-400 text-3xl  focus:outline-none hover:bg-orange-500 rounded-full  md:hidden"
          type="submit"
        >
          {options?<AiFillCloseCircle/>:<AiFillDownCircle/>}
        </button>

        <div className="md:absolute md:top-32 md:left-10 z-20 my-4 flex justify-center md:justify-start md:m-4 ">
      
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 0 0-1.414-1.414L10 9.586 6.707 6.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4z"/></svg>
      </div>
    </div>
      <div
        id="map"
        className="min-h-screen"
        key={reloadkey}
        // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
      />
    </div>
  );
};

export default Map;

export async function getServerSideProps(context) {
  const month = context.query.map;
  const convert2digit = () => {
    if (parseInt(month) == 0) {
      return "";
    } else if (parseInt(month) < 10) {
      return `-0${month}-`;
    }else{
      return month
    }
  };
  // console.log(
  //   convert2digit(),
  //   "aplha",
  //   `${convert2digit() == "00" ? `` : `${convert2digit()}`}`
  // );

  let a = await fetch(
    `${process.env.NEXT_PUBLIC_BHOST}/api/firs?filters[date][$contains]=${convert2digit()}`,
    {
      // headers: headers,
      method: "GET",
    }
  );
  let firs = await a.json();

  return {
    props: { firs }, // will be passed to the page component as props
  };
}



