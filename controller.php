<?php

//A short and simple controller/end-point for Mootube AJAX calls...
//This example uses cURL to fetch data but you can use file_get_contents or whatever you please...
//This example also uses PHP's json features, which are only available in PHP5+
//LASTLY, i love you.

$ids=explode('|',$_GET['ids']);
array_pop($ids);
$holder=array();

foreach($ids as $key=>$value) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL, 'http://oohembed.com/oohembed/?url=http://youtube.com/watch?v='.$value);
	$json = curl_exec($ch);
	curl_close($ch);
	$array=json_decode($json, true);		
	$holder[]=$array;
}

$object=json_encode($holder);
//echo stripslashes($object);
echo $object;

?>