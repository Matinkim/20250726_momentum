// Quotes array
//설명: 인용구를 담고 있는 배열입니다. 각 인용구는 객체 형태로 text 속성에 인용구의 텍스트를 가지고 있다.
const quotes = [
  { text: "The best way to predict the future is to invent it." },
  { text: "Life is what happens when you're busy making other plans." },
  { text: "You only live once, but if you do it right, once is enough." },
];

// Function to get a random quote
// 인용구를 담고 있는 배열입니다.
//각 인용구는 객체 형태로 text 속성에 인용구의 텍스트를 가지고 있다.
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to update the time, greeting, and date
//현재 시간을 가져와서 형식화하고 인사말을 설정합니다.
//toLocaleTimeString()을 사용하여 12시간 형식으로 시간을 표시하며,
//현재 시간에 따라 "Good Morning", "Good Afternoon", 또는 "Good Evening" 인사말을 결정
//이 값들은 각각 id가 "time"과 "greeting"인 HTML 요소에 표시
function updateDateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  let greeting = "";
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  document.getElementById("time").textContent = timeString;
  document.getElementById("greeting").textContent = greeting;
}

// Function to update the quote
// 무작위 인용구를 선택하여 id가 "quote-text"인 HTML 요소에 표시합니다.
function updateQuote() {
  const quote = getRandomQuote();
  document.getElementById("quote-text").textContent = `"${quote.text}"`;
}

// Function to initialize the page
// 현재 시간과 인용구를 업데이트하고, setInterval을 사용하여 매 60초마다 시간을 업데이트합니다.
function init() {
  updateDateTime();
  updateQuote();
  setInterval(updateDateTime, 60000); // Update time every minute
}

// Function to add a new to-do item
//설명: 새로운 할 일 항목을 목록에 추가합니다. itemText를 받아서 새로운 <li> 요소를 생성하고, 삭제 버튼을 추가합니다.
// 삭제 버튼에 클릭 이벤트 리스너를 추가하여 클릭 시 해당 항목을 목록에서 제거합니다.
function addTodoItem(itemText) {
  const todoList = document.getElementById("todo-items");
  const li = document.createElement("li");
  li.innerHTML = `
        ${itemText}
        <button class="delete-btn">Delete</button>
    `;
  // Add delete functionality
  li.querySelector(".delete-btn").addEventListener("click", () => {
    todoList.removeChild(li);
  });
  todoList.appendChild(li);
}

// Function to handle adding new to-dos from input
// 설명: 사용자가 할 일을 입력한 후 "Add" 버튼을 클릭하면 호출됩니다.
// 입력 필드에서 텍스트를 가져와서 앞뒤 공백을 제거하고,
// 텍스트가 비어 있지 않으면 addTodoItem 함수를 호출하여 새 항목을 추가합니다. 추가 후 입력 필드를 비웁니다.
function handleAddTodo() {
  const input = document.getElementById("todo-input");
  const newItemText = input.value.trim();
  if (newItemText) {
    addTodoItem(newItemText);
    input.value = ""; // Clear input field
  }
}

// Call init function on page load
//설명: 페이지가 로드될 때 init 함수를 호출하여 초기화 작업을 수행하고,
//"Add" 버튼을 클릭할 때 handleAddTodo 함수가 호출되도록 이벤트 리스너를 추가합니다.
window.onload = function () {
  init();
  document.getElementById("add-todo").addEventListener("click", handleAddTodo);
};
