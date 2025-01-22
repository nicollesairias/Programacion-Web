// Listas para almacenar datos de empleados y empresas
const empleados = []; // Lista de empleados
const empresas = []; // Lista de empresas

// Lista de áreas en las empresas
const areas = [
  "Recursos Humanos",
  "Tecnología de la Información",
  "Gerencia",
  "Calidad",
  "Finanzas",
  "Ventas"
];

// Carga las áreas en el formulario
function loadAreas() {
  const areaSelect = document.getElementById("empleadoPosition"); // Obtiene el elemento select para las áreas
  areaSelect.innerHTML = `<option value="">Seleccione un área</option>`; // Agrega la opción predeterminada
  areas.forEach(area => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    areaSelect.appendChild(option);
  });
}

// Carga las empresas en el selector del formulario de empleados
function updateEmpresaSelect() {
  const empresaSelect = document.getElementById("empleadoEmpresa");
  empresaSelect.innerHTML = `<option value="">Seleccione una empresa</option>`;
  empresas.forEach(empresa => {
    const option = document.createElement("option");
    option.value = empresa.name;
    option.textContent = empresa.name;
    empresaSelect.appendChild(option);
  });
}

// Maneja el formulario para agregar empresas
const empresaForm = document.getElementById("addEmpresaForm");
empresaForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("empresaName").value;
  const logoFile = document.getElementById("empresaLogo").files[0];
  const logo = logoFile ? URL.createObjectURL(logoFile) : "assets/images/default-logo.jpg";

  if (!name) {
    alert("Por favor, ingrese el nombre de la empresa.");
    return;
  }

  const empresa = { name, logo };
  empresas.push(empresa);
  updateEmpresaCards();
  updateEmpresaSelect();
  empresaForm.reset();
});

// Actualiza la visualización de las empresas
function updateEmpresaCards() {
  const empresaContainer = document.getElementById("empresaCardsContainer");
  empresaContainer.innerHTML = "";
  empresas.forEach(empresa => {
    const card = `<div class="empresa-card">
      <img src="${empresa.logo}" alt="${empresa.name}" style="width: 100px; height: 100px; border-radius: 50%;">
      <h3>${empresa.name}</h3>
    </div>`;
    empresaContainer.innerHTML += card;
  });
}

// Maneja el formulario para agregar empleados
const empleadoForm = document.getElementById("addEmpleadoForm");
empleadoForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("empleadoName").value;
  const age = document.getElementById("empleadoAge").value;
  const position = document.getElementById("empleadoPosition").value;
  const empresa = document.getElementById("empleadoEmpresa").value;
  const photoFile = document.getElementById("empleadoPhoto").files[0];
  const photo = photoFile ? URL.createObjectURL(photoFile) : "assets/images/default-photo.jpg";

  if (!name || !age || !position || !empresa) {
    alert("Por favor, complete todos los campos obligatorios.");
    return;
  }

  const empleado = { name, age, position, empresa, photo };
  empleados.push(empleado);
  updateEmpleadoTable();
  empleadoForm.reset();
});

// Actualiza la tabla de empleados
function updateEmpleadoTable() {
  const empleadoTable = document.getElementById("empleadoTableBody");
  empleadoTable.innerHTML = "";
  empleados.forEach(empleado => {
    const row = `<tr>
      <td><img src="${empleado.photo}" alt="${empleado.name}" style="width: 50px; height: 50px; border-radius: 50%;"></td>
      <td>${empleado.name}</td>
      <td>${empleado.age}</td>
      <td>${empleado.position}</td>
      <td>${empleado.empresa}</td>
    </tr>`;
    empleadoTable.innerHTML += row;
  });
}

// Inicializa el sistema al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  loadAreas();
  updateEmpresaSelect();
});
