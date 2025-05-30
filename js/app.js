function mostrarMensaje() {
  const mensajes = [
    '🥠 "Hoy es un buen día para empezar… o para seguir posponiéndolo. Tú eliges, sabio procrastinador"', //0
    '🥠 "Recuerda: cada error es una lección… y tú ya tienes un máster."', //1
    '🥠 "No eres perezoso, estás cargando energía para tu próxima gran etapa (o siesta)."', //2
    '🥠 "Si la vida te da limones, haz limonada… o un TikTok, lo que genere más likes."', //3
    '🥠 "Crecimiento personal es aceptar que sí, eras tú el problema. Pero ahora eres un problema más sabio."', //4
    '🥠 "Sé el cambio que quieres ver en el mundo… pero sin dejar de usar memes para sobrellevarlo."', //5
    '🥠 "Tu zona de confort te extraña, pero tu mejor versión te está esperando con café."', //6
    '🥠 "No hay fracaso, solo formas muy creativas de aprender. ¡Bien hecho, artista del caos!"', //7
    '🥠 "Cada día eres una mejor versión de ti… aunque a veces parezcas una beta con bugs."', //8
    '🥠 "El universo conspira a tu favor… cuando tú también dejas de sabotearte."', //9
    '🥠 "Levántate, sonríe y finge que tienes todo bajo control. ¡Funciona más seguido de lo que crees!"', //10
    '🥠 "No necesitas tenerlo todo resuelto. A veces crecer es solo dejar de gritarle al microondas."', //11
    '🥠 "Amarte a ti mismo es gratis. Y más barato que terapia (aunque menos efectivo)."', //12
    '🥠 "Estás a un café de distancia de conquistar el mundo. O al menos de enviar ese email pendiente."', //13
    '🥠 "Hoy no tienes que brillar. Con que no explotes, ya estás creciendo."', //14
    '🥠 "Sé como un cactus: fuerte, bonito, y no dejes que cualquiera te toque."', //15
    '🥠 "El drama no quema calorías, pero al menos te hace interesante."', //16
    '🥠 "No compares tu capítulo 2 con el final de temporada de otro. Además, el tuyo tiene mejor soundtrack."', //17
    '🥠 "Si te sientes perdido, recuerda: el GPS también recalcula. Tú también puedes."' //18
  ]
  console.log('Número de mensajes', mensajes.length)

  //lenght devuelve el largo del array
  // El último mensaje lo agregaremos con el método push
  mensajes.push(
    '🥠 "Respira profundo. Todo pasa… incluso ese mal corte de pelo que te hiciste buscando "renacer"."'
  ) //19

  console.log('Número de mensajes después de push', mensajes.length)
  console.table(mensajes)

  const NUM_MENSAJES = mensajes.length

  let numRandom = Math.floor(Math.random() * NUM_MENSAJES)
  // Devuelve un número entre 0 y 19

  console.log('numRandom', numRandom)
  document.getElementById('mensaje').innerHTML = mensajes[numRandom]
  document.getElementById('galleta').src = './img/galletas2.png'
  document.getElementById('msj').disabled = true
  document.getElementById('mensaje').style.fontSize = '1.4em'
}
function recargar() {
  location.reload()
}
