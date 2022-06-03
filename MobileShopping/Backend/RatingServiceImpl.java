package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.RatingDTO;
import com.example.demo.entities.Mobile;
import com.example.demo.entities.Rating;
import com.example.demo.exception.MobileException;
import com.example.demo.exception.RatingException;
import com.example.demo.repository.IMobileRepository;
import com.example.demo.repository.IRatingRepository;

@Service
public class RatingServiceImpl implements IRatingService {
	@Autowired
	private IRatingRepository ratingRepo;
	@Autowired
	private IMobileRepository mobileRepo;
	
	@Override
	public Rating addRating(Rating rating) throws RatingException {
		Optional<Rating> newRating = this.ratingRepo.findById(rating.getRatingID());
		if(newRating.isPresent()) {
			throw new RatingException("Your account already exists in OnlineMobileShopping App");
		}
		return this.ratingRepo.save(rating);
	}

	@Override
	public String cancelRating(String ratingID) {
		this.ratingRepo.deleteById(ratingID);
		return "rating deleted successfully";
	}

	@Override
	public Rating updateRating(Rating rating) {
		return this.ratingRepo.save(rating);
		
	}

	@Override
	public Rating getRatingByid(String ratingId) {
		Optional<Rating> ratingOptional = this.ratingRepo.findById(ratingId);
		return ratingOptional.get();
	}

	@Override
	public List<Rating> showAllRatings() {
		return ratingRepo.findAll();
	}
	
	@Override
	public Rating addRatingToMobile(RatingDTO addRatingDTO)throws MobileException, RatingException{
		Optional<Rating>ratingOpt=this.ratingRepo.findById(addRatingDTO.getRatingId());
		if (ratingOpt.isEmpty())
			throw new RatingException("Rating Id doesn't exist");
		Rating rating=ratingOpt.get();
		Optional<Mobile>mobileOpt=this.mobileRepo.findById(addRatingDTO.getMobileId());
		if (mobileOpt.isEmpty())
			throw new MobileException("Mobile Id doesn't exist");
		Mobile mobile=mobileOpt.get();
		if(mobile.getRating()==null)
			mobile.setRating(rating);
		this.mobileRepo.save(mobile);
		return mobile.getRating();
	}
}

	

