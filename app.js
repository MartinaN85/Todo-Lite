const todos = [
  { text: "Lära mig branches", done: false },
  { text: "Skapa PR och få review", done: false },
  { text: "Lösa en mergekonflikt", done: false },
];

const listEl = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");
const inputEl = document.getElementById("todoInput");

// 🔘 Referenser till dialog och overlay
const dialog = document.getElementById("confirmDialog");
const overlay = document.getElementById("overlay");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

let pendingDeleteIndex = null; // 🔁 Håller koll på vilken todo som ska tas bort

function updateCounter() {
  const count = todos.filter(t => !t.done).length;
  document.getElementById("todoCounter").textContent = `Kvar att göra: ${count}`;
}

function render() {
  listEl.innerHTML = "";
  todos.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "item" + (t.done ? " done" : "");

    const label = document.createElement("span");
    label.textContent = t.text;

    const status = document.createElement("span");
    status.className = "status-label";
    status.textContent = t.done ? "Klar" : "Aktiv";

    const spacer = document.createElement("span");
    spacer.className = "spacer";

    const toggle = document.createElement("button");
    toggle.textContent = t.done ? "Ångra" : "Klar";
    toggle.onclick = () => {
      todos[i].done = !todos[i].done;
      render();
    };

    // Visa redigeringsknapp endast om todo är aktiv
    let edit;
    if (!t.done) {
      edit = document.createElement("button");
      edit.textContent = "Redigera";
      edit.onclick = () => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = t.text;
        input.className = "edit-input";

        const save = document.createElement("button");
        save.textContent = "Spara";
        save.onclick = () => {
          const newText = input.value.trim();
          if (newText) {
            todos[i].text = newText;
            render();
          }
        };

        const cancel = document.createElement("button");
        cancel.textContent = "Avbryt";
        cancel.onclick = () => {
          render();
        };

        li.innerHTML = "";
        li.append(input, save, cancel);
      };
    }

    const del = document.createElement("button");
    del.textContent = "Ta bort";
    del.onclick = () => {
      pendingDeleteIndex = i;
      showDialog();
    };

    li.append(label, status, spacer, toggle);
    if (edit) li.append(edit);
    li.append(del);
    listEl.appendChild(li);
  });

  updateCounter();
}

function addTodo(text) {
  todos.unshift({ text, done: false });
}

// 🔘 Visa dialogruta
function showDialog() {
  overlay.classList.remove("hidden");
  dialog.classList.remove("hidden");
}

// 🔘 Dölj dialogruta
function closeDialog() {
  overlay.classList.add("hidden");
  dialog.classList.add("hidden");
  pendingDeleteIndex = null;
}

// 🔘 Hantera "Ja" och "Nej"
confirmYes.addEventListener("click", () => {
  if (pendingDeleteIndex !== null) {
    todos.splice(pendingDeleteIndex, 1);
    render();
  }
  closeDialog();
});

confirmNo.addEventListener("click", () => {
  closeDialog();
});

addBtn.addEventListener("click", () => {
  const val = inputEl.value.trim();
  if (!val) return;
  addTodo(val);
  inputEl.value = "";
  render();
});

render();
