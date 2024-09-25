function TotalKabadInKgs() {
  return (
    <>
      <div className="p-5 bg-white rounded-2xl">
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
      </div>
    </>
  );
}

export default TotalKabadInKgs;
