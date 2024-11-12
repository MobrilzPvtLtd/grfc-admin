function TotalKabadInKgs() {
  return (
    <>
      {/* <div className="p-5 bg-white rounded-2xl">
        <h2 className="font-bold text-xl py-5">Total Store Kabad In Kgs</h2>
        <hr />
        <div className="table">
          <table className="text-center">
            <thead>
              <tr>
                <th className="px-8 text-black">Newspaper</th>
                <th className="px-8 text-black">Books</th>
                <th className="px-8 text-black">Iron</th>
                <th className="px-8 text-black">Cardboard</th>
                <th className="px-8 text-black">Plastic</th>
                <th className="px-8 text-black">Glass</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-green-500">67kg</td>
                <td className="text-green-500">30kg</td>
                <td className="text-green-500">67kg</td>
                <td className="text-green-500">90kg</td>
                <td className="text-green-500">25kg</td>
                <td className="text-green-500">40kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

        
      

      <div class="flex flex-col mt-6">
        <div
          class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Name
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Title
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Role
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-100 border-b border-gray-200"
                  ></th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="(u, index) in wideTableData" >
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        {/* <img
                          class="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="profile pic"
                        /> */}
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm font-medium leading-5 text-gray-900"
                        >
                          
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                     
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      ></span>
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                   
                  </td>

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                  >
                    <span href="#" class="text-indigo-600 hover:text-indigo-900"
                      ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default TotalKabadInKgs;
