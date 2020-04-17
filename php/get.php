<?php

function returnPhoneCalls($data){
    $arrDataReturnCall = [];
    $keys = array_keys($data);
    foreach ($keys as $item){
        $arrDataReturnCall[$item] = $data[$item];
    }
    $strJson = json_encode($arrDataReturnCall, JSON_UNESCAPED_UNICODE);
    file_put_contents('phoneCalls.txt', $strJson . PHP_EOL, FILE_APPEND);
}
returnPhoneCalls($_POST);


?>