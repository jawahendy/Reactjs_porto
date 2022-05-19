import AboutHeader from '../../Images/about_header.png'
import AboutCustom from '../../Images/AboutCustom.png'
import './about.css';
const About = () => {
    return (
        <>
            <div className="about">
                <div>
                    <div className="img">
                        <img src={AboutHeader} alt="" />
                    </div>
                </div>
            </div>
            {/* About Content */}

            <div className="about_main container">
                <div className="content">
                    <h6><span>A</span>bout Us</h6>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <img src={AboutCustom} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <h6><span>C</span>onstruct <span>G</span>roup</h6>
                        <p>For more than six decades, PT Construction Group has
                            successfully become one of the main players in national
                            construction business and has accomplished various
                            projects across Indonesia through seven business segments.
                            we are  Indonesian general contractor engaged in a wide
                            range of construction activities including highways,
                            bridges, ports, airports, buildings, sewerage plants,
                            cement plants, factories and other industrial facilities.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;