"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

var _signup = _interopRequireDefault(require("../server/routes/signup"));

var _signin = _interopRequireDefault(require("../server/routes/signin"));

var _articles = _interopRequireDefault(require("../server/routes/articles"));

var _feeds = _interopRequireDefault(require("../server/routes/feeds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use('/teamwork', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use('/api/v1/auth/signup', _signup["default"]);
app.use('/api/v1/auth/signin', _signin["default"]);
app.use('/api/v1/articles', _articles["default"]);
app.use('/api/v1/feeds', _feeds["default"]);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port ".concat(port, "..."));
});
var _default = app;
exports["default"] = _default;