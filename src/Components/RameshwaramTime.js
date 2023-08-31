import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeftoffCanvas from './LeftoffCanvas';
import OffCanvasExample from './LeftoffCanvas';



function StaticExample2() {
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
               <img src={require("../Gallery/rameshwaram1.jpeg")} className='modalcard2' /> 
               <p >
                
                 Railway bridge <br/>
                 source
               </p>
            </div>
          
            <div className='imgcardtag2' >
               <img src={require("..//Gallery/rameshwaram2.jpeg")} className='modalcard2' /> 
               <p >
                
                 light house<br/>
                 source
               </p>
            </div>

            <div className='imgcardtag2' >
               <img src={require("../Gallery/rameshwaram3.jpeg")} className='modalcard2' /> 
               <p >
                piiligrims temple
                <br/>
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

export default StaticExample2;