import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Mul.css";
import { useState, type FormEvent } from "react";

// TODO: Un programa que acepte un número y muestre su tabla de multiplicar hasta el 13.

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
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tabla de Multiplicar</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className="page_container" id="mul-page">
					<form>
						<label htmlFor="x">Ingresa un número:</label>
						<input
							type="number"
							name="x"
							id="x"
							value={x}
							onChange={({ target }) => setX(Number(target.value))}
						/>
					</form>

					<hr />

					<div>
						<ol>
							{mul.map((m) => (
								<li key={m}>
									<b>{m}</b>
									<b>x</b>
									<b>{x}</b>
									<b> = </b>
									<b>{m * x}</b>
								</li>
							))}
						</ol>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
}
