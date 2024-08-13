import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventCreate from "./components/EventCreate";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
// import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventCreate />} />
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>

      

      {/* <ImageUpload/> */}
    </>
  );
}

export default App;
