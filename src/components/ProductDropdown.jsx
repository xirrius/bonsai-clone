import { useState } from "react";
import { ProductLinks } from "../constants";
import { WorkflowLinks } from "../constants";

const ProductDropdown = () => {
    
    const [trigger, setTrigger] = useState(false)
    
    const MouseIn = (index) => {
        if(index === 0) setTrigger(true);
    } 

    return (
      <div className="flex pt-4">
        <div className="bg-white shadow-lg w-[250px] h-[396px]">
          {ProductLinks.map((productLink, index) => (
            <div
              key={productLink.id}
              className={`${
                index === ProductLinks.length - 1 ? "" : "border-b-2"
              } p-4 py-5 hover:bg-gray-50 cursor-pointer`}
              onMouseOver={() => MouseIn(index)}
              onMouseOut={() => setTrigger(false)}
            >
              <h1 className="text-lg">{productLink.title}</h1>
              <p className="text-sm pt-2">{productLink.desc}</p>
            </div>
          ))}
        </div>
        <div
          className={`bg-white flex justify-center items-center flex-wrap h-[396px] w-[580px] shadow-lg ${
            trigger ? "" : "hidden"
          }`}
          onMouseOver={() => setTrigger(true)}
          onMouseOut={() => setTrigger(false)}
        >
          {WorkflowLinks.map((workflowLink) => (
            <div
              key={workflowLink.id}
              className="flex items-start w-[290px] h-[96px] p-3 hover:bg-gray-100 rounded-sm"
            >
              <img src={workflowLink.icon} alt="icon" />
              <div className="pl-2">
                <h1 className="text-sm">{workflowLink.name}</h1>
                <p className="text-xs">{workflowLink.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};
export default ProductDropdown;
