$(document).ready(function(){
    $('#btn1').click(function(){
        if($ ('#fullname').val()==''){
            $('#error1').html("Please Enter Your Name ")
        }
     else if($ ('#mail').val()==''){
            $('#error2').html("Please Enter Your Mail id ")
            $('#error1').html("")
        }
        else if($ ('#password').val()==''){
            $('#error3').html("Please Enter Your Password ")
            $('#error2').html("")
            $('#error1').html("")
        }
        else{
            $('form').submit()
        }
    })
})
    