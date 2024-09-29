import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoice from './scenes/invoice';
// import Dashboard from './scenes/dashboard'
// import Team from './scenes/team'
// import Invoices from './scenes/invoices'
// import Contacts from './scenes/contacts'
// import Bar from './scenes/bar'
// import Form from './scenes/form'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
// import Calendar from './scenes/calendar'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline>
          <div className="app">
            <Sidebar/>
            <main className='content'>
              <Topbar/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/invoices" element={<Invoice/>}/>
              </Routes>
            </main>
          </div>
      </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
