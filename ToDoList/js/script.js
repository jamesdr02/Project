$(document).ready(function () {
    let counter = 0;
    $('#form').on('submit', function (event) {
        event.preventDefault();
        $('.scomparsa').addClass('hide');
        let todoText = $('#inputText').val();

        if (todoText.trim() !== '') {
            $('#lista').append('<div id="textBox"><span><button class="deleteBtn"><img class="hide" src="../res/check.jpg"></button></span> <span class="todoText">' + todoText + '</span><button class="delete"><img class="nascosto" src="../res/x.jpg"></button></div>' );
            $('#inputText').val(''); 
            counter++;
            console.log(counter);
       }
    });
    $('#lista').on('click', '.deleteBtn', function () {
        $(this).parent().parent().children('.todoText').toggleClass('completed');
        //closest('span').toggleClass('completed');
        $(this).children('img').toggleClass('hide');
    });

    $('#lista').on('click', '.delete', function () {
        $(this).closest('div').remove();
        counter--;
        if(counter == 0){
            $('.scomparsa').removeClass('hide');
           }
    });
});
  



