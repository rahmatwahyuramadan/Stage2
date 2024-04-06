import Family from '../assets/family.png'
import Fnb from '../assets/fnb.png'

const Table1 = () => {
    return (
        <div className="flex justify-center ml-40 mt-10 gap-11 items-center">
            <div className="text-center md:text-end rounded-lg w-full max-w-md">
                <table className="min-w-full justify-end">
                    <thead>
                        <tr>
                            <th colSpan={3} className="px-6 py-3 text-xl text-center font-semibold tracking-tight text-blue-900">Transactions</th>
                        </tr>

                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 border-y">
                        <tr>
                            <div className="flex items-center">
                                <td className="px-6 py-3 text-3xl text-end font-semibold tracking-tight text-blue-900">05</td>
                                <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                    <div>
                                        <span>Friday</span> <br />
                                        <span>August 2022</span>
                                    </div>
                                </td>
                            </div>
                            <td className="px-6 py-3 text-xl text-end font-semibold tracking-tight text-blue-900">-206,000</td>
                        </tr>
                    </tbody>


                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <div className="flex items-center">
                                <td className="px-6 py-3"><img src={Family} alt="" className='w-8' /></td>
                                <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900 ">
                                    <div>
                                        <span>Family</span> <br />
                                        <span className='font-normal'>Jajan malam minggu</span>
                                    </div>
                                </td>
                            </div>
                            <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">278,000</td>
                        </tr>
                    </tbody>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <div className="flex items-center">
                                <td className="px-6 py-3"><img src={Fnb} alt="" className='w-8' /></td>
                                <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900">
                                    <div>
                                        <span>Food & Beverages</span> <br />
                                        <span className='font-normal'>Ayam geprek mak cik</span>
                                    </div>
                                </td>
                            </div>
                            <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">28,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-green-300 tracking-wide mb-2">
                    Simple <span className='text-blue-900'>money tracker</span>
                </h1>
                <p className='text-wrap text-sm md:text-base text-blue-900 font-normal md:w-3/5'>
                    It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift
                </p>
            </div>


        </div>
    )
}

export default Table1