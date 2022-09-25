import React from 'react';
import { Button, TextField } from '@mui/material';

import Authentication from '../Authentication';
import {
  InputWrapper,
  SwitchWrapper,
  NavigateTo,
  ButtonWrapper,
} from '../style';

/**
 * `Login` component authenticates the user and if successfull redirects user to dashboard
 * @returns LoginJSX
 */
function Login() {
  return (
    <Authentication>
      <h1>Login</h1>
      <InputWrapper>
        <TextField
          fullWidth
          id='filled-basic'
          label='Email'
          variant='filled'
          onChange={() => {}}
          style={{ background: 'white', borderRadius: '5px' }}
        />
      </InputWrapper>

      <InputWrapper>
        <TextField
          fullWidth
          id='filled-basic'
          label='Password'
          variant='filled'
          onChange={() => {}}
          style={{ background: 'white', borderRadius: '5px' }}
        />
      </InputWrapper>
      <SwitchWrapper>
        New User? Please
        {' '}
        <NavigateTo to='/signup'>Signup</NavigateTo>
      </SwitchWrapper>
      <ButtonWrapper>
        <Button style={{ background: '#1A76D2', color: 'white' }}>LOGIN</Button>
      </ButtonWrapper>
    </Authentication>
  );
}

export default Login;
