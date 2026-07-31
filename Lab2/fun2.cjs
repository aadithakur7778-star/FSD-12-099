const f1 = () => {
  console.log("F1");
};
const f2 = () => {
  console.log("F2");
};
const f3 = () => {
  console.log("F3");
};
function main() {
  console.log("main😂");
  setTimeout(f1, 0); //iska mtlb yeh hua is function ko itne time baad run krao
  setImmediate(f2);
  process.nextTick(f3);
  console.log("end🥶");
}
main();
// single threaded mtlb hota h 

//promises is a function which not executed immeadiately but it must be executed after a while
// it has some status during the execution at final it may resolve => successfully executed amd reject => unsuccess