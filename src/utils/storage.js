// utils/storage.js
export const saveUserPreferences = (preferences) => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  };
  
  export const loadUserPreferences = () => {
    const preferences = localStorage.getItem("userPreferences");
    return preferences ? JSON.parse(preferences) : null;
  };