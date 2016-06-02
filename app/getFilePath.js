module.exports = function(url, callback) {
  setTimeout(function(){
    callback(null,url);
  }, 100);
};
