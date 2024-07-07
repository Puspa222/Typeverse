

# TypeVerse

**TypeVerse** is a typing test application designed to help users improve their typing speed and accuracy. Users can choose from different difficulty levels and track their progress over time.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Three Difficulty Levels**: Easy, Medium, and Hard.
- **Real-Time Typing Metrics**: Tracks words per minute (WPM) and accuracy.
- **High Score Tracking**: Stores the highest WPM locally.


## Live View

You can view this live at https://puspa222.github.io/Typeverse/

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/typeverse.git
   ```
2. Navigate to the project directory:
   ```sh
   cd typeverse
   ```

## Usage

Open the `index.html` file in your web browser to start using the application. Choose a difficulty level from the home page and start typing when prompted. The timer will begin as soon as you start typing.

## Project Structure

Here's an overview of the project structure:

```plaintext
typeverse/
│
├── index.html          # Home page
├── index2.html         # Hard difficulty page
├── index3.html         # Medium difficulty page
├── index4.html         # Easy difficulty page
├── style.css           # Styles for the application
├── type.js             # Main JavaScript for typing functionality
├── word.js             # JavaScript for handling words and sentences
└── README.md           # This file
```

### HTML Files

- **index.html**: The home page where users select difficulty levels.
- **index2.html**: The hard difficulty typing test.
- **index3.html**: The medium difficulty typing test.
- **index4.html**: The easy difficulty typing test.

### JavaScript Files

- **type.js**: Contains the main logic for the typing test, including starting the test, tracking typing, and calculating results.
- **word.js**: Handles the words and sentences displayed during the typing test.

### CSS Files

- **style.css**: Contains styles for the application, ensuring a consistent and user-friendly interface.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.



