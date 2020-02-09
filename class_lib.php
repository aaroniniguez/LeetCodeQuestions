<?php

class Person {
	public $name;
	public function __construct($name) {
		$this->name = $name;
	}

	function set_name($new_name) {
		$this->name = $new_name;
	}

	function get_name() {
		return $this->name;
	}
}

class employee extends Person {
	public function __toString() {
		return "HEY";
	}
	function get_name() {
		$hmm = Person::get_name();
		print $hmm;
		return "you are not allowed to get employees name!";
	}
}

?>