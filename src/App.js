import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, spotInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import TouristSpot from "./pages/touristSpot/TouristSpot";
import { Group } from "@mui/icons-material";
import Groups from "./pages/group/Groups";
import Organizers from "./pages/Organzier/Organizers";
import SingleUser from "./pages/list/SingleUser";
import EventDetails from "./pages/event/EventDetails";
import Eventdatatable from "./pages/event/Event";
import NewEventForm from "./pages/event/NewEventForm";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SingleUser />} />
            </Route>
            <Route path="Event">
              <Route index element={<Eventdatatable />} />
              <Route path=":eventId" element={<EventDetails />} />
              <Route
                path="newEventForm"
                element={<NewEventForm inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="touristspots">
              <Route index element={<TouristSpot/>}/>
              <Route
                path="newSpot"
                element={<New inputs={spotInputs} title="Add New Events" />}
              />
              <Route path=":spotId" element={<Single />} />
            </Route>
            <Route path="organizer">
              <Route index element={<Organizers/>}/>
              
              <Route path=":spotId" element={<Single />} />
            </Route>
            <Route path="group">
              <Route index element={<Groups/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
