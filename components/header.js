import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  
    // const navigate = useNavigate();
    // const handleSearch = () => {
    //   navigate("/hotels", { state: { date, destination, options } });
    // };
  
    // const handleSignIn = () => {
    //   navigate("/login");
    // };
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    return (
      <div className="header px-4">
        <div className = "headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              {/* <FontAwesomeIcon icon={faBed} /> */}
              <Link
                href="*"
              >
                Stays
              </Link>
            </div>
            <div className="headerListItem">
              {/* <FontAwesomeIcon icon={faPlane} /> */}
              <Link
                href="*"
              >
                Flights
              </Link>
            </div>
            <div className="headerListItem">
              {/* <FontAwesomeIcon icon={faCar} /> */}
              <Link
                href="*"
              >
                Car rentals
              </Link>
            </div>
            <div className="headerListItem">
              {/* <FontAwesomeIcon icon={faBed} /> */}
              <Link
                href="*"
              >
                Attractions
              </Link>
            </div>
            <div className="headerListItem">
              {/* <FontAwesomeIcon icon={faTaxi} /> */}
              <Link
                href="*"
              >
                Airport taxis
              </Link>
            </div>
          </div>
          
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <button className="headerBtn__SignIn" >
                Sign in{" "}
              </button>
  
              {/* header search */}
  
              <div className="box mx-2">
                <div className="headerSearch row">
                  <div className="headerSearchItem col-md-3 item1">
                    {/* <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="headerIcon"
                    /> */}
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="headerSearchInput"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                  <div className="headerSearchItem col-md-3 item2">
                    {/* <FontAwesomeIcon icon={faBed} className="headerIcon" /> */}
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >
                      {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                      )}`}
                    </span>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                      />
                    )}
                  </div>
                  <div className="headerSearchItem col-md-3 item3">
                    {/* <FontAwesomeIcon icon={faPerson} className="headerIcon" /> */}
                    <span
                      className="headerSearchText"
                      onClick={() => setOpenOptions(!openOptions)}
                    >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <span className="optionText">adult</span>
                          <div className="optionCounter">
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "d")}
                              disabled={options.adult <= 1}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.adult}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">children</span>
                          <div className="optionCounter">
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "d")}
                              disabled={options.children <= 0}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.children}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">room</span>
                          <div className="optionCounter">
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "d")}
                              disabled={options.room <= 1}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.room}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="headerSearchItem col-md-3 headerSearchBtn item4"
                   
                  >
                    search
                  </button>
                </div>
              </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  