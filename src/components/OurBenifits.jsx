import React, { useState } from "react";
import { Custumized } from "./common/Icon";
import labMan from "../assets/images/maninlab.webp";
import { tabAboutData, tabData } from "./common/helper";
const OurBenifits = () => {
  const [Tabs, setTabs] = useState("tab1");
  function changetab(tab) {
    setTabs(tab);
  }
  return (
    <section className=" mt-md-5 pt-md-5 pt-4 mb-5 pb-md-66">
      <div className=" container mt-18">
        <div className="text-center">
          <h2 className=" mb-0 heading-style  d-inline-block font-opensans fw-semibold fs-sm lh_sm col-light-green">
            OUR BENEFITS
          </h2>
        </div>
        <h2 className=" mt-6 mb-0 font-roboto fw-bold fs-lg lh_xl col-black text-center ">
          Evexia Benefits: Tailored
          <span className=" col-light-green"> Wellness Unlocked</span>
        </h2>
        <div className="row mt-md-5 pt-12">
          <div className="col-md-6">
            <div className=" d-flex  scroll-mandatory-x max-md-overflow_x_scroll scrollbartabs pb-1 pb-md-0 flex-nowrap gap-3  d-md-block">
              {tabData.map((obj, index) => (
                <div
                  key={index}
                  onClick={() => changetab(obj.tab)}
                  className={`mt-sm-4 mt-2 ${obj.mt0} ${
                    Tabs === `${obj.tab}` && "active"
                  } d-flex tab-box align-items-center flex-column snap-align-start flex-md-row  min-w-280-max-md   text-center  gap-20 `}
                >
                  <span>{obj.svg}</span>
                  <h3 className=" transition-300 mb-0  col-black font-roboto fw-semibold fs-md lh_lg">
                    {obj.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            {tabAboutData.map((obj, index) => (
              <div
                key={index}
                className={`${
                  Tabs === `${obj.tab}` ? "d-block" : "d-none"
                }  box-tabs-light-green h-100 `}
              >
                <img
                  src={labMan}
                  alt="labMan"
                  className=" w-100 h-md-275 object-fit-cover rounded-12 border-image-labs"
                />
                <h4 className=" mb-0 font-roboto mt-sm-20 mt-10 fs-sm lh_sm col-black fw-semibold d-inline-block">
                  {obj.heading}
                </h4>
                <p className=" font-opensans mt-10 fw-normal fs-sm lh_md col-dark-gray mb-0 pr-14">
                  {obj.discription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenifits;
