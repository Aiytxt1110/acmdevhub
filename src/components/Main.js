import React, { useState } from 'react';
import styleMain from './css/Main.module.css'
import { MdHome } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { IoLogOut, IoNotifications,IoSettings} from "react-icons/io5";
import { MdSell,MdProductionQuantityLimits,MdAddShoppingCart } from "react-icons/md";
import { FaShoppingCart,FaWarehouse,FaUserPlus } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Home from './Home'
import Products from './Product'
import Setting from './Setting'


function Main() {
    const [activeMenu, setActiveMenu] = useState(Products)

  return (
    <div className={styleMain.container}>
        <div className={styleMain.navbar}>
            <ul className={styleMain.statis}>
                <li className={styleMain.itemnoti} onClick={()=>{setActiveMenu(null);}}>
                    <IoNotifications className='f30' />
                    <span className={styleMain.tipt}>Notifications</span>
                    <span className={styleMain.noti}>99+</span>
                    <span className={styleMain.noti}>99+</span>
                </li> 
                <hr className="w70 my10"/>
                <li className={styleMain.item} onClick={()=>{setActiveMenu(Home);}}><AiFillHome className='f30' /><span className={styleMain.tipt}>Home</span></li>
                <li className={styleMain.item} onClick={()=>{setActiveMenu(Products);}}><MdProductionQuantityLimits className='f30' /><span className={styleMain.tipt}>Products</span></li>
                <li className={styleMain.item} onClick={()=>{setActiveMenu(null);}}><MdAddShoppingCart className='f30' /><span className={styleMain.tipt}>Sell</span></li>
                <li className={styleMain.item} onClick={()=>{setActiveMenu(null);}}><MdSell className='f30' /><span className={styleMain.tipt}>Promotions</span></li>
                <li className={styleMain.item} onClick={()=>{setActiveMenu(null);}}><FaWarehouse className='f30' /><span className={styleMain.tipt}>Stoke</span></li>
                <li className={styleMain.item} onClick={()=>{setActiveMenu(null);}}><FaUserPlus className='f30' /><span className={styleMain.tipt}>Clients</span></li>
                <hr className="w70 my10"/>
                <div className={styleMain.footernav}>
                    <li className={styleMain.item} onClick={()=>{setActiveMenu(Setting);}}><IoSettings className='f30' /><span className={styleMain.tipt}>Setting</span></li>
                    <Link to='/'><li className={styleMain.item}><IoLogOut className='f30' /><span className={styleMain.tipt}>Sign out</span></li></Link>
                </div>
            </ul>
        </div>
        <div className={styleMain.content}>
            <div className={styleMain.fade}></div>
            {activeMenu}
        </div>
    </div>
  );
}

export default Main