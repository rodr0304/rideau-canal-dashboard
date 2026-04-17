const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/data", (req, res) => {
  res.json([
    {
      location: "Dow's Lake",
      iceThickness: 31,
      surfaceTemp: -4,
      snowAccumulation: 3,
      externalTemp: -8,
      status: "Safe"
    },
    {
      location: "Fifth Avenue",
      iceThickness: 27,
      surfaceTemp: -1,
      snowAccumulation: 5,
      externalTemp: -6,
      status: "Caution"
    },
    {
      location: "NAC",
      iceThickness: 22,
      surfaceTemp: 1,
      snowAccumulation: 7,
      externalTemp: -3,
      status: "Unsafe"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
