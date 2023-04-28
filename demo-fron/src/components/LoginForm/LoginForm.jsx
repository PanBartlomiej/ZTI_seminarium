import * as React from 'react';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function LoginFrom(props) {

    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);

    const validateEmail = (value = email) => {
        const ok = value != '';
        setEmailError(!ok);
        return ok;
    };

    const emailOnChange = (event) => {
        setEmail(event.target.value);
        validateEmail(event.target.value);
    };

    const validatePassword = (value = password) => {
        const ok = value != '';
        setPasswordError(!ok);
        return ok;
    };

    const passwordOnChange = (event) => {
        setPassword(event.target.value);
        validatePassword(event.target.value);
    };

    const validate = () => {
        let ok = true;
        ok &&= validateEmail();
        ok &&= validatePassword();
        return ok;
    }

    const submitOnClick = (event) => {
        const inputsValid = validate();
        if(inputsValid)
        {
            const data = {
                email: email,
                password: password
            }
            props.onSubmit(data);
        }
    };

    return (
        <Box
            component='form'
            sx={{
                paddingTop: '1rem',
                paddingBottom: '1rem',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField
                className='form-text-input'
                sx={{marginTop: '0.5rem', marginBottom: '0.25rem'}}
                id='login-email'
                label='Email'
                helperText={emailError ? 'Pole nie może być puste': ''}
                value={email}
                error={emailError}
                onChange={emailOnChange}
            />
            <TextField
                className='form-text-input'
                sx={{marginTop: '0.5rem', marginBottom: '0.25rem'}}
                id='login-password'
                label='Hasło'
                helperText={passwordError ? 'Pole nie może być puste': ''}
                value={password}
                error={passwordError}
                onChange={passwordOnChange}
            />
            <Button
                sx={{
                    marginTop: '0.5rem'
                }}
                variant='contained'
                onClick={submitOnClick}
                >
                Wyślij
            </Button>
        </Box>
    )
}

export default LoginFrom;