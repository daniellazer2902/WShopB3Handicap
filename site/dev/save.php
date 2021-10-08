<?php
$myFile = $_GET["titre"].".json";;
$fh = fopen('ref/'.$myFile, 'w') or die("can't open file");
$stringData = $_GET["data"];
fwrite($fh, $stringData);
fclose($fh)
?>