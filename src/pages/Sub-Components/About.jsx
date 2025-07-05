import axios from 'axios';
import React, { useEffect, useState } from 'react'




const About = () => {




const [user, setUser] = useState({});


 useEffect(()=>{
  const getMyProfile =async ()=> {
    const {data} = await axios.get("http://localhost:4000/api/v1/user/portfolio/me", {withCredentials: true} 
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore optio delectus itaque tempore magni atque! Incidunt minus sint dolores alias!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem illo velit cumque dolore, nihil tenetur qui odio et aut possimus cum rerum ipsam obcaecati impedit quam ad eos quia.</p>
          </div>
        </div>
        <p className='tracking-[1px] text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex dolor nam assumenda repellendus perferendis iusto veritatis, earum dignissimos commodi placeat dolorem explicabo. Ratione itaque inventore laborum minima, ducimus veritatis nisi deserunt ab hic, ea dicta velit quisquam sed officia.
        </p>
      </div>
    </div>
  )
}

export default About