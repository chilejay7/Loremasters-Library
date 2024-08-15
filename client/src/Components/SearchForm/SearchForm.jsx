import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './SearchForm.css';

const SearchForm = ({ handleSearch, handleChange, searchTerm }) => {
  return (
    <Form className="d-flex" onSubmit={handleSearch} id="search-form">
      <Form.Control
        type="search"
        placeholder="Search for the title or author"
        className="me-2"
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchForm;
