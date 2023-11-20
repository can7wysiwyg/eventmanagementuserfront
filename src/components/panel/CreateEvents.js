import { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import axios from "axios";

function CreateEvents() {
  const state = useContext(GlobalState);
  const token = state.token;
  const [owner] = state.userApi.owner;
  const [categories] = state.CategoryApi.categories;
  const [values, setValues] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventPrice: "",
    eventLocation: "",
    catname: "",
  });
  const[eventPoster, setEventPoster] = useState("");
  let eventOwner = owner;

  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setEventPoster(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("eventPoster", eventPoster);
    formData.append("eventName", values.eventName);
    formData.append("eventOwner", eventOwner);
    formData.append("eventDescription", values.eventDescription);
    formData.append("eventLocation", values.eventLocation);
    formData.append("eventPrice", values.eventPrice);
    formData.append("catname", values.catname);
    formData.append("eventDate", values.eventDate);

    const res = await axios.post("/userevent/create_event", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert(res.data.msg);
  };

  return (
    <>
      <div className="container  ">
        <div>
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Event Title</label>
                  <input
                    type="text"
                    name="eventName"
                    value={values.eventName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Event Location</label>
                  <input
                    type="text"
                    name="eventLocation"
                    value={values.eventLocation}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="catname"
                    value={values.catname}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option value={category._id} key={category._id}>
                        {category.catName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={values.eventDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Event Price</label>
                  <input
                    type="text"
                    name="eventPrice"
                    value={values.eventPrice}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Event Description</label>
                  <textarea
                    name="eventDescription"
                    value={values.eventDescription}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Event Image </label>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="form-control"
                    required
                    accept=".jpg"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEvents;
