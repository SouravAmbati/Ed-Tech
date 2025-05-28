// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// const Roadmap = () => {
//   const [roadmap, setRoadmap] = useState([]);
//   const apiUrl = import.meta.env.VITE_BACKEND_URL;

//   // Fetch roadmap data from the backend
//   useEffect(() => {
//     const fetchRoadmap = async () => {
//       try {
//         const response = await axios.post(`${apiUrl}/user/roadmap`, {
//           content: localStorage.getItem('skills'),
//           userId: localStorage.getItem('id'),

//         }); // Update the endpoint if needed
//         setRoadmap(response.data.roadmap);
//         console.log(response);
//       } catch (error) {
//         toast.error("Failed to load roadmap");
//         console.error("Error fetching roadmap:", error);
//       }
//     };

//     fetchRoadmap();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#222222] p-4">
//       <div className=''>
//         <h1 className='text-xl lg:text-3xl text-center  mt-4  font-medium text-white'>Roadmap for {localStorage.getItem('skills')}</h1>
//         <Link to='/project'><p className='ml-[1400px] mb-6 text-xl lg:text-2xl text-white'>Next</p></Link>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
//         {roadmap.map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#e7dede] p-6 w-full aspect-square rounded-xl hover:shadow-md transition duration-200 flex flex-col justify-center items-center hover:scale-102"
//           >
//             <p className="text-md font-light text-gray-700 text-center">Step {index + 1}</p>
//             <h2 className="text-xl lg:text-2xl font-light mt-2 ">{item}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Roadmap;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState([]);
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.post(`${apiUrl}/user/roadmap`, {
          content: localStorage.getItem('skills'),
          userId: localStorage.getItem('id'),
        });
        setRoadmap(response.data.roadmap);
        console.log(response);
      } catch (error) {
        toast.error("Failed to load roadmap");
        console.error("Error fetching roadmap:", error);
      }
    };

    fetchRoadmap();
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] px-4 py-10">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center w-full sm:w-auto mb-6 sm:mb-0">
          Roadmap for <span className="text-green-400">{localStorage.getItem('skills')}</span>
        </h1>
        <Link
          to="/project"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition duration-300"
        >
          Next
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 transform duration-300 text-white flex flex-col justify-center items-center min-h-[200px]"
          >
            <p className="text-sm uppercase tracking-widest text-gray-300">Step {index + 1}</p>
            <h2 className="text-lg sm:text-xl mt-2 font-light text-center">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
