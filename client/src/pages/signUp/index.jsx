import { Form } from 'antd';
import { Link } from 'react-router-dom';

import AuthLayout from '../../components/layout/authLayout';
import { Input } from '../../components/form-fields/input';
import { Button1 } from '../../components/buttons';

import styles from './signUp.module.scss';

const SignUp = () => {
	const [form] = Form.useForm();

	const signUp = (values) => {
		console.log(values);
	};

	return (
		<div className={styles['wrapper']}>
			<AuthLayout>
				<Form
					name="sign-up"
					labelCol={{ span: 24 }}
					requiredMark={false}
					onFinish={signUp}
					form={form}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
								whitespace: true,
							},
						]}
					>
						<Input placeHolder="Username" />
					</Form.Item>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: 'Please input your email!',
								type: 'email',
							},
						]}
					>
						<Input placeHolder="abc@gmail.com" />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input placeHolder="Password" type="password" />
					</Form.Item>
					<Form.Item>
						<Button1 block={true} htmlType="submit">
							Sign Up
						</Button1>
					</Form.Item>
					<p className={styles['signin']}>
						Already have an account? &nbsp;
						<Link className={styles['signin-link']} to="/signin">
							Sign In
						</Link>
					</p>
				</Form>
			</AuthLayout>
		</div>
	);
};

export default SignUp;
