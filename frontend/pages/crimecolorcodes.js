import React from "react";

const Crimecolorcodes = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center  sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold my-8">Crime Color Codes</h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Black</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">#003201</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Robbery</div>
      </td>
    </tr>
    <tr>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#03adbf] rounded-full"></div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Cyan</div>
          </div>
        </div>
      </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">#03adbf</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Chain Snatching</div>
      </td>
    </tr>
    <tr>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#d22f2d] rounded-full"></div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Red</div>
          </div>
        </div>
      </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">#d22f2d</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Murder</div>
      </td>
    </tr>
    <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#8d57ad] rounded-full"></div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Purple</div>
              </div>
            </div>
          </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">#8d57ad</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900"> Half Murder</div>
          </td>
        </tr>
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#fbc50b] rounded-full"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Yellow</div>
                  </div>
                </div>
              </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">#fbc50b</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> Naxal Attack</div>
              </td>
         </tr> 
         <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#5f9f9e] rounded-full"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Cadet Blue</div>
                  </div>
                </div>
              </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">#5f9f9e</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> Kidnapping</div>
              </td>
         </tr>
         <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#005a03] rounded-full"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Emerald</div>
                  </div>
                </div>
              </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">#005a03</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> Burgalary</div>
              </td>
         </tr>
         <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#8d173b] rounded-full"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Burgundy</div>
                  </div>
                </div>
              </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">#8d173b</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> Cyber Crime</div>
              </td>
         </tr>
         <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#f78e1f] rounded-full"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Orange </div>
                  </div>
                </div>
              </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">#f78e1f</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> Dowry Death</div>
              </td>
         </tr>
         <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#00a362] rounded-full"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Green </div>
                  </div>
                </div>
              </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">#00a362</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> Corruption </div>
              </td>
         </tr>
         <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#eb2a8b] rounded-full"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Magenta </div>
                  </div>
                </div>
              </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">#eb2a8b</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> Domestic Violence </div>
              </td>
         </tr>       
  </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crimecolorcodes;
