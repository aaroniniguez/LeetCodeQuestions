<?php

class Friend {
	public function __construct() {
		print "CREATED A FRIEND\n";
	}
}

interface FriendFactoryInterface {
	public function create();
	public function test();
}

class myInterFace implements FriendFactoryInterface {
	public function create() {
		$friend = new Friend();
		return $friend;
	}

	public function test() {
		print "hmmmm";
	}
}
$test = new myInterFace(); 
$test->create();
?>