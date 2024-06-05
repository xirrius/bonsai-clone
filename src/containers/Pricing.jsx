import { useState } from "react";
import { twomonthsfree, tickmark } from "../assets";
import { PricingPlan, AddonData } from "../constants";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sm:pt-36 pt-20 relative overflow-hidden">
      <div className="absolute bg-mainBlue w-[1080px] h-[990px] -top-96 z-[-1] right-0 -rotate-[30deg] shadow-sm"></div>
      <div className="flex items-center gap-20 justify-center ss:flex-row flex-col">
        <h1 className="font-serif text-4xl ss:text-2xl sm:text-4xl text-tertiary ">
          Plans & Pricing
        </h1>
        <div className="flex justify-center items-center relative gap-4 sm:gap-7">
          <h1
            className={`tracking-widest ${
              toggle ? "text-secondary" : "text-primary"
            }`}
          >
            MONTHLY
          </h1>
          <label className="switch">
            <input type="checkbox" onClick={() => setToggle(!toggle)} />
            <span className="slider round"></span>
          </label>
          <h1
            className={`tracking-widest ${
              toggle ? "text-primary" : "text-secondary"
            }`}
          >
            YEARLY
          </h1>
          <img
            src={twomonthsfree}
            alt=""
            className="absolute -right-6 -top-9"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col px-12 sm:px-16 lg:px-40 gap-4 py-8">
        {PricingPlan.map((plan) => (
          <div
            key={plan.id}
            className="flex-1 bg-dimBlue shadow-lg rounded px-8 py-8 text-tertiary flex flex-col justify-between relative overflow-hidden"
          >
            <div
              className={`absolute bg-highlight text-white text-xs font-semibold py-2 px-20 rotate-[45deg] -right-20 ${
                plan.name === "Professional" ? "" : "hidden"
              }`}
            >
              MOST POPULAR
            </div>
            <div className="">
              <h1 className="text-2xl pb-1 font-semibold">{plan.name}</h1>
              <p className="text-xs pb-4">{plan.desc}</p>
              <div className="relative border-b-2 border-highlight mb-4 pb-1">
                <span className="absolute text-2xl">$</span>
                <span className="text-6xl px-4 font-semibold">
                  {toggle ? plan.amt.yearly : plan.amt.monthly}
                </span>
                <span className="tracking-wider font-semibold">/MONTH</span>
                <p className={`text-sm text-right ${toggle ? "" : "hidden"}`}>
                  Billed yearly
                </p>
              </div>
              <div className="">
                {plan.points.map((point) => (
                  <div className="flex gap-2 py-1" key={point.id}>
                    <img src={tickmark} alt="" />
                    <p className="text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-white bg-highlight text-xs font-semibold py-4 rounded w-full mt-7 md:mb-7 hover:bg-secondaryhighlight">
              START FREE
            </button>
          </div>
        ))}
      </div>
      <div className="mt-16 mb-16">
        <h1 className="font-serif text-xl ss:text-2xl sm:text-4xl text-tertiary text-center pb-4">
          Super charge your work with add-ons
        </h1>
        <div
          className={`flex ${
            toggle ? "flex-col" : "flex-col-reverse"
          } w-full px-12 sm:px-16 lg:px-40 my-6 gap-3`}
        >
          {AddonData.map((item, ind) => (
            <div
              key={item.id}
              className="flex justify-between ss:items-center ss:flex-row flex-col-reverse shadow-lg bg-white rounded px-8 py-10 gap-3 text-tertiary"
            >
              <div>
                <h1 className="text-xl pb-1 font-semibold ">
                  {ind === 0
                    ? toggle
                      ? item.name.yearly
                      : item.name.monthly
                    : item.name}
                </h1>
                <p className="text-sm">{item.desc}</p>
                {ind === 0 && (
                  <p className="text-xs mt-4 text-highlight font-semibold cursor-pointer">
                    LEARN MORE &gt;
                  </p>
                )}
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold">
                  {ind === AddonData.length - 1 ? "" : "$"}
                  {toggle ? item.amt.yearly : item.amt.monthly}
                </p>
                <p className="text-xs">
                  {ind === AddonData.length - 1
                    ? ""
                    : "/" + (toggle ? "YEARLY" : "MONTHLY")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pricing;
