import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Input } from 'components/Filter/Filter.styled';
import { Form, Label, Wrapper } from 'components/pages/Register/Register.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const dispatch = useDispatch(); 

    const reset = () => {
      setEmail('');
      setPassword('');
    };
    

const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password}));
    reset();
  }
  return (
      <Form onSubmit={handleLogIn}>

          <Wrapper className=''>
            <Label>
                <span>Email</span>
                <Input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => { 
                  setEmail (e.target.value)}}/>
            </Label>
          </Wrapper>

          <Wrapper className=''>
            <Label>
                <span>Password</span>
                <Input 
                type="password" 
                name="password" 
                value={password}
                onChange={(e) => { 
                  setPassword (e.target.value)}}/>
            </Label>
          </Wrapper>   
          <Button type='submit' disabled={ !email || !password }>Sign Up</Button>
      </Form>
  )
};

export default Login;
