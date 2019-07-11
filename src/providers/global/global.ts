import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

// Global Variable
public baseURLAPI:string = "http://localhost/combindrestapi/";
//public baseURLAPI:string = "http://192.168.1.55/combindrestapi/";
public authKey:string = "Basic YWRtaW46MTIzNDU2";

}
