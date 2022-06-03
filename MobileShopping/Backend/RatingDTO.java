package com.example.demo.entities;

public class RatingDTO {
	String mobileId;
	String ratingId;
	public RatingDTO() {
		super();
		
	}
	public RatingDTO(String mobileId, String ratingId) {
		super();
		this.mobileId = mobileId;
		this.ratingId = ratingId;
	}
	public String getMobileId() {
		return mobileId;
	}
	public void setMobileId(String mobileId) {
		this.mobileId = mobileId;
	}
	public String getRatingId() {
		return ratingId;
	}
	public void setRatingId(String ratingId) {
		this.ratingId = ratingId;
	}
}
