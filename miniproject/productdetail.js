const bt = document.querySelector('.button_2');
const bt_1 = document.querySelector('.button_2_1');
const ct = document.querySelector('.count');
const count_bt = document.querySelector('.text_5')
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
