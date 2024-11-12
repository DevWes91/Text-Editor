const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  const result = await deferredPrompt.prompt();
  console.log('Install prompt result:', result);
  deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('Successfully installed!');
  deferredPrompt = null;
});
