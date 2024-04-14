import CarbonClose from '../assets/carbon_close.png'

const TransactionPage = () => {
    return (
        <div className="p-4 flex-grow">
            <div className="min-h-screen flex items-center justify-center w-full">
                <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full pt-5 pb-10">
                    <div className="flex justify-between items-center">
                        <div className="text-xl text-start font-semibold tracking-tight text-blue-900">Add Transactions</div>
                        <div className='cursor-pointer'><img src={CarbonClose} alt="" /></div>
                    </div>
                    <hr className="border-b-2 border-blue-900 w-full mb-4" />
                    <form action="#">
                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-sm font-medium text-blue-900 mb-2">Amount</label>
                            <input type="text" id="amount" className="shadow-sm rounded-md w-full px-3 py-2 border border-blue-900 bg-green-50" placeholder="0" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-sm font-medium text-blue-900 mb-2">Date</label>
                            <input type="date" id="date" className="shadow-sm rounded-md w-full px-3 py-2 border border-blue-900 bg-green-50" placeholder="08/06/2022" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-medium text-blue-900 mb-2">Category</label>
                            <input id="category" name="category" className="shadow-sm rounded-md w-full px-3 py-2 border border-blue-900 bg-green-50" required>
                                {/* <option value="" disabled selected>Select category</option>
                                <option value="blue">Blue</option>
                                <option value="white">White</option>
                                <option value="pink">Pink</option>
                                <option value="gold">Gold</option> */}
                            </input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="note" className="block text-sm font-medium text-blue-900 mb-2">Note</label>
                            <input type="text" id="note" className="shadow-sm rounded-md w-full px-3 py-2 border border-blue-900 bg-green-50" placeholder="Note" required />
                        </div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TransactionPage