import PropTypes from 'prop-types';

export const Contact = ({ contact: { name, number } }) => {
  return (
    <>
      {name}: {number}
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
