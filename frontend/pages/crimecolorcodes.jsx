import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Colorimporter from "@/components/colorimporter";
const Crimecolorcodes = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);
  const crimes = [
    { color: "Black", code: "#003201", crime: "Robbery" },
    { color: "Cyan", code: "#03adbf", crime: "Chain Snatching" },
    { color: "Red", code: "#d22f2d", crime: "Murder" },
    { color: "Purple", code: "#8d57ad", crime: "Half Murder" },
    { color: "Yellow", code: "#fbc50b", crime: "Naxal Attack" },
    { color: "Cadet Blue", code: "#5f9f9e", crime: "Kidnapping" },
    { color: "Emerald", code: "#005a03", crime: "Burgalary" },
    { color: "Burgundy", code: "#8d173b", crime: "Cyber Crime" },
    { color: "Orange", code: "#f78e1f", crime: "Dowry Death" },
    { color: "Green", code: "#00a362", crime: "Corruption" },
    { color: "Magenta", code: "#eb2a8b", crime: "Domestic Violence" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center  sm:px-6 lg:px-8">
      <Colorimporter />     
      <h1 className="md:text-4xl text-3xl font-semibold mx-4 my-8">Crime Color Codes</h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 drop-shadow-2xl ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Color Code
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Crime
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {crimes.map((crime, index) => (
                  <tr key={index} className="hover:bg-gray-200 hover:scale-[0.96] transition-transform">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 ${crime.code == "#003201"? "bg-black" : `bg-[${crime.code}]` } rounded-full`}></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{crime.color}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{crime.code}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{crime.crime}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crimecolorcodes;

