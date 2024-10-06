import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoice from './scenes/invoice';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import Faq from './scenes/faq';
import Barchart from './scenes/chart/barchart';
import Piechart from './scenes/chart/piechart';
import Map from './scenes/map';
import Linechart from './scenes/chart/linechart';


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
                <Route path="/form" element={<Form/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/bar" element={<Barchart/>}/>
                <Route path="/pie" element={<Piechart/>}/>
                <Route path="/line" element={<Linechart/>}/>
                <Route path="/map" element={<Map/>}/>
              </Routes>
            </main>
          </div>
      </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
