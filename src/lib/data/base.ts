const firstName = 'Alessio';
const lastName = 'A';
const suffix = '';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
