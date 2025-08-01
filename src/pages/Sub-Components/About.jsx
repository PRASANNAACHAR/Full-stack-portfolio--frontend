import axios from 'axios';
import React, { useEffect, useState } from 'react'




const About = () => {




const [user, setUser] = useState({});


 useEffect(()=>{
  const getMyProfile =async ()=> {
    const {data} = await axios.get("https://full-stack-portfolio-backend-4077.onrender.com/api/v1/user/portfolio/me", {withCredentials: true} 
    )
    setUser(data.user)
  };
  getMyProfile();
 },[])





  return (
    <div className='w-full flex flex-col overflow-hidden'>
      <div className='relative'>
        <h1 className='flex gap-4 items-center text-[2rem] sm:text-[1.7rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold' style={{background: "hsl(222.2 84% 4.9%)"}}>
          ABOUT
          <span className='text-tubeLight-effect font-extrabold'>ME</span>
        </h1>
        <span className='absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200'></span>
      </div>
      <div>
        <div className='grid md:grid-cols-2 my-8 sm:y-20 gap-14'>
          <div className='flex justify-center items-center'>
            <img src={user.avatar && user.avatar.url} alt={user.fullName} className='bg-white p-1 w-80  h-80' />
          </div>
          <div className='flex justify-center flex-col tracking-[1px] text-xl gap-5'>
            <p>{user.aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
