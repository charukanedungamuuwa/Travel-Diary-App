import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src='https://www.attractionsinsrilanka.com/wp-content/uploads/2020/04/Wangedigala-1.jpg'/>
      
      <div className="user">
        <img src='https://www.attractionsinsrilanka.com/wp-content/uploads/2020/04/Wangedigala-1.jpg'/> 
        <div className="info">
          <span>John</span>
          <p>Posted 2 Days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}><img src={Edit}/></Link>
          <img src={Delete}/>
        </div>
        </div>
        <h1>Wangedigala mountain in srilanka </h1> 
        <p>Wangedigala mountain is located in a beautiful village 
          called Kalupahana. Wangedigala is part of the mountain chain 
          that include Bamabarakanda, Adara Kanda and the famous Horton
           plains.The term ‘wangediya’ means mortar in Sinhala therefore
            ‘wangedigala’ translated to English means mortar-rock.
This trip is ideal for campers because of the natural camping site of on 
top of the mountain. <br></br>Also the scenic route through pine forests, grasslands
 and the close proximity to Bambarakanda falls makes this hike famous among 
 local adventure hikers.<br></br> Climb to Wangedigala is not so difficult for experience
  hikers and the resulting exquisite view of the surrounding area makes it worth 
  while any-day.🇱🇰🚮Wangedigala mountain is located in a beautiful village 
          called Kalupahana. Wangedigala is part of the mountain chain 
          that include Bamabarakanda, Adara Kanda and the famous Horton
           plains.The term ‘wangediya’ means mortar in Sinhala therefore
            ‘wangedigala’ translated to English means mortar-rock.
This trip is ideal for campers because of the natural camping site of on 
top of the mountain. <br></br>Also the scenic route through pine forests, grasslands
 and the close proximity to Bambarakanda falls makes this hike famous among 
 local adventure hikers.<br></br> Climb to Wangedigala is not so difficult for experience
  hikers and the resulting exquisite view of the surrounding area makes it worth 
  while any-day.🇱🇰🚮Wangedigala mountain is located in a beautiful village 
          called Kalupahana. Wangedigala is part of the mountain chain 
          that include Bamabarakanda, Adara Kanda and the famous Horton
           plains.The term ‘wangediya’ means mortar in Sinhala therefore
            ‘wangedigala’ translated to English means mortar-rock.
This trip is ideal for campers because of the natural camping site of on 
top of the mountain. <br></br>Also the scenic route through pine forests, grasslands
 and the close proximity to Bambarakanda falls makes this hike famous among 
 local adventure hikers.<br></br> Climb to Wangedigala is not so difficult for experience
  hikers and the resulting exquisite view of the surrounding area makes it worth 
  while any-day.🇱🇰🚮</p> 
        </div>
    
     <Menu/>
      
    </div>
  )
}

export default Single
