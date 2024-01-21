import React from 'react'

// mongo web == httpscloud.mongodb.comv26597f5f78182b618ccb5df4b#metricsreplicaSet6597fbcce2775d73f407778aexplorer
import "./login.css"
import axios from 'axios'
export function Login() {
  // async function submit() {
  //   try {
  //     const data = {
  //        userName: "saqib", 
  //       password : "1122",
  //       contact:"+923030099",
  //       email:"saqib@ayaz@gamil.com"

  //       }
  //     const response = axios.post("http://localhost:2200/api/user/add_data",data)
  //     if (response.status === 200) {
  //       console.log(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // async function getUser() {
  //   try {
     
  //     const response = axios.get("http://localhost:2200/api/user/get-user-data")
  //     if (response.status === 200) {
  //       console.log(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (<>
    <>
      <>
        {/* component */}
        {/* Creat By Joker Banny */}
        <div className="h-[86.6vh] mt-4  bg-purple-400 flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-purple-300 top-28 -left-16 z-0 transform rotate-45 hidden md:block" />
          <div className="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-6 right-10 transform rotate-12 hidden md:block" />
          <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Create An Account
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                Create an account to enjoy all the services without any ads for free!
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Email Addres"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
              />
              <input
                type="text"
                placeholder="Password"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
              />
            </div>
            <div className="text-center mt-6">
              <button className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
                Create Account
              </button>
              <p className="mt-4 text-sm">
                Already Have An Account?{" "}
                <span className="underline  cursor-pointer"> Sign In</span>
              </p>
            </div>
          </form>
          <div className="w-40 h-40 absolute bg-purple-300  rounded-full top-16  right-12 hidden md:block" />
          <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
        </div>
        <button onClick={submit}>submit data</button>
        <button onClick={getUser}>get data</button>
      </>

    </>

  </>
  )
}
