//Chat box
var chat = document.querySelector('.chat');
var chat_box = document.querySelector('.chat-box');
var close_box = document.querySelector('.close');
chat.onclick = function(){
    chat_box.style.display = 'block';
    chat.style.display = 'none';
}

close_box.onclick = function(){
    chat_box.style.display = 'none';
    chat.style.display = 'block';
}


//Slide show
var big_img = document.querySelector('.big-img');
var small_img = document.querySelectorAll('.small-img');

for(var i = 0; i < small_img.length; i++){
    small_img[i].onclick = function(){
        big_img.src = this.src;
    }
}

// tăng hoặc giảm số lượng

var add = document.querySelector('.them');
var reduce = document.querySelector('.giam');
var input = document.querySelector('.amount > input');

add.onclick = function(){
    if(input.value < 5){
        input.value = Number(input.value) + 1; 

    }
        
}

reduce.onclick = function(){
    if(input.value > 1){
        input.value = Number(input.value) - 1; 

    }
        
}
input.onblur = function(){
    if(input.value > 5){
        input.value = 5;
    }
}

//phóng to ảnh
var img = document.querySelector('.super-big-img>img');
var close_btn = document.querySelector('.close-btn');
var super_big_img = document.querySelector('.super-big-img');
close_btn.onclick = function(){
    super_big_img.style.display = 'none';
}

big_img.onclick = function(){
    super_big_img.style.display = 'block';
    img.src = this.src;
}

var buyNow = document.querySelector('.info > .btn > button:last-child');
var addToCart = document.querySelector('.info > .btn > button:first-child');
buyNow.onclick = function(){
    alert('Bạn làm gì có tiền mà mua');
}
var numberCart = document.querySelector('.numberCart');
addToCart.onclick = function(){
    alert('Bạn đã thêm mặt hàng vào giỏ hàng');
    numberCart.style.display = 'block';
}

//Read More
var more = document.querySelector('.more-cnt');
var readMore = document.querySelector('.readMore');
var anBot = document.querySelector('.introduce  >button:last-child');

readMore.onclick = function(){
    more.style.display = 'block';
    this.style.display = 'none';
    anBot.style.display = 'block';
}

anBot.onclick = function(){
    more.style.display = 'none';
    this.style.display = 'none';
    readMore.style.display = 'block';
}
