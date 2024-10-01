// import CustomerReviews from './CustomerReviews';
// import Disclaimer from './Disclaimer';
// import PrinterSetup from './PrinterSetup';
// import PrinterSetupMethod from './PrinterSetupMethod';
// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       backgroundImage:
//         "https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230614/original/pngtree-printer-is-sitting-in-a-room-with-large-posters-and-prints-picture-image_3520983.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-3d-render-of-responsive-devices-in-home-office-setup-image_3765800.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://img.lovepik.com/bg/20240415/3D-Rendered-Modern-Home-Office-Setup-Desk-Lamp-Computer-and_5832401_wh860.jpg!/fw/860",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/background/20230611/original/pngtree-printer-is-located-in-a-room-with-a-montage-of-mountains-picture-image_3166193.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//     {
//       backgroundImage:
//         "https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-sleek-home-office-setup-with-lamp-computer-and-printer-3d-rendered-image_3824090.jpg",
//       title: "How to Set Up Your Printer",
//       subtitle:
//         "Your trusted partner for all printer solutions. Click Printer Setup for step-by-step guidance on how to setup, configure, and register your printer",
//     },
//   ];

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <>
//       <main className="relative">
//         <div className="relative w-full h-[400px] overflow-hidden">
//           {/* Background Slide */}
//           <div className="relative h-full">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                   index === currentSlide ? 'opacity-100' : 'opacity-0'
//                 }`}
//                 style={{
//                   backgroundImage: `url(${slide.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay for better text visibility */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//                 {/* Text content without container */}
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
//                   <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
//                     {slide.title}
//                   </h1>
//                   <p className="text-xl mb-6 leading-relaxed drop-shadow-md">{slide.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <PrinterSetup />
//       <CustomerReviews />
//       <Disclaimer />
//     </>
//   );
// };

// export default Home;



// import CustomerReviews from './CustomerReviews';
// import Disclaimer from './Disclaimer';
// import PrinterSetup from './PrinterSetup';
// import PrinterSetupMethod from './PrinterSetupMethod';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPrint, faWifi, faTint, faCogs, faExclamationTriangle, faTools, faFax } from '@fortawesome/free-solid-svg-icons'; // Removed faScanner as it doesn't exist.

// const Home = () => {
//   return (
//     <>
//       <div className="bg-blue-400 min-h-screen flex items-center justify-center">
//         <div className="flex space-x-8">
//           {/* Left Sidebar */}
//           <div className="flex flex-col justify-center items-center">
//             <button className="bg-blue-500 text-white rounded-md py-2 px-4 mb-4 transform rotate-90">Chat With Us</button>
//           </div>

//           {/* Main Content */}
//           <div className="grid grid-cols-3 gap-8">
//             {[
//               { name: 'Printer Setup', icon: faPrint },
//               { name: 'Printer Offline', icon: faCogs },
//               { name: 'Wireless Printer', icon: faWifi },
//               { name: 'Color Or Black Ink Not Printing', icon: faTint },
//               { name: 'Cartridge', icon: faCogs },
//               { name: 'Print Job Stuck In Queue', icon: faExclamationTriangle },
//               { name: 'Paper Jam', icon: faTools },
//               // Changed 'Scanner' to use 'faPrint' as faScanner does not exist
//               { name: 'Scanner', icon: faPrint }, 
//               { name: 'Fax Issues', icon: faFax },
//             ].map((item) => (
//               <div key={item.name} className="bg-blue-300 p-6 rounded-md shadow-md text-center text-white">
//                 <FontAwesomeIcon icon={item.icon} className="text-4xl mb-2" />
//                 <p>{item.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Right Side Image */}
//           <div className="flex items-center justify-center">
//             <img src="https://via.placeholder.com/250" alt="Person pointing" className="w-96 rounded-lg shadow-md" />
//           </div>
//         </div>

//         {/* Bottom Chat Assistance */}
//         <div className="absolute bottom-10">
//           <button className="bg-white text-blue-500 rounded-full py-2 px-6 shadow-lg hover:shadow-xl">
//             Click For Chat Assistance
//           </button>
//         </div>
//       </div>      
//       <PrinterSetup />
//       <CustomerReviews />
//       <Disclaimer />
//     </>
//   );
// };

// export default Home;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPrint, faWifi, faTint, faCogs, faExclamationTriangle, faTools, faFax } from '@fortawesome/free-solid-svg-icons';
// import PrinterSetup from '../service/PrinterOffline';
// import CustomerReviews from './CustomerReviews';
// import Disclaimer from './Disclaimer';
// import Assistance from './Assistance';
// import Technicians from './Technicians';
// import SkillsGrid from './Skillgrid';
// import Avoidprinter from './Avoidprinter';
// import Help from './Help';


// const Home = () => {
//   return (
//     <>
//     <div className="bg-gradient-to-br from-[#003366] to-[#006699] min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Dots in Top Left Corner with Animation */}
//       <div className="absolute top-5 left-5 flex flex-col items-start space-y-2 z-20">
//         {Array.from({ length: 8 }, (_, rowIndex) => (
//           <div className="flex space-x-2">
//             {Array.from({ length: 8 - rowIndex }, (_, dotIndex) => (
//               <div
//                 key={`${rowIndex}-${dotIndex}`}
//                 className="bg-white rounded-full animation-dot"
//                 style={{ width: '10px', height: '10px' }}
//               ></div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="container mx-auto p-8 flex flex-row items-start relative z-10 space-x-8">
//         {/* Left Side - Icons */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { name: 'Printer Setup', icon: faPrint, color: '#ffcc00' },
//             { name: 'Printer Offline', icon: faCogs, color: '#ff6699' },
//             { name: 'Wireless Printer', icon: faWifi, color: '#66ccff' },
//             { name: 'Ink Not Printing', icon: faTint, color: '#ff9933' },
//             // { name: 'Cartridge Issues', icon: faCogs, color: '#ff3366' },
//             // { name: 'Print Job Stuck', icon: faExclamationTriangle, color: '#ffcc00' },
//             // { name: 'Paper Jam', icon: faTools, color: '#66cc66' },
//             { name: 'Scanner Issues', icon: faPrint, color: '#ff6699' },
//             { name: 'Fax Problems', icon: faFax, color: '#66ccff' },
//           ].map((item, index) => (
//             <div key={item.name} className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-110">
//               <FontAwesomeIcon icon={item.icon} className="text-4xl mb-4" style={{ color: item.color }} />
//               <p className="text-lg font-semibold text-gray-800">{item.name}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex items-center justify-center">
//           <img src="https://media.istockphoto.com/id/1036079864/photo/confidence-leads-to-success.jpg?s=612x612&w=0&k=20&c=qHGk-I9utSjCoOpSjgO12MvgKri7-q0G8JawFMI66ac=" alt="Person pointing" className="w-[650px] h-[700px] rounded-lg shadow-md object-cover ml-[354px]" />
//         </div>
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center pt-[40px]">
//           <div className="flex flex-col items-center">
//             {/* <div className="w-[287px] h-[287px] bg-white rounded-full shadow-lg flex items-center justify-center"> */}
//             <img
//               src="/hp.png"
//               alt="HP Printer"
//               width={287}
//               height={287}
//             />
//             {/* </div> */}
//             <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
//             <img
//               src="/hplogo.png"
//               alt="Epson Printer"
//               width={37}
//               height={37}
//             />
//             </span>
//           </div>

//           <div className="flex flex-col items-center">
//             {/* <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center"> */}
//             <img
//               src="/canon.png"
//               alt="Canon Printer"
//               width={287}
//               height={287}
//             />
//             {/* </div> */}
//             <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
//             <img
//               src="/canonlogo.png"
//               alt="Epson Printer"
//               width={93}
//               height={22}
//             />
//             </span>
//           </div>

//           <div className="flex flex-col items-center">
//             {/* <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center"> */}
//             <img
//               src="/epson.png"
//               alt="Epson Printer"
//               width={287}
//               height={287}
//             />
//             {/* </div> */}
//             <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
//             <img
//               src="/epsonlogo.png"
//               alt="Epson Printer"
//               width={93}
//               height={28}
//             />
//             </span>
//           </div>

//           <div className="flex flex-col items-center">
//             {/* <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center"> */}
//             <img
//               src="/brother.png"
//               alt="Brother Printer"
//               width={287}
//               height={287}
//             />
//             {/* </div> */}
//             <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
//             <img
//               src="/brotherlogo.png"
//               alt="Epson Printer"
//               width={92}
//               height={20}
//             />
//             </span>
//           </div>
//         </div>


//       {/* Bottom Chat Assistance */}
//       <div className="absolute bottom-10">
//         <button className="bg-[#005f8c] text-white font-bold rounded-full py-3 px-6 shadow-md hover:bg-[#004e7a] transition-all duration-300 ease-in-out">
//           Click For Chat Assistance
//         </button>
//       </div>

//       <style jsx>{`
//         .animation-dot {
//           animation: bright-and-bounce 1.5s infinite ease-in-out;
//         }

//         @keyframes bright-and-bounce {
//           0%, 100% {
//             transform: translateY(0);
//             opacity: 0.8;
//           }
//           50% {
//             transform: translateY(-5px);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//     <Technicians/>
//     <Assistance/>
//     <SkillsGrid/>
//     <Avoidprinter/>
//     <Help/>
//     {/* <PrinterSetup/> */}
//     <CustomerReviews />
//     <Disclaimer/>

    
//     </>
//   );
// };

// export default Home;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faWifi, faTint, faCogs, faExclamationTriangle, faTools, faFax } from '@fortawesome/free-solid-svg-icons';
// Remove Image import if not using Next.js
import { Link } from 'react-router-dom';
import PrinterSetup from '../service/PrinterOffline';
import CustomerReviews from './CustomerReviews';
import Disclaimer from './Disclaimer';
import Assistance from './Assistance';
import Technicians from './Technicians';
import SkillsGrid from './Skillgrid';
import Avoidprinter from './Avoidprinter';
import Help from './Help';

const Home = () => {
  return (
    <>
      <h1 className='text-[30px] text-center text-[#003366]'>Diagnose & Solve</h1>
      <div className="bg-gradient-to-br from-[#003366] to-[#006699] h-[600px] flex items-center justify-center relative overflow-hidden">
        {/* Dots in Top Left Corner with Animation */}
        <div className="absolute top-5 left-5 flex flex-col items-start space-y-2 z-20">
          {Array.from({ length: 8 }, (_, rowIndex) => (
            <div className="flex space-x-2">
              {Array.from({ length: 8 - rowIndex }, (_, dotIndex) => (
                <div
                  key={`${rowIndex}-${dotIndex}`}
                  className="bg-white rounded-full animation-dot"
                  style={{ width: '10px', height: '10px' }}
                ></div>
              ))}
            </div>
          ))}
        </div>
       

        <div className="container mx-auto p-8 flex flex-row items-start relative z-10 space-x-8">
          {/* Left Side - Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[320px] w-[1237px]">
            {[
              { name: 'Printer Setup', icon: faPrint, color: '#ffcc00', route: '/Printer' },
              { name: 'Printer Offline', icon: faCogs, color: '#ff6699', route: '/Offline' },
              { name: 'Wireless Printer', icon: faWifi, color: '#66ccff', route: '/Wireless' },
              { name: 'Color Or Black Ink Not Printing', icon: faTint, color: '#ff9933', route: '/Ink' },
              { name: 'Scanner', icon: faPrint, color: '#ff6699', route: '/Scanner' },
              { name: 'Fax Issues ', icon: faFax, color: '#66ccff', route: '/Fax' },
            ].map((item) => (
              <Link to={item.route} key={item.name}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-110 h-[166px]">
                  <FontAwesomeIcon icon={item.icon} className="text-4xl mb-4" style={{ color: item.color }} />
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://img.freepik.com/premium-photo/smiling-business-woman-team-website-view-waist-white-background_935410-1372.jpg"
              alt="Person pointing"
              className="w-[821px] h-[455px] rounded-lg shadow-md object-cover ml-[354px]"
            />
          </div>
        </div>
        <br/>
      {/* Bottom Chat Assistance */}
        <div className=" absolute bottom-10 ">
          <button className="bg-[#005f8c] text-white font-bold rounded-full py-3 px-6 shadow-md hover:bg-[#004e7a] transition-all duration-300 ease-in-out ">
            Click For Chat Assistance
          </button>
        </div>

        <style jsx>{`
          .animation-dot {
            animation: bright-and-bounce 1.5s infinite ease-in-out;
          }

          @keyframes bright-and-bounce {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-5px);
              opacity: 1;
            }
          }
        `}</style>
      </div>

      {/* Additional Components */}
      <Technicians />
      <Assistance />
      <SkillsGrid />
      <Avoidprinter />
      <Help />
      <CustomerReviews />
      <Disclaimer />
    </>
  );
};

export default Home;





