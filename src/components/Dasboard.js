import React from 'react'
import SelectMenu from './SelectMenu'
import styleHome from './css/Home.module.css';

function Dasboard() {
  return (
    <div>       
        <div style={{display:'flex', alignItems:'center',padding:'10px',height:'50px'}}>
            <p style={{color: 'hsla(0, 0%, 0%, 0.6)',fontWeight:'bold',fontSize:'20px',margin:'0',width:'100%'}}>Overview</p>
            {/* <input style={{color: 'hsla(0, 0%, 0%)',fontWeight:'bold',fontSize:'20px',margin:'0',width:'8rem',height:'2rem',borderRadius:'12px'}}/> */}
            <SelectMenu/>
        </div>
        <div className={styleHome.chartarea}>
            Chart
        </div> 
    </div>
  );
}

export default Dasboard