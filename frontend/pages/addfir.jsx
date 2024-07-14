import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addfir = () => {
  const router = useRouter();

  // if not login redirect to login
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);

  const crimesColor = {
    "Chain Snatching": "#03adbf",
    Murder: "#d22f2d",
    "Half Murder": "#8d57ad",
    "Naxal Attack": "#fbc50b",
    Kidnapping: "#5f9f9e",
    Burgalary: "#005a03",
    "Cyber Crime": "#8d173b",
    "Dowry Death": "#f78e1f",
    Corruption: "#00a362",
    Robbery: "#003201",
    "Domestic Violence": "#eb2a8b",
  };

  const [form, setForm] = useState({
    firno: "",
    date: "",
    time: "",
    criminalname: "",
    criminalage: "",
    criminalgender: "",
    victimname: "",
    victimage: "",
    victimgender: "",
    long: "",
    lat: "",
    pincode: "",
    address: "",
    type: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "type") {
      setForm({ ...form, type: value, color: crimesColor[value] || "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        data: {
          firno: form.firno,
          date: form.date,
          time: form.time,
          complaintDetails: {
            type: form.type,
            victim: {
              name: form.victimname,
              age: form.victimage,
              gender: form.victimgender,
            },
            criminal: {
              name: form.criminalname,
              age: form.criminalage,
              gender: form.criminalgender,
            },
          },
          location: {
            loglat: [form.long, form.lat],
            address: form.address,
            color: form.color,
            pincode: form.pincode,
          },
        },
      };
      let a = await fetch(`${process.env.NEXT_PUBLIC_BHOST}/api/firs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("FIR added Successfully", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
    setForm({
      firno: "",
      date: "",
      time: "",
      criminalname: "",
      criminalage: "",
      criminalgender: "",
      victimname: "",
      victimage: "",
      victimgender: "",
      long: "",
      lat: "",
      pincode: "",
      address: "",
      type: "",
      color: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen mb-10">
      <section className="text-gray-600 body-font relative">
        <ToastContainer
          position="top-right"
          autoClose={1200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container px-5 pt-10 pb-5 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-3xl text-5xl font-semibold title-font mb-4 text-gray-900">
              Add F.I.R
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    htmlFor="firno"
                    className="leading-7 text-sm text-gray-600"
                  >
                    FIR no
                  </label>
                  <input
                    onChange={handleChange}
                    placeholder="1"
                    value={form.firno}
                    type="text"
                    id="firno"
                    name="firno"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    htmlFor="date"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Date
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.date}
                    type="Date"
                    id="date"
                    name="date"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3 ">
                <div className="relative">
                  <label
                    htmlFor="time"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Time
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.time}
                    type="Time"
                    id="time"
                    name="time"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
              Complaint Details
            </h1>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <div className="flex flex-wrap -m-2 mb-6">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="type"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Crime type
                  </label>
                  <select
                    onChange={handleChange}
                    value={form.type}
                    id="type"
                    name="type"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="">Select Crime Type</option>
                    {Object.keys(crimesColor).map((crime) => (
                      <option key={crime} value={crime}>
                        {crime}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="p-2 w-1/2 ">
                <div className="relative">
                  <label
                    htmlFor="color"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Color Code
                  </label>
                  <input
                    readOnly
                    value={form.color}
                    type="text"
                    id="color"
                    name="color"
                    className={`w-full bg-[${form.color}] bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  />
                </div>
              </div>
            </div>
            <h2 className="font-bold">Criminal Details</h2>
            <div className="flex flex-wrap -m-2 mb-6">
              <div className="p-2 w-1/3 ">
                <div className="relative">
                  <label
                    htmlFor="criminalname"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Criminal Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.criminalname}
                    type="text"
                    id="criminalname"
                    name="criminalname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3 ">
                <div className="relative">
                  <label
                    htmlFor="criminalage"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.criminalage}
                    type="text"
                    id="criminalage"
                    name="criminalage"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3 ">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Gender
                  </label>
                  <div className="flex space-x-4 md:space-x-12">
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id="male"
                        name="criminalgender"
                        value="M"
                        checked={form.criminalgender === "M"}
                        onChange={handleChange}
                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      />
                      <label htmlFor="male" className="ml-2 text-gray-700">
                        M
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id="female"
                        name="criminalgender"
                        value="F"
                        checked={form.criminalgender === "F"}
                        onChange={handleChange}
                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      />
                      <label htmlFor="female" className="ml-2 text-gray-700">
                        F
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="font-bold">Victim Details</h2>
            <div className="flex flex-wrap -m-2 mb-6">
              <div className="p-2 w-1/3 ">
                <div className="relative">
                  <label
                    htmlFor="victimname"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Victim Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.victimname}
                    type="text"
                    id="victimname"
                    name="victimname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3 ">
                <div className="relative">
                  <label
                    htmlFor="victimage"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.victimage}
                    type="text"
                    id="victimage"
                    name="victimage"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3 ">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Gender
                  </label>
                  <div className="flex space-x-4 md:space-x-12">
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id="vmale"
                        name="victimgender"
                        value="M"
                        checked={form.victimgender === "M"}
                        onChange={handleChange}
                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      />
                      <label htmlFor="vmale" className="ml-2 text-gray-700">
                        M
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id="vfemale"
                        name="victimgender"
                        value="F"
                        checked={form.victimgender === "F"}
                        onChange={handleChange}
                        className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      />
                      <label htmlFor="vfemale" className="ml-2 text-gray-700">
                        F
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="font-bold">Location Details</h2>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    htmlFor="long"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Longitude
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.long}
                    type="text"
                    step="any"
                    id="long"
                    name="long"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    htmlFor="lat"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Latitude
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.lat}
                    type="text"
                    step="any"
                    id="lat"
                    name="lat"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    htmlFor="pincode"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Pincode
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.pincode}
                    type="text"
                    id="pincode"
                    name="pincode"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={form.address}
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full space-y-6">
                <a
                  target={"_blank"}
                  className="flex justify-center my-10 text-orange-500 hover:text-orange-800"
                  href="http://bboxfinder.com/#0.000000,0.000000,0.000000,0.000000"
                >
                  You can find Longitude and Latitude using this link
                </a>
                <button
                  className="flex mx-auto text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded-full text-lg"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Addfir;
