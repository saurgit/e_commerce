import styled from "styled-components";
import { mobile } from "../responsive";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  max-width:46%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
    display:block;
  margin-top: 10px;
  font-size: 13 px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setname] = useState("");
  const [password1, setPassword1] = useState("");
  const [email,setEmail]=useState("");
  let error=false;
  const dispatch=useDispatch();
  const handleClick=(e)=>{
    e.preventDefault()

    try{
      if(password1!==password){
        alert("password mismatch")
      }else if(fullname && email && username && password){
        const register=async ()=>{
          const res= await publicRequest.post("/auth/register",{username,password1,fullname,email});
          console.log(res.data)
          if(res.data){
            login(dispatch,{username,password})
          }
        }
        register()
      }
    }catch(err){
      res.status(500).json(err)
    }
  }
  // useEffect(()=>{
  //   if(error){
      
  //   }
  //   const register=async ()=>{
  //     try{
  //       const res=await publicRequest.post("/register",{username,password,name,email})
  //     }catch(err){}
  //   }
  //   username && password && name && email && password1===password && register();
  // },[])
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" type="text" onChange={(e)=>setname(e.target.value)}/>
          {/* <Input placeholder="last name" type="text" onChange={(e)=>}/> */}
          <Input placeholder="username" type="text" onChange={(e)=>setUsername(e.target.value)} />

          <Input placeholder="email" type="email" onChange={(e)=>setEmail(e.target.value)} />
          <Input placeholder="password" type="password" style={{fontFamily:"Verdana"}} onChange={(e)=>setPassword(e.target.value)} />
          <Input placeholder="confirm password" type="password" style={{fontFamily:"Verdana"}} onChange={(e)=>setPassword1(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
        <Link href="/login">Already have an Account?</Link>
      </Wrapper>
    </Container>
  );
};

export default Register;