import { grpc } from '@improbable-eng/grpc-web';
import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from "../pbs/user_pb"
import { UserServiceClient, ServiceError } from '../pbs/user_pb_service';

export class GrpcService {
    private serverUrl: string;
    private client: UserServiceClient;

    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL || "";
        this.client = new UserServiceClient(this.serverUrl)
    }

    getMetadata(): grpc.Metadata {
      const metadata: grpc.Metadata = new grpc.Metadata();    
      metadata.append("Access-Control-Allow-Origin", "*")
      return metadata
    }

    async login(username: string, password: string) {
      const request = new LoginRequest();
      const metadata: grpc.Metadata = this.getMetadata();

      request.setUsername(username)
      request.setPassword(password)
      
      await this.client.login(request, (error: ServiceError | null, res: LoginResponse | null) => {
        if (error) {
          console.error(`Error ${error.code}: ${error.message}`)
        } else {
          const granted: boolean | undefined = res?.getGranted()
          console.log("Server responded granted:", granted)  
        }
      });
    }

    async signUp(username: string, password: string, isAdmin: boolean = false) {
      const request = new SignUpRequest();

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