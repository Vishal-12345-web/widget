import { useContext, useState } from 'react';
import { WidgetContext } from '../lib/context';
import { LandingPage } from './landing-page';

export function Widget() {
  const { isOpen, setIsOpen } = useContext(WidgetContext);
  const [showLandingPage, setShowLandingPage] = useState(false);

  if (!isOpen) {
    return (
      <button
        className="widget-button"
        onClick={() => setIsOpen(true)}
      >
        Open Widget
      </button>
    );
  }

  return (
    <div className="widget-container">
      <div className="widget-header">
        <h3>Widget Title</h3>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>

      <div className="widget-content">
        <button 
          className="landing-page-button"
          onClick={() => setShowLandingPage(true)}
        >
          View Landing Page
        </button>
        
        {showLandingPage && (
          <div className="landing-page-popup">
            <div className="popup-content">
              <button 
                className="close-popup"
                onClick={() => setShowLandingPage(false)}
              >
                ×
              </button>
              <LandingPage />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}