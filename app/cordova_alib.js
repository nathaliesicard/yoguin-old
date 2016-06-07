exports.getFilePath = function(url) {
  var filename = url.substring(url.lastIndexOf('/') + 1);
  return cordova.file.dataDirectory + filename;
};

exports.doesExist = function(filename, callback) {

  window.resolveLocalFileSystemURL(filename,
    function() { callback(null, true) },
    function() { callback(null, false) }
  );

};


exports.downloadFile = function(url, callback) {
  if (typeof FileTransfer == 'undefined') {
    callback(new Error('Device was not ready...'));
    return;
  }

  var path = exports.getFilePath(url);

  var fileTransfer = new FileTransfer();
  //console.log('Data directory + filename is: ',cordova.file.dataDirectory + filename);
  //console.log('The URL of the file is: ',url);
  fileTransfer.download(
    url,
    path,
    function(entry) {
      console.log("download complete: " + entry.toURL());
      callback(null, entry.toURL());
    },
    function(error) {
      console.error("download error source " + error.source);
      console.error("download error target " + error.target);
      console.error("download error code" + error.code);
      callback(new Error('download error'));
    }
  );

};


