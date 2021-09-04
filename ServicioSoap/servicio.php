<?php

require_once "vendor/econea/nusoap/src/nusoap.php";
$servicio = new soap_server();

$ns = "urn:miserviciowsdl";
$servicio->configureWSDL("ServicioWebSoap", $ns);
$servicio->schemaTargetNamespace = $ns;

$servicio->register("ValDigVer", array('RutSinDig' => 'xsd:integer', 'DigVer' => 'xsd:integer'), array('return' => 'xsd:boolean'), $ns);

function ValDigVer($RutSinDig, $DigVer){
    $s=1;
    for($m=0;$RutSinDig!=0;$RutSinDig/=10)
        $s=($s+$RutSinDig%10*(9-$m++%6))%11;
    echo $aux = chr($s?$s+47:75);

    if($aux==$DigVer){
        return true;
    }else{
        return false;
    }
}

$servicio->service(file_get_contents("php://input"));

?>