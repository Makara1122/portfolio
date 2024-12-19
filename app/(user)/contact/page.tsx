import React from 'react'

export default  async function page() {

  const data = await fetch('http://34.143.160.110:8081/api/v1/users?username=olala');
  const user =  await data.json();

  console.log(` ============= This is user object =   ${user.username} =============`); 


  return (
    <div>
      {<h1 className='text-black'>Fetched api  = {user.username}  </h1>}
    </div>
  )
}
