# ModalJS

## Portada

**Nombre:** León Ramírez Carlos Pavel
**Componente:** ModalJS  
**Tipo:** Componente visual reutilizable en JavaScript

### ¿Qué problema resuelve?

ModalJS permite mostrar ventanas emergentes sin tener que escribir nuevamente toda la estructura HTML del modal cada vez.

El componente recibe parámetros como título, mensaje, texto del botón, tipo de modal y una función que se ejecuta al aceptar.

---

## Características

- No utiliza frameworks.
- Genera el HTML dinámicamente con JavaScript.
- Tiene estilos separados en `css/componente.css`.
- Puede reutilizarse con distintos textos y configuraciones.
- Se puede cerrar con botón principal, botón cancelar, botón X, clic fuera del modal o tecla Escape.
- Incluye variantes visuales: `info`, `exito` y `error`.

---

## Estructura del proyecto

```text
/
├── README.md
├── index.html
├── css/
│   └── componente.css
├── js/
│   └── componente.js
└── img/
    └── (capturas o imágenes, si aplica)
```

---

## Instalación

Incluye primero el CSS dentro de `<head>`:

```html
<link rel="stylesheet" href="css/componente.css">
```

Después incluye el JavaScript antes de cerrar `</body>`:

```html
<script src="js/componente.js"></script>
```

---

## Uso básico

```html
<button id="abrir">Abrir modal</button>

<script src="js/componente.js"></script>

<script>
  document.getElementById("abrir").addEventListener("click", () => {
    mostrarModal({
      titulo: "Hola",
      mensaje: "Este modal fue creado dinámicamente con JavaScript.",
      botonTexto: "Aceptar",
      tipo: "info"
    });
  });
</script>
```

---

## Ejemplo 1: modal informativo

```js
mostrarModal({
  titulo: "Información",
  mensaje: "Este es un mensaje informativo.",
  botonTexto: "Entendido",
  tipo: "info"
});
```

## Ejemplo 2: modal de éxito

```js
mostrarModal({
  titulo: "Registro completado",
  mensaje: "Tus datos fueron guardados correctamente.",
  botonTexto: "Continuar",
  tipo: "exito"
});
```

## Ejemplo 3: modal con confirmación

```js
mostrarModal({
  titulo: "Confirmar acción",
  mensaje: "¿Deseas continuar?",
  botonTexto: "Sí, continuar",
  tipo: "error",
  mostrarCancelar: true,
  textoCancelar: "Cancelar",
  onAceptar: () => {
    console.log("Acción confirmada");
  }
});
```

---

## Parámetros

| Parámetro | Tipo | Descripción |
|---|---|---|
| `titulo` | string | Título que aparece en el modal |
| `mensaje` | string | Mensaje principal |
| `botonTexto` | string | Texto del botón principal |
| `tipo` | string | `info`, `exito` o `error` |
| `mostrarCancelar` | boolean | Indica si se muestra un botón cancelar |
| `textoCancelar` | string | Texto del botón cancelar |
| `onAceptar` | function | Función que se ejecuta al aceptar |

---

## ¿Por qué es reutilizable?

No es necesario copiar y pegar el HTML del modal.

```js
mostrarModal({
  titulo: "Bienvenido",
  mensaje: "Gracias por entrar a la página.",
  tipo: "info"
});
```

Y después se puede usar de nuevo:

```js
mostrarModal({
  titulo: "Correcto",
  mensaje: "La información se guardó.",
  tipo: "exito"
});
```

El componente es el mismo, pero cambia el contenido.

---

## Capturas de pantalla


```md
![Modal informativo](img/modal-info.png)
![Modal de éxito](img/modal-exito.png)
```

---

## Consola

```js
onAceptar: () => {
  console.log("El usuario aceptó.");
}
```

Puedes tomar una captura de la consola mostrando ese mensaje.

---



## GitHub Pages

1. Entra al repositorio.
2. Ve a **Settings**.
3. Selecciona **Pages**.
4. En **Build and deployment** selecciona **Deploy from a branch**.
5. Selecciona la rama `main`.
6. Selecciona `/ (root)`.
7. Guarda.

Después agrega aquí:

**Repositorio:** PENDIENTE  
**GitHub Pages:** PENDIENTE

---

## Autor

Escribe aquí tu nombre completo.
