import Bharathruchita from '../assets/photos/1743108800741.jpg'; 
import './imdslide.css';
const Imgslide=()=>{
    
    return(
        <section>
            <div className="abou">
            </div>
           
            <div className="scale-img-slider-main">
            <div className="scale-img-slider container1">
                <img src={Bharathruchita} alt="Bharath&ruchita" className="scale-img" />
            </div>
            <div className="scale-img-slider container2">
            <img src={Bharathruchita} alt="Bharath&ruchita" className="scale-img" />
            </div>
            <div className="scale-img-slider container3">
            <img src={Bharathruchita} alt="Bharath&ruchita" className="scale-img" />
            </div>
            <div className="scale-img-slider container4">
            <img src={Bharathruchita} alt="Bharath&ruchita" className="scale-img" />
            </div>
            </div>
            <div className="below">

            </div>
            
        </section>
    )
}
export default Imgslide;