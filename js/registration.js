$(document).ready(function(){
    var username;
    var password;
    $("#submit").click(function(){
        username=$("#username").val();
        password=$("#password").val();
        /*
        * Perform some validation here.
        */
        //Отправить json на /autorUser
        $.post('http://localhost:5000/auth/registration',{username, password}, function(data){    
 
            //callback function(data) {...};
            if(data==='done')           
            {
            //Если функция обратного вызова вернет done 
            $("#content").load("pages/home.html");
            } 
        });
    });
});