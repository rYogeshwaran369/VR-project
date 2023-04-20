import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class HomePage extends Component {
  render() {
    return (
      <div style={{backgroundImage:"url('https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681923291/Screenshot_2023-04-19_222358_wgqv8u.png')",backgroundSize:"cover",width:"100vw",height:"100vh",display:"flex"}}>

        <div>
            <div style={{textAlign:"left",padding:10}}>
            <Link to='/content'><h1 style={{color:"white",fontSize:40}}>VR-ARC</h1></Link>
            </div>
            <div style={{width:"100vw",textAlign:"left"}}>
            <h1 style={{color:"white",fontSize:90,opacity:"30%"}}>WELCOME TO THE</h1>
            <h1 style={{color:"white",fontSize:90,marginLeft:"30%",opacity:"30%"}}>VIRTUAL WORLD</h1>
            </div>
        </div>
        </div>
    )
  }
}
