const employee = [
  {
    id: 1,
    name: "Rahul",
    email: "emp1@me.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page for the employee management system.",
        taskDate: "2026-10-03",
        taskCategory: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Design the admin dashboard with employee statistics and task information.",
        taskDate: "2026-10-05",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Build a responsive navigation bar for the application.",
        taskDate: "2026-09-28",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Mobile Layout",
        taskDescription: "Fix the responsive layout issues on mobile devices.",
        taskDate: "2026-09-30",
        taskCategory: "Bug Fix"
      }
    ]
  },

  {
    id: 2,
    name: "Priya",
    email: "emp2@me.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Employee Form",
        taskDescription: "Create a form to add new employees to the system.",
        taskDate: "2026-10-04",
        taskCategory: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Employee Search",
        taskDescription: "Implement search functionality to find employees by name or ID.",
        taskDate: "2026-10-06",
        taskCategory: "JavaScript"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Employee Card",
        taskDescription: "Design a reusable employee card component.",
        taskDate: "2026-09-27",
        taskCategory: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project Structure",
        taskDescription: "Organize the project folders and reusable components.",
        taskDate: "2026-09-25",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Form Validation",
        taskDescription: "Fix validation errors in the employee registration form.",
        taskDate: "2026-09-29",
        taskCategory: "Bug Fix"
      }
    ]
  },

  {
    id: 3,
    name: "Arjun",
    email: "emp3@me.com",
    password: "123",

    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Implement login authentication for employees and administrators.",
        taskDate: "2026-10-05",
        taskCategory: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Employee API",
        taskDescription: "Create API endpoints for creating and retrieving employee data.",
        taskDate: "2026-10-07",
        taskCategory: "Node.js"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Express Server",
        taskDescription: "Configure the Express server and basic project structure.",
        taskDate: "2026-09-26",
        taskCategory: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login API",
        taskDescription: "Build the backend API for employee login.",
        taskDate: "2026-09-28",
        taskCategory: "API"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Connection",
        taskDescription: "Connect the application to MongoDB and test the database connection.",
        taskDate: "2026-09-30",
        taskCategory: "MongoDB"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Task API",
        taskDescription: "Develop APIs for creating and updating employee tasks.",
        taskDate: "2026-10-08",
        taskCategory: "Backend"
      }
    ]
  },

  {
    id: 4,
    name: "Sneha",
    email: "emp4@me.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Attendance UI",
        taskDescription: "Build the employee attendance page with daily attendance information.",
        taskDate: "2026-10-04",
        taskCategory: "React"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Leave Management Page",
        taskDescription: "Create a page where employees can view and apply for leave.",
        taskDate: "2026-10-06",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Build an employee profile page displaying personal information.",
        taskDate: "2026-09-26",
        taskCategory: "React"
      }
    ]
  },

  {
    id: 5,
    name: "Vikram",
    email: "emp5@me.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the employee management features.",
        taskDate: "2026-10-05",
        taskCategory: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test all employee and task management APIs.",
        taskDate: "2026-10-07",
        taskCategory: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Login System",
        taskDescription: "Test employee and admin login functionality.",
        taskDate: "2026-09-27",
        taskCategory: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Errors",
        taskDescription: "Identify and fix errors occurring in the employee APIs.",
        taskDate: "2026-09-29",
        taskCategory: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Prepare documentation for the employee management APIs.",
        taskDate: "2026-09-28",
        taskCategory: "Documentation"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Admin",
    password: "123"
  }
];


export const setLocalStorage = ()=> {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = ()=> {
    const employee = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employee, admin};
}