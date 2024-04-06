import TableMain1 from "../atom/tableMain1"
import TableMain2 from "../atom/tableMain2"
import TableMain3 from "../atom/tableMain3"
import AddTrans from "../assets/AddTrans.png"
import NavbarDashboard from "./NavbarDashboard"
import dammyData from "../mocks/user.json"
import React from "react"
import { Iwallet } from "../interface/wallet"
import { Table1Provider } from "../context/tableMain1/table1Provider"
import { Table2Provider } from "../context/tableMain2/table2Provider"


const MainDashboard = () => {
    

    return (
    
        <>
        
        <NavbarDashboard/>
            <div className="container mx-auto mt-5 text-center justify-center grid grid-cols-3 flex gap-5 border-b border-green-500 ">
                <h1 className="font-bold text-xl text-blue-900 mt-5">LAST MONTH</h1>
                <h1 className="font-bold text-xl text-blue-900 border-b-4 border-green-500">THIS MONTH</h1>
                <h1 className="font-bold text-xl text-blue-900">FUTURE</h1>
            </div>
            <div className="flex flex-wrap justify-center mt-10 gap-11 items-start mb-10">
                <div className="w-full sm:w-auto">
                    <Table1Provider>
                    <TableMain1 />
                    </Table1Provider>
                </div>
                <div className="w-full sm:w-auto">
                    <Table2Provider>
                    <TableMain2 />
                    </Table2Provider>
                </div>
                <div className="w-full sm:w-auto">
                    <TableMain3 />
                </div>
            </div>
            <div className="">
            <img src={AddTrans} alt="" className="absolute bottom-4 right-4 cursor-pointer" />
            </div>
        </>
    )
}

export default MainDashboard