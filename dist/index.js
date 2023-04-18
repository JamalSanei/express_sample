"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _getSerial = _interopRequireDefault(require("../backEnd/db/getSerial.js"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import {conn} from '../backEnd/db/connect.js'

// const mongoose = require('mongoose')

_dotenv.default.config();
const app = (0, _express.default)();
// mongoose.connect(process.env.MONGO_URI);

app.use((0, _cors.default)());
app.get('/serial', (req, res) => {
  res.send(_getSerial.default);
});
app.listen(process.env.PORT || 3000, () => {
  console.log("server runing on 3000...");
});