import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PrepPilot AI server listening on http://localhost:${PORT}`);
});
