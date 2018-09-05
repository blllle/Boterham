$('nav a').on('click', function(){
  
  
    //   grab the modal and set the content as the image we have just clicked on
    
      $('.modal').fadeIn(300)
      
      return false
    
})
    
    
$('.modal-close, .modal-background').on('click', function(){
      
      $('.modal').fadeOut(300)
      
      return false
    
})