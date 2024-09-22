import FirstBanner from "../components/FirstBannerHome"
import SectionOurProducts from "../components/SectionOurProducts"
import SectionAbout from "../components/SectionAbout"
import rectangle1 from "../assets/rectangle1.png"
import rectangle2 from '../assets/rectangle2.png'
import SectionPrice from "../components/SectionPrice"
import SectionOpinions from '../components/SectionOpinion'
import cupcake from '../assets/logoCupcake.png'

function Home() {
    return (
        <>
        <FirstBanner />
        <SectionOurProducts />

        <div className="md:w-full w-11/12 flex justify-center items-center mt-10 mb-10 md:h-auto">
            <div className="bg-[#D34285] md:w-3/5 md:h-24 flex md:justify-evenly items-center">
                <img src={cupcake} alt="" className="md:w-12 w-8" />
                <p className="md:text-7xl text-3xl pl-4 pr-4 md:pl-0 mr:pr-0 text-[#F8F8F8] font-euphoria">
                Horneamos con amor
                </p>
                <img src={cupcake} alt="" className="md:w-12 w-8" />
            </div>
        </div>

        <SectionAbout />

        <div className="w-full flex justify-center">
            <img src={rectangle1} alt="" />
        </div>

        <SectionPrice/>

        <div className="w-full flex justify-center">
            <img src={rectangle2} alt="" />
        </div>

        <SectionOpinions/>
        

        </> 
    )}
export default Home