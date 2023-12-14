function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}
Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks !== undefined) {
		this.marks.push(...marksToAdd);
	} else {
		return this.marks;
	}
}
Student.prototype.getAverage = function() {
	if (this.marks.length > 0) {
		let result = this.marks.reduce((acc, marks) => acc + marks, 0);
		return result / this.marks.length;
	} else {
		return 0;
	}
}
Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.reason = reason;
}
