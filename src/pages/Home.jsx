import '../assets/css/Home.css';
import proImg from '../assets/img/home-main.svg';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div className="h-full sm:h-[78vh] w-full sm:flex items-center justify-center mt-[4rem] bg-[#0B192C]">
                <div className=" w-full sm:w-1/2 h-full mx-[2rem] sm:mx-[10rem] mt-3 text-[#FFE1FF] flex flex-col items-start justify-center">
                    <h1 className="w-full text-4xl  font-bold">Hi There!</h1>
                    <p className="text-[2em] sm:text-[3rem] mt-[1rem] font-extrabold">I'M <span className="text-[2rem] sm:text-[3rem] font-extrabold text-purple-700 tracking-wide"> VINOTH KUMAR</span></p>

                </div>
                <div className="w-full sm:w-1/2 h-[28rem] flex justify-center shrink-0">
                    <img className='w-full sm:w-[30rem] h-[30rem]' src={proImg} alt="profileImg" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;