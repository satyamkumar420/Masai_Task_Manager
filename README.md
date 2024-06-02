  # Task Manager Application

## 📁 Folder Structure

```plaintext
├── deletedTask.html
├── index.html
|---- styles.css
├── scripts
|  ├── index.js
|  └── deletedTask.js
```

## 📜 Problem Statement

The Task Manager Application allows users to:

1. ✅ Add a task.
2. ❌ Delete a task.
3. 🔄 Restore a deleted task.
4. 🔍 Filter tasks by priority and status.

## 🌐 Pages and Functionalities

### 1. `index.html` (Landing Page)

#### Add Task

- **Input Field**: For the task title.
- **Select Dropdown**: For priority (options: low, medium, high).
- **Add Button**: Saves the task in `localStorage` with the key `tasks`.
- **Validation**: Ensures task title and priority are not empty.

#### Task Table

- **Columns**: Name, Priority, Status, Remove.
- **Priority Color Coding**:
  - Low: Green (rgb(0, 128, 0))
  - Medium: Blue (rgb(0, 0, 255))
  - High: Red (rgb(255, 0, 0))
- **Status Toggle Button**: Toggles between pending, in-progress, and complete.
- **Remove Button**: Deletes the task and moves it to `deletedTasks`.

### 2. `deletedTask.html`

#### Deleted Tasks Table

- **Columns**: Name, Priority, Status, Restore, Delete.
- **Restore Button**: Moves tasks back to `tasks`.
- **Delete Button**: Permanently removes tasks from `deletedTasks`.

#### Filter Options

- **Select Dropdowns**: For filtering by priority and status.
- **Default Option**: Displays all tasks.

## 🎨 Screenshots

### Landing Page (index.html)

![image](https://github.com/satyamkumar420/Masai_Task_Manager/assets/98641231/cdf71bb6-fb71-4a7d-9e68-018dfe8464d4)


### Deleted Tasks Page (deletedTask.html)

![image](https://github.com/satyamkumar420/Masai_Task_Manager/assets/98641231/60c0e435-8563-495d-a52e-660b32c0f6c8)


