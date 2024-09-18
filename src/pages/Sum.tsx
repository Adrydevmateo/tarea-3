import {
	IonButton,
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
import { useState, type FormEvent } from "react";

type Sum = {
	x: number;
	y: number;
};

export default function Sum() {
	const [sum, setSum] = useState<Sum>({
		x: 0,
		y: 0,
	});

	const updateSum = (key: keyof Sum, val: number) =>
		setSum({ ...sum, [key]: val });

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Sumadora</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Sumadora</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonItem>
					<IonInput
						label="Ingresa el primer número:"
						placeholder="Ejemplo: 2"
						type="number"
						name="x"
						value={sum.x}
						onInput={({ target }) =>
							updateSum("x", Number((target as HTMLInputElement).value))
						}
					/>
				</IonItem>
				<IonItem>
					<IonInput
						label="Ingresa el segundo número:"
						placeholder="Ejemplo: 5"
						type="number"
						name="y"
						value={sum.y}
						onInput={({ target }) =>
							updateSum("y", Number((target as HTMLInputElement).value))
						}
					/>
				</IonItem>

				<IonItem>
					<h1>Resultado: {sum.x + sum.y}</h1>
				</IonItem>
			</IonContent>
		</IonPage>
	);
}
