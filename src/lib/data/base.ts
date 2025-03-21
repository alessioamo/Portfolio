const firstName = 'Alessio';
const lastName = 'A';
const suffix = 'Alessio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
