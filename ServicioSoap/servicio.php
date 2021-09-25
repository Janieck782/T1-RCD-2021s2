<?php

require_once "vendor/econea/nusoap/src/nusoap.php";
$servicio = new soap_server();

$ns = "urn:miserviciowsdl";
$servicio->configureWSDL("ServicioWebSoap", $ns);
$servicio->schemaTargetNamespace = $ns;

$servicio->wsdl->addComplexType(
    'Nombres',
    'complexType',
    'array',
    'sequence',
    '',
    array(
      'Nombre' => array(
        'name' => 'Nombre', 
        'type' => 'xsd:string',
        'minOccurs' => '0', 
        'maxOccurs' => 'unbounded'
      )
    )
  );
$servicio->register("ValDigVer", array('RutSinDig' => 'xsd:integer', 'DigVer' => 'xsd:integer'), array('return' => 'xsd:boolean'), $ns);
$servicio->register("Split", array('Nom' => 'xsd:string'), array('nombres' => 'tns:Nombres', 'apellidos' => 'tns:Nombres' ), $ns);

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

function Split($Nom){
    $Nombres = array();
    $Apellidos = array('a','a');
    
    $aux = explode(" ",$Nom);
    
    $Apellidos[1] = array_pop($aux);
    $Apellidos[0] = array_pop($aux);

    $lengt = count($aux);

    for($i=0;$i<$lengt;$i++)
        $Nombres[$i]=$aux[$i];

    return [
        $Nombres,
        $Apellidos
    ];
}

$servicio->service(file_get_contents("php://input"));

?>
