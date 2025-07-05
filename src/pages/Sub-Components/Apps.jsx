import { Card } from '@/components/ui/card';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apps = () => {


  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/softwareapplication/getall", { withCredentials: true }
      )
 
      setApps(data.softwareApplications)
    };
    getMyApps();
  }, [])



  return (
    <>
      <div className='w-full flex flex-col gap-8 sm:gap-12'> 
        <h1 className='overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4 mx-auto'>
          My Apps
        </h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
              apps && apps.map(element => {
                return(
                  <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
                    <img src={element.svg && element.svg.url} alt={element.title} className='h-12 sm:h-24 w-auto' />
                    <p className='text-muted-foreground text-center'>{element.name}</p>
                  </Card>
                )
              })
            }
          </div>
      </div>
    </>
  )
}

export default Apps 