import { Critentials } from "./credential.model";

export interface ResetPasswordReq{
  resetReqest: Credential;
  reason:string,
  superUser:Critentials
}
