import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/home/Home";
import Header from "./components/navbar/Header";
import Login from "./components/pages/Login";
import Management from "./components/panel/Management";
import MyEvents from "./components/panel/MyEvents";
import CreateEvents from "./components/panel/CreateEvents";
import MyEvent from "./components/panel/MyEvent";
import EventManage from "./components/panel/EventManage";
import EventCats from "./components/pages/EventCats";
import NewEvents from "./components/pages/NewEvents";
import SeeSingle from "./components/pages/SeeSingle";
import Events from "./components/pages/Events";
import EventPoster from "./components/panel/EventPoster"
import EventDate from "./components/panel/EventDate"
import EventDescription from "./components/panel/EventDescription"
import EventLocation from "./components/panel/EventLocation"
import EventPrice from "./components/panel/EventPrice"
import EventName from "./components/panel/EventName"

function App() {
  return (
    <>
    <Router>
      <Header />

     
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/management" element={<Management />} />
  <Route path="/my_events" element={<MyEvents />} />
  <Route path="create_events" element={<CreateEvents />} />
  <Route path="/my_event_single/:id" element={<MyEvent />} />
  <Route path="/event_manage/:id" element={<EventManage />} />
  <Route path="/event_cat/:id" element={<EventCats />} />
  <Route path="/new_events" element={<NewEvents />} />
  <Route path="/see_single/:id" element={<SeeSingle />} />
  <Route path="/events" element={<Events />} />
  <Route path="/event_poster/:id" element={<EventPoster />} />
  <Route path="/event_name/:id" element={<EventName />} />
  <Route path="/event_description/:id" element={<EventDescription />} />
  <Route path="/event_price/:id" element={<EventPrice />} />
  <Route path="/event_location/:id" element={<EventLocation />} />
  <Route path="/event_date/:id" element={<EventDate />} />


</Routes>



    </Router>


          </>
  );
}

export default App;
