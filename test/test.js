var tool = require("bmobcloud-local");

//请根据自己的情况修改application_id和rest_key信息
var options = {
    "app_key": "69015a79796397f7701454336b84e0c4",
    "rest_key": "9b82ae3876ed4ee081d3c34224ff3a7a"
};

tool.initialize(options.app_key, options.rest_key);

//调用hello.js云端代码
var hello = require("../../bmobcloud-local/test/hello.js").hello;
tool.test(hello);

//调用first.js云端代码（带上传参数）
var first = require("../cloud/first.js").first;
tool.test(first, {"name":"Bmob后端云"});

//调用second.js云端代码
var second = require("../cloud/second.js").second;
tool.test(second);

//调用third.js云端代码（带上传参数）
var third = require("../cloud/third.js").third;
tool.test(third, {"userid":"y6qBDvXj"});