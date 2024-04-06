const LoginPage = () => {
    return (
        <div className="p-4 flex-grow">
            <div className="min-h-screen flex items-center justify-center w-full">
                <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full pt-10 pb-10">
                    <h1 className="text-2xl font-bold text-start mb-4 text-blue-900">Login</h1>
                    <form action="#">
                        <div className="mb-4">
                            <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-blue-900 bg-green-50" placeholder="Email" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-blue-900 bg-green-50" placeholder="Password" required />
                        </div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600">Login</button>
                        <div className="text-center mt-4">
                            <p className="text-xs text-gray-600">Don't have an account ? <span className="font-bold">Klik Here</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage