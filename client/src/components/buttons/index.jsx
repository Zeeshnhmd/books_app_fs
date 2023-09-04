import { Button as AntdButton } from 'antd';

import style from './buttons.module.scss';

export const Button1 = ({
	children,
	disabled,
	htmlType,
	icon,
	loading,
	block,
	onClick,
	shape,
}) => {
	return (
		<AntdButton
			disabled={disabled}
			htmlType={htmlType}
			icon={icon}
			loading={loading}
			block={block}
			onClick={onClick}
			className={style['button1']}
			shape={shape}
		>
			{children}
		</AntdButton>
	);
};
