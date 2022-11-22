let num = 0;
for (let index = 0; index < 10; index++) {
  console.log(index);
  num += index;
  for (let index = 0; index < 10; index++) {
    console.log("*");
  }
}