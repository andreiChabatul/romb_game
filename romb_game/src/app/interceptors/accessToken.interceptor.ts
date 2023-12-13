import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const tokenReq = req.clone({
                headers: req.headers.append('Authorization', accessToken),
            })
            return next.handle(tokenReq);
        };
        return next.handle(req);
    };
}