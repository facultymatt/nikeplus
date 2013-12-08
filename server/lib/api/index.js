var express   = require('express');
var app       = module.exports = express();
var fs        = require('fs');
var path      = require('path');

app.get('/api/bower', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../bower.json'));
});

app.get('/api/package', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../package.json'));
});


//var Nike = require('../../nike/');

//var Nike = require('node-nike');




/**
 * Config
 */
var API_TOKEN = "fa9435db977400af8b7cc364ab803f73";
var API_HOST  = "api.nike.com";
var API_BASE_PATH  = "/me/";
var API_QUERY_STRING = "?access_token=" + API_TOKEN;
var API_APPID = "nikeapp";
var API_ACCEPT = "application/json";


var https = require('https');

/**
 * NikePlusAPI Constructor
 * @constructor
 */
function NikePlusAPI() {
  this.requestObj = {
    hostname: API_HOST,
    path: API_BASE_PATH + 'sport' + API_QUERY_STRING,
    headers: {
      appid: API_APPID,
      Accept: API_ACCEPT
    }
  };
}

/**
 * NikePlusAPI.makeRequest
 */
NikePlusAPI.prototype.makeRequest = function(request) {
  https.request(request, function(response) {
    response.on("data", function(data) {
      console.log(data.toString());
    });
  }).end();
};

/**
 * NikePlusAPI.getSportData
 */
NikePlusAPI.prototype.getSportData = function() {
  this.makeRequest(this.requestObj);
};

/**
 * NikePlusAPI.getActivities
 */
NikePlusAPI.prototype.getActivities = function() {
  this.requestObj.path = API_BASE_PATH + 'sport/activities' + API_QUERY_STRING;
  this.makeRequest(this.requestObj);
};

/**
 * NikePlusAPI.getActivity
 */
NikePlusAPI.prototype.getActivity = function(activityId) {
  this.requestObj.path = API_BASE_PATH + 'sport/activities/' + activityId + API_QUERY_STRING;
  this.makeRequest(this.requestObj);
};

/**
 * NikePlusAPI.getGPSData
 */
NikePlusAPI.prototype.getGPSData = function(activityId) {
  this.requestObj.path = API_BASE_PATH + 'sport/activities/' + activityId + '/gps' + API_QUERY_STRING;
  this.makeRequest(this.requestObj);
};

var nikeplus = new NikePlusAPI();

//nikeplus.getActivities();

var requestObj = {
    hostname: API_HOST,
    path: API_BASE_PATH + 'sport' + API_QUERY_STRING,
    headers: {
      appid: API_APPID,
      Accept: API_ACCEPT
    }
};

app.get('/api/nike/basic', function(req, res) {
    
    https.request(requestObj, function(response) {
        response.on("data", function(data) {
            //console.log(data.toString());
            res.send(data);
        });
    }).end();

});
