const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");


    // res.send("Server is up and running");
})


app.post("/", function(req, res) {
    const query = req.body.cityName;
    const apiKey = "db803dcb7d46a3836224eee3fb054737";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(response) {
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.list[0].main.temp;
            const description = weatherData.list[0].weather[0].description;
            const icon = weatherData.list[0].weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            // console.log(description);
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees.</h1>");
            res.write("<img src=" + imgURL + ">");
            res.send();
        })
    })
})

   


app.listen(3000, function() {
    console.log("Server active on port 3000");
})