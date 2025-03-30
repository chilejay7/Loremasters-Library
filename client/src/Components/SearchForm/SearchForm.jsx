import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import './SearchForm.css';

const SearchForm = ({ handleSearch }) => {

  console.log("The imported function is:", handleSearch)

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    evt.preventDefault();

    const term = evt.target.value;
    console.log("The new search term is:", term);

    setSearchTerm((currTerm) => {
      currTerm = term;
      return currTerm;
    });
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(searchTerm);
  };
  
  return (
    <Form className="d-flex" onSubmit={handleSubmit} id="search-form">
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
