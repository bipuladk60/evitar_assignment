# Moodie - Your Personal Mood Support WebApp

Moodie is a web-based application designed to help users log their daily moods, analyze mood trends, and provide empathetic support via an interactive chatbot. Built with React and integrated with the Gemini AI API, Moodie leverages AI to provide personalized responses based on the user's mood history.

## Features

### 1. **Daily Mood Logging**

* Users can log their daily moods along with optional notes.
* Moods are represented with emojis (e.g., 😊 for happy, 😑 for neutral).
* **Key Logic**: Each mood entry is stored as an object containing:
  ```
  {
    "date": "2025-01-15T10:00:00Z",
    "mood": "😊",
    "note": "Feeling great!"
  }
  ```
* These entries are stored in the browser’s local storage to ensure data persistence across sessions.

### 2. **Mood History**

* Displays the last 5 logged moods, including dates and notes.
* Users can edit or delete individual mood entries.
* **Edit Logic**:
  * When a user clicks the edit button, the current mood and note are pre-filled into editable fields.
  * Updates are saved back to the local storage.
* **Delete Logic**:
  * Deletes the selected entry and updates the local storage.

### 3. **Weekly Summary**

* Visualizes the user’s mood distribution over the last 7 days using a bar chart.
* **Key Logic**:
  * The app calculates mood frequencies for the week and displays them using the Recharts library.

### 4. **Mood Prediction**

* Predicts the user’s future mood based on recent mood trends.
* **Key Logic**:

  * Weights are assigned to recent moods, prioritizing the latest entries.
  * The mood with the highest weighted score is predicted.

  ```
  const moodScores = lastThreeMoods.reduce((acc, entry, index) => {
    const weight = moodWeight[entry.mood] * (index + 1);
    acc[entry.mood] = (acc[entry.mood] || 0) + weight;
    return acc;
  }, {});
  ```

### 5. **Interactive Chatbot**

* Users can interact with a chatbot powered by the Gemini AI API.
* **Features**:
  * Provides personalized responses based on the user’s mood history.
  * Asks about the user’s current mood if no history is available.
* **Key Logic**:
  * API requests include the user’s last 5 mood entries for context.

### 6. **Theme Toggle**

* Supports light and dark themes.
* **Key Logic**:
  * The theme preference is saved in local storage and applied during the initial render.

## Technologies Used

* **Frontend**:
  * React.js for UI development.
  * Tailwind CSS for styling.
  * Recharts for data visualization.
* **Backend Integration**:
  * Gemini AI API for chatbot responses.
* **State Management**:
  * React state hooks for managing moods, themes, and chat interactions.
* **Local Storage**:
  * Used to persist mood history and theme preferences.

## Getting Started

### Prerequisites

* Node.js installed on your machine.
* Gemini API key (for chatbot integration).

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/moodie.git
   ```
2. Navigate to the project directory:
   ```
   cd moodie
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `<span>.env</span>` file in the root directory and add your Gemini API key:
   ```
   REACT_APP_GOOGLE_GENERATIVE_AI_KEY=your_gemini_api_key
   ```
5. Start the development server:
   ```
   npm start
   ```
