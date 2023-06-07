const boton = document.querySelector('#boton')
const foto = document.querySelector('#Foto')
const nombre = document.querySelector('#Nombre')
const correo = document.querySelector('#Correo')
const telefono = document.querySelector('#Telefono')

const generarUsuario = async () => {
    try {

            const url = 'https://randomuser.me/api/'
            const respuesta = await fetch (url)
            const { results  } = await respuesta.json();
            const datos = results[0];
            console.log(datos);
            foto.src = datos.picture.medium;
            nombre.textContent = datos.name.first;
            correo.textContent = datos.email;
            telefono.textContent = datos.cell;

            



    }
    catch (error) {

        console.log(error)
    }
    
}

boton.addEventListener ('click', generarUsuario)