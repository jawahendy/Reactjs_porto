import homeimg from '../../Images/homepeople.png';
import './home.css'

const Home = () => {
    return (
        <>
            <div className="home_main container">
                <div className="row">
                    <div className="col-sm-7">
                        <h6><span>C</span>onsultant</h6>
                        <p>Celerates hadir sebagai
                            perusahaan yang memberikan solusi IT
                            bagi perusahaan yang ingin mengembangkan
                            bisnis dengan teknologi yang terkini.
                            Celerates juga menyediakan resource
                            talent IT sesuai dengan kebutuhan
                            perusahaan Anda dan terus diberikan
                            pelatihan untuk mengikuti trend teknologi
                            yang selalu digunakan saat ini</p>
                        <div className="posisibutton">
                            <button className='btn1' onClick="#">Find Talent</button>
                            <button className='btn2' onClick="#">Find Job</button>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img src={homeimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;