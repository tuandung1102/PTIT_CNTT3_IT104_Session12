import './Bai6.css'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className="header">Header</div>
      <div className="container">
        <div className="menu">Menu</div>
        <div className="right-section">
          <div className="main">Main</div>
          <div className="footer">Footer</div>
        </div>
      </div>
    </div>
  );
}