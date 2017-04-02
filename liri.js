// npm installs
var request = require("request");
var twitter = require("twitter");
var spotify = require("spotify");

// ask the user what they want to do which means adding in the inquirer so you can use prompt. build out functions for each question.
//  lets do omdb first. you are going to need

if (process.argv[2] === "movie-this") {

    var nodeArgs = process.argv;

    var movie = "";

   for (var i = 3; i < nodeArgs.length; i++) {

       if (i > 3 && i <nodeArgs.length){

       movie = movie + "+" + nodeArgs[i];
   } 
    else {

       movie += nodeArgs[3];
   }

   } 
   var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
   console.log(queryURL);
    // ajax call
   request(queryURL, function (error, response, body) {
    if (!error && response.statusCode === 200) {

    
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Imdb rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Cast: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoe score: " + JSON.parse(body).Ratings[1].Value);
    console.log("Rotten Tomatoe url: " + JSON.parse(body).Ratings[1].Source); //needs some work

    
  }
})
    
  };


// twitter 
