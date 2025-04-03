import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, throwError} from "rxjs";
import Fact from "./types/fact";

@Injectable(
  {
    providedIn: "root",
  }
)
export class ApiService {
  private apiUrl: string = "https://meowfacts.herokuapp.com/";
  constructor(private http: HttpClient) {}

  getFact() {
    return this.http.get<Fact>(this.apiUrl).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError(error.message || 'Server Error');
  }
}
