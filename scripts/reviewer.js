let noteSelector = document.getElementById("noteSelect");
let noteBox = document.getElementById("noteBox");

let listCache = []; // stores IndexedDB results

// Render Note Buttons
function createOption(noteContent, noteParent, noteId) {
    if (!noteParent) {
        console.error("No Parent Instance");
        return;
    }
    if (!noteContent) {
        console.error("No Content");
        return;
    }
    if (!noteId) {
        console.error("No Id");
        return;
    }

    let newNoteOption = document.createElement("button");
    newNoteOption.textContent = String(noteContent);
    newNoteOption.className = "noteOption";

    // store real ID safely
    newNoteOption.dataset.id = noteId;

    noteParent.appendChild(newNoteOption);
}


// Event Delegation
noteSelector.addEventListener("click", (e) => {
    if (!e.target.classList.contains("noteOption")) return;

    const id = Number(e.target.dataset.id);

    const note = listCache.find(n => n.id === id);

    if (note) {
        noteBox.textContent = note.notes;
    }
});


// IndexedDB Setup
const datarequest = indexedDB.open("KeyNotes");
let database;

datarequest.onupgradeneeded = (event) => {
    database = event.target.result;

    database.createObjectStore("notesList", {
        keyPath: "id",
        autoIncrement: true,
    });
};


// Load data
datarequest.onsuccess = (event) => {
    database = event.target.result;

    const transaction = database.transaction(["notesList"], "readonly");
    const store = transaction.objectStore("notesList");
    const list = store.getAll();

    list.onsuccess = () => {
        listCache = list.result;

        if (listCache.length < 1) {
            let warnMessage = document.createElement("span");
            warnMessage.textContent = "You Have No Notes, Study To Make Some!";
            noteSelector.appendChild(warnMessage);
            return;
        }

        listCache.forEach((element) => {
            createOption(element.name, noteSelector, element.id);
        });
    };
};