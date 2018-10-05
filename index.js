/**************** SLIDE JQUERY ********************************************************/


$(function(){
                $('.slideContent img:gt(0)').hide();
                setInterval(function(){
                  $('.slideContent :first-child').hide()
                     .next('img').show()
                     .end().appendTo('.slideContent');}, 
                  3000);
            });
