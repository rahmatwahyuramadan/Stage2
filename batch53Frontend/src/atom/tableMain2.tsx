// 
import React, { useContext } from 'react';
import { table2Context } from '../context/tableMain2';

const TableMain2 = (): React.JSX.Element => {
    const { tables } = useContext(table2Context);
    return (
        <>
        <table className='border rounded-lg'>
        <thead>
                    <tr>
                        <th colSpan={3} className="px-6 py-3 text-xl text-center font-semibold tracking-tight text-blue-900">Transaction</th>
                    </tr>

                </thead>
       
            {tables.map((table, index) => (
                
                <tbody key={index} className="bg-white divide-y divide-gray-200 border-y" >
                    
                    <tr>
                        <td className="px-6 py-3 text-3xl text-end font-semibold tracking-tight text-blue-900">{table.date}</td>
                        <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                            <div>
                                <span>{table.day}</span> <br />
                                <span>{table.month} {table.year}</span>
                            </div>
                        </td>
                        <td className="px-6 py-3 text-xl text-end font-semibold tracking-tight text-blue-900">{table.total}</td>
                    </tr>
                    {table.transactions.map((transaction, idx) => (
                        <tr key={idx}>
                            <td className="px-6 py-3"><img src={transaction.image} alt="" className='w-8' /></td>
                            <td className="px-2 py-3 text-sm tracking-tight text-left text-blue-900 ">
                                <div>
                                    <span className="font-semibold">{transaction.category}</span> <br />
                                    <span className='font-normal'>{transaction.note}</span>
                                </div>
                            </td>
                            <td className={transaction.category === "Salary" ? 'font-semibold text-blue-500 px-6 py-3 text-sm text-end font-semibold tracking-tight' : 'font-semibold text-red-500 px-6 py-3 text-sm text-end font-semibold tracking-tight'}>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
                
            ))}
             </table>
        </>
    );
};

export default TableMain2;