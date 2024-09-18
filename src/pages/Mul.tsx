import {
	IonButtons,
	IonContent,
	IonHeader,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useState, type FormEvent } from "react";

export default function Mul() {
	const [x, setX] = useState(0);

	const mul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Tabla de Multiplicar</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonList>
					<IonItem>
						<IonInput
							label="Ingresa un número:"
							placeholder="Ejemplo: 2"
							type="number"
							name="x"
							value={x}
							onInput={({ target }) =>
								setX(Number((target as HTMLInputElement).value))
							}
						/>
					</IonItem>
					<hr />
					{mul.map((m) => (
						<IonItem key={m}>
							<b>
								{x} x {m} = {m * x}
							</b>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
}
