package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.RatingDTO;
import com.example.demo.entities.Rating;
import com.example.demo.exception.MobileException;
import com.example.demo.exception.RatingException;

public interface IRatingService {

	Rating addRating(Rating rating) throws RatingException;

	String cancelRating(String ratingID) throws RatingException;

	Rating updateRating(Rating rating) throws RatingException;
	
	Rating getRatingByid(String ratingId) throws RatingException;
	
	List<Rating> showAllRatings();

	Rating addRatingToMobile(RatingDTO addRatingDTO) throws MobileException, RatingException;

}
