import React from 'react'

const Addfir = () => {
  return (
    <div className='min-h-screen'>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-4xl text-5xl font-medium title-font mb-4 text-gray-900">Add F.I.R</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/3">
          <div className="relative">
            <label for="firno" className="leading-7 text-sm text-gray-600">Fir no</label>
            <input type="text" id="firno" name="firno" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3">
          <div className="relative">
            <label for="Date" className="leading-7 text-sm text-gray-600">Date</label>
            <input type="Date" id="Date" name="Date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3 ">
          <div className="relative">
            <label for="Time" className="leading-7 text-sm text-gray-600">Time</label>
            <input type="Time" id="Time" name="Time" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</section>
        <section className="text-gray-600 body-font relative ">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Complaint details</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto ">
        <h2 className='font-bold'>Criminal Details</h2>
      <div className="flex flex-wrap -m-2 mb-6">
        <div className="p-2 w-1/3">
          <div className="relative">
            <label for="criminalname" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="criminalname" name="criminalname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3">
          <div className="relative">
            <label for="criminalage" className="leading-7 text-sm text-gray-600">Age</label>
            <input type="text" id="criminalage" name="criminalage" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3 ">
          <div className="relative">
            <label for="criminalgender" className="leading-7 text-sm text-gray-600">Gender</label>
            <input type="text" id="criminalgender" name="criminalgender" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
    
      </div>
        <h2 className='font-bold'>Victim Details</h2>
      <div className="flex flex-wrap -m-2">
      <div className="p-2 w-1/3">
          <div className="relative">
            <label for="victimname" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="victimname" name="victimname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3">
          <div className="relative">
            <label for="victimage" className="leading-7 text-sm text-gray-600">Age</label>
            <input type="text" id="victimage" name="victimage" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3 ">
          <div className="relative">
            <label for="victimegender" className="leading-7 text-sm text-gray-600">Gender</label>
            <input type="text" id="victimegender" name="victimegender" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</section>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Location Details</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="loglat" className="leading-7 text-sm text-gray-600">Longitude , Latitude</label>
            <input type="text" id="loglat" name="loglat" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        <div className="p-2 w-1/2 ">
          <div className="relative">
            <label for="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Addfir