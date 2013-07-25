(function($){
  $.fn.selectify = function(options){
    var settings = $.extend({
      marker: "selectify-selected",
      element: "li"
    }, options);
 
    return this.each(function(){
      last = null
      $(settings.element, this).click(function(e){
        if(e.ctrlKey) 
          $(this).toggleClass(settings.marker);
        else if(e.shiftKey) {
          if(!last) 
            $(this).prevAll().andSelf().addClass(settings.marker);
          else if($(this).index() < $(last).index()) 
            $(this).nextUntil(last).andSelf().addClass(settings.marker);
          else 
            $(this).prevUntil(last).andSelf().addClass(settings.marker);
        }
        else 
          $(this).toggleClass(settings.marker).siblings().removeClass(settings.marker);
        last = this
      });
    });
  };
}(jQuery));