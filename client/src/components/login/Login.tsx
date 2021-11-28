import React, { FormEvent } from "react";
import { GrpcService } from "../../services/grpc.service";

class Login extends React.Component<
  {},
  { userName: string; password: string; isFormValid: boolean, grpcService: GrpcService }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isFormValid: false,
      grpcService: new GrpcService()
    };
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.state);
    console.log("submit");
    // this.state.grpcService.login(this.state.userName, this.state.password)
    this.state.grpcService.signUp(this.state.userName, this.state.password, true)
  };
  
  checkFormValidity = () => {
    if (this.state.userName.length === 0 || this.state.password.length === 0) {
      this.setState({ isFormValid: false });
    } else {
      this.setState({ isFormValid: true });
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    // Nasty workaround (as any), see following bug:
    // https://github.com/Microsoft/TypeScript/issues/13948
    this.setState({ [name]: value} as any, this.checkFormValidity);
  };

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  render = () => {
    return (
      <div className="Login flex w-full">
        <div className="w-full flex flex-col rounded px-4 py-4">
          <div className="fredoka text-4xl mb-3">Connexion:</div>
          <form onSubmit={this.handleSubmit}>
            <div>Identifiant:</div>
            <div className="mb-2">
              <input
                name="userName"
                type="text"
                className="w-2/4 border border-gray-700 border-opactity-100 rounded pl-1"
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div>Mot de passe:</div>
            <div className="mb-2">
              <input
                name="password"
                type="password"
                className="w-2/4 border border-gray-700 border-opactity-100 rounded pl-1"
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div>
              <button
                type="submit"
                className={
                  "p-2 text-gray-100 rounded " +
                  (this.state.isFormValid
                    ? "bg-blue-500"
                    : "bg-gray-300 cursor-default")
                }
                disabled={!this.state.isFormValid}
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default Login;
