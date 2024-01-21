import React from 'react'
import './ex.css'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
export function Expense() {

    const { register, handleSubmit } = useForm()


    let dispatch = useDispatch()

    function formData(inputData) {
        
        dispatch({
            type: 'send_Data',
            payLoad: inputData
        })

    }

    let selector = useSelector((store) => {
        return store.Data
    })
    // console.log(selector)


    let income = selector.array.reduce( ( acc, selectorData) => { 
        let amount = parseFloat(selectorData.Amount)
        if (!isNaN(amount) && amount > 0) {
            acc+=amount
        }
        return acc
    },0)

    const expence = selector.array.reduce( ( acc, selectorData) => { 
        let amount = parseFloat(selectorData.Amount)
        if (amount < 0) {
            acc+=amount
        }
        return acc
    },0)
    
    const Expence = Math.abs(expence);

    let newbalance = income - Expence;
  

    return (<>
        <div className='  mt-32 w-1/4 mx-auto'>
            <p className='text-center text-xl'>CURRENT BALANCE</p>
           
            <p className='text-center text-2xl font-bold-600 font-semibold'> ${newbalance}.00 </p>

            <div className='mt-8 py-6 px-10 justify-center flex bg-white box'>
                <div className='px-11  border-r-2'>
                    <p className='text-center font-semibold'>INCOME</p>
                    <p className='text-center font-semibold text-xl text-[#b6960a]'>{income}.00</p>
                </div>
                <div className='px-11  '>
                    <p className='text-center font-semibold'>EXPENSE</p>
                    <p className='text-center font-semibold text-xl text-[#2a3dad]'>{Expence}</p>
                </div>
            </div>
            <div>
                <div className='mt-7 text-center text-xl font-semibold border-b-2 p-3'>Transaction History</div>
            </div>
            <div>
                <div className='mt-7 text-center text-xl font-semibold border-b-2 p-3'>Add New Transaction</div>
            </div>

            {
                //   <button class="h-6 w-6 text-2xl font-bold absolute -left-7 bg-red-600 opacity-0 hover:opacity-100 transition-opacity text-white p-0.5 text-xs  _del">-</button>
                selector.array.map((d, index) => {
                    return (<>
                        {/* <div className="border-red-700 'w-full relative _parent flex justify-between p-3 mt-3 mb-3 bg-white shadow-emerald-300 border-r-4  box"> */}
                        <div className='border-red-700 w-full relative _parent flex justify-between p-3 mt-3 mb-3 bg-white shadow-emerald-300 border-r-4 box group hover:group-hover'>
                            <button onClick={function () {
                                dispatch({
                                    type: 'Delete',
                                    payload: index
                                })
                                // h-6 w-6  font-bold absolute -left-7 bg-red-600 opacity-0 hover:opacity-100 transition-opacity text-white p-0.5 text-xs  _del
                            }} className="h-6 w-6 font-bold absolute -left-7 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity text-white p-0.5 text-xs _del">X</button>
                            <div className=''>{d.description}</div>
                            <div className=''>{d.Amount}</div>
                        </div>

                        {/* h-6 w-6 font-bold absolute -left-7 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity text-white p-0.5 text-xs _del" */}
                    </>

                    )

                })
            }
            <form onSubmit={handleSubmit(formData)} className=' mt-5 flex flex-col'>
                <label htmlFor="" className='mb-2'>Description</label>
                <input type="text" {...register('description') } className='mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required/>


                <label htmlFor="" className='mb-2'>Transaction Amount</label>
                <input type="number" {...register('Amount')} className='mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' />

                {/* <button className='mt-4'>Add Transaction</button> */}
                <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Add Transaction
                </button>
            </form>
        </div>
    </>
    )
}

