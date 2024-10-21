export class ApiError extends Error {
  status: number;
  error: unknown;
  data: [] | {};

  constructor(data: {} | [], status: number, msg: string) {
    super(msg);
    this.status = status;
    this.data = data;
  }
}
