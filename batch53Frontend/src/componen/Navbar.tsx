const Navbar = () => {
    return (
        <>
            <nav className="bg-white p-4 flex items-center justify-between shadow-lg">
                <h1 className="text-2xl text-blue-800 font-bold">Dumbcash</h1>
                <div>
                    <button className="bg-white text-blue-800 font-bold py-1 px-5 rounded">
                        Login
                    </button>
                    <button className="bg-green-200 text-blue-800 font-bold py-1 px-5 rounded">
                        Signup
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar