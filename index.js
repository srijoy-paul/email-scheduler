const express = require("express");
const app = express();


const PORT = 3002;
app.listen(PORT, () => {
    console.log("App is running on port number", PORT);
})