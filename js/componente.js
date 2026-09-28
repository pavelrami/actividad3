/**
 * Componente reutilizable: ModalJS
 * Crea una ventana modal de forma dinámica.
 *
 * @param {Object} opciones - Configuración del modal.
 * @param {string} opciones.titulo - Título del modal.
 * @param {string} opciones.mensaje - Mensaje principal.
 * @param {string} [opciones.botonTexto="Aceptar"] - Texto del botón principal.
 * @param {string} [opciones.tipo="info"] - Tipo visual: info, exito o error.
 * @param {boolean} [opciones.mostrarCancelar=false] - Muestra botón cancelar.
 * @param {string} [opciones.textoCancelar="Cancelar"] - Texto del botón cancelar.
 * @param {Function} [opciones.onAceptar] - Función que se ejecuta al aceptar.
 * @returns {void}
 */
function mostrarModal(opciones = {}) {
  cerrarModal();

  const {
    titulo = "Aviso",
    mensaje = "Este es un mensaje.",
    botonTexto = "Aceptar",
    tipo = "info",
    mostrarCancelar = false,
    textoCancelar = "Cancelar",
    onAceptar = null
  } = opciones;

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "modalJSOverlay";

  const modal = document.createElement("div");
  modal.className = `modal-js modal-${tipo}`;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "modalJSTitulo");

  const botonCancelar = mostrarCancelar
    ? `<button class="modal-btn modal-btn-secundario" id="modalJSCancelar">${escaparHTML(textoCancelar)}</button>`
    : "";

  modal.innerHTML = `
    <button class="modal-cerrar" id="modalJSCerrar" aria-label="Cerrar modal">&times;</button>
    <div class="modal-icono">${obtenerIcono(tipo)}</div>
    <h2 id="modalJSTitulo">${escaparHTML(titulo)}</h2>
    <p>${escaparHTML(mensaje)}</p>
    <div class="modal-acciones">
      ${botonCancelar}
      <button class="modal-btn modal-btn-principal" id="modalJSAceptar">
        ${escaparHTML(botonTexto)}
      </button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    overlay.classList.add("activo");
  });

  const aceptar = document.getElementById("modalJSAceptar");
  const cerrar = document.getElementById("modalJSCerrar");
  const cancelar = document.getElementById("modalJSCancelar");

  aceptar.addEventListener("click", () => {
    if (typeof onAceptar === "function") {
      onAceptar();
    }
    cerrarModal();
  });

  cerrar.addEventListener("click", cerrarModal);

  if (cancelar) {
    cancelar.addEventListener("click", cerrarModal);
  }

  overlay.addEventListener("click", (evento) => {
    if (evento.target === overlay) {
      cerrarModal();
    }
  });

  document.addEventListener("keydown", cerrarConEscape);

  aceptar.focus();
}

/**
 * Cierra el modal activo, si existe.
 * @returns {void}
 */
function cerrarModal() {
  const overlay = document.getElementById("modalJSOverlay");

  if (overlay) {
    overlay.classList.remove("activo");

    setTimeout(() => {
      overlay.remove();
    }, 180);
  }

  document.removeEventListener("keydown", cerrarConEscape);
}

/**
 * Cierra el modal cuando el usuario presiona Escape.
 * @param {KeyboardEvent} evento
 * @returns {void}
 */
function cerrarConEscape(evento) {
  if (evento.key === "Escape") {
    cerrarModal();
  }
}

/**
 * Devuelve un ícono según el tipo de modal.
 * @param {string} tipo
 * @returns {string}
 */
function obtenerIcono(tipo) {
  if (tipo === "exito") return "✓";
  if (tipo === "error") return "!";
  return "i";
}

/**
 * Evita insertar HTML directamente desde los parámetros.
 * @param {string} texto
 * @returns {string}
 */
function escaparHTML(texto) {
  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

window.mostrarModal = mostrarModal;
window.cerrarModal = cerrarModal;
