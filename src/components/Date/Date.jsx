import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function Date(props) {
    const {value,setValue}=props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
      sx={{border:"none"}}
        components={[
          'MobileDatePicker',
        ]}
      >
          <MobileDatePicker
            onChange={(newValue)=>setValue(newValue)}
            value={value}
           />
      
     
      </DemoContainer>
    </LocalizationProvider>
  );
}
