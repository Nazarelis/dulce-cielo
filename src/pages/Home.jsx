import FirstBanner from "../components/FirstBannerHome"
import SectionOurProducts from "../components/SectionOurProducts"
import SectionAbout from "../components/SectionAbout"
import rectangle1 from "../assets/rectangle1.png"
import rectangle2 from '../assets/rectangle2.png'
import SectionPrice from "../components/SectionPrice"
import SectionOpinions from '../components/SectionOpinion'
 

function Home() {
    return (
        <>
        <FirstBanner />
        <SectionOurProducts />

        <div className="w-full flex justify-center items-center mt-10 mb-10 h-auto">
            <div className="bg-[#52989C] w-3/4 h-24 flex justify-center items-center">
                <p className="text-7xl text-[#F8F8F8] font-euphoria">
                Si lo puedes imaginar, lo puedes crear
                </p>
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