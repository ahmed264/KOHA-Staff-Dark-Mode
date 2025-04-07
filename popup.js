document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');
  const kohaUrlInput = document.getElementById('koha-url');
  const saveUrlBtn = document.getElementById('save-url');

  // Load settings
  chrome.storage.sync.get(['darkModeEnabled', 'kohaUrl'], (result) => {
    toggle.checked = result.darkModeEnabled || false;
    kohaUrlInput.value = result.kohaUrl || "";
  });

  // Toggle dark mode
  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ darkModeEnabled: toggle.checked });
  });

  // Save KOHA URL
  saveUrlBtn.addEventListener('click', () => {
    const url = kohaUrlInput.value.trim();
    if (url) {
      chrome.storage.sync.set({ kohaUrl: url });
      alert("KOHA URL saved!");
    }
  });
});
