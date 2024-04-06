import Family from '../assets/family.png'
import Fnb from '../assets/fnb.png'
import Salary from '../assets/salary.png'
import Piechart from '../assets/piechart.png'
import React, {useState} from 'react'
import { Isumary } from '../interface/sumary' 
import dammyData from '../mocks/sumary.json'

const TableMain3 = () => {
    const [sumary, setSumary] = React.useState<Isumary[]>(dammyData)
    return (
        <div className="mt-5 w-full max-w-sm bg-white border rounded-lg overflow-hidden w-100 ">
            <table className="min-w-full justify-end">
                <thead>
                    <tr>
                        <th colSpan={3} className="px-6 py-3 text-xl text-center font-semibold tracking-tight text-blue-900">Summary Expense</th>
                    </tr>

                </thead>
                <tbody className="bg-white divide-y divide-gray-200 border-t ">
                    <tr>
                        <div className="flex items-center">
                            <td className="px-6 py-3"><img src={Piechart} alt="" className='w-100' /></td>
                        </div>
                        <td className="px-6 py-3 text-xl text-end font-semibold tracking-tight text-red-500">4,662,000</td>
                    </tr>
                </tbody>
            {sumary.map((data: Isumary) => {
                const amountColor = data.category === "Sallary"? "#0092FC" : "#FC0000"
                
                const background = data.category === "Sallary"? "#08DB76" : data.category === "Family"? "#DBC608" : "#089CDB"
            const tamplate = 
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <div className="flex items-center">
                            <td className="w-12 rounded-full flex justify-center items-center" style={{backgroundColor: background}}>
                                <img src={data.image} 
                                alt="" 
                                width={30} />
                            </td>

                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900 ">
                            <div>
                                    <span>{data.category}</span> <br />
                                    <span className='font-normal'>{data.note}</span>
                                </div>
                            </td>
                        </div>
                        <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500" style={{color: amountColor}}>{data.nominal}</td>
                    </tr>
                </tbody>
                return tamplate
            })}
            </table >
        </div >
    )
}

export default TableMain3