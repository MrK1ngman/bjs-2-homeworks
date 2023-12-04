function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student("Vasiliy", "male", 19);
let student2 = new Student("Ivan", "male", 22);
let student3 = new Student("Anna", "female", 18);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}
Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks === undefined) {
		console.log("студент отчислен");
	} else {
		this.marks.push(...marksToAdd);
	}
}
Student.prototype.getAverage = function() {
	if (this.marks.length = 0) {
		return 0;
	} else {
		let result = 0;
		for (let i = 0; i < this.marks.length; i++) {
			result += this.marks[i];
		}
		return result / this.marks.length;
	}
}
Student.prototype.exclude = function(reason) {
	this.reason = reason;
	delete this.subject;
	delete this.marks;
}
