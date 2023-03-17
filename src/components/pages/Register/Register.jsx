import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Input } from 'components/Filter/Filter.styled';
import { Form, Label, Wrapper } from 'components/pages/Register/Register.styled';
import { useState } from 'react';


const Register = () => {
  
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const reset = () => {
      setName('');
      setMail('');
      setPassword('');
    };
    

const handleSignUp = (e) => {
    e.preventDefault();
    console.log (name, mail, password);
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
                value={mail}
                onChange={(e) => { 
                  setMail (e.target.value)}}/>
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
          <Button type='submit'>Sign Up</Button>
      </Form>
  )
};

export default Register;
