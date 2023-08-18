// Arreglo para ir guardando a los amigos creados.
let friends = [];

// Función para obtener los dinosaurios seleccionados.
function getSelectedDinosaurs() {
    const checkboxes = document.querySelectorAll('#dinosaurList input[type="checkbox"]');
    const selectedDinosaurs = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    return selectedDinosaurs;
}

// Función para ir agregando a cada amigo añadido e irlo actualizando en la tabla de abajo.
function addFriend() {
    const usernameInput = document.getElementById("username");
    const nameInput = document.getElementById("name");
    const imageURLInput = document.getElementById("imageURL");
    const selectedDinosaurs = getSelectedDinosaurs();
    const username = usernameInput.value.trim();
    const name = nameInput.value.trim();
    const imageURL = imageURLInput.value.trim();
    // Acá se valida que no existan campos vacíos y que en el username exista un ".".
    if (username === "" || name === "" || imageURL === "" || !username.includes(".")) {
        alert("Complete por favor todos los campos correctamente e incluya un punto en el Username.");
        return;
    }
    // Acá se valida que al menos exista un dinosaurio seleccionado.
    if (selectedDinosaurs.length === 0) {
        alert("Seleccione al menos un dinosaurio por favor.");
        return;
    }
    // Para verificar si el usuario ya existe.
    const dinosaurs = selectedDinosaurs;
    const existingFriend = friends.find(friend => friend.username === username);
    if (existingFriend) {
        // Si el usuario ya existe, entonces se le agregan las mascotas seleccionadas (a menos que ya se hayan seleccionado
        //previamente) mediante el llamado a la función "addDinosaursToFriend".
        addDinosaursToFriend(existingFriend, dinosaurs);
    } else {
        // Si el usuario no existe, entonces se le agrega a la lista de amigos.
        friends.push({ username, name, imageURL, dinosaurs });
    }
    // Para ir limpiando cada formulario rellenado.
    document.getElementById("friendForm").reset();
    // Para ir actualizando consecutivamente la tabla de amigos.
    updateTable();
    const dinosaursListDiv = document.getElementById("dinosaursListDiv");
    dinosaursListDiv.style.display = "none";
}

// Función para agregar dinosaurios a un amigo que ya se agregó previamente.
function addDinosaursToFriend(friend, newDinosaurs) {
    newDinosaurs.forEach(dino => {
        if (!friend.dinosaurs.includes(dino)) {
            friend.dinosaurs.push(dino);
        } else {
            alert(`El dinosaurio ${dino} ya ha sido agregado a este amigo.`);
        }
    });
}

// Función para actualizar la tabla con cada amigo registrado.
function updateTable() {
    const table = document.getElementById("friendsTable");
    // Para ir limpiando a la tabla.
    table.innerHTML = `
        <tr>
            <th>Username</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Dino-Mascota</th>
        </tr>
    `;

    // Agregar cada amigo registrado en toda la tabla.
    friends.forEach((friend, index) => {
        const row = table.insertRow();
        const usernameCell = row.insertCell();
        usernameCell.innerHTML = friend.username;
        const nameCell = row.insertCell();
        nameCell.innerHTML = friend.name;
        const imageCell = row.insertCell();
        imageCell.innerHTML = `<img src="${friend.imageURL}" width="50" height="50">`;
        const detailsCell = row.insertCell();
        const detailsButton = document.createElement("button");
        detailsButton.innerText = "Ver todos los Dino-Mascotas de este amigo";
        detailsButton.onclick = () => showDinosaurs(index);
        detailsCell.appendChild(detailsButton);
    });
}
 
// Función para mostrar la lista de dinosaurios que tiene un amigo seleccionado por el usuario
function showDinosaurs(index) {
    const friend = friends[index];
    const dinosaursList = friend.dinosaurs.map(dino => `<li>${dino}</li>`).join("");
    const dinosaursListDiv = document.getElementById("dinosaursListDiv");
    dinosaursListDiv.innerHTML = `
        <h2>Dinosaurios de ${friend.name}:</h2>
        <ul>
            ${dinosaursList}
        </ul>
    `;
    // Para mostrar el div con la lista de dinosaurios.
    dinosaursListDiv.style.display = "block";
}

// Para agregar el evento click al botón de "Agregar Amigo".
document.getElementById("addFriendBtn").addEventListener("click", addFriend);