import { useState } from "react";
import { TemplatesLinks } from "../constants";

const TemplateDropdown = () => {

const [index, setIndex] = useState(0)
const [trigger, setTrigger] = useState(false)

    return (
      <div className="flex pt-4">
        <div
          className="w-[220px] bg-white shadow-lg py-2"
          onMouseOver={() => setTrigger(true)}
          onMouseOut={() => setTrigger(false)}
        >
          {TemplatesLinks.map((templateLink, ind) => (
            <div
              key={templateLink.id}
              className="flex items-center justify-start p-2 px-4 hover:bg-gray-200 rounded-sm"
              onMouseOver={() => setIndex(ind)}
            >
              <img src={templateLink.icon} alt="" />
              <h1 className="pl-2 text-sm">{templateLink.name}</h1>
            </div>
          ))}
        </div>
        <div
          className={`p-2 ${trigger ? "" : "hidden"} bg-white shadow-lg `}
          onMouseOver={() => setTrigger(true)}
          onMouseOut={() => setTrigger(false)}
        >
          <h1 className="font-serif pb-2">
            Featured {TemplatesLinks[index].name}
          </h1>
          {TemplatesLinks[index].links.map((link) => (
            <p
              key={link.id}
              className="text-xs bg-lime-50 my-3 py-3 rounded w-[320px] text-center transition-transform hover:scale-105 cursor-pointer"
            >
              {link.name}
            </p>
          ))}
          <p className="text-xs font-semibold text-center py-1 cursor-pointer text-highlight ">
            See All Templates
          </p>
        </div>
      </div>
    );
};
export default TemplateDropdown;
