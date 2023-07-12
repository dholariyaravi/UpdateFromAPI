module.exports = (mongoose) => {
  const Tutorial = mongoose.model(
    "Ravi",
    mongoose.Schema(
      {
        fname: String,
        lname: String,
        phone: Number,
        clg: String,
        city: String,
     },
      { timestamps: true }
    )
  );

  return Tutorial;
};
