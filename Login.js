import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userAction";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Login() {
    const dispatch = useDispatch();
    function login(values){
        dispatch(loginUser(values))
    }

  return (
    <div className="login">
      <Row justify="center" className="flex align-items-center" >
        <Col lg={5}><h1 className="heading1" data-aos='slide-left' >FINE</h1></Col>
        <Col lg={10} sm={24} className="bs1 p-5 login-form">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
            
            <Form.Item
            type="text"
              label="User Name"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
               type="password"
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input type="password"/>
            </Form.Item>

            <Button htmlType="submit" className="mb-3">Login</Button><br />
            <Link to='/register' className='mt-3'>Not Registered Yet ? Click here</Link>
            <p><strong>Admin </strong>Username: test,  password: 123456</p>
            <hr />
            <p><strong>User </strong>Username: test1,  password: 123456</p>
          </Form>
        </Col>
        <Col lg={5}><h1 className="heading2" data-aos='slide-right'>Jobs</h1></Col>
      </Row>
    </div>
  );
}

export default Login;
