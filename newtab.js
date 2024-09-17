// 検索機能
document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search').value;
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(searchUrl, '_blank');
});

// メモ保存機能
document.getElementById('save-memo').addEventListener('click', () => {
  const memoContent = document.getElementById('memo-area').value;
  chrome.storage.sync.set({ memo: memoContent }, () => {
    alert('Memo saved!');
  });
});

// 保存されたメモを読み込む
chrome.storage.sync.get('memo', (data) => {
  if (data.memo) {
    document.getElementById('memo-area').value = data.memo;
  }
});

// 画像アップロード機能
document.getElementById('image-upload').addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const imageUrl = reader.result;
    document.getElementById('displayed-image').src = imageUrl;
    chrome.storage.sync.set({ image: imageUrl });
  };
  reader.readAsDataURL(file);
});

// 保存された画像を読み込む
chrome.storage.sync.get('image', (data) => {
  if (data.image) {
    document.getElementById('displayed-image').src = data.image;
  }
});

// Todoリスト機能
document.getElementById('add-todo').addEventListener('click', () => {
  const todoItem = document.getElementById('todo-input').value;
  if (todoItem) {
    addTodoItem(todoItem);
    saveTodoList();
  }
  document.getElementById('todo-input').value = '';
});

// Todoアイテムの追加
function addTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById('todo-list').appendChild(li);
}

// 保存されたTodoリストを読み込む
chrome.storage.sync.get('todos', (data) => {
  if (data.todos) {
    data.todos.forEach(todo => addTodoItem(todo));
  }
});

// Todoリストの保存
function saveTodoList() {
  const todos = [];
  document.querySelectorAll('#todo-list li').forEach(li => {
    todos.push(li.textContent);
  });
  chrome.storage.sync.set({ todos });
}
