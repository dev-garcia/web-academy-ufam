import { Request, Response } from "express";
declare class HomeController {
    home(req: Request, res: Response): Promise<void>;
}
export { HomeController };
