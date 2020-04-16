<?php

$arrDataReturnCall = [];
$keys = array_keys($_POST);

foreach ($keys as $item){
    $arrDataReturnCall[$item] = $_POST[$item];
}

$str = json_encode($arrDataReturnCall);

file_put_contents('data.txt', $str . PHP_EOL, FILE_APPEND);

?>