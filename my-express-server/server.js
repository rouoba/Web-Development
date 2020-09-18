const express = require("express"); 

const app = express();

app.get("/", function(request, response) {   //what happens when a browser makes a get request to the home directory (root "/")
    // console.log(request);
    response.send("Hi");
})   

app.listen(3000, function() {
    console.log("Server started on port 3000");
});