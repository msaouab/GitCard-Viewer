
type ToastProps = {
	message: string;
	type: 'success' | 'error';
};

const Toast = ({ message, type }: ToastProps) => {
	return (
		<div className={`toast ${type}`}>
			<p>{message}</p>
		</div>
	);
};

export default Toast;