import { Request, Response } from "express";

class IndexController{
    public index(req: Request, resp: Response) {
        resp.send('Hello');
    }
}

export const indexController = new IndexController();