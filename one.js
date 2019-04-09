function Pet(){
	this.name = arguments[0],
	this.length = arguments[1],
	this.weight = arguments[2]
}

var Dog = new Pet("sharik", 40, 4)
Pet.prototype.color = ""
console.log(Dog.color)