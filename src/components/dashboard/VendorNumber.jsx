function VendorNumber() {
  return (
    <>
      <div className="mt-4 bg-white text-center py-8 md:text-sm xl:text-base mx-6 p-5 flex flex-col justify-around rounded-2xl">
        <div className="py-10">
          <h4 className="text-3xl text-black ">Total Number of Vendors : 54</h4>
        </div>
        <div className="flex flex-wrap justify-around pb-10">
            <div className="bg-gray-200 p-6 shadow-xl rounded-lg">
                <h6 className=" text-black">In Progress : 10</h6>
            </div>
            <div className="bg-gray-200 p-6 shadow-xl  rounded-lg">
                <h6 className=" text-black">Available : 10</h6>
            </div>
            <div className="bg-gray-200 p-6 shadow-xl  rounded-lg">
                <h6 className=" text-black">Completed : 10</h6>
            </div>
        </div>
      </div>
    </>
  );
}

export default VendorNumber;
