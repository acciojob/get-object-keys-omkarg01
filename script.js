//your JS code here. If required.
let student = {
	name: "Omkar",
}

student.prototype.getKeys = function () {
	return Object.keys(this.student);
}

student.getKeys()