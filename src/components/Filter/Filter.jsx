import PropTypes from 'prop-types';
function Filter(props) {
  const { filterValue, catchFilterInfo } = props;
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filterValue}
        onChange={event => catchFilterInfo(event)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  catchFilterInfo: PropTypes.func.isRequired,
};

export default Filter;
