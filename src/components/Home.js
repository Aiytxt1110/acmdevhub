import React, { useState } from "react";

import styleHome from './css/Home.module.css';
import Treding from './Treding'
import Dasboard from './Dasboard'
import imgprofile from '../resource/unnamed.webp'
import imgproduct from '../resource/93600057_h_en_1648444100898.avif'

export default function Home() {
    return (
        <div className={styleHome.container}>
            <div className={`w-full flex flex-col md:w-full`}>
                {/* titledashboard */}
                <div className={`p5 h-full`}>
                    <div className={`container flex flex-col`}>
                        <div className={`flex py10`}>
                            <div className="w-full">
                                <p className={`darkCharcoal bold f12 m0`}>Primary</p>
                                <h1 className="black bold f40 m0">Dashboard</h1>
                            </div>
                            <div className={`flex items-center`}>
                                <div style={{textAlign:'right',padding:' 0 5px'}}>
                                    <p className={`stormGrey bold f12 m0`}>Username:</p>
                                    <h1 className={`black bold f24 m0`}>Acm1110</h1>
                                </div>
                                <div className={styleHome.profileimg}><img src={imgprofile} style={{width:'100%', height:'100%'}}/>
                                </div>
                            </div>
                        </div>
                        {/* dashboardchart&&higlight */}
                        <div className={`container flex  md:row-wrap`}>
                            <div className={styleHome.dashboardchart}>
                                <Dasboard/>
                            </div>
                            <div className={styleHome.higlight}>
                                dfgdfgdf
                            </div>                                    
                        </div>
                    </div>
                </div>
                <div className={styleHome.treding}>
                    <Treding/>
                </div>
            </div>
            <div className={styleHome.con2}>
                    <div className={styleHome.con2item1}>
                        <h1 className={`f18 black py10`}>Best today</h1>
                        <table className={`w-full px10`}>
                            <thead className="f14"><tr>
                                    <th style={{textAlign:'left'}}>Products</th>
                                    <th >Type</th>
                                    <th >QTY</th>
                            </tr></thead>
                            <tr><td style={{display:'flex',alignItems:'center',}}><div className={styleHome.imgproduct}><img src={imgproduct} className={`container`}/></div><p>KitKat 4 Finger Milk Chocolate Bar 45g</p></td> <td style={{textAlign:'center'}}>Snack</td> <td style={{textAlign:'center'}}>8</td></tr>
                            <tr><td style={{display:'flex',alignItems:'center',}}><div className={styleHome.imgproduct}><img src={imgproduct} className={`container`}/></div><p>KitKat 4 Finger Milk Chocolate Bar 45g</p></td> <td style={{textAlign:'center'}}>Snack</td> <td style={{textAlign:'center'}}>8</td></tr>
                            <tr><td style={{display:'flex',alignItems:'center',}}><div className={styleHome.imgproduct}><img src={imgproduct} className={`container`}/></div><p>KitKat 4 Finger Milk Chocolate Bar 45g</p></td> <td style={{textAlign:'center'}}>Snack</td> <td style={{textAlign:'center'}}>8</td></tr>
                            <tr><td style={{display:'flex',alignItems:'center',}}><div className={styleHome.imgproduct}><img src={imgproduct} className={`container`}/></div><p>KitKat 4 Finger Milk Chocolate Bar 45g</p></td> <td style={{textAlign:'center'}}>Snack</td> <td style={{textAlign:'center'}}>8</td></tr>
                            <tr><td style={{display:'flex',alignItems:'center',}}><div className={styleHome.imgproduct}><img src={imgproduct} className={`container`}/></div><p>KitKat 4 Finger Milk Chocolate Bar 45g</p></td> <td style={{textAlign:'center'}}>Snack</td> <td style={{textAlign:'center'}}>8</td></tr>
                          </table>
                        <p className={styleHome.txtviewmorecon2}>Viewmore...</p>
                    </div>
                    
                    <div className={styleHome.con2item2}>
                        <div className={styleHome.incon2item2}>
                            No item!
                        </div>
                    </div>
            </div>
        </div>
    );
}
