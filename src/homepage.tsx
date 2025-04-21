import React from 'react';
import './widget/styles/style.css';
import { WidgetContainer } from './widget/components/widget-container';

export function HomePage() {
  const embedCode = `<script async src="https://yourdomain.com/widget.js" data-client-key="YOUR_CLIENT_KEY"></script>`;

  return (
    <div className="homepage" style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Embeddable Widget</h1>
      <p>Copy and paste the following code into your website to embed the widget:</p>
      <pre style={{ background: '#f4f4f4', padding: '20px', borderRadius: '4px', overflowX: 'auto' }}>
        <code>{embedCode}</code>
      </pre>
      <h2 style={{ marginTop: '40px' }}>Live Preview</h2>
      <div style={{ marginTop: '20px' }}>
        <WidgetContainer clientKey="test-key" />
      </div>
    </div>
  );
} 