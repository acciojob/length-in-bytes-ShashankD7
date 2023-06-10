const byteSize = (str) => {
	int ct = 0;
	for (int i=0; i<str.length; i++) {
		if (str.charCodeAt(i) > 127 || str.charCodeAt(i) <= 127) {
			ct++;
		}
		
	}
	return ct;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
