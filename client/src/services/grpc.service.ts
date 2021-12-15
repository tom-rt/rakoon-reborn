import { grpc } from '@improbable-eng/grpc-web';
import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from "../pbs/user_pb"
import { UserServiceClient, ServiceError } from '../pbs/user_pb_service';

export class GrpcService {
    private serverUrl: string;
    private client: UserServiceClient;

    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL || ""
        this.client = new UserServiceClient(this.serverUrl)
    }

    getMetadata(): grpc.Metadata {
      const metadata: grpc.Metadata = new grpc.Metadata();    
      metadata.append("Access-Control-Allow-Origin", "*")
      return metadata
    }

    login(username: string, password: string, cb: (error: ServiceError | null, responseMessage: LoginResponse | null) => void) {
      const request = new LoginRequest();
      request.setUsername(username)
      request.setPassword(password)
      this.client.login(request, cb);
    }

    async signUp(username: string, password: string, isAdmin: boolean = false) {
      const request = new SignUpRequest()

      request.setUsername(username)
      request.setPassword(password)
      request.setIsadmin(isAdmin)
      
      await this.client.signUp(request, (error: ServiceError | null, res: SignUpResponse | null) => {
        if (error) {
          console.error(`Error ${error.code}: ${error.message}`)
        } else {
          console.log("Server responded:", res?.getMessage())
        }
      });
    }

  }