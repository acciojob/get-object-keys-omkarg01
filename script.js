//your JS code here. If required.
let student = {
	name: "Omkar",
}

student.prototype.getKeys = function () {
	console.log(this.keys())
	return this.keys();
}

student.getKeys()