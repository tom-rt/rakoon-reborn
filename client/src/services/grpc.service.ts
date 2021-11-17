import { grpc } from '@improbable-eng/grpc-web';
import { Input, Output } from "../pbs/base_pb"
import { BaseServiceClient, ServiceError } from '../pbs/base_pb_service';

export class GrpcService{
    private serverUrl: string;
    private client: BaseServiceClient;

    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL || "";
        this.client = new BaseServiceClient(this.serverUrl)
    }

    async connect(username: string, password: string) {
        console.log(username, password)
    }

    async pingServer() {
        const request = new Input();
        const metadata: grpc.Metadata = new grpc.Metadata();    
        metadata.append("Access-Control-Allow-Origin", "*")
        request.setInput("Ping")
        
        await this.client.ping(request, (error: ServiceError | null, res: Output | null) => {
          if (error) {
            console.error(`Error ${error.code}: ${error.message}`)
          } else {
            const output: string | undefined = res?.getOutput()
            console.log("Server responded:", output)  
          }
        });
      }
};