{{flutter_js}}
{{flutter_build_config}}

window.addEventListener('load', async function () {
  try {
    const versionResponse = await fetch('/version.json?version=' + Date.now());
    const versionJson = await versionResponse.json();
    const version = versionJson['latestVersion'];
    _flutter.loader.load({
      serviceWorkerSettings: {
        timeoutMillis: 40000,
        serviceWorkerUrl: "flutter_service_worker.js?version_worker=" + version,
        serviceWorkerVersion: {{flutter_service_worker_version}},
      },
    });
  } catch (e) {
    console.error('Failed to load version.json', e);
    _flutter.loader.load();
  }
});
