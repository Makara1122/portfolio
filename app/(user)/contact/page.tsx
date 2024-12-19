import React from 'react'

export default  async function page() {

  const data = await fetch('http://localhost:8080/api/v1/users?username=makara');
  const user =  await data.json();

  console.log(` ============= This is user object =   ${user.username} =============`); 


  return (
    <div>
      {<h1 className='text-black'>Fetched api  = {user.username}  </h1>}
    </div>
  )
}
