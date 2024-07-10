let student = {
	name: "Omkar",
}

student.__proto__.getKeys = function () {
	return Object.keys(this);
}