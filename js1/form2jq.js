$(document).ready(function(){
    $('#registration').submit(function(){
        if($ ('#fullname').val()==''){
            $('#error1').html("Please Enter Your Name ")
            return false
        }
     else if($ ('#mail').val()==''){
            $('#error2').html("Please Enter Your Mail id ")
            $('#error1').html("")
            return false
        }
        else if($ ('#password').val()==''){
            $('#error3').html("Please Enter Your Password ")
            $('#error2').html("")
            $('#error1').html("")
            return false
        }
        else{
            return true
        }
    })
})
     