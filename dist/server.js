"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _express=require("express"),_express2=_interopRequireDefault(_express),_mongoose=require("mongoose"),_mongoose2=_interopRequireDefault(_mongoose),_mongodbUri=require("mongodb-uri"),_mongodbUri2=_interopRequireDefault(_mongodbUri),_path=require("path"),_path2=_interopRequireDefault(_path),_swig=require("swig"),_swig2=_interopRequireDefault(_swig),_consolidate=require("consolidate"),_consolidate2=_interopRequireDefault(_consolidate),_bodyParser=require("body-parser"),_bodyParser2=_interopRequireDefault(_bodyParser),_movement=require("./routes/movement"),_movement2=_interopRequireDefault(_movement),_index=require("./routes/index"),_index2=_interopRequireDefault(_index),_configuration=require("./routes/configuration"),_configuration2=_interopRequireDefault(_configuration),app=(0,_express2["default"])(),port=process.env.PORT||8e3,mongodbUri=process.env.MONGOLAB_URL||"mongodb://localhost/robot-db",mongooseUri=_mongodbUri2["default"].formatMongoose(mongodbUri);_mongoose2["default"].connect(mongooseUri);var conn=_mongoose2["default"].connection;conn.on("error",console.error.bind(console,"connection error:")),app.engine("html",_consolidate2["default"].swig),app.set("view engine","html"),app.set("views",_path2["default"].join(__dirname,"views")),app.use(_express2["default"]["static"]("public")),app.use(_bodyParser2["default"].urlencoded({extended:!1})),app.use(_bodyParser2["default"].json()),app.use("/",_index2["default"]),app.use("/movement",_movement2["default"]),app.use("/configuration",_configuration2["default"]),conn.once("open",function(){app.listen(port,function(){return console.log("Server listening on port "+port)})});