# DS-CA1

# DS-CA1 Serverless REST Assignment

**Name:** Maxamed Maxamed  
**Student No:** 20088349

This repository contains an implementation of a serverless REST API for the AWS platform. The CDK framework is used to provision its infrastructure. The API's domain context is movie reviews.

## API Endpoints

- POST /movies/reviews - Add a movie review.
- GET /movies/{movieId}/reviews - Get all the reviews for a movie with the specified ID.
- GET /movies/{movieId}/reviews?minRating=n - Get all the reviews for the film with the specified ID whose rating was higher than the minRating.
- GET /movies/{movieId}/reviews/{reviewerName} - Get the review for the movie with the specified movie ID and written by the named reviewer.

## Screenshots from AWS Management Console

1. **API Gateway Overview:**
   ![API Gateway Overview](path/to/screenshot1.png)

2. **Deployed API Endpoints:**
   ![Deployed API Endpoints](path/to/screenshot2.png)
