
//logIn
let users = []

//Query  elementos
const userLog = document.getElementById("username")
const userPass = document.querySelector("#password")
const btnIngresar = document.querySelector("#btnIngresar")

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

            console.log("cargando pag")
            
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