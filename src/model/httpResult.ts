export type HttpResult =
  | {
      status: true;
      data: object;
    }
  | {
      status: false;
      message: string;
    };
