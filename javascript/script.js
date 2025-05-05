
document.addEventListener('DOMContentLoaded', function() {
  // Vérification globale pour éviter les erreurs si des éléments sont manquants
  function safeQuerySelector(selector, context = document) {
    return context.querySelector(selector);
  }

  function safeAddEventListener(element, event, callback) {
    if (element) {
      element.addEventListener(event, callback);
    }
  }


// Email App
const emailApp = {
   app_name: document.querySelector(".icon.open-email"),
  window:   document.getElementById("win-email"),
  close:    document.querySelector(".close-email"),
  backfull: document.querySelector(".backfull-email"),
  full:     document.querySelector(".full-email"),
  point:    document.getElementById("point-email"),
  form:     document.getElementById("contact-form")
};

// Open/close/min/max email window

  emailApp.app_name.addEventListener("click", () =>
    open_window(emailApp.window, emailApp.point, emailApp.app_name)
  );
 
  emailApp.close.addEventListener("click", () =>
    close_window(emailApp.window, emailApp.point)  // Ne pas passer emailApp.app_name
  );
  emailApp.backfull.addEventListener("click", () =>
    handleMinimize(emailApp.window)
  );
  emailApp.full.addEventListener("click", () =>
    handleFullScreen(emailApp.window)
  );

  // Confirmation envoi formulaire
emailApp.form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(emailApp.form.action, {
    method: "POST",
    body: new FormData(emailApp.form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert("Votre message a bien été envoyé !");
      emailApp.form.reset();
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  });
});

// global z-index tracker
let zTop = 1;
/********** ELEMENTS **********/
const elements = {
  body: document.querySelector("body"),
  navbar: document.querySelector(".navbar"),
  open_spotlight: document.querySelector(".open_Search"),
  spotlight_search: document.querySelector(".spotlight_serach"),
  brightness_range: document.getElementById("brightness"),
  sound_range: document.getElementById("sound"),
  clockElement: document.getElementById("clock"),
  clockWrapper: document.querySelector(".clock"),
  widgetsPanel: document.querySelector(".widgets-panel"),
  batteryButton: document.querySelector(".battery"),
  batteryText: document.querySelector(".battery__text"),
  batteryPopup: document.querySelector(".battery__popup"),
  batteryPopupText: document.querySelector(".battery__popup header span"),
  batteryProgress: document.querySelector(".battery__progress"),
  batteryIsChargingLogo: document.querySelector(".is-charging"),
  powerSource: document.querySelector(".power-source"),
};

// Calculator App
const calculatorApp = {
  app_name: document.querySelector("#calculator"),
  window: document.querySelector(".calculator"),
  full: document.querySelector(".full"),
  close: document.querySelector(".close-cal"),
  backfull: document.querySelector(".min-cal"),
  point: document.querySelector("#point-cal"),
  opening: document.querySelector('.open-cal'),
  opening_l: document.querySelector(".open-cal-lunching")
};

// Notes App
const notesApp = {
  app_name: document.querySelector("#Notes"),
  window: document.querySelector(".note"),
  full: document.querySelector(".full-note"),
  close: document.querySelector(".close-note"),
  backfull: document.querySelector(".backfull-note"),
  point: document.querySelector("#point-note"),
  adding: document.querySelector(".adding"),
  deleting: document.querySelector(".deleting"),
  content_typing: document.querySelector(".content__typing"),
  opening: document.querySelector(".open-note")
};

// Terminal App
const terminalApp = {
  app_name: document.querySelector("#Terminal"),
  window: document.querySelector(".terminal"),
  full: document.querySelector(".full"),
  close: document.querySelector(".close"),
  backfull: document.querySelector(".backfull"),
  point: document.querySelector("#point-terminal"),
  content: document.querySelector(".terminal .terminal_content"),
  taskbar: document.querySelector(".terminal .window__taskbar"),
  opening: document.querySelector(".open-terminal")
};


const vscodeApp = {
  app_name: document.querySelector("#VScode"),
  window: document.querySelector(".Vscode"),
  close: document.querySelector(".close-Vscode"),
  backfull: document.querySelector(".backfull-Vscode"),
  full: document.querySelector(".full-Vscode"),
  point: document.querySelector("#point-vscode"),
  opening: document.querySelector(".open-vscode")
};


// Maps App
const mapsApp = {
  app_name: document.querySelector("#map"),
  window: document.querySelector(".maps"),
  full: document.querySelector(".full-map"),
  close: document.querySelector(".close-map"),
  backfull: document.querySelector(".backfull-map"),
  point: document.querySelector("#point-maps"),
  opening: document.querySelector(".open-map")
};

// Finder App (nouveau)
const finderApp = {
  app_name: document.querySelector("#finder"),
  window: document.querySelector(".finder"),
  full: document.querySelector(".full-finder"),
  close: document.querySelector(".close-finder"),
  backfull: document.querySelector(".backfull-finder"),
  point: document.querySelector("#point-finder"),
  opening: document.querySelector(".open-finder")
};

// Launchpad
const launchpad = {
  container: document.querySelector(".container__Window"),
  window: document.querySelector(".launchpad"),
  searchbox: document.querySelector(".launchpad .searchbox"),
  app_container: document.querySelector(".Apps-container"),
  point: document.querySelector("#point-launchpad"),
  opening: document.querySelector(".open-lunchpad")
};

/********** LISTENERS **********/

/* 
Now it's not good cause when i set this, the default blur will be remove of everywhere.

function change_brightness() {
  var brightnessVal = elements.brightness_range.value;

  elements.body.style.filter = `brightness(${brightnessVal + '%'})`;
  elements.body.style.backdropFilter = `brightness(${brightnessVal + '%'})`;
}
*/

// Spotlight
function handleopen_spotlight() {
  if (elements.spotlight_search.style.display === "none") {
    elements.spotlight_search.style.display = "flex";
  } else {
    elements.spotlight_search.style.display = "none";
  }
}

// Notes app function start
function handleAdding() {
  const create_input = document.createElement("input");
  create_input.placeholder = "Writing name";
  notesApp.adding.append(create_input);
}

function handleDeleting() {
  const inputChild = document.querySelector(".content__sidebar--notes input");
  inputChild.remove();
  notesApp.content_typing.style.display = "none";
}

function handleNotes() {
  notesApp.content_typing.style.display = "block";
}


/* Finder (ajout complet) */
finderApp.opening.addEventListener("click", () =>
  open_window(finderApp.window, finderApp.point, finderApp.app_name)
);
finderApp.close.addEventListener("click", () =>
  close_window(finderApp.window, finderApp.point, finderApp.app_name)
);
finderApp.backfull.addEventListener("click", () =>
  handleMinimize(finderApp.window)
);
finderApp.full.addEventListener("click", () =>
  handleFullScreen(finderApp.window)
);
// Notes app function end

function handleMinimize(Minimize) {
  Minimize.style.maxWidth = "80%";
  Minimize.style.minWidth = "70%";
  Minimize.style.height = "430px";
}

function handleFullScreen(maximize) {
  maximize.style.maxWidth = "95%";
  maximize.style.minWidth = "95%";
  maximize.style.height = "90%";
}

function close_window(close, point, appName) {
  close.style.display = "none";
  point.style.display = "none";
  appName.style.display = "none";
}

// Ajoute ces variables au début de ton code pour suivre les décalages
let offsetIndex = 0;
const offsetStep = 20; // Pixels de décalage entre chaque fenêtre
const maxOffset = 100; // Décalage maximum avant de revenir à zéro

function open_window(open, point, appName) {
  // Amener cette fenêtre au premier plan
  open.style.zIndex = ++zTop;
  elements.navbar.style.display = "flex";
  open.style.display = "block";
  launchpad.container.style.display = "flex";
  launchpad.window.style.display = "none";
  launchpad.point.style.display = "none";
  
  // Afficher l'icône et le point dans le dock
  if (appName) appName.style.display = "block";
  if (point) point.style.display = "block";
  
  // Positionner la fenêtre au centre de l'écran avec un décalage
  const windowWidth = open.offsetWidth;
  const windowHeight = open.offsetHeight;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Calcule la position de base (centre)
  let baseLeft = (screenWidth - windowWidth) / 2;
  let baseTop = (screenHeight - windowHeight) / 3;
  
  // Ajoute un décalage pour cette fenêtre
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Sur mobile, décaler uniquement verticalement
    baseTop += offsetIndex * offsetStep;
  } else {
    // Sur desktop, décaler en diagonale
    baseLeft += offsetIndex * (offsetStep / 2);
    baseTop += offsetIndex * offsetStep;
  }
  
  // S'assurer que la fenêtre reste dans les limites de l'écran
  baseLeft = Math.max(10, Math.min(baseLeft, screenWidth - windowWidth - 10));
  baseTop = Math.max(10, Math.min(baseTop, screenHeight - 100)); // Laisse un peu d'espace en bas
  
  // Applique la position
  open.style.left = baseLeft + 'px';
  open.style.top = baseTop + 'px';
  
  // Incrémente l'index pour la prochaine fenêtre
  offsetIndex = (offsetIndex + 1) % (maxOffset / offsetStep);
}



// Launchpad function start
launchpad.opening.addEventListener("click", handleOpenLaunching);


function handleOpenLaunching() {
  if (launchpad.window.style.display === "none") {
    launchpad.window.style.display = "block";
    elements.navbar.style.display = "none";
    launchpad.point.style.display = "block";
  } else {
    launchpad.window.style.display = "none";
    elements.navbar.style.display = "flex";
    launchpad.point.style.display = "none";
  }
  launchpad.container.style.display = "none";
}

function handleLaunchpadSearch(e) {
  for (let app of launchpad.app_container.children) {
    if (e.target.value) {
      app.style.display = "none";
      if (app.dataset.keywords.includes(e.target.value)) {
        app.style.display = "flex";
      }
    } else app.style.display = "flex";
  }
}
// Launchpad function end

// Calculator app start
function handleOpenCal_lunchpad() {
  calculatorApp.window.style.display = "block";
  calculatorApp.app_name.style.display = "block";
  launchpad.container.style.display = "flex";
  elements.navbar.style.display = "flex";
  launchpad.window.style.display = "none";
  calculatorApp.point.style.display = "block";
  launchpad.point.style.display = "none";
}
// Calculator app end

handleopen_spotlight();
handleOpenLaunching();
notesApp.adding.addEventListener("click", handleAdding);
calculatorApp.backfull.addEventListener("click", () =>
  handleMinimize(terminalApp.window)
);
notesApp.backfull.addEventListener("click", () =>
  handleMinimize(notesApp.window)
);
terminalApp.close.addEventListener("click", () =>
  close_window(terminalApp.window, terminalApp.point, terminalApp.app_name)
);
notesApp.close.addEventListener("click", () =>
  close_window(notesApp.window, notesApp.point, notesApp.app_name)
);
mapsApp.close.addEventListener("click", () =>
  close_window(mapsApp.window, mapsApp.point, mapsApp.app_name)
);
finderApp.close.addEventListener("click", () =>
  close_window(finderApp.window, finderApp.point, App.app_name)
);
notesApp.deleting.addEventListener("click", handleDeleting);
terminalApp.full.addEventListener("click", () =>
  handleFullScreen(terminalApp.window)
);
notesApp.full.addEventListener("click", () =>
  handleFullScreen(notesApp.window)
);

vscodeApp.full.addEventListener("click", () =>
  handleFullScreen(vscodeApp.window)
);

mapsApp.full.addEventListener("click", () => handleFullScreen(mapsApp.window));
notesApp.window.addEventListener("click", handleNotes);
terminalApp.opening.addEventListener("click", () =>
  open_window(terminalApp.window, terminalApp.point, terminalApp.app_name)
);
notesApp.opening.addEventListener("click", () =>
  open_window(notesApp.window , notesApp.point, notesApp.app_name)
);
calculatorApp.opening.addEventListener("click", () =>
  open_window(calculatorApp.window, calculatorApp.point, calculatorApp.app_name)
);

vscodeApp.opening.addEventListener("click", () =>
  open_window(vscodeApp.window, vscodeApp.point, vscodeApp.app_name)
);

mapsApp.opening.addEventListener("click", () =>
  open_window(mapsApp.window, mapsApp.point, mapsApp.app_name)
);

vscodeApp.close.addEventListener("click", () =>
  close_window(vscodeApp.window, vscodeApp.point, vscodeApp.app_name)
);
vscodeApp.backfull.addEventListener("click", () =>
  handleMinimize(vscodeApp.window)
);

mapsApp.backfull.addEventListener("click", () =>
  handleMinimize(mapsApp.window)
);
calculatorApp.close.addEventListener("click", () =>
  close_window(
    calculatorApp.window,
    calculatorApp.point,
    calculatorApp.app_name
  )
);
calculatorApp.opening_l.addEventListener("click", handleOpenCal_lunchpad);
elements.open_spotlight.addEventListener("click", handleopen_spotlight);
launchpad.searchbox.addEventListener("input", handleLaunchpadSearch);
elements.clockWrapper.addEventListener("click", () => {
  elements.widgetsPanel.classList.toggle("open");
});

// Calculator code
// select all the buttons
const calculatorButtons = document.querySelectorAll(".input button");
// select the <input type="text" class="display" disabled> element
const calculatorDisplay = document.querySelector(".display");

// add eventListener to each button
calculatorButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    calculate(event.target.value, calculatorDisplay)
  );
});

function calculate(value, display) {
  const latestChar = display.value[display.value.length - 1];

  const isEmpty = display.value === "0";
  const isDecimalLastOperand = lastNumber(display.value).includes(".");
  const isNumber =
    value === "0" ||
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "7" ||
    value === "8" ||
    value === "9" ||
    value === "10";

  if (isEmpty && isNumber) {
    return (display.value = value);
  }

  switch (value) {
    case "=":
      if (!isEmpty) display.value = eval(display.value);
      return;
    case ".":
      if (!isDecimalLastOperand) display.value += ".";
      return;
    case "C":
      return (display.value = "0");
    case "+/-":
      if (
        !operators.some((operator) =>
          display.value.replace(/^-/, "").includes(operator)
        )
      )
        display.value = -1 * parseFloat(display.value);
      return;
    case "*":
    case "/":
    case "-":
    case "+":
    case "%":
      if (
        latestChar === "/" ||
        latestChar === "*" ||
        latestChar === "-" ||
        latestChar === "+" ||
        latestChar === "%"
      )
        return (display.value = display.value.slice(0, -1) + value);
    default:
      display.value += value;
  }
}

// Custom dragging for all windows on desktop and mobile
const wins = document.querySelectorAll('.window');
wins.forEach(win => {
  const hdr = win.querySelector('.window-header, .window__taskbar');
  let drag = false, ox = 0, oy = 0;

  const start = e => {
    e.preventDefault();
    drag = true;
    win.style.zIndex = ++zTop;
    const ev = e.touches ? e.touches[0] : e;
    ox = ev.clientX - win.offsetLeft;
    oy = ev.clientY - win.offsetTop;
    hdr.style.cursor = 'grabbing';
  };

  const move = e => {
    if (!drag) return;
    e.preventDefault();
    const ev = e.touches ? e.touches[0] : e;
    win.style.left = (ev.clientX - ox) + 'px';
    win.style.top  = (ev.clientY - oy) + 'px';
  };

  const end = () => {
    drag = false;
    hdr.style.cursor = 'grab';
  };

  hdr.addEventListener('mousedown', start);
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', end);

  hdr.addEventListener('touchstart', start, { passive: false });
  document.addEventListener('touchmove', move, { passive: false });
  document.addEventListener('touchend', end);

  // Prevent drag from button clicks/taps in the header
  const btns = win.querySelectorAll('.window-header button, .window__taskbar button');
  btns.forEach(b=>{
    b.addEventListener('mousedown', e => e.stopPropagation());
    b.addEventListener('touchstart', e => e.stopPropagation(), { passive: false });
    b.addEventListener('click', e => { e.stopPropagation(); /* closeWin(win.id); */ });
    b.addEventListener('touchend', e => { e.stopPropagation(); /* closeWin(win.id); */ });
  });
});

// Date and time
const dateElement = document.getElementById("date");
const currentDate = new Date();
dateElement.innerHTML = currentDate.toDateString();

function digi() {
  const date = new Date();
  let hour = date.getHours();
  let minute = checkTime(date.getMinutes());

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  if (hour > 12) {
    hour = hour - 12;
    if (hour === 12) {
      hour = checkTime(hour);
      elements.clockElement.innerHTML = hour + ":" + minute + " AM";
    } else {
      hour = checkTime(hour);
      elements.clockElement.innerHTML = hour + ":" + minute + " PM";
    }
  } else {
    elements.clockElement.innerHTML = hour + ":" + minute + " AM";
  }
}

let terminal_line_html = $(".terminal_line").html();
let path = "~";
let dirName;
let dirs = ["Desktop", "Downloads", "Music", "Documents"];

function init_terminal_line() {
  $(".cursor").keydown(function (e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
      e.preventDefault();
      let command = $(this).html();
      if (!command) return;
      let command_output = "zsh: command not found: " + command + "<br>";

      if (command.startsWith("cd ")) {
        path = command.substring(3);
        command_output = "";
      } else if (command === "ls") {
        command_output = dirs.join("\t");
      } else if (command === "pwd") {
        command_output = path + "/";
      } else if (command.startsWith("mkdir ")) {
        dirName = command.substring(6);
        dirs.push(dirName);
        command_output = "";
      } else if (command === "rmdir") {
        dirs.pop();
        command_output = "";
      } else if (command === "ps -aux") {
        command_output = "CPU = 56% <br> MEMORY = 25% <br> DISK = 34%";
      } else if (command.startsWith("cat ")) {
        command_output =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Fugiat nihil totam expedita sint necessitatibus quos ducimus.";
      } else if (command.startsWith("du -hs ")) {
        command_output = Math.floor(Math.random() * 100) + "GB";
      }

      $(this).removeAttr("contenteditable");
      $(this).removeClass("cursor");
      terminalApp.content
        .append(command_output)
        .append(terminal_line_html.replace("~", path));
      placeCaretAtEnd(document.querySelector(".cursor"));
      init_terminal_line();
    }
  });
}

init_terminal_line();
terminalApp.content.addEventListener("click", function () {
  placeCaretAtEnd(document.querySelector(".cursor"));
});

function placeCaretAtEnd(el) {
  el.focus();
  var range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

// Right click to desktop
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById("contextMenu").style.opacity = "0";
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.opacity == "1") hideMenu();
  else {
    var menu = document.getElementById("contextMenu");

    menu.style.opacity = "1";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

// Loading
const load = document.getElementById("loading");


/********** Start Battery **********/
const calculateBattery = () => {
  let number = Math.floor(Math.random() * 100); // If there is any error, it will be the random default battery level
  let batteryIsCharging = false; // Charging status

  navigator
    .getBattery()
    .then(function (battery) {
      number = battery.level * 100;

      batteryIsCharging = battery.charging;
      battery.addEventListener("chargingchange", function () {
        batteryIsCharging = battery.charging;
      });
    })
    .finally(() => {
      elements.batteryText.textContent = `${number}%`;
      elements.batteryProgress.style.width = `${number}%`;
      elements.batteryPopupText.textContent = `${number}%`;

      if (number <= 20) {
        elements.batteryProgress.classList.add("battery__low");
      } else if ((number > 90 && batteryIsCharging) || batteryIsCharging) {
        elements.batteryProgress.classList.add("battery__high");
        elements.batteryIsChargingLogo.classList.add("is-charging-visibel");
        elements.powerSource.textContent = "Power Adapter";
      }
    });
};

elements.batteryButton.addEventListener("click", () => {
  elements.batteryPopup.classList.toggle("opened");
  elements.batteryButton.classList.toggle("selected");
});
/********** End Battery **********/



// Editor App
const editorApp = {
  app_name: document.querySelector(".icon.open-editor"),
  window:   document.getElementById("win-editor"),
  close:    document.querySelector(".close-editor"),
  backfull: document.querySelector(".backfull-editor"),
  full:     document.querySelector(".full-editor"),
  point:    document.getElementById("point-editor"),
  title:    document.getElementById("editor-title"),  // pour changer le titre
  area:     document.querySelector(".editor-area")    // pour injecter le contenu
};


// Ouvrir l'éditeur depuis le Dock
editorApp.app_name.addEventListener("click", () =>
  open_window(editorApp.window, editorApp.point, editorApp.app_name)
);
// fermer / minim / maxim
editorApp.close.addEventListener("click", () =>
  close_window(editorApp.window, editorApp.point, editorApp.app_name)
);
editorApp.backfull.addEventListener("click", () =>
  handleMinimize(editorApp.window)
);
editorApp.full.addEventListener("click", () =>
  handleFullScreen(editorApp.window)
);


document.querySelectorAll('.file-card').forEach(card => {
  card.addEventListener('click', () => {
    // Récupère données du card
    const title   = card.dataset.title;
    const content = card.dataset.content;
    // Change titre et texte de l’éditeur
    editorApp.title.textContent = title;
    editorApp.area.innerHTML     = content;
    // Ouvre l’éditeur
    open_window(editorApp.window, editorApp.point, editorApp.app_name);
  });
});




// Safari App
const safariApp = {
  app_name: document.querySelector(".icon.open-safari"),
  window:   document.getElementById("win-safari"),
  close:    document.querySelector(".close-safari"),
  backfull: document.querySelector(".backfull-safari"),
  full:     document.querySelector(".full-safari"),
  point:    document.getElementById("point-safari"),
  back:     document.querySelector(".safari-back"),
  forward:  document.querySelector(".safari-forward"),
  reload:   document.querySelector(".safari-reload"),
  home:     document.querySelector(".safari-home"),
  plus:     document.querySelector(".safari-plus"),
  addressBar: document.querySelector(".safari-url"),
  content:  document.querySelector(".safari-content")
};

// Ouvrir/fermer la fenêtre Safari
safariApp.app_name.addEventListener("click", () =>
  open_window(safariApp.window, safariApp.point, safariApp.app_name)
);

safariApp.close.addEventListener("click", () =>
  close_window(safariApp.window, safariApp.point)
);

safariApp.backfull.addEventListener("click", () =>
  handleMinimize(safariApp.window)
);

safariApp.full.addEventListener("click", () =>
  handleFullScreen(safariApp.window)
);

// Simulation des boutons de navigation
safariApp.back.addEventListener("click", () => {
  // Animation pour simuler le retour en arrière
  safariApp.content.style.opacity = "0.5";
  setTimeout(() => {
    safariApp.content.style.opacity = "1";
  }, 300);
});

safariApp.forward.addEventListener("click", () => {
  // Animation pour simuler l'avancement
  safariApp.content.style.opacity = "0.5";
  setTimeout(() => {
    safariApp.content.style.opacity = "1";
  }, 300);
});

safariApp.reload.addEventListener("click", () => {
  // Animation de rechargement
  safariApp.reload.classList.add("rotating");
  safariApp.content.style.opacity = "0.5";
  
  setTimeout(() => {
    safariApp.content.style.opacity = "1";
    safariApp.reload.classList.remove("rotating");
  }, 500);
});







// Paramètres App
const parametresApp = {
  app_name: document.querySelector(".icon.open-parametres"),
  window: document.getElementById("win-parametres"),
  close: document.querySelector(".close-parametres"),
  backfull: document.querySelector(".backfull-parametres"),
  full: document.querySelector(".full-parametres"),
  point: document.getElementById("point-parametres"),
  sidebar_items: document.querySelectorAll(".parametres-sidebar li"),
};



open_window(parametresApp.window, parametresApp.point, parametresApp.app_name)


// Ouvrir/fermer la fenêtre Paramètres
parametresApp.app_name.addEventListener("click", () =>
  open_window(parametresApp.window, parametresApp.point, parametresApp.app_name)
);

parametresApp.close.addEventListener("click", () =>
  close_window(parametresApp.window, parametresApp.point)
);

parametresApp.backfull.addEventListener("click", () =>
  handleMinimize(parametresApp.window)
);

parametresApp.full.addEventListener("click", () =>
  handleFullScreen(parametresApp.window)
);

// Gestion de la sidebar
parametresApp.sidebar_items.forEach(item => {
  item.addEventListener("click", () => {
    // Retirer la classe active de tous les éléments
    parametresApp.sidebar_items.forEach(i => i.classList.remove("active"));
    // Ajouter la classe active à l'élément cliqué
    item.classList.add("active");
    
    // Ici vous pourriez ajouter un code pour charger différentes sections
    // basées sur l'élément de la sidebar qui a été cliqué
  });
});

// Animation d'entrée pour les sections d'applications
const appSections = document.querySelectorAll('.app-section');
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialiser les sections avec l'effet de fondu
window.addEventListener('DOMContentLoaded', () => {
  appSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    appearOnScroll.observe(section);
  });
});

// Call the functions
calculateBattery();
digi();


});