import React, { FormEvent } from 'react';

class Login extends React.Component {
	constructor(props: any) {
		super(props)
		this.state = {}
	}

	handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log("submit")
	}

	componentDidMount() {
	}

	componentWillUnmount() { }

	render() {
		return (
			<div className="Login flex w-full">
				<div className="w-full flex flex-col rounded px-4 py-4">
					<div className="fredoka text-4xl mb-3">
						Connexion:
					</div>
					<form onSubmit={this.handleSubmit}>
						<div>
							Identifiant:
						</div>
						<div className="mb-2">
							<input className="w-2/4 border border-gray-700 border-opactity-100 rounded pl-1"></input>
						</div>
						<div>
							Mot de passe:
						</div>
						<div className="mb-2">
							<input type="password" className="w-2/4 border border-gray-700 border-opactity-100 rounded pl-1"></input>
						</div>
						<div>
							<button type="submit" className="p-2 text-gray-100 bg-blue-500 rounded">
								Connexion
							</button>
						</div>
					</form>

				</div>
			</div>
		);
	}

}

export default Login;
