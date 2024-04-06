import React from 'react'
import styleHome from './css/Home.module.css';
import { MdProductionQuantityLimits,MdAddShoppingCart } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

function Treding() {
  return (
    <div>
        <ul className={styleHome.statislist}>
                        <li className={styleHome.tredingitem}>
                            <div className={styleHome.cardtreding}>
                                <MdProductionQuantityLimits className={styleHome.iconitem} />
                                <ul className='list-none'>
                                    <li className="f40 bold mb10">Clients</li>
                                    <li>Item1</li>
                                    <li>Item2</li>
                                    <li>Item3</li>
                                </ul>
                                <p className={styleHome.txtviewmore}>Viewmore...</p>
                            </div>
                        </li>
                        <li className={styleHome.tredingitem}>
                            <div className={styleHome.cardtreding}>
                                <MdAddShoppingCart className={styleHome.iconitem} />
                                <ul className='list-none'>
                                    <li className="f40 bold mb10">Clients</li>
                                    <li>Item1</li>
                                    <li>Item2</li>
                                    <li>Item3</li>
                                </ul>
                                <p className={styleHome.txtviewmore}>Viewmore...</p>
                            </div>
                        </li>
                        <li className={styleHome.tredingitem}>
                            <div className={styleHome.cardtreding}>
                                <FaUserPlus className={styleHome.iconitem} />
                                <ul className='list-none'>
                                    <li className="f40 bold mb10">Clients</li>
                                    <li>Item1</li>
                                    <li>Item2</li>
                                    <li>Item3</li>
                                </ul>
                                <p className={styleHome.txtviewmore}>Viewmore...</p>
                            </div>
                        </li>
                    </ul>
    </div>
  )
}

export default Treding