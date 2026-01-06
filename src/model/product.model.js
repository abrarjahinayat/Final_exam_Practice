const { default: mongoose } = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      unique: true,
    },
    image: [
      {
        type: String,
        required: [true, "image is required"],
      },
    ],
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
      variantType: {
      type: String,
      enum: ["SingleVarient", "MultiVarient"],
      default: "none",
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
