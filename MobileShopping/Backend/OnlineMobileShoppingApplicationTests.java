package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entities.Rating;
import com.example.demo.entities.RatingDTO;
import com.example.demo.exception.MobileException;
import com.example.demo.exception.RatingException;
import com.example.demo.service.IRatingService;

@SpringBootTest
class OnlineMobileShoppingApplicationTests {
	
	@Autowired
	private IRatingService ratingService;
	
	
	
	@Test
	public void addRatingTest() {
		
		Rating rating = new Rating("156787368","5");
		Rating newRating = null;
		
		try {
			newRating = this.ratingService.addRating(rating);
		} catch (RatingException e) {
			
			e.printStackTrace();
		}
		assertNotNull(newRating);
		assertNotEquals(null,newRating.getRatingID());
	}
	
//	@Test
//	public void addRatingtoMobileTest() {
//		
//		RatingDTO ratingDTO = new RatingDTO("636238","5678728");
//		Rating newRating = null;
//		
//		try {
//			newRating = this.ratingService.addRatingToMobile(ratingDTO);
//		} catch (MobileException e) {
//			e.printStackTrace();
//		} catch (RatingException e) {
//			e.printStackTrace();
//		}
//		assertNotNull(newRating);
//		assertNotEquals(null,ratingDTO.getMobileId());
//	}
}
