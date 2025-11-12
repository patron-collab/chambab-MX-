let jobs = [
  { id: 1, nombre: "Doña Florinda", descripcion: "Podar el césped 🌿", pago: 5 },
  { id: 2, nombre: "Don Ramón", descripcion: "Pintar la barda 🎨", pago: 10 },
];

const jobList = document.getElementById("job-list");
const form = document.getElementById("job-form");

function mostrarTrabajos() {
  jobList.innerHTML = "";

  if (jobs.length === 0) {
    jobList.innerHTML = `<p>🎉 No hay chambas pendientes.</p>`;
    return;
  }

  jobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");
    card.innerHTML = `
      <h3>${job.nombre}</h3>
      <p>${job.descripcion}</p>
      <p><strong>$${job.pago} USD</strong></p>
      <button onclick="aceptar(${job.id})">Aceptar</button>
    `;
    jobList.appendChild(card);
  });
}

function aceptar(id) {
  const trabajo = jobs.find(j => j.id === id);
  alert(`✅ Has aceptado el trabajo de ${trabajo.nombre} por $${trabajo.pago} USD`);
  jobs = jobs.filter(j => j.id !== id);
  mostrarTrabajos();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const pago = parseFloat(document.getElementById("pago").value);

  const nuevoTrabajo = {
    id: Date.now(),
    nombre,
    descripcion,
    pago
  };

  jobs.push(nuevoTrabajo);
  mostrarTrabajos();
  form.reset();
});

mostrarTrabajos();

