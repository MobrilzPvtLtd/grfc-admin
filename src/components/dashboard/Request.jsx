import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';

const requestdata = [
  {
    icon: AiOutlineCalendar,
    label: "Todays Request",
    number: "10"
  },
  {
    icon: AiOutlineClockCircle,
    label: "Per Month Request",
    number: "10"
  },
  {
    icon: ImCalendar,
    label: "Per Year Request",
    number: "10"
  }
];

export function Request() {
  return (
    <>
      <div className="bg-white text-center py-8 md:text-sm xl:text-base mx-6 p-5 flex justify-around rounded-2xl">
        {requestdata.map((request, index) => {
          const IconComponent = request.icon; // Extract the icon component from the request object

          return (
            <div key={index} className="px-10 py-10">
              {IconComponent && <IconComponent size={60} className='bg-green-100 mb-5 inline-block text-center p-3  rounded-3xl text-green-600' />} {/* Render the icon component */}
              <h4 className="text-xl my-10 text-black xl:text-sm ">{request.label}</h4>
              <h2 className="texl-2xl text-black">{request.number}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
