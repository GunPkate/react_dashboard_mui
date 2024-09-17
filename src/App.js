import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme'
import { useState } from 'react';
import Topbar from './scenes/global/Topbar';

function App() {
  const [theme, colorMode] = useState();
  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline>
          <div className="App">
            <main className='content'>
              <Topbar/>
            </main>
          </div>
      </CssBaseline>
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>
  );
}

export default App;
