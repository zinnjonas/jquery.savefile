(function($){
    $.fileURL = function(filename, content) {
      var url;
      url = "https://savefile.herokuapp.com/" + (encodeURIComponent(filename));
      if (content) {
        return url += "?content="+encodeURIComponent(content);
      }
    };

    $.savefile = function(options) {
        var buildFilename, buildForm, settings;
        settings = $.extend({
        filename: 'file',
        extension: 'txt'
        }, options);

    buildFilename = "" + settings.filename + "." + settings.extension;
    buildForm = function(content) {
      return $('<form></form>', {
        action: $.fileURL(buildFilename,content),
        method: 'POST'
      });
    };

    return buildForm(settings.content).submit();
  };
}(jQuery));
