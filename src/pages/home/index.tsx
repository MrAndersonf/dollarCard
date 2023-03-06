import { DollarPrice } from 'components/DollarPrice';
import { Main } from 'components/Main';
import React from 'react';

export const Home: React.FC = () => {
	return (
		<Main>
			<DollarPrice />
		</Main>
	);
};
