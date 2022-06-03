import { useEffect, useState } from "react";
import RatingService from "../../Services/Rating/RatingService";

function DisplayAllMobiles() {

    const [mobiles, setMobiles] = useState([{
        "mobileId": "",
        "mobileName": "",
        "mobileCost": "",
        "quantity": "",
        "mfd": "",
        "modelNumber": "",
        "companyName": "",
        "rating": {
            "ratingID": "",
            "ratingFeedback": "​​​"
        },
        "feedback": {
            "feedbackId": "",
            "form": "",
            "dateTime": ""
        }
    }]);

    useEffect(() => {
        loadAllMobiles();
    }, []);

    const loadAllMobiles = () => {
        RatingService.getAllMobiles()
            .then((response) => {
                console.log(response.data);

                setMobiles(response.data);
            })
            .catch((error) => { console.log(error) })
    };

    const mobilesTableElement = (
        <>
            <h3>Display All Mobiles:</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Mobile Id</th>
                        <th>Mobile Name</th>
                        <th>Model Number</th>
                        <th>Company Name</th>
                        <th>Rating ID</th>
                        <th>Rating Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mobiles.map((mobile) => (
                            <tr key={mobile.mobileId}>
                                <td>{mobile.mobileId}</td>
                                <td>{mobile.mobileName}</td>
                                <td>{mobile.modelNumber}</td>
                                <td>{mobile.companyName}</td>
                                {mobile.rating && <td>{mobile.rating.ratingID}</td>}
                                {mobile.rating && <td>{mobile.rating.ratingFeedback}</td>}
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </>

    );
    return (
        <>
            {mobilesTableElement}
        </>
    );
}
export default DisplayAllMobiles;