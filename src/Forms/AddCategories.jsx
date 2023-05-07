//import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//import { NavItem } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef,useState } from 'react';

function AddCategories() {
    const [validated, setValidated] = useState(false);

    const location = useLocation();
  const MenuID = location
const navigate = useNavigate();
const categoryNameRef = useRef(null);
const categoryDescRef = useRef(null);
const categoryImageLinkRef = useRef(null);     
 //const [validated, setValidated] = useState(false);
  const  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // this.CheckValidity()
    if ( form.checkValidity() === false){
        event.stopPropogation();
    } else {
        event.preventDefault();
        const categoryName = categoryNameRef.current.value;
      const categoryDescription = categoryDescRef.current.value;
      const categoryimageLink = categoryImageLinkRef.current.value;
      const categoryisDeleted = false;
      const categoryData = {
        catId: 0,
        catName: categoryName,
        catImage: categoryimageLink,
        isDeleted: categoryisDeleted,
        catDescription: categoryDescription
       
        
      };
      console.log(categoryData);

      axios.post(`https://localhost:7205/api/Categories/${MenuID.state.menuid}`, categoryData)
        .then(response => {
          console.log(response);
          navigate('/menuList');
        })
        .catch(error => {
          console.log("error submiting data in put", error);
        });
    }

    setValidated(true);
  };


    
   
  

 
//  function handleChange  (e) {
//     const { name, value } = e.target
//     setState(
//       { [name]: value },
//       console.log('Name : ', name, 'Value : ', value),
//     )
//   }






//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
    


  return (
    <Container>
      {/* <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="form-container position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"> */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Form.Group as={Col} md="15" controlId="validationCustom01">
            <Form.Label>Category name</Form.Label>
            <Form.Control
              ref={categoryNameRef}
              required
              type="text"
              placeholder="Category name"
            // defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="15" controlId="validationCustom02">
            <Form.Label>Category Description</Form.Label>
            <Form.Control
              ref={categoryDescRef}
              required
              type="text"
              placeholder="category Description"
            // defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="15" controlId="validationCustomUsername">
            <Form.Label>Category ImageLink</Form.Label>
            {/* <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              ref={categoryImageLinkRef}
              type="text"
              placeholder="category Image Link"
            //   aria-describedby="inputGroupPrepend"
            //   required
            />
            <Form.Control.Feedback type="invalid">
              Good Link!
            </Form.Control.Feedback>
            {/* </InputGroup> */}
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
      {/* </div>
    </div> */}
    </Container>

  );

}


export default AddCategories;

