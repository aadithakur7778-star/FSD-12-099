const f1=()=>{
    console.log("hello f1");

};
const f2=()=>{
    console.log("hello f2");
};
function main(){
    console.log("main");
    setTimeout(f1,50);
    setTimeout(f3,30);
    new Promise ((resolve,reject)=>{
        
    })
}