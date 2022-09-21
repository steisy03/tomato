import Request from "./Request";

export default class Model {
  
  constructor(basePath, token) {
    this.httpClient = new Request(token);
    this.basePath = basePath;
  }

}
