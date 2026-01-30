<?php


$resume = file_get_contents('resume.html');
$analytics = file_get_contents('analytics.html');

$newHtml = str_replace('<head>', "<head>\n{$analytics}\n", $resume);

file_put_contents('resume.analytics.html' , $newHtml);

