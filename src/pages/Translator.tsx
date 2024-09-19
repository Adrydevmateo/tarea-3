import {
	IonButtons,
	IonContent,
	IonHeader,
	IonInput,
	IonItem,
	IonList,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useState } from "react";

function translate(number: number): string {
	const units = [
		"cero",
		"uno",
		"dos",
		"tres",
		"cuatro",
		"cinco",
		"seis",
		"siete",
		"ocho",
		"nueve",
	];

	const tens = [
		"",
		"diez",
		"veinte",
		"treinta",
		"cuarenta",
		"cincuenta",
		"sesenta",
		"setenta",
		"ochenta",
		"noventa",
	];

	const hundreds = [
		"",
		"ciento",
		"doscientos",
		"trescientos",
		"cuatrocientos",

		"quinientos",
		"seiscientos",
		"setecientos",
		"ochocientos",
		"novecientos",
	];

	if (number === 0) {
		return "cero";
	}

	if (number < 10) {
		return units[number];
	}

	if (number < 20) {
		const x = `dieci${units[number % 10]}`;
		if (x === "diecicero") return "diez";
		if (x === "dieciuno") return "once";
		if (x === "diecidos") return "doce";
		if (x === "diecitres") return "trece";
		if (x === "diecicuatro") return "catorce";
		if (x === "diecicinco") return "quince";
		return `dieci${units[number % 10]}`;
	}

	if (number < 100) {
		const x =
			tens[Math.floor(number / 10)] +
			(number % 10 !== 0 ? ` y ${units[number % 10]}` : "");

		if (x === "veinte y uno") return "veintiuno";
		if (x === "veinte y dos") return "veintidós";
		if (x === "veinte y tres") return "veintitrés";
		if (x === "veinte y cuatro") return "veinticuatro";
		if (x === "veinte y cinco") return "veinticinco";
		if (x === "veinte y seis") return "veintiséis";
		if (x === "veinte y siete") return "veintisiete";
		if (x === "veinte y ocho") return "veintiocho";
		if (x === "veinte y nueve") return "veintinueve";
		return x;
	}

	if (number < 1000) {
		return (
			hundreds[Math.floor(number / 100)] +
			(number % 100 !== 0 ? ` ${translate(number % 100)}` : "")
		);
	}

	return "mil";
}

export default function Translator() {
	const [x, setX] = useState(0);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Traductor de Números a Letras</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonList>
					<IonItem>
						<IonInput
							label="Ingresa un número:"
							placeholder="Ejemplo: 2"
							type="number"
							max={1000}
							min={0}
							value={x}
							onInput={({ target }) =>
								setX(Number((target as HTMLInputElement).value))
							}
						/>
					</IonItem>
					<hr />
					<IonItem>
						<b>Traducido a: {translate(x)}</b>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
}
