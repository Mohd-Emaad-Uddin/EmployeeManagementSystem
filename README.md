# Employee Management System

A role-based task management app built with **React** and **Tailwind CSS**. An admin can assign tasks to employees and track everyone's progress, while each employee gets a personal dashboard to view and update their own tasks. All data is stored in the browser's `localStorage`, so no backend is needed.

## Screenshots

### Login
![Login page](./screenshots/login.png)

### Admin Dashboard
Create a task and assign it to an employee.

![Admin dashboard](./screenshots/admin-dashboard.png)

### Employee Task Overview (Admin)
See how many new, active, completed and failed tasks each employee has.

![All tasks table](./screenshots/all-tasks.png)

### Employee Dashboard
Employees see their task counts and task cards, and can mark tasks as completed or failed.

![Employee dashboard](./screenshots/employee-dashboard.png)

## Features

- **Role-based login** for admin and employees
- **Admin dashboard**
  - Create tasks with a title, date, assignee, category and description
  - View every employee's task counts (new, active, completed, failed) in one table
- **Employee dashboard**
  - Summary cards for new, completed, accepted and failed tasks
  - Scrollable task cards showing category, date, title and description
  - Mark a task as completed or failed
- **Persistent login**: stays signed in after a page refresh
- **Dark UI** styled with Tailwind CSS

## Tech Stack

- React (with Vite)
- Tailwind CSS v4
- React Context API for shared employee data
- Browser `localStorage` for data storage

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later

### Installation

```bash
# clone the repository
git clone <your-repo-url>
cd <your-project-folder>

# install dependencies
npm install

# start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Login Credentials

| Role     | Email          | Password |
| -------- | -------------- | -------- |
| Admin    | admin@me.com   | 123      |
| Employee | see below      | see below |

Employee emails and passwords are defined in `src/Utils/LocalStorage.jsx`. Open that file to see the demo accounts (Rahul, Priya, Arjun, Sneha and Vikram).

## Project Structure

```
src/
├── Components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   └── Others/
│       ├── Header.jsx
│       ├── CreateTask.jsx
│       └── AllTask.jsx
├── Context/
│   └── AuthProvider.jsx
├── Utils/
│   └── LocalStorage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## How It Works

1. On first load, the starting employee data is saved to `localStorage`.
2. `AuthProvider` reads that data and shares it with the whole app through context.
3. `App.jsx` checks the login details and shows the admin or employee dashboard.
4. When the admin creates a task, it is added to the chosen employee's `tasks` list in `localStorage`.
5. The employee sees the new task on their dashboard.

## Future Improvements

- Connect a real backend and database (Node.js, Express, MongoDB)
- Hash passwords and use proper authentication
- Edit and delete tasks
- Pick the assignee from a dropdown instead of typing the name
- Task filters and search

## License

This project is open source and available under the [MIT License](LICENSE).
