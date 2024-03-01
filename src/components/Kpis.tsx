import './Kpis.css';

const Kpis = (label: string, value: number | undefined, index: number) => {
	return (
		<div>
			<p>{label}</p>
			<p>{value ? value : '-'}</p>
		</div>
	);
};

export default Kpis;