// import express from "express";
// import * as dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// router.route("/").get((req, res) => {
//   res.send(req.body.prompt);
//   res.send("Hello AI Image Generation App!");
// });

// router.route("/").post(async (req, res) => {
//   try {
//     const { promp } = req.body;

//     const aiResponse = await openai.images.generate({
//       prompt:
//         "a pencil and watercolor drawing of a bright city in the future with flying cars",
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });

//     const image = aiResponse.data[0].b64_json;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .send(error?.response?.data?.error?.message || "Something went wrong");
//   }
// });

// export default router;

import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello AI Image Generation App!");
});

router.route("/").post(async (req, res) => {
  try {
    // Fetch a random image from Lorem Picsum
    const response = await fetch("https://picsum.photos/900");
    const imageUrl = response.url;

    res.status(200).json({ photo: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.message || "Something went wrong");
  }
});

export default router;
