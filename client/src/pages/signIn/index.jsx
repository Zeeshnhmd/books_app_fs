import { Form } from 'antd';

import AuthLayout from '../../components/layout/authLayout';
import { Input } from '../../components/form-fields/input';
import { Button1 } from '../../components/buttons';
import { Link } from 'react-router-dom';

import styles from './signIn.module.scss';

const SignIn = () => {
	const [form] = Form.useForm();

	const signIn = (values) => {
		console.log(values);
	};

	return (
		<div className={styles['wrapper']}>
			<AuthLayout>
				<div className={styles['inner-wrapper']}>
					<Form
						name="sign-in"
						labelCol={{ span: 24 }}
						requiredMark={false}
						onFinish={signIn}
						form={form}
					>
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
								Sign In
							</Button1>
						</Form.Item>
						<p className={styles['signup']}>
							Don't have an account? &nbsp;
							<Link className={styles['signup-link']} to="/signup">
								Sign Up
							</Link>
						</p>
					</Form>
				</div>
			</AuthLayout>
		</div>
	);
};

export default SignIn;
