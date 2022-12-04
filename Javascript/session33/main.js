const marks = [9, 12, 18, 20, 2, 16, 20, 20];

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  ave = sum / numbers.length;
  let roundedAve = ave.toFixed(2);
  if (ave >= 10) {
    console.log(`Congradulations, You are accepted and your average is ${roundedAve}`);
  } else {
    console.log("You are refused!");
    console.log("your average is "+ roundedAve);
  }
}

average(marks);
