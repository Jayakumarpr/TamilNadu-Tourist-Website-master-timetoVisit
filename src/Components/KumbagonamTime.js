import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeftoffCanvas from './LeftoffCanvas';
import OffCanvasExample from './LeftoffCanvas';



function StaticExample6() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className='modalCardsize2'>
        <Modal.Header closeButton>
          <Modal.Title>More About best time to travel</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='imgbox2'>
            <div className='imgcardtag2' >
               <img src={require("..//Gallery/kumbakonam1.jpeg")} className='modalcard2' /> 
               <p >
                
                 Dawn <br/>
                 source
               </p>
            </div>
          
            <div className='imgcardtag2' >
               <img src={require("..//Gallery/kumbakonam2.jpeg")} className='modalcard2' /> 
               <p >
                 Smit <br/>
                 India <br/>
                 source
               </p>
            </div>

            <div className='imgcardtag2' >
               <img src={require("..//Gallery/kumbakonam3.jpeg")} className='modalcard2' /> 
               <p >
                 
                 holydham <br/>
                 source
               </p>
            </div>
            </div>
        
        
            {/* <div>
               <img src={require("../assets/Home/Kanyakumari.jpeg")} className='modalcard' /> 
            </div>
            <div>
               <img src={require("../assets/Home/Kanyakumari.jpeg")} className='modalcard' /> 
            </div> */}
        </Modal.Body>
          
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
         <OffCanvasExample/>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample6;