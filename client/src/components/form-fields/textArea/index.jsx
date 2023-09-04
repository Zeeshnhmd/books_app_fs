import { Input as AntdTextArea } from 'antd';

import styles from './textArea.module.scss';

export const TextArea = ({
	rows,
	allowClear,
	autoSize,
	defaultValue,
	maxLength,
	disabled,
	value,
	onChange,
	style,
	placeHolder,
}) => {
	return (
		<AntdTextArea.TextArea
			rows={rows ? rows : 5}
			allowClear={allowClear}
			autoSize={autoSize}
			defaultValue={defaultValue}
			maxLength={maxLength}
			disabled={disabled}
			value={value}
			onChange={onChange}
			style={style}
			className={styles['textArea']}
			placeholder={placeHolder}
		/>
	);
};
