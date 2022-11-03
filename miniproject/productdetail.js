const bt = document.querySelector('.button_2');
const bt_1 = document.querySelector('.button_2_1');
const ct = document.querySelector('.count');
const count_bt = document.querySelector('.text_5')
const btn1 = document.querySelector('.button_fixed3');
const btf2 = document.querySelector('.button_fixed2');
const showpping = document.querySelector('.button_6')
let count = 1;
let price = 2480;

bt_1.addEventListener('click', () => {
    ct.textContent = `${count += 1}`
    count_bt.textContent = `${count*price}원`
    })
    


bt.addEventListener('click', () => {
    if (count <= 1) {
        count = 1;
    }else {
        ct.textContent = `${count -= 1}`
    count_bt.textContent = `${count*price}원`
    }
})


btn1.addEventListener('click', ()=>{
   // 토글 할 버튼 선택 (btn1)
    // btn1 숨기기 (display: none)
    if(btf2.style.display !== 'none') {
        btf2.style.display = 'none';
    }
      // btn` 보이기 (display: block)
      else {
        btf2.style.display = 'block';
  
      }    
})

 showpping.addEventListener('click', () => {
    prompt("로그인이 필요합니다")
    })





















//     const bt = document.querySelector('.button_2');
// // const bt_1 = document.querySelector('.button_2_1');
// const bt_1 = document.querySelectorAll('.button_2_1');

// // const ct = document.querySelector('.count');
// const ct = document.querySelectorAll('.count');
// const count_bt = document.querySelectorAll('.text_5')
// const btn1 = document.querySelector('.button_fixed3');
// const btf2 = document.querySelector('.button_fixed2');
// const showpping = document.querySelector('.button_6')
// let count = 1;
// let price = 2480;

// bt_1.forEach(function(value, index){
//     value.addEventListener('click', () => {
//         count += 1
        
//         ct.forEach(function(value, index){
//             value.textContent = `${count}`

//             count_bt[index].textContent = `${count*price}원`
//         })

//         // count_bt.forEach(function(value, index){
//         //     value.textContent = `${count*price}원`
//         // })
//     })
// })


// // bt_1.addEventListener('click', () => {
// //     ct.textContent = `${count += 1}`
// //     count_bt.textContent = `${count*price}원`
// //     })
    


// bt.addEventListener('click', () => {
//     if (count <= 1) {
//         count = 1;
//     }else {
//         ct.textContent = `${count -= 1}`
//     count_bt.textContent = `${count*price}원`
//     }
// })


// btn1.addEventListener('click', ()=>{
//    // 토글 할 버튼 선택 (btn1)
//     // btn1 숨기기 (display: none)
//     if(btf2.style.display !== 'none') {
//         btf2.style.display = 'none';
//     }
//       // btn` 보이기 (display: block)
//       else {
//         btf2.style.display = 'block';
  
//       }    
// })

//  showpping.addEventListener('click', () => {
//     prompt("로그인이 필요합니다")
//     })

