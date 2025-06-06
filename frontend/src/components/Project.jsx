// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';

// const Project = () => {
//   const [project, setProject] = useState(['']);
//   const apiUrl = import.meta.env.VITE_BACKEND_URL;
//   const navigate = useNavigate();

//   // Fetch roadmap data from the backend
//   useEffect(() => {
//     const fetchRoadmap = async () => {
//       try {
//         const response = await axios.post(`${apiUrl}/user/project`, {
//           data: localStorage.getItem('skills'),
//           userId: localStorage.getItem('id'),

//         }); // Update the endpoint if needed
//         console.log(response);

//         setProject(response.data.projects);
//         console.log(response);
//       } catch (error) {
//         toast.error("Failed to load roadmap");
//         console.error("Error fetching roadmap:", error);
//       }
//     };

//     fetchRoadmap();
//   }, []);


//   return (
//     <div className="min-h-screen bg-[#D9D9D9] p-4">
//       <div className=''>

//         <h1 className='text-xl lg:text-3xl text-center mb-4 font-bold'>Project related to {localStorage.getItem('skills')}</h1>
//         <div className='mb-4'><Link to='/skills' className='text-2xl lg:text-3xl '> ⬅Back</Link></div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
//         {project.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => {
//               localStorage.setItem('projectTitle', item),
//                 navigate('/inBrief')
//             }}
//             className="bg-[#E4E4E4] p-6 w-full aspect-square rounded-xl hover:shadow-md transition duration-200 flex flex-col justify-center items-center hover:scale-102"
//           >
//             <h2 className="text-xl lg:text-2xl font-medium mb-2">{item}</h2>
//             {/* <p className="text-md font-light text-gray-700 text-center">{item}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Project = () => {
  const [project, setProject] = useState(['']);
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.post(`${apiUrl}/user/project`, {
          data: localStorage.getItem('skills'),
          userId: localStorage.getItem('id'),
        });
        console.log(response);
        setProject(response.data.projects);
      } catch (error) {
        toast.error("Failed to load projects");
        console.error("Error fetching projects:", error);
      }
    };

    fetchRoadmap();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] px-4 py-10">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <Link
          to="/skills"
          className="text-gray-400 hover:text-white text-xl sm:text-2xl font-medium transition duration-200"
        >
          ⬅ Back
        </Link>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center w-full sm:w-auto mt-6 sm:mt-0">
          Projects related to <span className="text-green-400">{localStorage.getItem('skills')}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {project.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              localStorage.setItem('projectTitle', item);
              navigate('/inBrief');
            }}
            className="bg-[#1e1e1e] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform transform duration-300 cursor-pointer text-white text-center"
          >
            <h2 className="text-lg sm:text-xl font-medium text-gray-100">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
