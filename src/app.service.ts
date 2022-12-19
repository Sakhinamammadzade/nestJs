import { Injectable } from '@nestjs/common';
// import { HttpClient, HttpHeaders, HttpParams } from '';

// const httpOptions = {
//     // headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers':'X-Requested-With' }),
//     headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3019', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Credentials':'true','Access-Control-Allow-Headers':'X-PINGOTHER,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization','Access-Control-Expose-Headers':'xsrf-token' }),
//     params: new HttpParams({})
// };

@Injectable()
export class AppService {
  getHello(): string {
    return 'dev';
  }
}
