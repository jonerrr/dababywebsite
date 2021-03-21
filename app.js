// const config = require("./config.json");
const express = require("express");
// const dynamoose = require("dynamoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const nanoid = require("nanoid");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// const {
//   RekognitionClient,
//   CompareFacesCommand,
// } = require("@aws-sdk/client-rekognition");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const app = express();
app.use(cors());

// dynamoose.aws.sdk.config.update({
//   accessKeyId: config.KEY,
//   secretAccessKey: config.SECRET,
//   region: config.REGION,
// });
// const client = new S3Client({ region: config.REGION });

// const imageSchema = new dynamoose.Schema({
//   id: {
//     type: String,
//   },
//   enabled: {
//     type: Boolean,
//   },
// });

// const userSchema = new dynamoose.Schema({
//   id: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
// });

// const totalSchema = new dynamoose.Schema({
//   imageTotal: {
//     type: String,
//   },
//   time: {
//     type: Date,
//   },
// });

// const imageModel = dynamoose.model("dababy-images", imageSchema, {
//   create: false,
// });

// const userModel = dynamoose.model("dababy-users", userSchema, {
//   create: false,
// });

// const totalModel = dynamoose.model("dababy-totals", totalSchema, {
//   create: false,
// });

app.post("/submit", upload.single("file"), async function (req, res) {
  const imageName = `${nanoid()}${path.extname(req.file.originalname)}`;
  // const s3Params = {
  //   Bucket: config.BUCKET,
  //   Key: imageName,
  //   Body: req.file.buffer,
  //   ContentType: req.file.mimetype,
  //   ACL: "public-read",
  // };
  const dbParams = {
    id: imageName,
    enabled: true,
  };
  res.send("no");
});

app.use("/", express.static(path.join(__dirname, "public")));


app.post("/shorten", function (req, res) {
  res.send("no");
});

app.post("/login", function (req, res) {
  res.send("no");
});

app.post("/approve", function (req, res) {
  res.send("no");
});

app.post("/check", function (req, res) {
  res.send("no");
});

app.listen(3500, function () {
  console.log("Listening on port 3500");
});
