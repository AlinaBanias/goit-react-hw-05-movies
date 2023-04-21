import { Input } from './Form.styled';

const Form = ({searchForm}) => {
    return (
        <>
        <h2>Search movies</h2>
      <form onSubmit={searchForm}>
        <Input name="query" type="text"></Input>
        <button type="submit">Search</button>
      </form>
      </>
    )

}

export default Form;