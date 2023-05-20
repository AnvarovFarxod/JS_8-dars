let belgilar = 'qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM';

function parolBer(){
    let i = 0;
    let parol = '';
    while (i < 8){
        let son = parseInt(Math.random()*belgilar.length);
        parol += belgilar[son];
        i++;
    }
    document.querySelector('input').value = parol;
}
document.querySelector('.tugma').addEventListener('click',function (){
    let ekran = document.querySelector('.ekran');
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value)+1;
});
document.querySelector('.nolga').addEventListener('click',function (){
   document.querySelector('.ekran').value = 0;
});

