import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    const login = () => {
        navigate ("/login")
    }

    const register =() => {
        navigate ("/register")
    }
    return (
        <>
            <nav className="bg-white p-4 flex items-center justify-between shadow-lg">
                <h1 className="text-2xl text-blue-800 font-bold">Dumbcash</h1>
                <div>
                    <button onClick={login} className="bg-white text-blue-800 font-bold py-1 px-5 rounded">
                        Login
                    </button>
                    <button onClick={register} className="bg-green-200 text-blue-800 font-bold py-1 px-5 rounded">
                        Signup
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar