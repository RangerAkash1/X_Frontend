import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

//Auth state, login/logout
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = '/api/auth';
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser$: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(this.getUserFromStorage());
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
            .pipe(
                tap(response => {
                    if (response && response.token) {
                        localStorage.setItem('authToken', response.token);
                        localStorage.setItem('user', JSON.stringify(response.user));
                        this.currentUserSubject.next(response.user);
                    }
                })
            );
    }

    logout(): void {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('authToken');
    }

    getToken(): string | null {
        return localStorage.getItem('authToken');
    }

    private getUserFromStorage(): any {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
}