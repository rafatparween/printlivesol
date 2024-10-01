import React from 'react';
const Ink = () => {
  return (
    <>
    <h1 className='text-center text-[50px] text-[#003366]'>Printer Diagnosis Guideline</h1>
    <div className="flex items-start justify-center space-x-8 p-8">
      {/* Left Side - CompTIA Image */}
      <div className="flex-shrink-0">
        <img
          src="https://123printfix.com/assets/image/hp-b-4.png"
          alt="CompTIA Logo"
          className="w-[732px] h-[2044px] 2xl:ml-[250px]"
        />
      </div>

      {/* Right Side - Help Section with Fixed Width and Height */}
      <div className="flex-grow w-[457px] h-[429px]">
        <div className="container p-8">
          {/* Top Section - Chat Technician */}
          <div className="bg-blue-500 rounded-lg p-6 text-center shadow-lg w-[461px] h-[481px]">
            <h2 className="text-white text-xl mb-2">Do you know</h2>
            <p className="text-white">you can chat with a</p>
            <div className="inline-block bg-white rounded-md mt-2 py-2 px-4">
              <p className="text-red-500 font-bold">CompTIA A+</p>
              <p className="text-sm text-gray-600">Certified technician right now!</p>
            </div>
            <img
              src="https://123printfix.com/assets/image/pg-s-1.png"
              alt="Chat technician"
              className="mx-auto mt-4 rounded-md shadow-md object-cover h-[231px] w-[366px]"
            />
            <button className="bg-red-500 text-white font-semibold rounded-full mt-4 py-2 px-6 hover:bg-red-600">
              Start Chat
            </button>
          </div>

          {/* Bottom Section - Help Cards */}
          <div className="mt-6 space-y-4">
            {[
              {
                title: 'How to fix your Printer Offline issue for free',
                description: 'Install the latest printer drivers...',
                image: 'https://123printfix.com/assets/image/sb1.png',
              },
              {
                title: 'Free guideline for Wireless Printer issue',
                description: 'If using network printing, ensure...',
                image: 'https://123printfix.com/assets/image/sb2.png',
              },
              {
                title: 'How to fix Color or Black Ink Not Printing issues',
                description: 'Ensure there\'s enough ink...',
                image: 'https://123printfix.com/assets/image/sb3.png',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-[457px] h-[115px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[75px] w-[173px] rounded-md object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ink;

  