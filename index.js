import express from "express";
import proxy from "express-http-proxy";

const app = express();

const PORT = 3000;

app.use("/", proxy("https://reqres.in"));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
