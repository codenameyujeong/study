const bt = document.querySelector('.button_2');
const bt_1 = document.querySelector('.button_2_1');
const ct = document.querySelector('.count');
const count_bt = document.querySelector('.text_5')
let count = 1;

bt_1.addEventListener('click', () => {
    ct.textContent = `${count++}`
})

bt.addEventListener('click', () => {
    ct.textContent = `${count--}`
})


    counter += 2480
    bt_1.textContent = `총 상품금액 : ${counter}`



//수량 입력 필드 값 변경

// item.querySelector('input').addEventListener('keyup', function(){

//     basket.count(idx+1);

// });

// //수량 증가 + 클릭

// item.children[1].addEventListener('click', function(){

//     basket.button_2(idx+1);

// });

// //수량 감소 - 클릭

// item.children[2].addEventListener('click', function(){

//     basket.button_2_1(idx+1);

// });


                            
