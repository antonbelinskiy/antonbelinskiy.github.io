
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
    "пажилой глэк",
    "удот",
    "борщ",
    "протухший писюн",
    "каструля",
    "чмоооооо",
    "СВО СВО СВО",
    "настюха",
    "бармалей",
    "пенис",
    "чак чак",
    "бесплатная сарделька",
    "шкури киев",
    "чушка ебучая",
    "джастин бибер",
    "анатолий шарий"
]

function countdown(callback) {
    let counter = 3;
  
    const interval = setInterval(() => {
      switch (counter) {
        case 3:
          $('.counter span').text("3");
          break;
        case 2:
            $('.counter span').text("2");
          break;
        case 1:
            $('.counter span').text("1");
          break;
        case 0:
            $('.counter span').text("0...");
          break;
        default:
          clearInterval(interval);
          callback();
          return;
      }
      counter--;
    }, 1000);
  }
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBackgroundColor() {
    const interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomColor();
      document.body.style.color = getRandomColor();
    }, 100); 
  
    setTimeout(() => {
      clearInterval(interval);
      $('.title').text("ВАС РАСПИДАРАСИЛО НО ВЫ ВСЕ ЕЩЕ МОЖЕТЕ ПОКРУТИТЬ ФРИСПИН");
      $("button").attr('disabled', false);
      $('.counter p').text("ВАС РАСПИДАРАСИТ ЧЕРЕЗ: ")
      $('.counter span').text("4");
      $('.counter').hide();
    }, 10000); 
  }
function myCallback() {
    $('.title').text("ВАС ПИДАРАСИТ НА СВО УРААА");
    $('.counter p').text("БЕЛГОРОД РАБОТАЕМ")
    $('.counter span').text("");
    changeBackgroundColor();
  }

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
        const randomNumber = Math.floor(Math.random() * (arrl));
        const resultDef = arr[randomNumber];
        let resultText = `Ты, ${name}, получается ${resultDef}`

        if ( resultDef === "СВО СВО СВО" )  {
            resultText = `Ты, ${name}, будешь отбайрактарен на ${resultDef}`
            $(this).attr('disabled', true);
            $('.counter').show();
            countdown(myCallback);

        }


        $(this).text("получить фриспин")
        result.text(resultText)
    });
});