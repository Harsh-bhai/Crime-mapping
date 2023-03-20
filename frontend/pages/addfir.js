import React, { useState } from "react";

const Addfir = () => {
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
  });

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
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
          pincode: form.pincode,
        },
      },
    };
    console.log(data);
    let a = await fetch(`${process.env.NEXT_PUBLIC_BHOST}/api/firs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <form onSubmit={handlesubmit} className="min-h-screen">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
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
                    for="firno"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Fir no
                  </label>
                  <input
                    onChange={handlechange}
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
                  <label for="date" className="leading-7 text-sm text-gray-600">
                    Date
                  </label>
                  <input
                    onChange={handlechange}
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
                  <label for="time" className="leading-7 text-sm text-gray-600">
                    Time
                  </label>
                  <input
                    onChange={handlechange}
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
            <h2 className="font-bold">Criminal Details</h2>
            <div className="flex flex-wrap -m-2 mb-6">
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    for="criminalname"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    onChange={handlechange}
                    value={form.criminalname}
                    type="text"
                    id="criminalname"
                    name="criminalname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    for="criminalage"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    onChange={handlechange}
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
                  <label
                    for="criminalgender"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Gender
                  </label>
                  <input
                    onChange={handlechange}
                    value={form.criminalgender}
                    type="text"
                    id="criminalgender"
                    name="criminalgender"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <h2 className="font-bold">Victim Details</h2>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    for="victimname"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    onChange={handlechange}
                    value={form.victimname}
                    type="text"
                    id="victimname"
                    name="victimname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label
                    for="victimage"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Age
                  </label>
                  <input
                    onChange={handlechange}
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
                  <label
                    for="victimgender"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Gender
                  </label>
                  <input
                    onChange={handlechange}
                    value={form.victimgender}
                    type="text"
                    id="victimgender"
                    name="victimgender"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
              Location Details
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/4">
                <div className="relative">
                  <label for="long" className="leading-7 text-sm text-gray-600">
                    Longitude
                  </label>
                  <input
                    onChange={handlechange}
                    value={form.long}
                    type="text"
                    id="long"
                    name="long"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/4">
                <div className="relative">
                  <label for="lat" className="leading-7 text-sm text-gray-600">
                    Latitude
                  </label>
                  <input
                    onChange={handlechange}
                    value={form.lat}
                    type="text"
                    id="lat"
                    name="lat"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2 ">
                <div className="relative">
                  <label
                    for="pincode"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Pincode
                  </label>
                  <input
                    onChange={handlechange}
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
                    for="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    type="text"
                    onChange={handlechange}
                    value={form.address}
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="p-2 w-full">
        <button
          className="flex mx-auto text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded-full text-lg"
          type="submit"
        >
          Button
        </button>
      </div>
    </form>
  );
};

export default Addfir;
