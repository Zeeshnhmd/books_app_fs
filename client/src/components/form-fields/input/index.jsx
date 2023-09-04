import { Input as AntdInput } from 'antd';

import styles from './input.module.scss';

export const Input = ({
	disabled,
	prefix,
	suffix,
	value,
	onChange,
	onPressEnter,
	style,
	placeHolder,
	type,
}) => {
	return (
		<div className={styles['wrapper']}>
			{type === 'password' ? (
				<AntdInput.Password
					disabled={disabled}
					prefix={prefix}
					suffix={suffix}
					value={value}
					onChange={onChange}
					onPressEnter={onPressEnter}
					style={style}
					className={styles['input']}
					placeholder={placeHolder}
					type={type}
				/>
			) : (
				<AntdInput
					disabled={disabled}
					prefix={prefix}
					suffix={suffix}
					value={value}
					onChange={onChange}
					onPressEnter={onPressEnter}
					style={style}
					className={styles['input']}
					placeholder={placeHolder}
					type={type}
				/>
			)}
		</div>
	);
};
