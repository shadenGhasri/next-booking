import { ErrorMessage, useField } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';


const handleInput = (e) => {
  setAccount((p) => {
    return {
      ...p,
      [e.target.name]: e.target.value,
    };
  });
};

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="textField_box">
      <label htmlFor={field.name}>{label}</label>
      <input
      onChange={handleInput}
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}


