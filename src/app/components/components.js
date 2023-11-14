
import React from 'react';
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2; /* Light grey background for the entire site */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
  }

  /* Apply white background to all components */
  div {
    background-color: white;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContent />
    </>
  );
};

export default App;
