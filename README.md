# 📝 Modern Todo List Application

A beautiful and fully functional Todo List application built with Next.js, React, and Tailwind CSS.

## ✨ Features

- **Add Tasks**: Create new tasks with customizable priority levels (Low, Medium, High)
- **Complete Tasks**: Mark tasks as completed with a satisfying checkmark
- **Delete Tasks**: Remove tasks you no longer need
- **Filter Tasks**: View All, Active, or Completed tasks
- **Priority Levels**: Color-coded priority badges for better task organization
- **Task Statistics**: Real-time counters showing total, active, and completed tasks
- **Clear Completed**: Bulk delete all completed tasks at once
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Dark Mode Support**: Automatically adapts to your system's color scheme
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd todo-list
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful multi-color gradients that adapt to dark mode
- **Smooth Animations**: Polished transitions and hover effects
- **Custom Icons**: Using Lucide React for modern, clean icons
- **Custom Scrollbar**: Styled scrollbar for a cohesive look
- **Priority Colors**: 
  - 🟢 Low Priority (Green)
  - 🟡 Medium Priority (Yellow)
  - 🔴 High Priority (Red)

## 🛠️ Technology Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React useState (client-side only, no backend)

## 📁 Project Structure

```
todo-list/
├── app/
│   ├── components/
│   │   ├── AddTodo.tsx      # Component for adding new tasks
│   │   ├── TodoItem.tsx      # Individual todo item component
│   │   └── TodoList.tsx      # Main todo list component with filters
│   ├── types/
│   │   └── todo.ts           # TypeScript interfaces and types
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── public/                   # Static assets
├── package.json
└── README.md
```

## 💡 Usage Tips

1. **Adding Tasks**: 
   - Click the input field to reveal priority options
   - Select priority before adding the task
   - Press Enter or click "Add" button

2. **Managing Tasks**:
   - Click the circle icon to toggle completion
   - Hover over a task to reveal the delete button
   - Use filters to focus on specific task types

3. **Bulk Actions**:
   - Use the "Clear completed" button to remove all finished tasks at once

## 🌟 Sample Data

The application comes with 5 sample tasks to demonstrate functionality:
- 2 completed tasks
- 3 active tasks with varying priority levels

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it to your needs!

---

Built with ❤️ using Next.js and React
