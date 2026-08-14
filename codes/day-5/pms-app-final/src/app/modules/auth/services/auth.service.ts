import { HttpClient } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { AUTH_API_URL } from "../../../configs/constants"
import { ApiResponse } from "../../../models/api-response"
import { User } from "../../../models/user"

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _http = inject(HttpClient)

    login(user: User) {
        return this._http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user)
    }
}