const express = require("express");
const app = express();
const config = require("./config");
const routes = require("./routes");
app.use("/api", routes);
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
