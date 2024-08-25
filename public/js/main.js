async function traerDatos() {
    // try catch por si ocurre algún error
    try {
        // fetch (basado en promise) recibe un objeto request o url y retorna una promesa con objeto response
        const resp = await fetch('././public/list.json');
        // si ocurrió un error
        if (!resp.ok){
            // lanza error con el estado de la respuesta
            throw new Error(`Estado de la respuesta: ${resp.status}`);
        }

        // si no ocurre error, convierte los datos de resp a json
        const json = await resp.json();
        // creamos eltos donde se van a mostrar los datos
        const container = document.getElementById('container');
        const tabla = document.createElement('table')
        const thead = document.createElement('thead');
        const fila = document.createElement('tr');

        // nombres de las col
        const campos = ['ID', 'Nombre', 'Casa'];
        campos.forEach(camposText => {
            // recorre el arreglo y para cada uno crea un th
            const header = document.createElement('th');
            // el texto del encabezado va a ser el del arreglo
            header.textContent = camposText;
            fila.appendChild(header);
        });

        // la fila con encabezados se agrega al thead y el thead se agrega a la tabla
        thead.appendChild(fila);
        tabla.appendChild(thead);

        // cuerpo de la tabla donde estarán los datos
        const tbody = document.createElement('tbody');

        // recorre cada obj guardado en constante json
        json.forEach(personaje => {
            // crea una fila para cada uno
            const row = document.createElement('tr');

            // creamos cada celda y dentro de ella se guarda los diferentes datos de cada personaje
            const id = document.createElement('td');
            id.textContent = personaje.id;
            const nombre = document.createElement('td');
            nombre.textContent = personaje.nombre;
            const casa = document.createElement('td');
            casa.textContent = personaje.casa;

            // cada field se guarda en la fila, para cada personaje que recorra, se crean los campos conteniendo los valores
            // y luego se guardarán en una nueva fila sucesivamente
            row.appendChild(id);
            row.appendChild(nombre);
            row.appendChild(casa);
            // ahora se guarda la fila en el cuerpo de la tabla
            tbody.appendChild(row);
            // el cuerpo se guarda dentro de la tabla
            tabla.appendChild(tbody);
            // y la tabla se guarda dentro del div
            container.appendChild(tabla)
        });

    } catch (error) {
        console.error(error.message);
    }
}

// ejecutamos function
traerDatos();

