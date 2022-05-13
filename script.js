console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn1");
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("addTxt1");
  if (addTxt.value === "") return alert(`Task can't be blank`);
  console.log(addTxt.value);
  let notes = localStorage.getItem("notes");

  let notesObj;
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  let notesObj;
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            
                
            <div class="container m-1 p-2 rounded mx-auto bg-light shadow">
                <div class="note-container" id="note">
                  <h3 class="note-detail">Task ${index + 1} : ${element}</h1>
                  <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                </div>
            </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length !== 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No tasks added yet, write your task above and click on "Add Note to Tasks".`;
  }
}

// Function to delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  let notesObj;
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

