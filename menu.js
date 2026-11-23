(function () {
  const menuItems = [
    { name: "Salary Calculator", href: "index.html" },
    { name: "DA Arrears", href: "da-arrears.html" },
    { name: "Gratuity & LE", href: "gratuity-le.html" },
    { name: "NPS vs UPS", href: "nps-vs-ups.html" },
    { name: "Income Tax", href: "income-tax.html" },
    { name: "LTC Rules", href: "ltc-rules.html" }
  ];

  // Detect current page to highlight the active link
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "") {
    currentPage = "index.html";
  }

  const nav = document.createElement("nav");
  menuItems.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.name;
    if (
      currentPage === item.href ||
      (item.href === "index.html" && currentPage === "/")
    ) {
      a.className = "active";
    }
    nav.appendChild(a);
  });

  // Insert nav right where the script tag is placed, or at the top of <body>
  if (document.currentScript && document.currentScript.parentNode) {
    document.currentScript.parentNode.insertBefore(nav, document.currentScript);
  } else {
    document.body.prepend(nav);
  }
})();
