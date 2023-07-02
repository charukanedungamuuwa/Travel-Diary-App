import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {


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
    <div className='home'>
      <div className="posts">

        {posts.map((post)=>(
          <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img}/></div>
            
            <div className="content">


              <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1></Link>
              <p>{post.desc}</p>
              <button>Read More</button>
             
            </div>
            
            
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default Home
