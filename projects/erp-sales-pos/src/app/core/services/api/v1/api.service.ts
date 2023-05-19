import { Injectable} from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  private baseUrl: string = 'https://api.example.com'; // Replace with your API base URL

  // GET request
  get<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios.get<T>(`${this.baseUrl}${url}`, config)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  // POST request
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios.post<T>(`${this.baseUrl}${url}`, data, config)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  // PUT request
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios.put<T>(`${this.baseUrl}${url}`, data, config)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  // DELETE request
  delete<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
    return new Observable<T>(observer => {
      axios.delete<T>(`${this.baseUrl}${url}`, config)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
