import { useState } from "react";
import RatingService from "../../Services/Rating/RatingService";

const AddRatingToMobile = () => {

    const [ratingDTO, setRatingDTO] = useState(
        {
            "mobileId":"",
            "ratingId":""
        }
    );

    // const [isEdit, setIsEdit] = useState(false);
    const [msg, setMsg] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(undefined);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRatingDTO((preratingDTO) => ({ ...preratingDTO, [name]: value }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ratingDTO);
        RatingService.addRatingToMobile(ratingDTO)
            .then((response) => {
                console.log(response.data)
                setMsg("Ratings added to Mobile successfully !");
                setErrorMsg(undefined);
            })
            .catch((error) => {
                console.log(error)
                setErrorMsg("Failed to Add Rating !");
                setMsg(undefined);
            })
    }
    return (
        <>
            <div className="Mobile">
                <h3>Add Rating to Mobile:</h3>
                {msg && <h5 className="alert alert-success">{msg}</h5>}
                {errorMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
                <form onSubmit={handleSubmit}>
                    Mobile Id:
                    <input type="text" name="mobileId" value={ratingDTO.mobileId} onChange={handleChange} /><br />
                    Rating Id:
                    <input type="text" name="ratingId" value={ratingDTO.ratingId} onChange={handleChange} /><br />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddRatingToMobile;