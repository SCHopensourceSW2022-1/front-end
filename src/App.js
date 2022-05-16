import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Reset } from 'styled-reset';

/* Component import */
import MainLayout from './Components/MainLayout/MainLayout';
import MainPage from './Pages/Main/Main';
import AcademicClubPage from './Pages/AcademicClub/AcademicClub';
import CenterClubPage from './Pages/CenterClub/CenterClub';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout View={MainPage} Menu={'AllClub'} />}
          />
          <Route
            path="/academicclub"
            element={
              <MainLayout View={AcademicClubPage} Menu={'AcademicClub'} />
            }
          />
          <Route
            path="/centerclub"
            element={<MainLayout View={CenterClubPage} Menu={'CenterClub'} />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
