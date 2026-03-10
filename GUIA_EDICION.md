# 📖 Guía: Editar la Landing de Jazmina Monteiro

Para personas con poca experiencia que usan **Cursor/VS Code**

---

## 1️⃣ Clonar el proyecto (SOLO LA PRIMERA VEZ)

En **Terminal** (Cmd o PowerShell):

```bash
git clone https://github.com/Hjanner/jazmina-monteiro-web.git
cd jazmina-monteiro-web
```

Listo. Ahora tienes todo en tu computadora.

---

## 2️⃣ Abrir en Cursor

1. Abre **Cursor**
2. Click en **"File"** → **"Open Folder"**
3. Selecciona la carpeta `jazmina-monteiro-web`
4. Se abrirá el proyecto completo

---

## 3️⃣ ARCHIVOS QUE PUEDES EDITAR

Todos están en la carpeta **`html/`** (no toques nada fuera):

| Archivo | Qué contiene | Qué editar |
|---|---|---|
| `html/index.html` | Estructura de la página | Textos, títulos, copias |
| `html/style.css` | Colores, tamaños, estilos | Colores, espacios, fuentes |
| `html/script.js` | Lógica (form, FAQ, navbar) | Casi nunca — déjalo como está |
| `html/registro.html` | Página de confirmación | Textos, si es necesario |

---

## 4️⃣ CÓMO EDITAR CONTENIDO (EJEMPLO)

### Cambiar el título del hero

1. Abre **`html/index.html`** en Cursor
2. Busca (Ctrl+F) el texto: `APRENDE A`
3. Edita lo que necesites
4. Ejemplo:
   ```html
   <!-- ANTES -->
   <span class="outline">APRENDE A</span><br />
   <span class="gold">CRECER CON IA</span><br />
   EN 60 MINUTOS

   <!-- DESPUÉS -->
   <span class="outline">DOMINA</span><br />
   <span class="gold">LA INTELIGENCIA ARTIFICIAL</span><br />
   AHORA
   ```

---

## 5️⃣ CÓMO CAMBIAR COLORES

En **`html/style.css`**, al inicio encontrarás:

```css
:root {
  --gold: #B8922F;           /* ← Color dorado */
  --text: #1A0E06;           /* ← Color texto oscuro */
  --bg: #FDFAF5;             /* ← Fondo claro */
  --brown-dark: #3D1F0F;     /* ← Fondo oscuro */
}
```

Cambia el **código hexadecimal** (#XXXXX) al color que quieras. Usa: [colorpicker.com](https://colorpicker.com)

**Ejemplo:** cambiar el dorado a un verde:
```css
--gold: #2ECC71;  /* Ahora es verde */
```

---

## 6️⃣ GUARDAR E ENVIAR AL SERVIDOR

**Importante:** cada cambio que guardes se envía automáticamente a Vercel en ~30 segundos.

### Paso A — Guardar en Cursor
- Ctrl+S (o Cmd+S en Mac)
- ✓ El archivo tiene un punto blanco — significa que está sin guardar

### Paso B — Sincronizar con GitHub

Abre **Terminal** en Cursor (Ctrl+` o View → Terminal):

```bash
# Ver qué archivos cambiaste
git status

# Marcar todos los cambios
git add html/

# Crear commit
git commit -m "Cambios en landing: [describe brevemente qué cambiaste]"

# Enviar a GitHub
git push origin master
```

**Ejemplo de mensaje:**
```bash
git commit -m "Cambio título hero a DOMINA LA IA"
```

### Paso C — Verifica en Vercel

1. Espera 30 segundos después del `git push`
2. Ve a: [jazminamonteiro.com](https://jazminamonteiro.com) (o tu dominio)
3. Actualiza el navegador (Ctrl+R o Cmd+R)
4. ¡Deberías ver los cambios en vivo!

---

## 7️⃣ CAMBIOS COMUNES (Copia y pega)

### Cambiar el nombre del botón CTA

**Archivo:** `html/index.html`

**Busca:** `QUIERO MI LUGAR GRATIS`

**Cambia a:** `QUIERO APRENDER AHORA` (o lo que sea)

---

### Cambiar la fecha del evento

**Archivo:** `html/index.html`

**Busca:** `Martes 4 de mayo`

**Cambia a:** `Martes 18 de mayo` (o la fecha correcta)

---

### Cambiar los testimonios

**Archivo:** `html/index.html`

**Busca:** `María López` y edita:
- Nombre
- Texto del testimonial
- Rol/empresa

```html
<article class="testimonial-card" role="listitem">
  <p class="testimonial-quote">
    "Tu nuevo testimonial va aquí..."
  </p>
  <div class="testimonial-author">
    <div class="author-avatar" aria-hidden="true">AB</div>
    <div>
      <div class="author-name">Andrea Benítez</div>
      <div class="author-role">CEO · Tu Empresa</div>
    </div>
  </div>
</article>
```

---

## 8️⃣ SI ALGO SE ROMPE

1. Abre **Terminal** en Cursor
2. Escribe:
   ```bash
   git status
   ```
3. Manda un screenshot o el error a Jazmina

---

## 9️⃣ CHECKLIST ANTES DE EDITAR

- [ ] Clonaste el repo (`git clone ...`)
- [ ] Abriste la carpeta en Cursor
- [ ] **SOLO editas archivos en `html/`**
- [ ] Guardas con Ctrl+S
- [ ] Haces `git add html/` + `git commit` + `git push`
- [ ] Esperas 30 seg y verificas en [jazminamonteiro.com](https://jazminamonteiro.com)

---

## 🚨 COSAS QUE NO DEBES HACER

❌ **NO** edites archivos fuera de `html/`
❌ **NO** borres archivos
❌ **NO** cambies la estructura HTML (solo textos)
❌ **NO** hagas push sin commit
❌ **NO** edites `script.js` (código JavaScript) a menos que sepas qué haces

---

## 📞 Preguntas?

Si hay algo que no entiendas, pregunta. Git y Cursor son fáciles una vez que lo haces 1-2 veces.

¡Buena suerte! 🚀
