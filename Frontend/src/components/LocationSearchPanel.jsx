import React from "react";

const LocationSearchPanel = (props) => {
  // Sample array for locations
  const locations = [
    "24A, Near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
    "24B, Near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
    "24C, Near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
    "24D, Near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
  ];
  return (
    <div>
      {/*This is just a sample data*/}
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl  items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
