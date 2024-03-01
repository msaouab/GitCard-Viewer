import './Kpis.css';

type KpisProps = {
	label: string;
	value: number | undefined;
};

const Kpis = ({ label, value }: KpisProps) => {
	return (
		<div>
			<p>{label}</p>
			<p>{value ? value : '-'}</p>
		</div>
	);
};

export default Kpis;