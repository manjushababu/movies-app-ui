import React from 'react';
import { TextField, Button } from '@mui/material';

import Authentication from '../Authentication';
import {
  InputWrapper,
  SwitchWrapper,
  NavigateTo,
  ButtonWrapper,
} from '../style';

/**
 * `Signup` creates the account for the new user, and redirects to dashboard once successfull
 * @returns SignupJSX
 */
function Signup() {
  return (
    <Authentication>
      <h1>SignUp</h1>
      <InputWrapper>
        <TextField
          fullWidth
          id='filled-basic'
          label='Username'
          variant='filled'
          onChange={() => {}}
          style={{ background: 'white', borderRadius: '5px' }}
        />
      </InputWrapper>
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
        Already have an account? Please
        {' '}
        <NavigateTo to='/login'>Login</NavigateTo>
      </SwitchWrapper>
      <ButtonWrapper>
        <Button style={{ background: '#1A76D2', color: 'white' }}>
          SignUp
        </Button>
      </ButtonWrapper>
    </Authentication>
  );
}

export default Signup;
