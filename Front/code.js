// Capturar variables y elementos necesarios
const url = "http://localhost:10000/uniformes/";
const contenedor = document.querySelector("tbody");
let resultados = "";

const modalArticulo = new bootstrap.Modal(
  document.getElementById("modalArticulo")
);
const formArticulo = document.querySelector("form");

const nombre = document.getElementById("recipientname");
const equipo = document.getElementById("recipientequipo");
const color = document.getElementById("recipientcolor");
const temporada = document.getElementById("recipienttemporada");

let opcion = "";

btncrear.addEventListener("click", () => {
  nombre.value = "";
  equipo.value = "";
  color.value = "";
  temporada.value = "";
  modalArticulo.show();
  opcion = "crear";
});

// Procedimiento para listar información

const mostrar = (articulos) => {
  articulos.forEach((articulo) => {
    resultados += `<tr>
                            <td>${articulo.idUniforme}</td>
                            <td>${articulo.nombre}</td>
                            <td>${articulo.equipoBaloncesto}</td>
                            <td>${articulo.colorUniforme}</td>
                            <td>${articulo.temporadaUniforme}</td>
                            <td class = "text-center"><a class = "btnEditar btn btn-primary">Editar</a><a class = "btnBorrar btn btn-danger">Borrar</a></td>
                        </tr>`;
  });
  contenedor.innerHTML = resultados;
};

fetch(url)
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .catch((error) => console.log(error));

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

//Procedimiento Borrar
on(document, "click", ".btnBorrar", (e) => {
  const fila = e.target.parentNode.parentNode;
  const id = fila.firstElementChild.innerHTML;
  fetch(url + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => location.reload());
});

//Procedimiento Editar
let idForm = 0;
on(document, "click", ".btnEditar", (e) => {
  const fila = e.target.parentNode.parentNode;
  idForm = fila.children[0].innerHTML;
  console.log(idForm);
  const nombre = fila.children[1].innerHTML;
  const equipo = fila.children[2].innerHTML;
  const color = fila.children[3].innerHTML;
  const temporada = fila.children[4].innerHTML;
  recipientname.value = nombre;
  recipientequipo.value = equipo;
  recipientcolor.value = color;
  recipienttemporada.value = temporada;
  opcion = "editar";
  modalArticulo.show();
});

//Procedimiento para Crear y Editar
formArticulo.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nombre: nombre.value,
    equipoBaloncesto: equipo.value,
    colorUniforme: color.value,
    temporadaUniforme: temporada.value,
  };
  console.log(data)
  if (opcion == "crear") {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => location.reload())
      .then((data) => {
        const nuevoArticulo = [];
        nuevoArticulo.push(data);
        mostrar(nuevoArticulo);
      });
  }
  if (opcion == "editar") {
    fetch(url + idForm, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => location.reload());
  }
  modalArticulo.hide();
});
