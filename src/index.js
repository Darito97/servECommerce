import App from "./app.js";
import connectDB from "./database/db.js";

App.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDB();
});
