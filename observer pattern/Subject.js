class Subject {
	constructor() {
		this.observers = []
	}

	addObserver(observer) {
		this.observers.push(observer)
	}

	removeObserver(observer) {
		const removeIndex = this.observers.findIndex(obs => {
			return observer === obs;
		})

		if(removeIndex !== -1)
			this.observers.slice(removeIndex, 1)
	}

	notify(data) {
		this.observers.forEach(observer => {
			observer.update(data);
		});
	}
}

export {Subject}