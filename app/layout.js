
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
    </head>
    <body>
      
        {children}
      
    </body>
  </html>
);

export default RootLayout;