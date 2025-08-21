// frontend/src/App.js
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import AnalysisResult from './components/AnalysisResult';
import './App.css';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>APK Analyzer</h1>
        <p>Upload an APK file to check if it's genuine or a scam.</p>
      </header>
      <main>
        <FileUpload setAnalysisResult={setAnalysisResult} />
        {analysisResult && <AnalysisResult result={analysisResult} />}
      </main>
    </div>
  );
}

export default App;
