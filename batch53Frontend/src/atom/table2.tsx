import Family from '../assets/family.png';
import Fnb from '../assets/fnb.png';
import Salary from '../assets/salary.png'

const Table2 = () => {
    return (
        <div className="flex  justify-center mt-10 gap-11 items-center">
            <div className="text-center md:text-end rounded-lg w-full max-w-md">
                <h1 className="text-lg md:text-2xl font-bold text-blue-900 tracking-wide mb-2 ">
                    Paintless <span className='text-green-300'>budgeting</span>
                </h1>
                <p className='text-sm md:text-base text-blue-900 font-normal'>
                    One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.
                </p>
            </div>

            <div className="mt-5 w-full max-w-sm bg-white border">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th colSpan={3} className="px-6 py-3 text-xl text-center font-semibold tracking-tight text-blue-900">Summary Expense</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 border-y">
                        <tr>
                            <td className="px-6 py-3"><img src={Family} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900 ">
                                Family
                            </td>
                            <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">278,000</td>
                        </tr>
                    </tbody>
                    <tbody className="bg-white divide-y divide-gray-200 border-y">
                        <tr>
                            <td className="px-6 py-3"><img src={Fnb} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900 ">
                                Food & Beverages
                            </td>
                            <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-red-500">60,000</td>
                        </tr>
                    </tbody>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-3"><img src={Salary} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-blue-900">
                                <div>
                                    <span>Sallary</span> <br />
                                    <span className='font-normal'>Gaji bulan juli</span>
                                </div>
                            </td>
                            <td className="px-6 py-3 text-sm text-end font-semibold tracking-tight text-blue-400">5,000,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table2;