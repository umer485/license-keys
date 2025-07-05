(function () {
  const validKeys = [
    "umerxd485licenseuplay",
    "umerxd486licenseuplay",
    "umerxd487licenseuplay",
    "umerxd488licenseuplay",
    "umerxd489licenseuplay",
    "umerxd490licenseuplay",
    "umerxd491licenseuplay",
    "umerxd492licenseuplay",
    "umerxd493licenseuplay",
    "umerxd494licenseuplay"
  ];

  const userKey = window.userLicenseKey || "";

  if (!validKeys.includes(userKey)) {
    document.documentElement.innerHTML = `
      <head>
        <title>Invalid License</title>
        <style>
          body {
            font-family: sans-serif;
            background: #fff;
            color: #000;
            text-align: center;
            padding: 80px;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <h1>🚫 Invalid or Expired License</h1>
        <p>This template is not licensed for this blog.</p>
        <p>Please purchase a valid license from 
        <a href="https://bloggeraihub.store" target="_blank">BloggerAIHub.store</a></p>
      </body>
    `;
  }
})();
