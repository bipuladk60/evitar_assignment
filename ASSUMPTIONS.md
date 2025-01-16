# ASSUMPTIONS.md

## Mood Prediction

- User mood prediction is based on a weighted average of the last 5 mood logs:
  - More recent mood logs are given higher weight compared to older entries.
  - This approach assumes that recent mood patterns are more reflective of the user's current state.
  - If there are fewer than 5 mood logs, the available logs will still be weighted accordingly.

## Gemini Chat Bot Token

- The application uses the Gemini free trial for chatbot interactions:
  - The token for the Gemini chatbot may expire at any time due to trial limitations.
  - Users will be explicitly notified when the Gemini token has expired to ensure transparency.
  - No additional backup chatbot functionality is currently implemented.

## Data Storage and Preferences

- User data, including theme preferences, is stored in the browser's local storage:
  - This ensures that users do not need to log in for their data to persist.
  - Data stored in the browser's local storage remains unchanged even if the browser tab or the entire browser is closed and reopened.
  - It is assumed that users will not clear their browser's local storage unless they intentionally want to reset their preferences.

## Limitations

- The current implementation does not support syncing data across multiple devices or browsers.
- If a user clears their browser's local storage, all stored data, including preferences and mood logs, will be lost.
- The application does not currently offer token renewal or automatic transitions to a paid version of Gemini for uninterrupted chatbot access.
