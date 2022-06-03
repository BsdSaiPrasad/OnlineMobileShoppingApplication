import http from '../Rating/http-common';

class RatingService{
    getAllRatings(){
         return http.get("ratings");
    }
    deleteRatingById(ratingId){
        return http.delete("rating/"+ratingId);
    }
    updateRating(editRating){
        return http.put("rating",editRating);
    }
    getAllMobiles(){
        return http.get("mobiles");
    }
    addRatingToMobile(ratingDTO){
        return http.post("ratingdto",ratingDTO);
    }
}

export default new RatingService();