// Code your solutions in this file

const names =("Guadalupe","Ollie","Aki")


let countup = 0;
while (countup < 10) {
  console.log(countup++);
}


for (let countup = 0; countup < 10; countup++) {
  console.log(countup);
}

function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}
