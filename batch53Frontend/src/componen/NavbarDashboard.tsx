const NavbarDashboard = () => {
    return (
        <>
            <nav className="bg-emerald-400 p-4 flex items-center justify-between shadow-lg">
                <h1 className="text-2xl text-blue-800 font-bold">Dumbcash</h1>
                <div className="flex items-center gap-3 lg:items-baseline lg:gap-5">
                    <h5 className="text-blue-900 hidden lg:block">Hello,    Rahmat Wahyu Ramadan</h5>
                    <button className="bg-green-200 text-blue-900 font-bold py-1 px-5 rounded">
                        Logout
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavbarDashboard