import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Button } from '@mui/material';
import '../css/SignIn.css';


function SignIn() {
    const title = 'Sign In';
  
    return (
      <div className='SignIn'>
        <Card className='Card_input'>
          <h1>{title}</h1>
          <CardContent className='CardContent_userName'>
            <TextField id='standard-basic' label='UserName' variant='standard' className='TextField_userName'/>
          </CardContent>
          <CardContent className='CardContent_password'>
            <TextField id='standard-basic' label='Password' variant='standard' className='TextField_password'/>
          </CardContent>
          <CardContent className='CardContent_signIn'>
            <Button variant='outlined' className='Btn_signIn'>Sign In</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default SignIn;