module.exports = function(url, callback) {
  setTimeout(function(){
    callback(null,url);
  }, 5000);
};
