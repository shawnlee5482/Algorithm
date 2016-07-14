function duplicateChecker(array)
{
	this._data = array;	
	this._nonDuplicatedData;
}

duplicateChecker.prototype = {
	getNonDuplicatedData: function() {
		var storage = [];
		var res = [];
		for(var i = 0; i < this._data.length; i++) {
			if(storage[this._data[i].toString()] == 1) {
				console.log(this._data[i], 'is duplicated');
			} else {
				storage[this._data[i].toString()] = 1;
				res.push(this._data[i]);
			}
		}
		console.log(res);
	},

	getRedundantIndexes: function() {
		var storage = [];
		var res = [];
		for(var i = 0; i < this._data.length; i++) {
			if(storage[this._data[i].toString()] == 1) {
				console.log(this._data[i], 'is duplicated');
				res.push(i);
			} else {
				storage[this._data[i].toString()] = 1;
			}
		}
		console.log(res);
	}	
}




