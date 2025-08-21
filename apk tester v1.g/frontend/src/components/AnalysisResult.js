// frontend/src/components/AnalysisResult.js
import React from 'react';

const AnalysisResult = ({ result }) => {
  return (
    <div>
      <h2>Analysis Result</h2>
      <p><strong>Filename:</strong> {result.filename}</p>
      <p><strong>Size:</strong> {(result.size / 1024 / 1024).toFixed(2)} MB</p>
      <p><strong>Result:</strong> {result.analysis}</p>
      <p style={{ color: result.isGenuine ? 'green' : 'red' }}>
        {result.isGenuine ? 'Genuine' : 'Potential Scam'}
      </p>
    </div>
  );
};

export default AnalysisResult;
