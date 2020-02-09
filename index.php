<?php

include("class_lib.php");
$aaronObj = new Person("aaron");
print $aaronObj->get_name();
$aaronObj->set_name("testing\n");
print $aaronObj->get_name();
$newaaronObj = new employee("aaron");
print $newaaronObj->get_name();
print $newaaronObj;

?>