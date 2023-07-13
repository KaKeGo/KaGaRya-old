import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';



const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox-icon">
        <FontAwesomeIcon icon={checked ? faCheckSquare : faSquare} />
      </span>
      <span className="checkbox-label">Agree to Terms</span>
    </label>
  );
};


export default CustomCheckbox