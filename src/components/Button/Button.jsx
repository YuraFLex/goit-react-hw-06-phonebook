import PropTypes from 'prop-types';

import { HiOutlineTrash } from 'react-icons/hi';
import s from './Button.module.scss';

export const AddButton = () => {
  return <button className={s.buttonAdd}>Add contact</button>;
};
export const DeleteButton = ({ type, contactId, contactDelete }) => {
  const handleDelBtn = () => {
    contactDelete(contactId);
  };
  return (
    <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
      <HiOutlineTrash className={s.buttonDelSvg} size={16} />
    </button>
  );
};

DeleteButton.propTypes = {
  type: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
