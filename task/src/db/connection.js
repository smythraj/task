const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://root:root@crudbestone.56ezj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connected database......");
  })
  .catch((err) => {
    console.log("connection failed...");
  });
