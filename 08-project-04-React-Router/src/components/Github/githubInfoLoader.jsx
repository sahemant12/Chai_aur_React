import React from 'react'

const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/sahemant12");
    const data = await res.json();
    return data; // it will return promise
}

export default githubInfoLoader