'use client';
import { Sandpack } from "@codesandbox/sandpack-react";

export default function MiraPlayground() {
  return (
 <div className="rounded-lg border border-gray-300 shadow-inner overflow-hidden">
    <Sandpack
      template="react"
      theme="dark"
      files={{
        "/App.js": {
          code: `
import React from 'react';

function App() {
  async function handleVerify() {
    // Replace with Mira SDK logic here
    alert('Simulated Mira verification!');
  }

  return (
    <div>
      <h1>Mira SDK Test</h1>
      <button onClick={handleVerify}>Verify Me</button>
    </div>
  );
}

export default App;
`,
        },
      }}
      options={{
        showConsole: true,
        editorHeight: 400,
      }}
    />
</div>
  );
}
