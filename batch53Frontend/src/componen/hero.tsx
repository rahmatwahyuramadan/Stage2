import Card from '../atom/card';
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Card4 from '../assets/card4.png';
import Feature from './feature';
import Testimonial from './testimonial';
import Footer from './Footer';
import Navbar from './Navbar';
import { TestiProvider } from '../context/testimoni/testiProvider';
import CardTestimonial from '../atom/cardTestimonial';
import { CardProvider } from '../context/Card/cardProvider';

const Hero = () => {
    return (
        <>
        <Navbar/>
            <div className="text-center mt-5">
                <h1 className="text-5xl font-bold text-green-300 tracking-wide">Simple Way</h1>
                <h1 className="text-5xl font-bold">
                    <span className="text-blue-900 tracking-wide">to Manage </span>
                    <span className="text-green-300 tracking-wide">personal finance</span>
                </h1>
            </div>

            <div className="flex flex-wrap justify-center mt-10 gap-6">
                <div className=' flex flex-wrap justify-center mt-10 gap-6'>
                <CardProvider>
                <Card />
                </CardProvider>
                </div>
                <Feature/>
            </div>
            <div className='flex flex-wrap justify-center mt-10 gap-6'>
            <TestiProvider>
            <CardTestimonial/>
            </TestiProvider>
            </div>
            <Footer/>
        </>
    )
}

export default Hero