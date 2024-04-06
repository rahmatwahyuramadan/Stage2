import React from "react"
import Footer from "../componen/Footer"
import Navbar from "../componen/NavbarDashboard"

const Home = () : React.JSX.Element => {

    const [count, setCount] = React.useState<number>(0)


    return(
        <>
            <Navbar/>

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click Here</button>

           
            
            
            <Footer/>
        </>
    )
}

export default Home