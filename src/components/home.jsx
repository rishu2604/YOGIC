import React from 'react';
import pdf from "../assets/YOGA_EEG_JournalPaper.pdf";
import Modal from 'react-modal';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import form from './form';


export default function Home() {
  let navigate = useNavigate();
    let subtitle;
    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '300px',
        width: '350px',
        padding: '50px', 
        border: '1px solid black',
        
    },
  };

  const [modalIsOpen, setIsOpen] = useState(true);

  // function openModal() {
  //   setIsOpen(true);
  // }

  const book = async () => {
    toast.success("Fill the form!");
    await navigate("/formpage");
};

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div className='home-component'>
            {/* <h1>To know more</h1> */}
            <iframe src={pdf} style={{display: 'block', margin: 'auto'}} width="60%" height="650px" title="PDF Viewer" />
            
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Happy to see you</h2>
                <h3 style={{color: 'black'}}>Ready to get started</h3>
                <h4 style={{color: 'black'}}>We cordially invite you to schedule an appointment to explore the EEG readings of your brain and gain deeper insights into your cognitive profile.</h4>
                <button onClick={closeModal} style={{margin:'4px', padding: '7px'}}>Close</button>
                <button style={{padding: '7px'}} onClick={book}>Book my appointment</button>
            </Modal>
        </div>
    );
}
