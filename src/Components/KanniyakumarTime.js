import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Example from './Offcanvas';

function StaticExample5() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className='modalCardsize'>
        <Modal.Header closeButton>
          <Modal.Title>More About best time to travel</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='imgbox'>
            <div className='imgcardtag' >
               <img src={require("..//Gallery/kanyakumari1 (3).jpeg")} className='modalcard' /> 
               <p >
                
                 Lanscope <br/>
                 source
               </p>
            </div>
          
            <div className='imgcardtag' >
               <img src={require("../Gallery/kanyakumari1 (1).jpeg")} className='modalcard' /> 
               <p >
                 {/* Chennai <br/> */}
                 Sea <br/>
                 source
               </p>
            </div>

            <div className='imgcardtag' >
               <img src={require("..//Gallery/kanyakumari1 (2).jpeg")} className='modalcard' /> 
               <p >
                 Coast <br/>
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
          <Example/>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample5;