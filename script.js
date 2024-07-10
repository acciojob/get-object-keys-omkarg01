//your JS code here. If required.
let student = {
	name: "Omkar",
}

student.__proto__.getKeys = function () {
	return Object.keys(this.student);
}

student.getKeys()