import React, { Component } from 'react'
import './signup-form.css'
import axios from 'axios'
import store from '../../redux/store'
import { withRouter } from 'react-router-dom'
import shortid from 'shortid'
import { Form, Input,  message} from 'antd';
const FormItem = Form.Item


class SignupForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.props.form.getFieldsValue()
    let unFilled = Object.keys(data).filter(
      prop => {
        return(!data[prop])
      }
    )
    if(unFilled.length === 0 ){
      const allData = { ...data,
        url:'http://media.haoduoshipin.com/yummy/default-avatar.png',
        slogn:'还没填写个性签名',
        id:shortid.generate()
      }
      store.dispatch({type:'ADD_USER',newUser:allData})
      window.localStorage.setItem('userId', allData.id)
      this.props.history.push('/news')
      store.dispatch({type:'ACTIVEUSER',user:allData})
    }else{
      message.error('请填写全部信息')
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const config = {
      rules: [{ type: 'string', required: true, message: '必填项目' }],
    }
    return (
      <div className='signup-form'>
        <Form onSubmit={this.handleSubmit} >
          <div className='signup-inputs'>
            <FormItem>
              {getFieldDecorator('userName',config)(
                <Input type='text' placeholder='用户名' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('userEmail',config)(
                <Input type='text' placeholder='Email' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password',config)(
                <Input type='password' placeholder='password' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('passwordsed',config)(
                <Input type='password' placeholder='再输一遍' />
              )}
            </FormItem>
          </div>
          <div className='signup-action'>
            <button>注册</button>
          </div>
        </Form>
      </div>
    )
  }
}
export default withRouter(Form.create({})(SignupForm))
