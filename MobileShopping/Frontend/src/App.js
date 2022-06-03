import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import DisplayAllRatings from './Components/Rating/DisplayAllRatings';
import DisplayAllMobiles from './Components/Rating/DisplayAllMobiles';
import AddRatingToMobile from './Components/Rating/AddRatingToMobile';

function App() {
  return (
    <>
      <h1>Welcome to Online Mobile Application:</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="displayMobiles" element={<DisplayAllMobiles />} />
            <Route path="displayRating" element={<DisplayAllRatings />} />
            <Route path="addRatingToMobile" element={<AddRatingToMobile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;