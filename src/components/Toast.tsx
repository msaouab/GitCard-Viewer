
type ToastProps = {
	message: string;
	type: 'success' | 'error';
};

const Toast = ({ message, type }: ToastProps) => {
	console.log('message:', message);
	return (
		<div className={`toast ${type}`}>
			<p>{message}</p>
		</div>
	);
};

export default Toast;