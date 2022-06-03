package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entities.Rating;

public interface IRatingRepository extends MongoRepository<Rating, String> {

}
