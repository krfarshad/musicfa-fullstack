export class ApiSuccess {
  status: number;
  msg: any;
  data: any;

  constructor(status: number, data: any, msg: string) {
    this.status = status;
    this.data = data;

    if (msg) {
      this.msg = msg;
    }
  }
}
