import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Content extends Component {
  render() {
    return (
        <div style={{backgroundImage:"url('https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681924471/Content_lz6jjc.png')",backgroundSize:"cover",width:"100vw",height:"100vh",display:"flex",flexDirection:"column"}}>
            
            <div style={{display:"flex",flexDirection:"row",width:"100%"}}>

                <div >
               <Link to='/'> <h1 style={{color:"white",padding:20}}>VR-ARC</h1></Link>
                </div>

                <div style={{display:"flex",flexDirection:"row",marginLeft:"60%"}}> 
                   <Link to='/project1'> <h1 style={{color:"white",padding:20,opacity:"60%"}}>PROJECT</h1></Link>
                    {/* <h1 style={{color:"white",padding:20,opacity:"60%"}}>ABOUT</h1>
                    <h1 style={{color:"white",padding:20,opacity:"60%"}}>CONTACT</h1> */}
                </div>

            </div>
            
            <div style={{width:728,justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"10%"}}>
                <h1 style={{color:"white",opacity:"50%",fontSize:30}}>OUR TEAM OF SKILLED PROFESSIONALS IS 
DEDICATED TO DESIGNING AND DEVELOPING 
STATE-OF-THE-ART VR INFRASTRUCTURE THAT 
EMPOWERS BUSINESSES TO CREATE
 IMMERSIVE AND REALISTIC VIRTUAL
                       EXPERIENCE</h1>
            </div>
        </div>
    )
  }
}

