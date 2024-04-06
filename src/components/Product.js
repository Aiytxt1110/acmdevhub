import React,{ useState } from 'react'
import Select from 'react-select';
import Popup from 'reactjs-popup';
import styleProduct from './css/Product.module.css'
import AddPoducts from './AddProducts'
import { CiMenuKebab } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";

function Product() {
  
  return (
    <div className={styleProduct.container}>
        <ul className={styleProduct.statis}>
          <li className={styleProduct.txtboxgroup}>
            <input className={styleProduct.txtbox} type='text' id={styleProduct['barcode']} required/>
            <label className={styleProduct.txtboxlabel}>Main Products</label>
          </li>
          <li className={styleProduct.txtboxgroup}>
            <input className={styleProduct.txtbox} type='text' id={styleProduct['barcode']} required/>
            <label className={styleProduct.txtboxlabel}>Barcode</label>
          </li>
          <li className={styleProduct.txtboxgroup}>
            <input className={styleProduct.txtbox} type='text' id={styleProduct['barcode']} required/>
            <label className={styleProduct.txtboxlabel}>Products name</label>
          </li>
          <li>
            <Select className={styleProduct.boxselect}  placeholder='Group'/>
          </li>
          <li>
            <Select className={styleProduct.boxselect}  placeholder='Type'/>
          </li>
        </ul>
        <hr className='my10'/>
        <div className={styleProduct.formaddproduct}>
                      {/* <AddPoducts/> */}
                      
                      </div>
        <div className={styleProduct.boxtable}>
          <table class="layout display responsive-table">
            <thead>
                <tr>
                    <th>
                      <Popup trigger={<IoIosAddCircle style={{fontSize:'30px', marginTop:'5px',marginLeft:'5px',cursor:'pointer'}}/>} modal nested>
                        { close => ( <AddPoducts onClose={close} /> ) }
                      </Popup>
                    </th>
                    <th>ID</th>
                    <th>Main Products</th>
                    <th>Barcode</th>
                    <th>Products name</th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Category</th>
                    <th>Cost price/pc</th>
                    <th>Selling price 1</th>
                    <th>Selling price 2</th>
                    <th>Selling price 3</th>
                    <th>Selling price 4</th>
                    <th>Supplier</th>
                    <th>Date Create</th>
                    <th>Date Update</th>
                    <th>Creator</th>
                    <th>Updater</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td style={{textAlign:'center'}}>
                    <CiMenuKebab/>
                      {/* <ul>
                        <li>Edit</li>
                        <li>Remove</li>
                      </ul> */}
                    </td>
                    <th>001</th>
                    <th>987654</th>
                    <th>98732165</th>
                    <th>KitKat 4 Finger Milk Chocolate Bar 45g</th>
                    <th>35</th>
                    <th>pc</th>
                    <th>Snaek</th>
                    <th>20.000</th>
                    <th>23.000</th>
                    <th>0</th>
                    <th>0</th>
                    <th>0</th>
                    <th>AAAAAAAAA</th>
                    <th>123</th>
                    <th>123</th>
                    <th>acm</th>
                    <th>acm</th>
                    
                </tr>
                <tr>
                <td style={{textAlign:'center'}}>
                    <CiMenuKebab/>
                      {/* <ul>
                        <li>Edit</li>
                        <li>Remove</li>
                      </ul> */}
                    </td>
                    <td class="organisationnumber">406</td>
                    <td class="organisationnumber">140406</td>
                    <td class="organisationnumber">140406</td>
                    <td class="organisationname">Stet clita kasd gubergren, no sea takimata sanctus est</td>
                    <td class="organisationnumber">80</td>
                    <td class="organisationnumber">30.000</td>
                    <td class="organisationnumber">35.000</td>                    
                </tr>                              
            </tbody>
          </table>
        </div>
        <div className={styleProduct.unitP}>
          <table>
            <thead>
              <tr>
                    <th>Main Products</th>
                    <th>Barcode</th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Cost price</th>
                    <th>Selling price</th>
                    <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                    <td class="organisationnumber">140406</td>
                    <td class="organisationnumber">140406</td>
                    <td class="organisationnumber">80</td>
                    <td class="organisationnumber">Box</td>
                    <td class="organisationnumber">30.000</td>
                    <td class="organisationnumber">35.000</td>
                    <td class="actions">
                    <CiMenuKebab/>
                      {/* <ul>
                        <li>Edit</li>
                        <li>Remove</li>
                      </ul> */}
                    </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Product