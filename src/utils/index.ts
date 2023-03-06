export const delay = (milliseconds: number) => {
	return new Promise((resolve: any) => {
		setTimeout(resolve, milliseconds);
	});
};
export const formatCurrency = (
	amount: number | undefined,
	local: 'USD' | 'BRL',
	digits?: number,
) => {
	if (amount !== undefined) {
		if (local === 'BRL') {
			return new Intl.NumberFormat('pt-BR', {
				minimumFractionDigits: digits || 2,
			}).format(amount);
		}
		return new Intl.NumberFormat('en-US', {
			minimumFractionDigits: digits || 2,
			maximumFractionDigits: digits || 2,
		}).format(amount);
	}
	return '';
};
