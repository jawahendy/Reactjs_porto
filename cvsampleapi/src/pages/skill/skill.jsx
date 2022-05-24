import './skill.css'
import LineChart from '../../chart/linechart';
import { useState } from "react";
import { UserData } from '../../data/Data';

const Chart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    return (
        <>
            <div className="clients_main container">
                <div className="content">
                    <h6><span>C</span>hart</h6>
                </div>
                <div className='positionchart'>
                    <LineChart chartData={userData} />
                </div>
            </div>
        </>
    )
}
export default Chart