import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import MainPage from "./Pages/Main/Main";
import AcademicClubPage from "./Pages/AcademicClub/AcademicClub";
import CenterClubPage from "./Pages/CenterClub/CenterClub";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/academicclub" element={<AcademicClubPage />} />
          <Route path="/centerclub" element={<CenterClubPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
