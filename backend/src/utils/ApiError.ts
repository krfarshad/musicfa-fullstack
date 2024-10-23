export class ApiError extends Error {
  status: number;
  error: unknown;
  data: null;
  msg: any;

  constructor(status: number, msg: any) {
    super(msg);
    this.status = status;
    this.msg = msg;
    this.data = null;
  }
}
