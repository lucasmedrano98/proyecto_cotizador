swal("¡Bienvenido al cotizador de seguros!", "Aqui se podrá calcular el costo del seguro de una gran cantidad de vehículos",
{button: "¡Gracias!",});

class A {
    constructor (año, factor) {
        this.año = año;
        this.factor = factor;
    }
}

const AñoAuto = []
const ModeloMoto = [
{modelo:"125H",
factor:0.3},
{modelo:"Gixxer",
factor:0.4,},
{modelo:"Rouser",
factor:0.5},
{modelo:"Dominar 400",
factor:0.8},
{modelo:"Interceptor",
factor:1.1},
]

const costoClasico = 3000
const costoPremium = 4500
const costoDiamond = 6000

let a1=new A ("2010",0.5)
let a2=new A ("2011",0.6)
let a3=new A ("2012",0.7)
let a4=new A ("2013",0.8)
let a5=new A ("2014",0.9)
let a6=new A ("2015",1)
let a7=new A ("2016",1.1)
let a8=new A ("2017",1.2)
let a9=new A ("2018",1.3)
let a10=new A ("2019",1.4)
let a11=new A ("2020",1.5)
let a12=new A ("2021",1.6)
let a13=new A ("2022",1.7)

AñoAuto.push(a1)
AñoAuto.push(a2)
AñoAuto.push(a3)
AñoAuto.push(a4)
AñoAuto.push(a5)
AñoAuto.push(a6)
AñoAuto.push(a7)
AñoAuto.push(a8)
AñoAuto.push(a9)
AñoAuto.push(a10)
AñoAuto.push(a11)
AñoAuto.push(a12)
AñoAuto.push(a13)

const cargoAñoAuto = ()=> {
    let optionAA
    AñoAuto.forEach ((A)=> {
        optionAA += `<option value="${A.factor}">${A.año}</option>`;
    }
    ); return optionAA}

const cargoModeloMoto = ()=> {
    let optionMM
    ModeloMoto.forEach ((element)=> {
        optionMM += `<option value="${element.factor}">${element.modelo}</option>`;
    }
    ); return optionMM}

selectAñoAuto.innerHTML = cargoAñoAuto()
selectModeloMoto.innerHTML = cargoModeloMoto()


const CotizarSeguroMoto = ()=> {
    let mod = selectModeloMoto.value
    let añ = selectAñoAuto.value
    let valordeCuotaClasico= costoClasico*añ*mod
    let valordeCuotaDiamond= costoDiamond*añ*mod
    let valordeCuotaPremium= costoPremium*añ*mod

    valorCuotaClasico.innerText = valordeCuotaClasico.toFixed(1)
    valorCuotaPremium.innerText = valordeCuotaPremium.toFixed(1)
    valorCuotaDiamond.innerText = valordeCuotaDiamond.toFixed(1)
}

const obtenerContenido = (URL)=> {
    let vehiculosAmostrar = ""
    fetch(URL)
   .then((response)=> response.json())
   .then( (data)=>{
        for (contenido of data) {
            vehiculosAmostrar += listarautos(contenido)
        }
        document.querySelector("#tablaAsegurados").innerHTML = vehiculosAmostrar
   }) 
}

const listarautos= (contenido)=> {
    const {id, marca, modelo, año, color, estado} = contenido
    return    `<tr>
                   <td>${id}</td>
                   <td>${marca}</td>
                   <td>${modelo}</td>
                   <td>${año}</td>
                   <td>${color}</td>
                   <td>${estado}</td>
               </tr>`
   }

btnCotizarMoto.addEventListener ("click", ()=>CotizarSeguroMoto())
btnCotizarMoto.addEventListener ("click", ()=>{
    Toastify({
        text: "¡Clickea aquí para asegurar tu vehiculo con nosotros!",
        duration: 3000,
        gravity: 'bottom',
        position:'right',
        destination: 'https://www.coderhouse.com'
    }).showToast();
})
