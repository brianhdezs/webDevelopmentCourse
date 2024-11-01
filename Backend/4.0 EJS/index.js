import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay;

    res.render("index.ejs", {
        dayType: "a weekday",
        advice: "it's time to work hard",
    });
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}.`)
})