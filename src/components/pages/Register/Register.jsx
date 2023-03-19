import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Input } from 'components/Filter/Filter.styled';
import { Form, Label, Wrapper } from 'components/pages/Register/Register.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


const Register = () => {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const dispatch = useDispatch(); 

    const reset = () => {
      setName('');
      setEmail('');
      setPassword('');
    };
    

const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register({name, email, password}));
    reset();
  }
  return (
      <Form onSubmit={handleSignUp}>
          <Wrapper className=''>
            <Label>
                <span>Name</span>
              <Input 
              type="text" 
              name="name" 
              value={name}
              onChange={(e) => { 
                setName (e.target.value)}}/>
            </Label>
          </Wrapper>

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
          <Button type='submit' disabled={ !name || !email || !password}>Sign Up</Button>
      </Form>
  )
};

export default Register;
