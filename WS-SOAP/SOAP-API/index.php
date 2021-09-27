<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

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
$servicio->register("ValDigVer", array('RutSinDig' => 'xsd:string', 'DigVer' => 'xsd:string'), array('return' => 'xsd:boolean'), $ns);
$servicio->register("Split", array('Nom' => 'xsd:string'), array('nombres' => 'tns:Nombres', 'apellidos' => 'tns:Nombres' ), $ns);

function ValDigVer($RutSinDig, $DigVer){
//echo $RutSinDig;

    if(!is_numeric($RutSinDig)){
        return new soap_fault('3', '', 'El Rut debe ser un valor entero','');
    }

    $s=1;
    for($m=0;$RutSinDig!=0;$RutSinDig/=10){
        $s=($s+$RutSinDig%10*(9-$m++%6))%11;
    }
    $aux = chr($s?$s+47:75);

    return $aux==$DigVer;
  
}

function Split($Nom){
    $Nombres = array();
    $Apellidos = array('a','a');
    
    $aux = explode(" ",$Nom);

    if(count($aux)<3){
        return new soap_fault('3', '', 'Se necesitan al menos tres palabras separadas por espacio','');
    }

    $Apellidos[1] = array_pop($aux);
    $Apellidos[0] = array_pop($aux);

    foreach($aux as $input){
        $Nombres[]=$input;
    }

    return [
        $Nombres,
        $Apellidos
    ];
}

$servicio->service(file_get_contents("php://input"));

?>
