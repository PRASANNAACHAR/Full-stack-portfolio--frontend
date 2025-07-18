import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Portfolio = () => {

  const [projects , setProjects] = useState([]);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get("https://full-stack-portfolio-backend-4077.onrender.com/api/v1/project/getall", { withCredentials: true }
      )
 
      setProjects(data.projects)
    };
    getMyProjects();
  }, [])

const [viewAll, setViewAll] = useState();


  return (
    <>
      <div>
      <div className='relative mb-12'>
        <h1 className=' hidden sm:flex gap-4 items-center text-[2rem] sm:text-[1.7rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold' style={{background: "hsl(222.2 84% 4.9%)"}}>
          MY
          <span className='text-tubeLight-effect font-extrabold'>PORTFOLIO</span>
        </h1>
        <h1 className=' flex sm:hidden gap-4 items-center text-[2rem] sm:text-[1.7rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold' style={{background: "hsl(222.2 84% 4.9%)"}}>
          MY
          <span className='text-tubeLight-effect font-extrabold'>WORK</span>
        </h1>
        <span className='absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200'></span>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            (viewAll ? projects : projects.slice(0, 6)).map((element) => (
              <Link
                to={`/project/${element._id}`}
                key={element._id}
                className="border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-blue-500 transition duration-300"
              >
                <img
                  src={element.projectBanner && element.projectBanner.url}
                  alt="project banner"
                  className="w-full h-48 object-contain bg-transparent p-4"
                />

                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {element.title || "Untitled Project"}
                  </h2>
                </div>
              </Link>

            ))
          }
        </div>


         {
          projects && projects.length > 6 && (
            <div className='w-full text-center my-9'>
              <Button className="w-52" onClick={()=> setViewAll(!viewAll)}>
                {viewAll ? "Show Less": "Show More"}
              </Button>
            </div>
          )
         }
      </div>
    </>
  )
}

export default Portfolio


// import { Button } from '@/components/ui/button';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Portfolio = () => {
//   const [projects, setProjects] = useState([]);
//   const [viewAll, setViewAll] = useState(false);

//   useEffect(() => {
//     const getMyProjects = async () => {
//       const { data } = await axios.get(
//         "https://full-stack-portfolio-backend-4077.onrender.com/api/v1/project/getall",
//         { withCredentials: true }
//       );
//       setProjects(data.projects);
//     };
//     getMyProjects();
//   }, []);

//   return (
//     <div className="py-10 px-4">
//       {/* Header */}
//       <div className='relative mb-12'>
//         <h1 className='hidden sm:flex gap-4 items-center text-[2rem] sm:text-[1.7rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold text-white'>
//           MY
//           <span className='text-tubeLight-effect font-extrabold'>PORTFOLIO</span>
//         </h1>
//         <h1 className='flex sm:hidden gap-4 items-center text-[2rem] sm:text-[1.7rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold text-white'>
//           MY
//           <span className='text-tubeLight-effect font-extrabold'>WORK</span>
//         </h1>
//         <span className='absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200'></span>
//       </div>

//       {/* Projects Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//         {
//           (viewAll ? projects : projects.slice(0, 6)).map((element) => (
//             <Link
//               to={`/project/${element._id}`}
//               key={element._id}
//               className="p-4 rounded-xl hover:scale-105 transition-transform duration-300 border border-slate-600"
//             >
//               <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center h-full">
//                 <img
//                   src={element.projectBanner?.url}
//                   alt="project banner"
//                   className="w-full max-h-36 object-contain mb-2"
//                 />
//                 <p className="text-white text-sm text-center font-medium">
//                   {element.title || "Untitled Project"}
//                 </p>
//               </div>
//             </Link>


//           ))
//         }
//       </div>

//       {/* Toggle Button */}
//       {
//         projects.length > 6 && (
//           <div className='w-full text-center my-9'>
//             <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
//               {viewAll ? "Show Less" : "Show More"}
//             </Button>
//           </div>
//         )
//       }
//     </div>
//   );
// };

// export default Portfolio;
