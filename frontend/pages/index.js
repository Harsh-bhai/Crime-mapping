import { useEffect, useState } from "react";
import Head from "next/head";
import mapboxgl from "mapbox-gl";
import { useRouter } from "next/router";

export default function Home({ firs }) {
  const router = useRouter();
  const [reloadkey, setReloadkey] = useState(1);
  const [firsData, setFirsData] = useState(firs);

  const [selectedValue, setSelectedValue] = useState(
    // "mapbox://styles/mapbox/light-v11"
    "mapbox://styles/mapbox/streets-v12"
  );
  const [countObject, setcountObject] = useState({});

  function countComplaintTypes(array) {
    const countObject = {};

    array.forEach((obj) => {
      const type = obj.attributes.complaintDetails.type;

      if (type in countObject) {
        countObject[type[0]]++;
      } else {
        countObject[type] = [1, obj.attributes.location.color, type];
      }
    });

    return countObject;
  }  

  useEffect(() => {
    if(!localStorage.getItem("token")){
      router.push("/login")
    }
    setFirsData(firs);
  }, [firs]);

  useEffect(() => {

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: selectedValue,
      center: [81.298854, 21.189892],
      zoom: 9,
    });

    firs?.data.map((item) => {
      // console.log(item, "acha");
      const popup = new mapboxgl.Popup()
        .setLngLat([-96, 37.8])
        // .setText("bro")
        .setHTML(
          `<h1 class="text-red-500 font-semibold">${item?.attributes.complaintDetails.type.toUpperCase()}</h1>\n
          
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

  useEffect(() => {
    setcountObject(countComplaintTypes(firs?.data));
  }, [firs, firsData]);

  const color = "#FF0000";
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
     <h1 className="text-center font-semibold text-3xl md:absolute z-40 top-20 left-[36rem] bg-white px-5 py-3 border-black border rounded-lg shadow-lg">Crimes in Current Month</h1>
      <div className="absolute z-40 top-52 rounded-lg mx-10 left-0  shadow-lg border-2 border-black flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg hidden md:block">
          <h1 className=" font-extrabold text-center">Top Crimes</h1>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Crime Color</th>
                <th className="px-4 py-2">Crime Name</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(countObject).map((item) => {
                // console.log(item, "item");
                return (
                  <tr key={item[0]}>
                    <td className="px-4 py-2 text-center">
                      <button
                        className={`border-2 mt-2 border-gray-300  bg-[${item[1]}] rounded-full w-6 h-6  cursor-default button`}
                      ></button>
                    </td>
                    <td className="px-4 py-2 text-center">{item[2]}</td>
                  </tr>
                );
              })

              }
            </tbody>
          </table>
        </div>
      </div>
      <div
        id="map"
        className="min-h-screen"
        // key={reloadkey}
        // style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const Currentdate = new Date().getMonth() + 1;
  const month = Currentdate;
  const convert2digit = () => {
    if (parseInt(month) == 0) {
      return "";
    } else if (parseInt(month) < 10) {
      return `-0${month}-`;
    }else  {
      return `-${month}-`;
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
