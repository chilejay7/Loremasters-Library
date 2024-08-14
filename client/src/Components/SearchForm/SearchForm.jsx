import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchForm = ({ handleSearch, handleChange, searchTerm }) => {
  return (
    <Form className="d-flex" onSubmit={handleSearch}>
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
