const car = {
	type:"bmw",
    weight:511,
	
	type(){
	document.write(this.weight + "kgs");
}
};
function test(){
var x = 185;
var y = 65;
var z = x + y;


document.getElementById("demo").innerHTML ="The value of z is: " + z;

}
test();
car.type();