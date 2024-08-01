import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

const data = useLoaderData()

    // const [data, setData] = useState([])

// useEffect(() => {
//  fetch('https:api.github.com/users/danishpinjari40')
//  .then(res => res.json())
//  .then(data => {
//     setData(data)
//  })
// }, []); 


  return <div className="bg-gray-600 text-white text-3xl p-4 text-center">
  Github Follower: {data?.followers} 
  <img src={data?.avatar_url} alt="Git Picture"  width={200}/>
</div>
};

export default Github;


// * Fetch data --> Loader for Routes
export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/danishpinjari40')
        return response.json();
}
