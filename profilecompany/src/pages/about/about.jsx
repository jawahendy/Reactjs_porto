import './about.css';
import AboutImg from '../../Images/aboutImage.png';

const About = () => {
    return (
        <>
            <div className="about_main container">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <h6><span>A</span>bout <span>U</span>s</h6>
                        <p>Celerates adalah startup yang bergerak di
                            bidang IT Consultant dan memiliki fokus
                            dalam pengembangan industri IT di Indonesia.
                            Selain itu, Celerates hadir sebagai solution
                            provider dan IT resource provider,
                            untuk membantu perusahaan-perusahaan yang
                            butuh tenaga IT untuk mengembangkan bisnis
                            mereka.</p>
                        <div className="posisibutton">
                            <button className='btn' onClick="#">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;