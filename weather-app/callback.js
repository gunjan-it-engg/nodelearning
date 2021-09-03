console.log("counting in progress");
let x=5;
for(let i in x){
	console.log(i);
}
const add = (a,b,callback) => {
	setTimeout(()=>{
		callback(a + b)
	},20000)
}

add(1,4,(sum)=>{
	console.log(sum); //should print 5
})