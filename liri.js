// npm installs
var request = require("request");
var twitter = require("twitter");
var spotify = require("spotify");

// ask the user what they want to do which means adding in the inquirer so you can use prompt. build out functions for each question.
//  lets do omdb first. you are going to need

if (process.argv[2] == "movie-this") {
    var movie = process.argv[3];
   
    // ajax call
   request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json", function (error, response, body){
    if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Imdb rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Cast: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoe score: " + JSON.parse(body).Ratings[1].Value);
    console.log("Rotten Tomatoe url: " + JSON.parse(body).Ratings[1].Source); //needs some work

    
  }
});
    
  };

  if (process.argv[2]== "my-tweets") {
      
  }