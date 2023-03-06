import React from 'react';
import axios from 'axios';

import { IDollarPrice } from 'interface';
import ArrowDown from '@mui/icons-material/ArrowDownward';
import ArrowUp from '@mui/icons-material/ArrowUpward';
import { delay } from 'utils';
import {
	CardLabelArea,
	CardName,
	Container,
	DateInfoArea,
	DateRequest,
	Display,
	High,
	Label,
	Low,
	NumericValues,
	Price,
	PriceGrey,
	PriceInfoArea,
	Sifron,
} from './style';
import { AnimatedNumber } from 'components/AnimatedNumber';

export const DollarPrice = () => {
	const [price, setPrice] = React.useState<IDollarPrice | undefined>(undefined);
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	const handleDollarPrice = async () => {
		while (true) {
			try {
				const now = new Date();
				const url = `https://economia.awesomeapi.com.br/last/USD-BRL`;
				const result = await axios.get<IDollarPrice>(url);
				if (result.data) {
					setDate(now);
					setPrice(result.data);
				}
			} catch (error) {
				console.log(error);
			}
			await delay(30000);
		}
	};

	React.useEffect(() => {
		(async () => {
			await handleDollarPrice();
		})();
	}, []);

	return (
		<Container>
			<CardLabelArea>
				<CardName>Dólar Comercial</CardName>
			</CardLabelArea>
			<PriceInfoArea>
				<Display>
					<Label>COMPRA</Label>
					<NumericValues>
						<Sifron>R$</Sifron>
						<Price>
							<AnimatedNumber number={price?.USDBRL.bid} digits={4} />
						</Price>
					</NumericValues>
				</Display>
				<Display>
					<Label>VENDA</Label>
					<NumericValues>
						<Sifron>R$</Sifron>
						<Price>
							<AnimatedNumber number={price?.USDBRL.ask} digits={4} />
						</Price>
					</NumericValues>
				</Display>
				<Display>
					<Label>{`MÁXIMO(DIA)`}</Label>
					<NumericValues>
						<Sifron>R$</Sifron>
						<PriceGrey>
							<AnimatedNumber number={price?.USDBRL.high} digits={4} />
						</PriceGrey>
					</NumericValues>
				</Display>
				<Display>
					<Label>{`MÍNIMO(DIA)`}</Label>
					<NumericValues>
						<Sifron>R$</Sifron>
						<PriceGrey>
							<AnimatedNumber number={price?.USDBRL.low} digits={4} />
						</PriceGrey>
					</NumericValues>
				</Display>
				<Display>
					<Label>VARIAÇÃO</Label>
					<NumericValues>
						{Number(price?.USDBRL.varBid) > 0 ? (
							<NumericValues>
								<ArrowUp
									color="success"
									sx={{ fontSize: 14, marginRight: 0.5, color: '#20C636' }}
								/>
								<High>
									<AnimatedNumber number={price?.USDBRL.pctChange} />%
								</High>
							</NumericValues>
						) : (
							<NumericValues>
								<ArrowDown
									color="error"
									sx={{ fontSize: 14, marginRight: 0.5 }}
								/>
								<Low>
									<AnimatedNumber number={price?.USDBRL.pctChange} />%
								</Low>
							</NumericValues>
						)}
					</NumericValues>
				</Display>
			</PriceInfoArea>
			<DateInfoArea>
				<DateRequest>
					Última atualização: {date?.toLocaleDateString('pt-BR')} às
					{date?.getHours()}h{date?.getMinutes()}
				</DateRequest>
			</DateInfoArea>
		</Container>
	);
};
