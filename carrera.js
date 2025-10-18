const carreraSelect = document.getElementById("carrera");
const listaModulos = document.getElementById("lista-modulos");
const modulosDiv = document.getElementById("modulos");
const enlaceInfo = document.getElementById("enlace-info");

// Datos de módulos por carrera
const modulosPorCarrera = {
  daw: [
    "Despliegue de Aplicaciones Web",
    "Programación",
    "Bases de Datos",
    "Diseño de Interfaces Web",
    "Desarrollo Web en Entorno Servidor"
  ],
  dam: [
    "Programación",
    "Acceso a Datos",
    "Interfaces Gráficas",
    "Programación Multimedia",
    "Sistemas de Gestión Empresarial"
  ],
  asir: [
    "Planificación y Administración de Redes",
    "Implantación de Sistemas Operativos",
    "Administración de Sistemas Gestores de Bases de Datos",
    "Seguridad y Alta Disponibilidad",
    "Servicios de Red e Internet"
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

  // Mostrar módulos correspondientes
  const modulos = modulosPorCarrera[seleccion];
  listaModulos.innerHTML = modulos.map(m => `<li>${m}</li>`).join("");
  modulosDiv.classList.remove("hidden");

  // Cambiar enlace de información
  enlaceInfo.href = `https://www.google.com/search?q=${encodeURIComponent(seleccion)}+grado+superior`;
});

// Botón para limpiar
function limpiarSeleccion() {
  carreraSelect.value = "";
  modulosDiv.classList.add("hidden");
  listaModulos.innerHTML = "";
}
