import AuthHeader from '../../header/authHeader';

import styles from './authLayout.module.scss';

const AuthLayout = ({ children }) => {
	return (
		<div className={styles['wrapper']}>
			<AuthHeader />
			<div className={styles['inner-wrapper']}>
				<div className={styles['left-side']}>
					<h1 className={styles['title']}>
						Welcome to <span className={styles['logo']}>Zee Blogs</span>
					</h1>
					<ul className={styles['ul']}>
						<li className={styles['li']}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an un
						</li>
						<li className={styles['li']}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an un
						</li>
						<li className={styles['li']}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an un
						</li>
					</ul>
				</div>
				<div className={styles['right-side']}>{children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
