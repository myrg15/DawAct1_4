const carreraSelect = document.getElementById("carrera");
const listaModulos = document.getElementById("lista-modulos");
const modulosDiv = document.getElementById("modulos");
const enlaceInfo = document.getElementById("enlace-info");

// Datos de módulos por carrera
const modulosPorCarrera = {
  daw: [
    "Lenguajes de marcas y sistemas de gestión de información",
    "Sistemas informáticos",
    "Bases de datos",
    "Programación",
    "Entornos de desarrollo",
    "Inglés profesional GS",
    "Itinerario personal para la empleabilidad I",
    "Proyecto intermodular I",
    "Despliegue de aplicaciones web",
    "Desarrollo web en entorno servidor"
  ],
  dam: [
    "Programación",
    "Acceso a datos",
    "Interfaces gráficas",
    "Programación multimedia",
    "Sistemas de gestión empresarial",
    "Proyecto intermodular I",
    "Inglés profesional GS"
  ],
  asir: [
    "Planificación y administración de redes",
    "Implantación de sistemas operativos",
    "Administración de bases de datos",
    "Seguridad y alta disponibilidad",
    "Servicios de red e internet",
    "Inglés profesional GS"
  ]
};

// Detectar selección de carrera
carreraSelect.addEventListener("change", function() {
  const seleccion = carreraSelect.value;

  if (seleccion === "") {
    modulosDiv.classList.add("hidden");
    listaModulos.innerHTML = "";
    return;
  }

  // Mostrar módulos con checkboxes
  const modulos = modulosPorCarrera[seleccion];
  listaModulos.innerHTML = modulos
    .map(m => `<li><label><input type="checkbox" value="${m}"> ${m}</label></li>`)
    .join("");

  modulosDiv.classList.remove("hidden");

  // Cambiar enlace de información
  enlaceInfo.href = "#titulo-modulos";
});

// Botón para limpiar
function limpiarSeleccion() {
  carreraSelect.value = "";
  modulosDiv.classList.add("hidden");
  listaModulos.innerHTML = "";
}