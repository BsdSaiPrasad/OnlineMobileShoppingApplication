
package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RatingDTO;
import com.example.demo.entities.Rating;
import com.example.demo.exception.MobileException;
import com.example.demo.exception.RatingException;
import com.example.demo.service.IRatingService;

@CrossOrigin(value="http://localhost:3000/")
@RestController
@RequestMapping("api")
public class RatingController {
	@Autowired
	private IRatingService rateService;
	
	@GetMapping("ratings")
	public List<Rating> getAllRating(){
		return this.rateService.showAllRatings();
	}
	
	@PostMapping("rating")
	public Rating addRating(@Valid @RequestBody Rating rating) throws RatingException {
		return this.rateService.addRating(rating);
	}
	
	@DeleteMapping("rating/{id}")
	public String cancelRating(@PathVariable("id") String ratingid) throws RatingException {
		return this.rateService.cancelRating(ratingid);
	}
	
	@PutMapping("rating")
	public Rating updateRating(@RequestBody Rating rating) throws RatingException {
		return this.rateService.updateRating(rating);
	}
	
	@GetMapping("rating/{id}")
	public Rating getRatingByid(@PathVariable("id") String ratingid) throws RatingException{
		return this.rateService.getRatingByid(ratingid);
	}
	
	@PostMapping("ratingdto")
	public Rating addRatingtoMobile(@RequestBody RatingDTO ratingDTO) throws MobileException, RatingException{
		return this.rateService.addRatingToMobile(ratingDTO);
	}
}

