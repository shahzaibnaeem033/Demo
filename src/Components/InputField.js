import { FormGroup, TextField, FormControlLabel, Checkbox } from '@mui/material';
import './InputField.scss'

function InputFields() {

  return (
    <div>
      <p>Email</p>
      <TextField label=""
        sx={{
          width: "100%",
        }}
      />
      <p>Password</p>
      <TextField label=""
        sx={{
          width: "100%",
        }}
      />

      <div className='chkbox'>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked
            />}
            label="Remember me" />
        </FormGroup>
      </div>
    </div>
  );
}
export default InputFields;
