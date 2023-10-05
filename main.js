fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                const todoList = document.getElementById('todo-list');
    
                data.forEach(todo => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<strong>${todo.title} / ${todo.completed ? 'Завершено' : 'Не завершено'}</strong>`;
                    if (todo.completed) {
                        listItem.classList.add('completed');
                    }
                    todoList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Произошла ошибка:', error));