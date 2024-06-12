const file = await Deno.readTextFile("./2023/1/input.txt");

const result = file.split("\n").map((line) => line.split("")).map((line) =>
  line.find((char) => Number.isInteger(Number(char))) +
  line.reverse().find((char) => Number.isInteger(Number(char)))
).reduce((acc, curr) => acc + Number(curr), 0);

console.log(result);
