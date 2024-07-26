// 현재 시간을 표시하는 함수
function displayCurrentTime() {
  // 현재 시간을 가져오기
  let now = new Date();

  // 시, 분, 초를 가져오기
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 시간을 AM/PM 형식으로 변경
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0시는 12시로 표시

  // 시간을 형식에 맞게 조정
  let currentTime =
    hours +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    " " +
    period;

  // 현재 시간을 HTML 요소에 출력
  document.getElementById("current-time").innerHTML = currentTime;
}

// 매 초마다 현재 시간 갱신
setInterval(displayCurrentTime, 1000);

// 페이지가 로드될 때 처음 한 번 호출하여 현재 시간을 표시
displayCurrentTime();

// 할 일을 추가하는 함수
function addTodo() {
  // 입력 값 가져오기
  let inputElement = document.getElementById("todo-input");
  let todoText = inputElement.value.trim();

  if (todoText === "") {
    alert("Please enter a todo item.");
    return;
  }

  // 새로운 todo 항목을 생성
  let todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.textContent = todoText;

  // 클릭 이벤트 핸들러 추가
  todoItem.addEventListener("click", function () {
    todoItem.remove();
  });

  // todo-list 요소에 추가
  let todoList = document.getElementById("todo-list");
  todoList.appendChild(todoItem);

  // 입력 필드 비우기
  inputElement.value = "";
}
