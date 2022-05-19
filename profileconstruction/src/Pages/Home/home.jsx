import HeaderImg from '../../Images/header.jpg';
import Custom from '../../Images/custom1.png';
import './home.css';
const Home = () => {
    return (
        <>
            <div className="header">
                <div>
                    <div className="img">
                        <img src={HeaderImg} alt="" />
                    </div>
                </div>
                <div className="Content">
                    <h6>
                        Welcome to Our Website
                    </h6>
                    <button className='btn'>Read More</button>
                </div>
            </div>

            {/* Custom section */}
            <div className="custom container">
                <div className="row profilecard">
                    <div className="col-sm-4">
                        <img src={Custom} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <h6>
                                Your trust is a passion for us
                            </h6>
                            <p> Your trust in our company will make us
                                even more enthusiastic to work faster</p>
                        </div>
                        <div>
                            <h6>
                                safety is important
                            </h6>
                            <p> Safety at work has always been our
                                vision and mission in carrying out
                                our work, so that there are no more accidents at work</p>
                        </div>
                        <div>
                            <h6>
                                work with heart
                            </h6>
                            <p> We always prioritize
                                working with heart so that we can
                                accelerate the construction of houses</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <h6>
                                work like professionals
                            </h6>
                            <p> working and behaving in such a way that others think of them as competent,
                                reliable and respectful. Professionals are a credit not only to themselves,
                                but also to others</p>
                        </div>
                        <div >
                            <h6>
                                always work on time
                            </h6>
                            <p> we always work with the right target so as to satisfy our customers</p>
                        </div>
                        <div>
                            <h6>
                                always tidy in building
                            </h6>
                            <p> We place great emphasis on tidiness when constructing a
                                building so that there is no installation that is just installed</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home