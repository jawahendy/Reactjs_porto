import GalleryHeader from '../../Images/gallery_header.png';
import img1 from '../../Images/1.jpg';
import img2 from '../../Images/2.jpg';
import img3 from '../../Images/3.jpg';
import img4 from '../../Images/4.jpg';
import img5 from '../../Images/5.jpg';
import img6 from '../../Images/6.jpg';
import './gallery.css';

const Gallery = () => {
    return (
        <>
            <div className="about">
                <div>
                    <div className="img">
                        <img src={GalleryHeader} alt="" />
                    </div>
                </div>
            </div>

            {/* Main Content Gallery */}
            <div className="content">
                <h6><span>O</span>ur <span>P</span>roject</h6>
            </div>
            <div className="gallery_main container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={img1} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={img2} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={img3} className="img-fluid" alt="" />
                        </div>
                    </div>

                    {/* Second */}

                    <div className="col-sm-4">
                        <div className="box">
                            <img src={img4} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={img5} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={img6} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;