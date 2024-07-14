// MainMap.js
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useRouter } from "next/router";
import Head from "next/head";

export default function MainMap({ firs }) {
  const router = useRouter();
  const [reloadkey, setReloadkey] = useState(1);
  const [firsData, setFirsData] = useState(firs);
  const [countObject, setCountObject] = useState({});
  const [selectedValue, setSelectedValue] = useState("mapbox://styles/mapbox/streets-v12");
  const [map, setMap] = useState(null); // State to hold map instance

  const date = new Date();
  const currentMonth = date.toLocaleString('default', { month: 'long' });

  function countComplaintTypes(array) {
    const countObject = {};

    array.forEach((obj) => {
      const type = obj.attributes.complaintDetails.type;

      if (type in countObject) {
        countObject[type][0]++;
      } else {
        countObject[type] = [1, obj.attributes.location.color, type];
      }
    });

    return countObject;
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
    setFirsData(firs);
  }, [firs]);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const mapInstance = new mapboxgl.Map({
      container: "map",
      style: selectedValue,
      center: [81.298854, 21.189892],
      zoom: 6,
    });
    setMap(mapInstance); // Set the map instance to state

    // Cleanup on unmount
    return () => mapInstance.remove();
  }, [selectedValue]);

  useEffect(() => {
    if (!map) return; // Ensure map is initialized

    firs?.data.forEach((item) => {
      const popup = new mapboxgl.Popup({
        closeButton: false, // Hide the close button
        closeOnClick: true,
        anchor: "bottom",
      }).setHTML(
        `<a target="_blank" href="${process.env.NEXT_PUBLIC_FHOST}/crimeinfo/${item?.attributes.firno}" class="font-semibold">
          <div class="p-4 rounded-lg relative">
            <div class="absolute inset-0 bg-opacity-30 bg-[${item.attributes.location.color}] rounded-lg"></div>
            <h1 class="text-black font-semibold text-lg mb-2">${item?.attributes.complaintDetails.type.toUpperCase()}</h1>
          </div>
        </a>`
      );

      // Create a marker for each item and add popup
      const marker = new mapboxgl.Marker({
        color: item.attributes.location.color ? item.attributes.location.color : "#1e1e1e",
        scale: 0.5,
      })
        .setLngLat(item.attributes.location.loglat)
        .setPopup(popup)
        .addTo(map);
    });
  }, [firsData, reloadkey, map]);

  useEffect(() => {
    setCountObject(countComplaintTypes(firs?.data));
  }, [firs, firsData]);

  return (
    <>
      <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <h1 className="text-center font-semibold text-3xl md:absolute z-40 top-20 left-[36rem] bg-white px-5 py-3 border-black border rounded-lg shadow-lg">
        Crimes in {currentMonth} Month
      </h1>
      <div className="absolute z-40 top-52 rounded-lg mx-10 left-0  shadow-lg border-2 border-black flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg hidden md:block">
          <h1 className="font-extrabold text-center">Top Crimes</h1>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Crime Color</th>
                <th className="px-4 py-2">Crime Name</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(countObject).map((item) => (
                <tr key={item[2]} onClick={() => {
                  if (map) {
                    map.flyTo({
                      center: firs?.data.find((data) => data.attributes.complaintDetails.type === item[2]).attributes.location.loglat,
                      essential: true,
                      zoom: 13
                    });
                  }
                }}>
                  <td className="px-4 py-2 text-center">
                    <button className={`border-2 mt-2 border-gray-300 bg-[${item[1]}] rounded-full w-6 h-6 cursor-default button`}></button>
                  </td>
                  <td className="px-4 py-2 text-center">{item[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div id="map" className="min-h-screen" />
    </>
  );
}
