const selectModeloAuto = document.querySelector("#selectModeloAuto")
const selectAñoAuto = document.querySelector("#selectAñoAuto")
const btnCotizar = document.querySelector("#btnCotizar")
const valorCuotaClasico = document.querySelector("#valorCuotaClasico")
const valorCuotaPremium = document.querySelector("#valorCuotaPremium")
const valorCuotaDiamond = document.querySelector("#valorCuotaDiamond")

btnCotizar.addEventListener ("click", ()=>CotizarSeguro())