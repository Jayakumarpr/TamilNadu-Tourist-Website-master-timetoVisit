import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeftoffCanvas from './LeftoffCanvas';
import OffCanvasExample from './LeftoffCanvas';

7

function StaticExample8() {
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
               <img src={require("..//Gallery/yercaud1.jpeg")} className='modalcard2' /> 
               <p >
                 
                 Essemby trips <br/>
                 source
               </p>
            </div>
          
            <div className='imgcardtag2' >
               <img src={require("..//Gallery/yercaud2.jpeg")} className='modalcard2' /> 
               <p >
                
                 oyyo rooms <br/>
                 source
               </p>
            </div>

            <div className='imgcardtag2' >
               <img src={require("..//Gallery/yercaud3.jpeg")} className='modalcard2' /> 
               <p >
                 
                 Hiveminer <br/>
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

export default StaticExample8;