import { NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class AuthcheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers.authorization) next();
        else throw new UnauthorizedException();
        // else res.status(403).json({code: 403, message: 'Not Authorized'});
    }
}