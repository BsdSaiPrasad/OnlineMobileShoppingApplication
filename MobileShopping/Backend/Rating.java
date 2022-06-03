package com.example.demo.entities;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Rating {
	@Id
	@Size(min = 3, max = 25, message = "Rating Id should be min of 3 chars & max of 25 chars.")
	@Pattern(regexp = "[0-9]+", message = "Rating Id should be Numeric, No space allowed.")
	private String ratingID;

	@Pattern(regexp = "[0-5]​",message = "At least 1 digit must be present between 0 to 5.")
	private String ratingFeedback;
	public Rating() {
		super();
	}
	public Rating(String ratingID,@Pattern(regexp = "[0-5]",message = "At least 1 digit must be present between 0 to 5.") String ratingFeedback) {
		super();
		this.ratingID = ratingID;
		this.ratingFeedback = ratingFeedback;
	}
	public String getRatingID() {
		return ratingID;
	}
	public void setRatingID(String ratingID) {
		this.ratingID = ratingID;
	}
	public String getRatingFeedback() {
		return ratingFeedback;
	}
	public void setRatingFeedback(String ratingFeedback) {
		this.ratingFeedback = ratingFeedback;
	}
}
	
