const express = require("express"); 

const app = express();

app.get("/", function(request, response) {   //what happens when a browser makes a get request to the home directory (root "/")
    // console.log(request);
    response.send("Welcome");
}) 

app.get("/contact", function(req, res) {
    res.send("Contact me at briceouoba@gmail.com");
})

app.get("/hobbies", function(req, res) {
    res.send("As you'd guess, I love coding. Still there's a little bit of place for video games and music.");
})

app.get("/about", function(req, res) {
    res.send("Hi I'm Rene, recent computer science graduate. I have been learning lots of new stuff since; especially web development. It can be a little challenging at times, but nothing beats a good working code!");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});