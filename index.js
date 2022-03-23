const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({origin: ["*", "https://www.freecodecamp.org"]}));
app.set("trust proxy", true);

app.get("/", (req, res) => {
    res.json({hello: "world", path: "/api/whoami"});
});

app.get("/api/whoami", (req, res) => {
    const headers = req.headers;
  console.log(headers)
    return res.json({
        ipaddress: (headers["x-forwarded-for"] ? headers["x-forwarded-for"].split(", ")[0] : null) || req.ip || req.socket.remoteAddress || "",
        language: headers["accept-language"],
        software: headers["user-agent"]
    })
});

app.listen(2080, () => console.log("Now listening to port RTX 2080"));