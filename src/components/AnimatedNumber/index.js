import AnimatedNumbers from 'animated-number-react';
import { formatCurrency } from 'utils';

export const AnimatedNumber = props => {
	return (
		<AnimatedNumbers
			value={props.number}
			duration={300}
			formatValue={value => {
				return formatCurrency(value, 'BRL', props.digits || 2);
			}}
		/>
	);
};
