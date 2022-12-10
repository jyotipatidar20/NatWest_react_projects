import React, { useState } from 'react';
import './App.css';

 const _ = require('lodash')


 export default function DataObj() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState([])
  const [allsearch, setAllsearch] = useState("")
  const [allList, setAllList] = useState([])
  const searchFunction = () => {
    if (allsearch.length >4) {
      let filteredItems = _.filter(allData, { "firstName": allsearch })
      setAllList(filteredItems)
      console.log(filteredItems)
    }
  }


  return (
    <div >
      
        <center>
        <div  id="search">
        <input style={{color:"red",background:"lightgrey"}}  type="search" placeholder='search Here...' onChange={(e) => {
          setAllsearch(e.target.value)
          searchFunction()
        }} />
        </div>
        <input   style={{backgroundColor:"lightgreen" ,textAlign:"center",marginTop:"20px"}} type="text" placeholder='firsname' onChange={(e) => {
          setFirstName(e.target.value)
        }} />
        <input  style={{backgroundColor:"lightgreen" ,textAlign:"center"}} type="text" placeholder='lastname' onChange={(e) => {
          setLastName(e.target.value)
        }} />
        <input  style={{backgroundColor:"lightgreen",textAlign:"center"}} type="email" placeholder='email' onChange={(e) => {
          setEmail(e.target.value)
        }} />
        <input  style={{backgroundColor:"lightgreen",textAlign:"center"}} type="password" placeholder='password' onChange={(e) => {
          setPassword(e.target.value)
        }} />
        <button   style={{backgroundColor:"blue" ,textAlign:"center"}} onClick={() => {
          let temObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          }
          console.log(temObj)
          setAllData([...allData, temObj])
          console.log(allData)
        }}>Signup</button>
        {
          allsearch.length >4 ? allList.map((item, index) => {
            return (
              <div   id="valuebox">
                <table>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                </table>
              </div>
            )
          }):

          allData.map((item, index) => {
           return (
              <div>
                <table>
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                </table>


              </div>
            )
            
          })
        

        }
      </center>
    </div>
  )
}

