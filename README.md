# NoteMe 📝

A modern note-taking web application built with React and Material-UI.

## Project Description

NoteMe is a modern web application for creating and managing notes. The app allows users to create notes with titles and content, display them in a user-friendly interface, and easily delete them.

## Features

- ✨ Create new notes
- 📱 Responsive interface
- 🎨 Modern design with Material-UI
- 🗑️ Delete notes
- 📝 Edit title and content
- 🔄 Real-time updates
- 📱 Mobile-friendly design

## Technologies

- **Frontend**: React 17
- **Styling**: Material-UI (MUI)
- **Build Tool**: Vite
- **Icons**: Material Icons
- **State Management**: React Hooks (useState)
- **Package Manager**: npm

## Installation

1. Clone the project:
```bash
git clone https://github.com/matansegev/NoteMe.git
cd NoteMe
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser at:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build project for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
NoteMe/
├── public/
│   └── styles.css
├── src/
│   ├── components/
│   │   ├── App.jsx          # Main application component
│   │   ├── Header.jsx       # Header with app title
│   │   ├── CreateArea.jsx   # Note creation form
│   │   ├── Note.jsx         # Individual note component
│   │   └── Footer.jsx       # Footer component
│   └── index.jsx            # Application entry point
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## Usage

1. **Creating a new note:**
   - Click on the text area to expand the form
   - Enter title (optional)
   - Enter note content
   - Click the + button to save

2. **Deleting a note:**
   - Click the delete button (🗑️) on any note

3. **Managing notes:**
   - Notes are automatically saved in local state
   - Interface is responsive and works on all devices

## GitHub Repository

🌐 **Repository**: [https://github.com/matansegev/NoteMe](https://github.com/matansegev/NoteMe)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is available under the MIT License.

## Contact

For questions or suggestions, please create an issue in the project repository.

