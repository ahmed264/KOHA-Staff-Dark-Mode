chrome.storage.sync.get(['darkModeEnabled', 'kohaUrl'], (result) => {
  const { darkModeEnabled, kohaUrl } = result;
  if (!kohaUrl || !window.location.href.includes(kohaUrl)) return;

  const applyDarkMode = (enabled) => {
    if (enabled) {
      document.documentElement.classList.add('koha-darkmode');
    } else {
      document.documentElement.classList.remove('koha-darkmode');
    }
  };

  applyDarkMode(darkModeEnabled);

  const observer = new MutationObserver(() => applyDarkMode(darkModeEnabled));
  observer.observe(document.body, { childList: true, subtree: true });
});
