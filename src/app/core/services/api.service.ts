// Base HTTP wrapper
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = '/api';
    constructor(private http: HttpClient, private authService: AuthService) {}

    private getAuthHeaders(): HttpHeaders {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        if (token) {
            headers = headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
    get<T>(endpoint: string, params?: HttpParams): Observable<T> {
        const headers = this.getAuthHeaders();
        return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { headers, params });
    }
    post<T>(endpoint: string, body: any, params?: HttpParams): Observable<T> {
        const headers = this.getAuthHeaders();
        return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body, { headers, params });
    }
    put<T>(endpoint: string, body: any, params?: HttpParams): Observable<T> {
        const headers = this.getAuthHeaders();
        return this.http.put<T>(`${this.apiUrl}/${endpoint}`, body, { headers, params });
    }
    delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
        const headers = this.getAuthHeaders();
        return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, { headers, params });
    }
}