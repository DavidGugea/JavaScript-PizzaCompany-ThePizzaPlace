function vegan_service_RELEASE(){
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let street = document.getElementById("street").value;
    let tipp = document.getElementById("tipp").value;
    let post_code = document.getElementById("post_code").value;
    let house_number = document.getElementById("house_number").value;

    let message = document.getElementById("message_JS");

    if(first_name==="" || last_name==="" || street ==="" || tipp==="" || post_code==="" | house_number === ""){
        message.textContent = "The input boxes are not fully completed. You have to fill in all the input boxes";
    }else{
        if(tipp>50){
            message.textContent = "The tipp is to big.";
        }else{
            message.textContent = "The vegan pizza was send to the destination. Have a nice day !"
        }
    }
}

function olive_service_RELEASE(){
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let street = document.getElementById("street").value;
    let tipp = document.getElementById("tipp").value;
    let post_code = document.getElementById("post_code").value;
    let house_number = document.getElementById("house_number").value;

    let message = document.getElementById("message_JS");

    if(first_name==="" || last_name==="" || street ==="" || tipp==="" || post_code==="" | house_number === ""){
        message.textContent = "The input boxes are not fully completed. You have to fill in all the input boxes";
    }else{
        if(tipp>50){
            message.textContent = "The tipp is to big.";
        }else{
            message.textContent = "The olive pizza was send to the destination. Have a nice day !"
        }
    }
}

function mexican_service_RELEASE(){
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let street = document.getElementById("street").value;
    let tipp = document.getElementById("tipp").value;
    let post_code = document.getElementById("post_code").value;
    let house_number = document.getElementById("house_number").value;

    let message = document.getElementById("message_JS");

    if(first_name==="" || last_name==="" || street ==="" || tipp==="" || post_code==="" | house_number === ""){
        message.textContent = "The input boxes are not fully completed. You have to fill in all the input boxes";
    }else{
        if(tipp>50){
            message.textContent = "The tipp is to big.";
        }else{
            message.textContent = "The mexican pizza was send to the destination. Have a nice day !"
        }
    }
}

function cheese_service_RELEASE(){
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let street = document.getElementById("street").value;
    let tipp = document.getElementById("tipp").value;
    let post_code = document.getElementById("post_code").value;
    let house_number = document.getElementById("house_number").value;

    let message = document.getElementById("message_JS");

    if(first_name==="" || last_name==="" || street ==="" || tipp==="" || post_code==="" | house_number === ""){
        message.textContent = "The input boxes are not fully completed. You have to fill in all the input boxes";
    }else{
        if(tipp>50){
            message.textContent = "The tipp is to big.";
        }else{
            message.textContent = "The cheese pizza was send to the destination. Have a nice day !"
        }
    }
}