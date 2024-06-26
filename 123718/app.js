
const arr = [
    "Абрек",
    "Азер",
    "пиндос",
    "ара",
    "негр",
    "Афрожопый",
    "Афророссиянин",
    "Басурман",
    "Байбак",
    "Бульбаш",
    "ганс",
    "пидар",
    "жид",
    "неожид",
    "хохол",
    "кацап",
    "чурка",
    "лях",
    "пшек",
    "закарблядец",
    "мамбет",
    "ниггер",
    "сельдюк",
    "хач",
    "песоед",
    "азиатская нечесть",
    "француз",
    "жена итто",
    "антоха",
    "уебок",
    "мудак",
    "чечня",
    "урыганый палестинец",
    "блядцкий серб",
    "курва",
    "оксанка",
    "наташка",
    "утырок венгрия",
    "колянчик дверной проем",
    "сопля",
    "чушка ебучая",
    "джастин бибер",
    "анатолий шарий"
]




$(document).ready(function() {
   const input = $('input');
   const result = $('.result')
    $('button').on('click', function() {
        result.removeClass('hide');

        if ( !input.val() ) {
            result.text("имя веди");
            return
        }

        const name = input.val();
        const arrl = arr.length;
        const randomNumber = Math.floor(Math.random() * (arrl + 1));

        console.log(randomNumber);

        const resultText = `Ты, ${name}, получается ${arr[randomNumber]}`
        $(this).text("получить фриспин")
        result.text(resultText)
    });
});