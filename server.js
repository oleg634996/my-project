const app = require("./app");

const mongoose = require("mongoose")

const {DB_HOST , PORT= 3000 }= process.env


mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT)
  console.log("servrr OK")})
  .catch(err => {
    console.log({ message: err.message })
    process.exit(1)
})
// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
