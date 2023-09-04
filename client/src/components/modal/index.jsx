import { Modal as AntModal, Divider } from 'antd';
import { GrFormClose } from 'react-icons/gr';

import styles from './modal.module.scss';

const Modal = ({
	open,
	title,
	onCancel,
	onOk,
	footer,
	width,
	children,
	destroyOnClose,
	bodyStyle,
	modalStyle,
}) => {
	return (
		<div className={styles['wrapper']}>
			<AntModal
				open={open}
				title={
					title ? (
						<>
							<p className={styles['title']}>{title}</p> <Divider />
						</>
					) : (
						''
					)
				}
				onCancel={onCancel}
				onOk={onOk}
				centered={true}
				closeIcon={<GrFormClose className={styles['close-icon']} />}
				footer={footer ? footer : null}
				keyboard={true}
				maskClosable={false}
				width={width}
				rootClassName={styles['modal-wrapper']}
				destroyOnClose={destroyOnClose}
				bodyStyle={bodyStyle}
				style={modalStyle}
			>
				<div className={styles['content']}>{children}</div>
			</AntModal>
		</div>
	);
};

export default Modal;
