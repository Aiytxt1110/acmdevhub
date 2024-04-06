import React, { useState } from 'react';
import Select from 'react-select';
import imgg from '../logo192.png'
import styleAddProducts from './css/AddProducts.module.css'
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlinePhoto, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import database from '../Firebase'

function Addclass({ onClose }) {
  const handleClick = () => {
    // Perform the desired action
    console.log("Add product clicked!");
    // You can also close the modal if needed
    onClose();
  };
  //   const [type, setType] = useState("");
  // const [name, setName] = useState("");
  // const [proper, setProper] = useState("");

  // // Push Function
  // const Push = () => {
  //   database.ref("Constantsprop").push({
  //     type: type,
  //     name: name,
  //     proper: proper,
  //   }).then(() => {
  //     alert("Data added to the database successfully!");
  //     // Optionally, you can clear the input fields after adding data
  //     setType("");
  //     setName("");
  //     setProper("");
  //   }).catch((error) => {
  //     console.error("Error adding data to the database:", error);
  //     alert("Error adding data to the database");
  //   });
  // }
  return (
    <div className={styleAddProducts.container}>
    <div className={styleAddProducts.form}>
    <div style={{display:'flex', alignItems:'center'}}>      
    <h2 style={{margin:'10px 0'}}>New product</h2>
    <IoIosCloseCircle style={{fontSize:'40px', marginLeft:'auto', color:'red'}} onClick={handleClick}/>
    {/* <button style={{width:'30px', height:'30px', borderRadius:'100%', border:'none', marginLeft:'auto'}}></button> */}
    </div>
    {/* <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
    <input type="text" value={proper} onChange={(e) => setProper(e.target.value)} placeholder="Proper" /> */}
    <div className={styleAddProducts.inputgroup}>
    












    <div className={styleAddProducts.groupbox}>      
    <label className={styleAddProducts.groupboxboxlabel}>Details</label>
    
    <ul className={styleAddProducts.statis}>
          <li className={styleAddProducts.imgproduct}>
            <MdOutlinePhoto style={{fontSize:'50px', position:'absolute', color:'#212121', lineHeight:'100px',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}} />
            <div style={{position:'relative'}}>
              <div className={styleAddProducts.blockimg}>
                <img style={{width:'100%', height:'100%'}} src={'imgg'} />
              </div>          
              <input style={{display:'none'}} type='file' id='file' accept="image/png, image/jpeg, image/gif"/>
              <label htmlFor='file' className={styleAddProducts.addimg}><FaEdit/></label>
            </div>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input  className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabelid}>No.</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Product name</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Main Product</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Barcode</label>
          </li>
          <li>
            <Select className={styleAddProducts.boxselect}  placeholder='Category'/>
          </li>
          <li>
            <Select className={styleAddProducts.boxselect}  placeholder='Suplier'/>
          </li>
        </ul>
    </div>










    <div className={styleAddProducts.groupprice}>  




    <div className={styleAddProducts.groupbox}>      
    <label className={styleAddProducts.groupboxboxlabel}>Prices</label>
    <ul className={styleAddProducts.statis}>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Cost price</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Selling price 1</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Selling price 2</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Selling price 3</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Selling price 4</label>
          </li>
          <li className={styleAddProducts.txtboxgroup}>
            <input className={styleAddProducts.txtbox} type='text' id={styleAddProducts['barcode']} required/>
            <label className={styleAddProducts.txtboxlabel}>Vat.</label>
          </li>
        </ul>
    </div>




    <div className={styleAddProducts.groupbox}>      
    <label className={styleAddProducts.groupboxboxlabel}>Describe</label>
    <textarea style={{resize:'none', width:'100%',height:'100%', borderRadius:'12px', padding:'10px', outline:'none'}} rows='6' cols='50' placeholder='Describe here.....'></textarea>
    </div>
    <button className={styleAddProducts.btn}>Add Data</button>
    </div>




    </div>



    </div>
  </div>
  )
}

export default Addclass