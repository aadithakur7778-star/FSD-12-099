import { writeFile, appendFile,readFile } from "fs/promises"


//await writeFile("hello.txt"," JS is so much easy")
// await appendFile("hello.txt","\nFS is much easy than other ")
await appendFile("hello2.txt","\nFS Hi! I am Aadi 😊")
const content = await readFile("hello2  .txt","utf-8")
console.log(content);