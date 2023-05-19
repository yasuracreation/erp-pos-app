import { LoginUserVM } from "../../../../vm/login-user.vm.model";
import { Critentials } from "./model/credential.model";

export function mapLoginRequest(param:LoginUserVM):Critentials{
  const credentials = {} as Critentials;
  credentials.userName = param.userId
  credentials.password = param.userPassword
  credentials.appId = param.appId
  return credentials;
}
