import { useContext } from 'react';
import { WidgetContext } from '../lib/context';

export function LandingPage() {
  const { setIsOpen } = useContext(WidgetContext);

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Our Service</h1>
        <p>Discover amazing features and benefits of our platform.</p>
        <div className="features">
          <div className="feature">
            <h3>Feature 1</h3>
            <p>Description of the first amazing feature</p>
          </div>
          <div className="feature">
            <h3>Feature 2</h3>
            <p>Description of the second amazing feature</p>
          </div>
          <div className="feature">
            <h3>Feature 3</h3>
            <p>Description of the third amazing feature</p>
          </div>
        </div>
        <button className="cta-button" onClick={() => setIsOpen(false)}>
          Get Started
        </button>
      </div>
    </div>
  );
} 