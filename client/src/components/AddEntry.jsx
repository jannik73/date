
//import PersonFinder from "../apis/PersonFinder";
import React, { useContext, useState, useEffect } from "react";
//import { PersonsContext } from "../context/PersonsContext";

import '../App.css'
//import "../styles.css";
import Modal from "react-modal";
import sunrise from '../pictures/sunrise.jpg'
import collage from '../pictures/Collage.png'
import '../components/MagicButton'
import MagicButton from '../components/MagicButton';

import Header from "../components/Header";

function AddEntry() {
  
    //const {addPerson} = useContext(PersonsContext)
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDisclamer, setIsOpenDisclaimer] = useState(false);
    const [person, setPerson] = useState(false);
    const [checked, setChecked] = useState(false);
    const [notext, setNotext] = useState("No");
  
  
  
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
  
    const [render1, setRender1] = useState(true);
    const [render2, setRender2] = useState(false);
    const [render3, setRender3] = useState(false);
    const [render4, setRender4] = useState(false);
  
  
  
    const [dreamdate, setDreamdate] = useState([]);
    const [item, setItem] = useState("");
  
    //textinputs
    const [nameinput, setNameinput] = useState([]);
    const [relationshipinput, setRelationshipinput] = useState([]);
    const [ageinput, setAgeinput] = useState([]);
    const [cityinput, setCityinput] = useState([]);
    const [dateinput, setDateinput] = useState([]);
    const [interestinput, setInterestinput] = useState([]);
    const [songinput, setSonginput] = useState([]);
    const [contactinput, setContactinput] = useState([]);
  
    const [showDreamdate, sethowDreamdate] = useState(() => {
      const items = localStorage.getItem("items");
      //alternative, wenn kein JSON objekt vorliegt
      return JSON.parse(items) || [];
    });
  
    const handleChange = () => {
      setChecked(!checked);
    };
  
    const changeTextName = (e) => {
      setNameinput(e.target.value);
      //settextinput(e.target.value);
    }
  
    const changeTextRelationship = (e) => {
      setRelationshipinput(e.target.value);
      //settextinput(e.target.value);
    }
  
    const changeTextAge = (e) => {
      setAgeinput(e.target.value);
      //settextinput(e.target.value);
    }
    const changeTextCity = (e) => {
      setCityinput(e.target.value);
      //settextinput(e.target.value);
    }
    const changeTextDate = (e) => {
      setDateinput(e.target.value);
      //settextinput(e.target.value);
    }
    const changeTextInterest = (e) => {
      setInterestinput(e.target.value);
      //settextinput(e.target.value);
    }
    const changeTextSong = (e) => {
      setSonginput(e.target.value);
      //settextinput(e.target.value);
    }
    const changeTextContact = (e) => {
      setContactinput(e.target.value);
      //settextinput(e.target.value);
    }
  
    //#region toggle
  
    function toggleModal() {
      setIsOpen(!isOpen);
    }
  
    function toggleDisclaimer() {
      setIsOpenDisclaimer(!isOpenDisclamer);
    }
  
    function toggleButton1() {
      setRender1(!render1);
      setRender4(!render4);
    }
    function toggleButton2() {
      setRender2(!render2);
      setRender1(!render1);
    }
    function toggleButton3() {
      setRender3(!render3);
      setRender2(!render2);
    }
    function toggleButton4() {
      setRender4(!render4);
      setRender3(!render3);
    }
  
    //#endregion
  
  
    //wenn sich etwas ändert??, in dem fall Todos
    useEffect(() => {
      setItem(JSON.stringify(dreamdate));
      //localStorage.setItem("items", JSON.stringify(dreamdate));
    }, [dreamdate]);
  
    const submit = async (e) => {
      e.preventDefault();
      if (checked) {
        const num = Number(ageinput)
        if (Number.isInteger(num) && num > 0) {
          const newDreamdate = [{ date: new Date().toLocaleDateString(), firstname: nameinput, age: parseInt(ageinput), relationship: relationshipinput.length === 0 ? null : relationshipinput, city: cityinput.length === 0 ? null : cityinput, dreamdate: dateinput.length === 0 ? null : dateinput, interest: interestinput.length === 0 ? null : interestinput, song: songinput.length === 0 ? null : songinput, contact: contactinput.length === 0 ? null : contactinput }];
        setDreamdate(newDreamdate);
        //console.log(newDreamdate);

        try {
          //proxy is only use in development so it will be ignored in production
          //so if there is no http://localhost:5000 then by default it is going to use heroku domain
          //remember this heroku app is just our server serving the build static content and also holding the restful api
    
          //https://pern-todo-app-demo.herokuapp.com/todos
          const response = await fetch("/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDreamdate),
          });
    
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }

        //PersonFinder.post('/add', newDreamdate)
        //  .then(function (response) {
        //    addPerson(response.data.data);
        //    //hier die ganzen setInputs("")
        //  })
        //  .catch(function (error) {
        //    console.log(error);
        //  });
        //createPerson(newDreamdate);
        //setNameinput("");
        //setRelationshipinput("");
        //setAgeinput("");
        //setCityinput("");
        //setDateinput("");
        //setInterestinput("");
        //setSonginput("");
        }
        else{
          alert("age is no number")
        }
        
      }
      else {
        alert("Um die Daten zu sichern, bitte den Haken markieren.");
      }
  
    }
  
  
    return (
      <div className="App">
          <img className="myphoto" src={collage} alt=""></img>
          <h1>Do you want to hang out?</h1>
          {render1 &&
          <MagicButton text={notext} idx="1" flag={open1} onClick={toggleButton2} className="mybutton">
          </MagicButton>
        }
        {render2 &&
          <MagicButton text={notext} idx="2" flag={open2} onClick={toggleButton3} className='mybutton2'>
          </MagicButton>
        }
        {render3 &&
          <MagicButton text={notext} idx="3" flag={open3} onClick={toggleButton4} className='mybutton3'>
          </MagicButton>
        }
        {render4 &&
          <MagicButton text={notext} idx="4" flag={open4} onClick={toggleButton1} className='mybutton4'>
          </MagicButton>
        }
          <button className='mybutton'
          style={{
            margin: 2
          }}
          onClick={toggleModal}> YES I Want to </button>
  
  <button className='mybuttonDisclaimer'
          style={{
            margin: 2
          }}
          onClick={toggleDisclaimer}> Disclaimer </button>
        
  
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <dev style={{ display: "flex" }} >
            <button className="mybutton" style={{ marginLeft: "auto", padding: '1px', height: '25px', width: '25px' }} onClick={toggleModal}>X</button>
          </dev>
          <h2 className=''>Your Dating application</h2>
          <div>
            <table>
              <tbody>
                <tr className='mytablerows'>
                  <td>
                    Your Name:
                  </td>
                  <td>Your Age:</td>
                </tr>
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextName} value={nameinput} placeholder='enter your name' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextAge} value={ageinput} placeholder='enter your age' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>
                    Your Relationshipstatus:
                  </td>
                  <td>
                    Your City:
                  </td>
                </tr>
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextRelationship} value={relationshipinput} placeholder='enter your relationshipstatus' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextCity} value={cityinput} placeholder='enter your city' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>
                    What are your interests?
                  </td>
                  <td>
                    Which song touches you the most?
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextInterest} value={interestinput} placeholder='enter e.g. hobbies etc.' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextSong} value={songinput} placeholder='enter song' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>Your expectation of a perfect Date:</td>
  
                  <td>How should we get in contact?</td>
                </tr>
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextDate} value={dateinput} placeholder='enter your dreamdate' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextContact} value={contactinput} placeholder='enter e.g your username of instagram' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>
                    <label style={{ fontSize: 12 }}>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                      />
                      I hereby agree that the data entered may be stored.
                    </label>
                  </td>
                  <td style={{ display: "flex" }}>
                    <input style={{ marginLeft: "auto" }} type="submit" value="Submit" onClick={submit} ></input>
                  </td>
                </tr>
                <tr className='mytablerows'>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
  
            </table>
  
          </div>
        </Modal>
  
        <Modal
          isOpen={isOpenDisclamer}
          onRequestClose={toggleDisclaimer}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}>
  
  <dev style={{ display: "flex" }} >
            <button className="mybutton" style={{ marginLeft: "auto"}} onClick={toggleDisclaimer}>X</button>
          </dev>
  
            <dev>
            This site is for entertainment purposes only. Everyone is responsible for what data the person wants to disclose. There is generally no liability assumed! :{")"}
            </dev>
  
          </Modal>
      </div>
    );
}

export default AddEntry