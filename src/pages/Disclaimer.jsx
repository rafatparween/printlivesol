import React from 'react';

const Disclaimer = () => {
  return (
    <>
      <div className="bg-[#e5e7eb] flex flex-col justify-center items-center py-6">
        <div className="w-[95%]">
          <h1 className="text-4xl font-bold text-center text-[#3730a3] ">
            Disclaimer
          </h1>
          <div className=" p-6">
            <p className="text-gray-700 mb-4">
              Users are strongly encouraged to carefully review and thoroughly
              understand the disclaimer. Infoprintsolution aims to furnish
              comprehensive information specifically concerning printers to aid
              users in troubleshooting any issues they encounter while utilizing
              these devices. Infoprintsolution.com maintains no affiliation with
              any brand, is not involved in any Associate program or affiliate
              advertising program, and does not endorse any products, brands, or
              software. Additionally, we do not facilitate access to external
              links. Should you encounter any external links leading to our
              website, please inform us promptly, and we will promptly remove
              them. It's important to note that at Infoprintsolution, brand
              names and product logos are used solely for representational
              purposes. We disclaim responsibility for any external content or
              links.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
