import React from 'react'
import styleSignin from './css/Signin.module.css'
import { FaRegCopyright } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { IoMdSunny,IoMdMoon } from "react-icons/io";
import Option from './Options'


function Signin() {
  return (
    <div className={styleSignin.container}>
        <div className={styleSignin.services}><Option/></div>
        <div className={styleSignin.form}>
            <p className={styleSignin.blend}>Connex</p><p className={styleSignin.txtsignin}>Sign in</p>Enter your username & password for continue
            <div className={styleSignin.input}>
                <div className={styleSignin.txtboxgroup}>
                    <input className={styleSignin.txtbox} type='text' id={styleSignin['txtuser']} required/>
                    <label className={styleSignin.txtboxlabel}>Username</label>
                </div>
                <div className={styleSignin.txtboxgroup}>
                    <input className={styleSignin.txtbox} type='password' id={styleSignin['txtuser']} required/>
                    <label className={styleSignin.txtboxlabel}>Password</label>
                </div>
            </div>
            <Link to='/home'>
                <div className={styleSignin.txtboxgroup}>
                    <input className={styleSignin.btnsignin} type='button' id={styleSignin['signUp']} value='Continue to app' required/>
                </div>
            </Link>            
            <p className={styleSignin.p}>or signup new user</p>
            <div className={styleSignin.txtboxgroup}>
                    <input className={styleSignin.btnsignin} type='button' id={styleSignin['signUp']} value='Sign up new user' required/>
                </div>
        </div>
        <div className={styleSignin.footer}><FaRegCopyright />&nbsp;Copyright 2024 Connex.Co.,LTD<span className='sm:hidden'>&nbsp;| Designed By: aiytxtacm</span><span className={`md:hidden`}>, Agree to our Terms of Service and Privacy Policy</span></div>
    </div>
  )
}

export default Signin