import './SuggestList.css';

type resultProps = {
	results: any[];
};

const SuggestList = (props: resultProps) => {
	const { results } = props;

	const handleChooseUser = (id: string) => {
		console.log('id', id);
	};

	return (
		<ul className='results'>
			{
				results.map((result: any, index: number) => (
					<li key={index} className='result-list' onClick={() => handleChooseUser(result.id)}>
						<p>{index} -</p>
						<img src={result.avatar_url} alt={result.login} />
						<p>{result.login}</p>
					</li>
				))
			}
		</ul>
	);
}

export default SuggestList;