import { useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [week, setWeek] = useState("");
  const [button, setButton] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [url, setUrl] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [search, setSearch] = useState("");
  const [range, setRange] = useState("");
  const [radio, setRadio] = useState("");
  const [number, setNumber] = useState("");
  const [dateTimeLocal, setDateTimeLocal] = useState("");
  const [favoriteWeekday, setFavoriteWeekday] = useState("");
  const [textArea, setTextArea] = useState("");
  const [color, setColor] = useState("");

  function createUser(e) {
    e.preventDefault();
    const newUser = {
      date: date,
      dateTime: dateTime,
      email: email,
      password: password,
      file: file,
      week: week,
      button: button,
      checkbox: checkbox,
      url: url,
      time: time,
      text: text,
      phoneNumber: phoneNumber,
      search: search,
      range: range,
      radio: radio,
      number: number,
      dateTimeLocal: dateTimeLocal,
      favoriteWeekday: favoriteWeekday,
      textArea: textArea,
      color: color,
    };
    console.log(newUser);
  }

  function handleChange(e, state) {
    state(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={createUser}>
        <input
          type="date"
          onChange={(e) => {
            handleChange(e, setDate);
          }}
        ></input>
        <input
          type="datetime"
          placeholder="Date and Time"
          onChange={(e) => {
            handleChange(e, setDateTime);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            handleChange(e, setEmail);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            handleChange(e, setPassword);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            handleChange(e, setFile);
          }}
        />
        <input
          type="week"
          onChange={(e) => {
            handleChange(e, setWeek);
          }}
        />
        <button
          type="button"
          onClick={(e) => {
            setButton("Clicked!");
          }}
        >
          Button
        </button>
        <input
          type="checkbox"
          id="checkbox"
          onChange={(e) => {
            handleChange(e, setCheckbox);
          }}
        />
        <label htmlFor="checkbox">Checkbox</label>
        <input
          type="url"
          placeholder="URL"
          onChange={(e) => {
            handleChange(e, setUrl);
          }}
        />
        <input
          type="time"
          onChange={(e) => {
            handleChange(e, setTime);
          }}
        />
        <input
          type="text"
          placeholder="Text"
          onChange={(e) => {
            handleChange(e, setText);
          }}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => {
            handleChange(e, setPhoneNumber);
          }}
        />
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            handleChange(e, setSearch);
          }}
        />
        <input
          type="range"
          onChange={(e) => {
            handleChange(e, setRange);
          }}
        />
        <input
          type="radio"
          id="peanuts"
          name="Favorite Nuts"
          onChange={(e) => {
            handleChange(e, setRadio);
          }}
        />
        <label htmlFor="peanuts">Peanuts</label>
        <input
          type="radio"
          id="nuts"
          name="Favorite Nuts"
          onChange={(e) => {
            handleChange(e, setRadio);
          }}
        />
        <label htmlFor="nuts">Nuts</label>
        <input
          type="radio"
          id="cashews"
          name="Favorite Nuts"
          onChange={(e) => {
            handleChange(e, setRadio);
          }}
        />
        <label htmlFor="cashews">Cashews</label>
        <input
          type="number"
          placeholder="Number"
          onChange={(e) => {
            handleChange(e, setNumber);
          }}
        />
        <input
          type="datetime-local"
          onChange={(e) => {
            handleChange(e, setDateTimeLocal);
          }}
        />
        <select
          id="favorite-weekday"
          onChange={(e) => {
            handleChange(e, setFavoriteWeekday);
          }}
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
        <label htmlFor="favorite-weekday">Favorite day of the week</label>
        <textarea
          onChange={(e) => {
            handleChange(e, setTextArea);
          }}
        ></textarea>
        <input
          type="color"
          onChange={(e) => {
            handleChange(e, setColor);
          }}
        />
        <button type="reset">Reset</button>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
