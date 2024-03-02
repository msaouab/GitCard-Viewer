import './Kpis.css';

type KpisProps = {
	kpi: {
		label: string;
		value: number | string | undefined;
	  };
};

const Kpis = (kpi: KpisProps) => {
	const { label, value } = kpi.kpi;
	return (
		<div className='kpis-item'>
			<p>{label}</p>
			<p>{value ? value : '-'}</p>
		</div>
	);
};

export default Kpis;