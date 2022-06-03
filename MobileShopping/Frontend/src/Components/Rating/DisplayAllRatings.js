


import { useEffect, useState} from "react";
import RatingService from "../../Services/Rating/RatingService";

function DisplayAllRatings() {

    const [ratings, setRatings] = useState(
        [
            {
                "ratingID": "",
                "ratingFeedback": ""
            }
        ]);

    const [editRating, setEditRating] = useState(
        {
            "ratingID": "",
            "ratingFeedback": ""
        }
    );

    const [isEdit, setIsEdit] = useState(false);
    const [msg, setMsg] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(undefined);

    const loadAllRatings = () => {
        RatingService.getAllRatings()
            .then((response) => {
                setRatings(response.data);
                console.log(response.data);
                setErrorMsg(undefined);

            })
            .catch((error) => {
                console.log(error);
                setErrorMsg("Fail to Load Ratings");
            }
            )

    };

    useEffect(() => {
        loadAllRatings();
    }, []);

    const deleteHandler = (ratingId) => {
        console.log("Rating delete called");
        RatingService.deleteRatingById(ratingId)
            .then((response) => {
                console.log("deleted:")
                console.log(response.data);
                setMsg("Rating got Deleted successfully !");
                setErrorMsg(undefined);
                loadAllRatings();
            })
            .catch((error) => {
                console.log(error);
                setErrorMsg("Fail to Delete Rating!");
                setMsg(undefined);
            })
    }

    const updateHandler = (rating) => {
        // console.log("updating" + JSON.stringify(order));
        setEditRating(rating);
        setIsEdit(true);
    };

    const changeHandle = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setEditRating(prevData => ({ ...prevData, [name]: value }));
        //console.log(value);
    };

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(editRating);
        RatingService.updateRating(editRating)
            .then((response) => {
                console.log(response.data);
                setMsg("Rating got Updated successfully !");
                setErrorMsg(undefined);
                setIsEdit(false);
                loadAllRatings();

            })
            .catch((error) => {
                console.log(error.response);
                setErrorMsg("Failed to Update Rating!");
                setMsg(undefined);
                setIsEdit(false);
            })
    };

    const updateRating = (
        <>
            <div className="editRating">
                <h3>Edit Rating:</h3>
                <form onSubmit={submitHandle}>
                    <label>Rating ID:</label>
                    <input type="text" name="ratingID" value={editRating.ratingID} onChange={changeHandle}></input><br />
                    <label>Rating Feedback:</label>
                    <input type="text" name="ratingFeedback" value={editRating.ratingFeedback} onChange={changeHandle}></input><br />
                    <input type="submit" />
                </form>
            </div>
        </>
    );

    const ratingsTableElement = (
        <>
            <div className="displayRatings" >
                <h3>Display All Ratings:</h3>
                {msg && <h5 className="alert alert-success">{msg}</h5>}
                {errorMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Rating ID</th>
                            <th>Rating Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ratings.map((rating) => (
                                <tr key={rating.ratingID}>
                                    <td>{rating.ratingID}</td>
                                    <td>{rating.ratingFeedback}</td>
                                    <td>
                                        <input className="btn btn-info" id="edit" type="button" value="Edit Rating" onClick={() => updateHandler(rating)}></input>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input className="btn btn-danger" id="delete" type="button" value="Delete Rating" onClick={() => deleteHandler(rating.ratingID)}></input>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
    return isEdit ? updateRating : ratingsTableElement
}
export default DisplayAllRatings;