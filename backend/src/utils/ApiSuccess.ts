type MetaResponse = {
  total: number;
  page: number;
  totalPages?: number;
};
export class ApiSuccess {
  status: number;
  msg: any;
  data: any;
  meta?: MetaResponse;

  constructor(status: number, data: any, msg: string, meta?: MetaResponse) {
    this.status = status;
    this.data = data;

    if (msg) {
      this.msg = msg;
    }
    if (meta) {
      this.meta = meta;
    }
  }
}
