var num1 = prompt('Enter num1 :');
var num2 = prompt('Enter num2 :');
var num3 = prompt('Enter num3 :');

if(num1 > num2 && num1 > num3){
   console.log('large number1 =' + num1);
}

else if(num2 > num1 && num2 > num3){
    console.log('large number2 ='+ num2)
}

else if(num3 > num1 && num3 > num2){
    console.log('larg number3 =' + num3);
}   
else{
    console.log('no number')
}
  
var letter = prompt('Enter a letter :');

letter = letter.toLowerCase();

if (letter == 'a'|| letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    console.log('vowel')
}
else{
    console.log('consonant')
}
//switch , case , break , default task-5

var worde = prompt('Enter a worde :')

switch(worde){
    case 'jakaria':
        console.log('My Name is a jakaria');
        break;
    case 'study':
        console.log('Honours 3rd Year');
        break;
    case 'DIG':
        // worde = worde.toUpperCase();
        console.log('Fountain Devoper');
        break;
    case 'lnge':
        console.log('HTML CSS AND JAVASCRIPT');
        break;
        default:
            console.log('not print')

}

