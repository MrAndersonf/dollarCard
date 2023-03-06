import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 49%;
	min-width: 420px;
	max-width: 700px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background-color: #212529;
	margin: 0 0 20px 0;
`;

export const PriceInfoArea = styled.div`
	display: flex;
	width: 100%;
	height: 120px;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const DateInfoArea = styled.div`
	display: flex;
	width: 100%;
	margin: 0 0 10px 20px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const CardLabelArea = styled.div`
	display: flex;
	width: 100%;
	margin: 20px 0 10px 20px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const Text = styled.p`
	margin: 0;
	padding: 0;
	font-weight: 'Arve';
	font-size: 14px;
`;

export const Display = styled.div`
	display: flex;
	width: 80px;
	height: 100px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const NumericValues = styled.div`
	display: flex;
	width: 120px;
	flex-direction: row;
	justify-content: center;
	align-items: baseline;
`;

export const Label = styled(Text)`
	color: #7c7973;
	font-size: 12px;
`;

export const Sifron = styled(Text)`
	color: #7c7973;
	font-size: 12px;
`;

export const Price = styled(Text)`
	color: #fff;
	font-size: 20px;
`;

export const PriceGrey = styled(Text)`
	color: #7c7973;
	font-size: 20px;
`;

export const High = styled(Text)`
	color: #20c636;
	font-size: 20px;
`;

export const Low = styled(Text)`
	color: #d32f2f;
	font-size: 20px;
`;

export const DateRequest = styled(Text)`
	color: #a09f99;
`;

export const CardName = styled(Text)`
	color: #a09f99;
	font-size: 20px;
`;
