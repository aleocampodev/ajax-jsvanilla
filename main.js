document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('sectionMessage');
  const messagePanel = document.getElementById('message');
  if (!button || !messagePanel) {
    return;
  }

  async function fetchMessageWithFallback() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      // Fuente principal: cita aleatoria
      const response = await fetch('https://api.quotable.io/random', { signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      return data.content;
    } catch (_) {
      // Respaldo: JSONPlaceholder
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      return data.title;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async function handleClick() {
    button.disabled = true;
    button.classList.add('disabled');
    messagePanel.style.display = 'block';
    messagePanel.textContent = 'Cargando...';

    try {
      const text = await fetchMessageWithFallback();
      messagePanel.textContent = text;
      if (window.M && M.toast) {
        M.toast({ html: 'Mensaje actualizado', displayLength: 2000 });
      }
    } catch (error) {
      messagePanel.textContent = 'No se pudo cargar el mensaje. Intenta de nuevo.';
    } finally {
      button.disabled = false;
      button.classList.remove('disabled');
    }
  }

  button.addEventListener('click', handleClick);
});