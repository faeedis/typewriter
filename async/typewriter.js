const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; // Increase the delay by 50ms for each character
}

setTimeout(() => {
  console.log(); // Output a newline character
}, delay);
