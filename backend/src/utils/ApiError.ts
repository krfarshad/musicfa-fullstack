export class ApiError extends Error {
  status: number;
  error: unknown;
  data: null;

  constructor(status: number, msg: string) {
    super(msg);
    this.status = status;
    this.data = null;
  }
}
