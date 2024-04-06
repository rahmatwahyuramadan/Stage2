import React, { useContext } from 'react';
import { table1Context } from '../context/tableMain1'

const TableMain1 = (): React.JSX.Element => {
    const { tables } = useContext(table1Context)

    return (
        <>
        
        <div className='flex flex-col w-full max-w-sm'>

        <div className="mt-5 w-full max-w-sm bg-white rounded-lg overflow-hidden">

            <div className="bg-white divide-gray-200 pe-5">
                <tr>
                    {tables.map((table) => (
                        <div key={table.id} className="flex items-center border">
                            <td className="px-6 py-3"><img src={table.image} alt="" className='w-12' /></td>
                            <td className="px-2 py-3 text-sm font-semibold tracking-tight text-left text-green-300">
                                <div>
                                    <span>{table.title}</span> <br />
                                    <span className='text-blue-900 text-2xl'>{table.cash}</span>
                                </div>
                            </td>
                        </div>
                    ))}
                </tr>
            </div>
        </div>
        </div>
            
        </>


    )
}

export default TableMain1