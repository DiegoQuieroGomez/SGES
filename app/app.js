//logIn
let users = []

//Query  elementos
const userLog = document.getElementById("username")
const userPass = document.querySelector("#password")
const btnIngresar = document.querySelector("#btnIngresar")
const contenedor1 = document.querySelector("#contenedor1")

//Fetch async
const usersApi = async () => {
    const response = await fetch ("data/users.json")
    const data = await response.json()
    users = data
    console.log(users.data[0].user)
    console.log(users.data[1].user)
    console.log(users.data[2].user)
}
//Ejecucion
usersApi()

//Confirmación
const confirmarUsuario = () => {
    let accesoCorrecto

    try {
        accesoCorrecto = users.data.find((usuario) => usuario.user == userLog.value)

        if (accesoCorrecto.user == userLog.value && accesoCorrecto.pass == userPass.value) {

            if (accesoCorrecto.user_type == "comex"){
                
                document.location.href = "comex.html";

            } if (accesoCorrecto.user_type == "admin") {
                
                document.location.href = "https://es.stackoverflow.com/questions/119861/problemas-al-redireccionar-y-validar-form-en-javascript"

            }if (accesoCorrecto.user_type == null) {

                    Swal.fire({
                    title: 'Usuario sin permisos',
                    text: 'Contacta al administrador',
                    icon: 'warning',
                    confirmButtonText: 'OK'
          })
            }

            
        }else{
    
            Swal.fire({
                title: 'Ingresa la contraseña correcta',
                icon: 'warning',
                confirmButtonText: 'OK'
              })
        }

    } catch (error) {
        
        Swal.fire({
            title: 'Usuario No encontrado',
            text: 'Intenta nuevamente',
            icon: 'error',
            confirmButtonText: 'OK'
          })

    }
        
}

//Confirma evento
const confirmarEvento = () =>{
    console.log("evento escuchado")
}


//Listeners
btnIngresar.addEventListener("click", confirmarUsuario)


function mostrarUserType() {
    
    contenedor1.innerHTML = ""
    
    const mensaje = document.createElement("div")
    mensaje.className = "sinUserType"
    mensaje.innerHTML = `
        <h1> Usuario sin tipo definido</h1>
        <h2> contacte al administrador</h2>
        `
    contenedor1.append(mensaje)

}