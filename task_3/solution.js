function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины
let count;
let price;
let id;
let title;
    item = { id: 1, title: 'Пицца', count: 5, price: '500.00'};// product - объект вида {id: id, title: title, count: count, price: price}
           
    // item = {id: 2, title: , count: 2 , price: '55.00'}
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество

    let itemCountText  ;// сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
   itemCountText = "" ; // 1. Создайте переменную itemCountText, равную пустой строке
   itemCountText = itemCountText + item.count ; // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
   itemCountText = itemCountText + ` × ` ; // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
   itemCountText = itemCountText + item.price ;// 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
   itemCountText = itemCountText + ` ₽ = ` ;// 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
   let sum ;
   sum = item.count * item.price ;// 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
   itemCountText = itemCountText + sum  ;// 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
   itemCountText = itemCountText + ` ₽`; // 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
