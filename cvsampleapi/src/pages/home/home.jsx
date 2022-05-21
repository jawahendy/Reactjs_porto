import axios from 'axios';
import './home.css'
import { useEffect, useState } from 'react';

const Home = () => {
    const url = 'https://reqres.in/api/users/2'
    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setEmployee(response.data)
            })
    }, [url])
    if (employee) {
        return (
            <>
                <div className="home_main container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h6>{employee.data.first_name + " " + employee.data.last_name}</h6>
                            <p>hello my name is Janet Weaver, I'm interested in Flutter,Node JS,golang developer with
                                strong passion to learn new things. I am familiar with Nodes JS and Golang Frameworks, and I
                                have developed an API using Express,for Golang I have developed an API using Gin and
                                reveal,and for front end use react js and Flutter. Currently I am interested and learning about
                                microservices,design pattern and mobile programing.</p>
                            <div className="posisibutton">
                                <button className='btn1' onClick="#">Hire Me</button>
                                <button className='btn2' onClick="#">Call Me</button>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <img src={employee.data.avatar} alt="" />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="home_main container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h6><span>C</span>onsultant</h6>
                            <p>hello my name is Janet Weaver, I'm interested in Flutter,Node JS,golang developer with
                                strong passion to learn new things. I am familiar with Nodes JS and Golang Frameworks, and I
                                have developed an API using Express,for Golang I have developed an API using Gin and
                                reveal,and for front end use react js and Flutter. Currently I am interested and learning about
                                microservices,design pattern and mobile programing.</p>
                            <div className="posisibutton">
                                <button className='btn1' onClick="#">Hire Me</button>
                                <button className='btn2' onClick="#">Call Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;