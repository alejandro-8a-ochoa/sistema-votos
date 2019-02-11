/** funcion para agregar un voto al candidato deseado
 * @param {votos.system.votar} datos datos donde vienen los datos para poder votar
 * @transaction
*/

async function votacion(datos)
{

    //obtenemos los votos disponibles del votante
let votosDisp=datos.Ciudadano.Disp.Votos;
    //obtenemos los votos que tiene el candidato
let votosCand=datos.Candidato.votos.votos;
    //obtenemos el nombre del candidato seleccionado
let nombre=datos.Candidato.nombre;
    //se le resta voto disponible al ciudadano
votosDisp=votosDisp-1;
    // se le agrega ese voto al candidato
votosCand=votosCand+1;
    //actualizan los votos
datos.Ciudadano.Disp.Votos=votosDisp;
datos.Candidato.votos.votos=votosCand;
    //se accede al registro de los activos 
const assetRegistryCan = await getAssetRegistry('votos.system.VotosCiud');

    //se autualiza el registro
await assetRegistryCan.update(datos.Ciudadano.Disp);


const assetRegistryCiu = await getAssetRegistry('votos.system.VotosCan');
await assetRegistryCiu.update(datos.Candidato.votos);

console.log(`voto exitoso por  ${nombre}`);

}

/** funcion para ver los votos de los candidatos
 * @param {votos.system.VerVotos} ver votos
 * @transaction
 */

 async function VerVotos(ver)
 {
    let participantes = await getParticipantRegistry('votos.system.Candidato');
    let a=participantes.get();
    
    console.log(a);
    
    
    
   // function obtener()
  //  {
      // Get the driver participant registry.
//return getParticipantRegistry('votos.system.Candidato')
/*.then(function (participantRegistry) {
  // Get all of the drivers in the driver participant registry.
  return participantRegistry.getAll();
})
.catch(function (error) {
  // Add optional error handling here.
  console.log(`error: ${error}`);
});
    }*/
 }