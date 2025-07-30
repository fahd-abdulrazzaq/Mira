'use client';
import { Sandpack } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";

export default function MiraPlayground() {
  return (
    <div className="rounded-lg border border-gray-300 shadow-inner overflow-hidden">
      <Sandpack
        theme={githubLight}
        template="react"
        files={{
          "/App.js": {
            code: `
import React, { useState } from 'react';
import './style.css';

function App() {
  const [status, setStatus] = useState('Click to verify');

  async function handleVerify() {
    setStatus('Verifying...');
    await new Promise(res => setTimeout(res, 1000));
    setStatus('✅ Verified with Mira (simulated)');
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Mira Verification Sandbox</h2>
      <button onClick={handleVerify} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Verify Me
      </button>
      <p className="mt-4 text-green-600">{status}</p>
    </div>
  );
}

export default App;
`
          },
          "/style.css": {
            code: `body { font-family: sans-serif; background: #f9f9f9; }`
          }
        }}
        options={{
          showConsole: true,
          showTabs: true,
          showNavigator: true,
          editorHeight: 450,
        }}
      />
    </div>
  );
}
