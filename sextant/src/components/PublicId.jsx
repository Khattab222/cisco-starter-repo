import React, { useEffect, useState } from 'react'


const PublicId = ({IpType}) => {
const [ipv4, setipv4] = useState("")
const [ipv6, setipv6] = useState("")
    useEffect(() => {
      
      fetchPublickIPv4()
      fetchPublickIPv6({"ip":"98.207.254.136"})
       
    }, [])


    const fetchPublickIPv4 = async() =>{
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        setipv4(data.ip)
    }


    const fetchPublickIPv6 = async(callBack) =>{
      const res = await fetch(`https://api64.ipify.org?format=json&callback=getip`);
      const data = await res.json();
   
      setipv6(data.ip)
    }
    
  return (
    <div>
     <div> your IPv4 publicId is {ipv4}</div>
      your IPv6 publicId is {ipv6}
    </div>
  )
}

export default PublicId
