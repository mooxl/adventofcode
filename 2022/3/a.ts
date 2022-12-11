const input = Deno.readTextFileSync("./input.txt").split("\n");
const rucksacks: string[][] = [];
input.forEach((line) => {
  rucksacks.push([
    line.substring(0, Math.floor(line.length / 2)),
    line.substring(Math.floor(line.length / 2)),
  ]);
});
const duplicate: string[] = [];
rucksacks.forEach((compartments) => {
  let push = true;
  compartments[0].split("").forEach((item) => {
    if (push && compartments[1].includes(item)) {
      duplicate.push(item);
      push = false;
    }
  });
});
console.log(
  duplicate.reduce((prev, cur) => {
    const asciicode = cur.charCodeAt(0);
    console.log(cur, asciicode);
    if (asciicode < 97) prev += asciicode - 38;
    else prev += asciicode - 96;
    return prev;
  }, 0)
);
