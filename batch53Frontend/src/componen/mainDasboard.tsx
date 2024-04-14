import TableMain1 from "../atom/tableMain1"
import TableMain2 from "../atom/tableMain2"
import TableMain3 from "../atom/tableMain3"
import NavbarDashboard from "./NavbarDashboard"
import { useNavigate } from "react-router-dom"
import { Table1Provider } from "../context/tableMain1/table1Provider"
import { Table2Provider } from "../context/tableMain2/table2Provider"


const MainDashboard = () => {
    const navigate = useNavigate()

    const AddTrans = () => {
        navigate ("/addTransaction")
    }

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
            <div className="m-10">
            <button onClick={AddTrans} className="flex items-center justify-center">
                    <p className="w-12 h-12 text-4xl font-bold text-white bg-[#393939] rounded-full">+</p>
            </button>
            </div>
        </>
    )
}

export default MainDashboard