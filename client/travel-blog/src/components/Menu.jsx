import React from 'react'

const Menu = () => { 
    const posts=[

    {
        id: 1,
        title:"Travelk to a wangedigala",
      desc:"it is situated at uwathenna",
      img:"https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title:"Travelk to a wangedigala",
    desc:"it is situated at uwathenna",
    img:"https://images.pexels.com/photos/1287092/pexels-photo-1287092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title:"Travelk to a wangedigala",
    desc:"it is situated at uwathenna",
    img:"https://images.pexels.com/photos/698332/pexels-photo-698332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title:"Travelk to a wangedigala",
    desc:"it is situated at uwathenna",
    img:"https://images.pexels.com/photos/698332/pexels-photo-698332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
      ];
  return (
    <div className='menu'>
        <h1>Other Posts you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={post.img}/>
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
      
    </div>
  )
}

export default Menu
