//callback function example
//$('body').hide().fadeIn(3000,function(){alert("done");});

$('h1').click(function(){
    $(this).text("Hide the image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

//play w jquery .each function

//update the image link
$('img').each(function(){
    var path = $(this).attr('src');
    var newPath = "img/" + path;
    $(this).attr('src',newPath);
    
    console.log(newPath);

});

//update all links to google
$('a').each(function(){
    var Goog = "https://google.com";
    $(this).attr('href',Goog);
});