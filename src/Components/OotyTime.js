import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeftoffCanvas from './LeftoffCanvas';
import OffCanvasExample from './LeftoffCanvas';



function StaticExample4() {
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
               <img src={require("..//Gallery/ooty3.jpeg")} className='modalcard2' /> 
               <p >
             
                 Mountain ooty <br/>
                 source
               </p>
            </div>
          
            <div className='imgcardtag2' >
               <img src={require("..//Gallery/ooty1.jpeg")} className='modalcard2' /> 
               <p >
                 
                 Ooty Lake <br/>
                 source
               </p>
            </div>

            <div className='imgcardtag2' >
               <img src={require("..//Gallery/ooty2.jpeg")} className='modalcard2' /> 
               <p >
                 
                 Trucking ooty <br/>
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

export default StaticExample4;