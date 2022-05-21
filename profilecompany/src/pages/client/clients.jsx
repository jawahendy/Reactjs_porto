import './client.css';
import Imgae1 from '../../Images/1.png';
import Image2 from '../../Images/2.png';
import Image3 from '../../Images/3.png';
import Image4 from '../../Images/4.png';
import Image5 from '../../Images/5.png';
import Image6 from '../../Images/6.png';
import Imgae7 from '../../Images/7.png';
import Image8 from '../../Images/8.png';
import Image9 from '../../Images/9.png';
import Image10 from '../../Images/10.png';
import Image11 from '../../Images/11.png';
import Image12 from '../../Images/12.png';

const Clients = () => {
    return (
        <>
            <div className="clients_main container">
                <div className="content">
                    <h6><span>O</span>ur <span>C</span>lient</h6>
                </div>
                <div class="row bottom_position">
                    <div class="column">
                        <div class="card">
                            <img src={Imgae1} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image3} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image4} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image5} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image6} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Imgae7} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image8} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image9} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image10} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image11} alt="" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Image12} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Clients

