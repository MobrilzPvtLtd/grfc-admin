/* eslint-disable react/prop-types */

import { HiUsers } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function AccordingToOrder(props) {
    const { icon } = props;

  let IconComponent;

  if (icon === "HiUsers") {
    IconComponent = HiUsers;
  } else if (icon === "AiOutlineShoppingCart") {
    IconComponent = AiOutlineShoppingCart;
  }
  return (
    <div>
        <div className="flex flex-col justify-center bg-white p-10 w-80 h-40 rounded-2xl text-black">
            <div className="w-60 flex justify-evenly mb-5">
                <div className="name">
                    <h5 className="text-xl">{props.name}</h5>
                </div>
                <div className="icon bg-green-100 rounded-md p-2">
                {IconComponent && <IconComponent className='text-green-500 w-8 h-6'/>}
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="">

                <h6 className="text-xl">{props.amount}</h6>
                </div>
                <div className="text-xl">
                    <h6>({props.percentage}% )</h6>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AccordingToOrder
