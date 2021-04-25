'use strict';

let userName=prompt('Please enter your name ? ');
alert('Welcome '+userName);

let q1=prompt('Am I a person with passion ?').toLowerCase();

if(q1 == 'y' || q1 =='yes'){
    alert('Good job !');
    console.log('Correct answer '+ q1);
}
else{
    alert('Wrong guess !');
    console.log('InCorrect answer '+ q1);
}


let q2=prompt('Am I a dentist ?').toLowerCase();

if(q2 == 'y' || q2 =='yes'){
    alert('Wrong guess !');
    console.log('InCorrect answer '+ q2);
}
else{
    alert('Good job !');
    console.log('Correct answer '+ q2);
}

let q3=prompt('Am I a Network engineer ?').toLowerCase();

if(q3 == 'y' || q3 =='yes'){
    alert('Good job !');
    console.log('Correct answer '+ q3);
}
else{
    alert('Wrong guess !');
    console.log('InCorrect answer '+ q3);
}

let q4=prompt('Am I a language learner ?').toLowerCase();

if(q4 == 'y' || q4 =='yes'){
    alert('Good job !');
    console.log('Correct answer '+ q4);
}
else{
    alert('Wrong guess !');
    console.log('InCorrect answer '+ q4);
}


