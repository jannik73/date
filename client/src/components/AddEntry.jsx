
//import PersonFinder from "../apis/PersonFinder";
import React, { useContext, useState, useEffect } from "react";
//import { PersonsContext } from "../context/PersonsContext";

import '../App.css'
//import "../styles.css";
import Modal from "react-modal";
import sunrise from '../pictures/sunrise.jpg'
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
        
        <div>
          <h1>Do you want to hang out?</h1>
          <img className="myphoto" src={sunrise} alt=""></img>
          <h3>Maybe at the beach?</h3>
        </div>
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
            <button className="mybutton" style={{ marginLeft: "auto", padding: '1px' }} onClick={toggleModal}>X</button>
          </dev>
          <h2 className=''>Deine Datingbewerbung</h2>
          <div>
            <table>
              <tbody>
                <tr className='mytablerows'>
                  <td>
                    Dein Name:
                  </td>
                  <td>Dein Alter:</td>
                </tr>
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextName} value={nameinput} placeholder='Name eintragen' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextAge} value={ageinput} placeholder='Alter eintragen' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>
                    Dein Beziehungsstatus:
                  </td>
                  <td>
                    Dein Wohnort:
                  </td>
                </tr>
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextRelationship} value={relationshipinput} placeholder='Beziehungstatus eintragen' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextCity} value={cityinput} placeholder='Wohnort eintragen' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>
                    Was sind deine Interessen?
                  </td>
                  <td>
                    Welcher Song berührt dich am meisten?
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextInterest} value={interestinput} placeholder='Interessen eintragen' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextSong} value={songinput} placeholder='Song eintragen' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                </tr>
  
                <tr className='mytablerows'>
                  <td>Deine Vorstellung von deinem Traumdate:</td>
  
                  <td>Wie willst Du gerne Kontakt haben?</td>
                </tr>
                <tr className='mytablerows'>
                  <td>
                    <input onChange={changeTextDate} value={dateinput} placeholder='Ideen eintragen' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
                  </td>
                  <td>
                    <input onChange={changeTextContact} value={contactinput} placeholder='zum Beispiel Instagram' type="text" style={{ borderColor: 'rgba(0,0,0,0.2)' }} className='mytextfield'></input>
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
                      Ich willige hiermit ein, dass die
                      eingegebenene Daten gespeichert werden dürfen.
                    </label>
                  </td>
                  <td style={{ display: "flex" }}>
                    <input style={{ marginLeft: "auto" }} type="submit" value="Abgeben" onClick={submit} ></input>
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
            <button className="mybutton" style={{ marginLeft: "auto", padding: '1px' }} onClick={toggleDisclaimer}>X</button>
          </dev>
  
            <dev>
              Diese Seite dient lediglich zur Unterhaltung. Jeder ist selbst verantwortlich, welche Daten die Person preis geben möchte. Es wird generell keine Haftung übernommen! :{")"}
            </dev>
  
          </Modal>
      </div>
    );
}

export default AddEntry