<?php

$arrDataReturnCall = [];
$keys = array_keys($_POST);

foreach ($keys as $item){
    $arrDataReturnCall[$item] = $_POST[$item];
}

$str = json_encode($arrDataReturnCall, JSON_UNESCAPED_UNICODE);

file_put_contents('phoneCalls.txt', $str . PHP_EOL, FILE_APPEND);

?>