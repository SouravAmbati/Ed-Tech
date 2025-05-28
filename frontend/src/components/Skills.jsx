// import axios from 'axios';
// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';


// const Skills = () => {
//     const [skill, setSkill] = useState('');
//     const apiUrl = import.meta.env.VITE_BACKEND_URL
//     const navigate = useNavigate();
//     const handleChange = (e) => {
//         setSkill(e.target.value);
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`${apiUrl}/user/skills`, {
//                 userId: localStorage.getItem("Id"), skill
//             });
//             console.log(response.data);
//             if (response.data.success) {
//                 toast.success("Skill Successfully added");
//                 const skillsArray = response.data.user.skills;
//                 const lastSkill = skillsArray[skillsArray.length - 1];
//                 localStorage.setItem('skills', lastSkill)
//                 navigate("/roadmap");
//             }
//             else {
//                 toast.error("Skill did'nt added")
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Error: " + response.data.message);
//             setTimeout(() => { }, 1000);
//         }
//         console.log('Submitted Skill:', skill);

//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 image">
//   <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-4">
//     <input
//       type="text"
//       value={skill}
//       onChange={handleChange}
//       placeholder="Full-Stack Development"
//       className="border border-gray-300 rounded-lg px-4 py-3 w-[500px] focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
//     />
//     <button
//       type="submit"
//       className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 shadow"
//     >
//       Submit Skill
//     </button>
//   </form>
// </div>

      
//     );
// };

// export default Skills;


import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const [skill, setSkill] = useState('');
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/user/skills`, {
        userId: localStorage.getItem("Id"),
        skill,
      });
      console.log(response.data);
      if (response.data.success) {
        toast.success("Skill Successfully added");
        const skillsArray = response.data.user.skills;
        const lastSkill = skillsArray[skillsArray.length - 1];
        localStorage.setItem('skills', lastSkill);
        navigate("/roadmap");
      } else {
        toast.error("Skill didn't add");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error: " + error.response?.data?.message || error.message);
    }
    console.log('Submitted Skill:', skill);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl rounded-2xl p-8 shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add Your Skill</h2>
        
        <input
          type="text"
          value={skill}
          onChange={handleChange}
          placeholder="e.g. Full-Stack Development"
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 text-md transition-all duration-200 mb-4"
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg shadow-lg transition-colors duration-300"
        >
          Submit Skill
        </button>
      </form>
    </div>
  );
};

export default Skills;

