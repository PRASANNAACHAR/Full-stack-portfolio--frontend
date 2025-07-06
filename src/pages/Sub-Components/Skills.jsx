import { Card } from '@/components/ui/card';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Skills = () => {


  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get("https://full-stack-portfolio-backend-4077.onrender.com/api/v1/skill/getall",
        { withCredentials: true }
      )
 
      setSkills(data.skills)
    };
    getMySkills();
  }, [])



  return (
    <>
      <div className='w-full flex flex-col gap-8 sm:gap-12'> 
        <h1 className='overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4 mx-auto'>
          SKILLS
        </h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
              skills && skills.map(element => {
                return(
                  <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
                    <img src={element.svg && element.svg.url} alt={element.title} className='h-12 sm:h-24 w-auto' />
                    <p className='text-muted-foreground text-center'>{element.title}</p>
                  </Card>
                )
              })
            }
          </div>
      </div>
    </>
  )
}

export default Skills