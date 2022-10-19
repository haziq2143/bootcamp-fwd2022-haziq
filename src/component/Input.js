import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Input = (props) => {
  return (
    <InputGroup className="mb-3" value={props.val} onChange={props.chg}>
      <Form.Control placeholder="Masukan Kegiatan Anda" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <Button variant="outline-primary" id="button-addon2" onClick={props.submit}>
        Button
      </Button>
    </InputGroup>
  );
};
export default Input;
