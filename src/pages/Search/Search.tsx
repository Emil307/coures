import React, { useState } from "react";

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  function handleSearch() {
    if (searchTerm.toLocaleLowerCase() === "лопата") {
      setResult("success");
      return;
    }
    setResult("dismiss");
  }

  return (
    <div>
      <h1>Найди Лопату</h1>
      <input
        type="text"
        placeholder="Лопата..."
        id="search-input"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button id="search-button" onClick={handleSearch}>
        Найти
      </button>
      <div>
        {result === "success" && (
          <p id="success-message">Поздравляю, ты нашел Лопату!!!</p>
        )}
        {result === "dismiss" && (
          <p id="dismiss-message">
            ничего не нашлось, попробуте ввести "Лопата" в строку поиска
          </p>
        )}
      </div>
    </div>
  );
};
