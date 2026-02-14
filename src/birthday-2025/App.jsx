import { useState } from 'react';
import './App.css';

function App() {
  return (
      fetch('https://www.tabthedev.kro.kr/birthday-2025.html')
        .then(response => response.text())
        .then(htmlContent => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            document.body = doc.body
            document.head = doc.head
        })
        .catch(error => console.error('Error fetching page:', error))
  )
}

export default App