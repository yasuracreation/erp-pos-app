import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ResetPasswordReq } from './model/reset-password-req.model';
import { mapLoginRequest } from './auth-mapper';
import { LoginUserVM } from 'projects/cor-lib/src/vm/login-user.vm.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ///TODO need to optimized the functionality
  constructor(private apiService: ApiService) {}

  /**
   * login user with credentials
   * @param credentials
   * @returns
   */
  login(credentials: LoginUserVM) {
    mapLoginRequest(credentials);
    return true  // this.apiService.post('/auth');
  }
  /**
   * validate user token and login
   * @param userId
   * @param token
   * @returns
   */
  auth(userId: string, token: string) {
    return this.apiService.get(`/auth/${userId}/${token}`);
  }
  /**
   * reset user password and will return defualt password
   * @param userId
   * @param adminCredentials
   * @param reason
   * @returns
   */
  resetUser(userId: string, adminCredentials: LoginUserVM, reason: string) {
    const resetReqest = {} as ResetPasswordReq;
    resetReqest.reason = reason;
    resetReqest.superUser = mapLoginRequest(adminCredentials);
    return this.apiService.post(`/reset/${userId}`, resetReqest);
  }
  /**
   * load user by context (according to  data need )
   * @param userId
   * @param context
   * @returns
   */
  getAccount(userId:string,context:string){
      return this.apiService.get(`/auth/${userId}/type/${context}`)
  }
  getAuthorizedUser():boolean{
    return true;
  }
}
