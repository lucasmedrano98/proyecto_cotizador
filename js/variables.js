const selectModeloAuto = document.querySelector("#selectModeloAuto")
const selectAñoAuto = document.querySelector("#selectAñoAuto")
const selectModeloMoto = document.querySelector("#selectModeloMoto")
const btnCotizar = document.querySelector("#btnCotizar")
const btnCotizarMoto = document.querySelector("#btnCotizarMoto")
const valorCuotaClasico = document.querySelector("#valorCuotaClasico")
const valorCuotaPremium = document.querySelector("#valorCuotaPremium")
const valorCuotaDiamond = document.querySelector("#valorCuotaDiamond")
const URL= `../js/cotizados.json`
const btnVehiculos=document.querySelector("#btnVehiculos")


btnVehiculos.addEventListener ("click", ()=>obtenerContenido(URL))