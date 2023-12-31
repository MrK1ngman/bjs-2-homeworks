function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length) {
		let result = arr1.every((element, i)  => element === arr2[i]);
    		return result;
	} else {
		return false;
	}
}


function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(element => element.gender == gender);
	if (result.length > 0) {
		result = result.reduce((acc, item, index) => (acc + item.age), 0) / result.length;
		return result;
	} else {
		return 0;
	}
}
