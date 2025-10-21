import React, { useState, useEffect } from 'react'
import githubInfoLoader from './githubInfoLoader'
// function Github() {
//     const [githubData, setGithubData] = useState();
//     useEffect(()=>{
//         fetch("https://api.github.com/users/sahemant12")
//         .then((res)=> res.json())
//         .then((data)=> setGithubData(data))
//     }, []);
//     console.log(githubData);
    
//   return (
//     <div className='flex flex-col p-6 justify-center items-center gap-2 bg-gray-600'>
//         <h2 className='text-3xl'>followers: {githubData?.followers}</h2>
//         <img src={githubData?.avatar_url} alt="" width="250px"/>
//     </div>
//   )
// }

// above code is simple way of using api (not optimize). 
// Below code is best with optimization

// In below code we will use 'loader' which is from React Router which help us to optimize the api call by: when we click for api call of any button then before click we hover over it and this hover will call api and makes it fast.

import { useLoaderData } from 'react-router';
 function Github() {
    const githubData = useLoaderData();
  return (
    <div className='flex flex-col p-6 justify-center items-center gap-2 bg-gray-600'>
        <h2 className='text-3xl'>followers: {githubData?.followers}</h2>
        <img src={githubData?.avatar_url} alt="" width="250px"/>
    </div>
  )
}

export default Github
