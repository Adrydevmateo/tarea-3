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

export default function Translator() {
	const [x, setX] = useState(0);
	const letterList = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"ñ",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	const updateX = (newValue: string) => {
		const parsedValue = Number(newValue);
		const max = letterList.length - 1;
		if (parsedValue > max) return;
		setX(parsedValue);
	};

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
							max={letterList.length - 1}
							value={x}
							onInput={({ target }) =>
								updateX((target as HTMLInputElement).value)
							}
						/>
					</IonItem>
					<hr />
					<IonItem>
						<b style={{ textTransform: "capitalize" }}>
							Letra: {letterList[x]}
						</b>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
}
