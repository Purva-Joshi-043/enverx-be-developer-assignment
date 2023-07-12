import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ValidationError } from "class-validator";

interface Validatable {
  [key: string]: any;
}

export const validationMiddleware = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dtoInstance = plainToClass(dtoClass, req.body);
      const errors: ValidationError[] = await validate(dtoInstance);

      if (errors.length > 0) {
        const validationErrors = errors.map((error) => {
          const { property, constraints } = error;
          return {
            property,
            constraints,
          };
        });
        return res.status(400).json({ errors: validationErrors });
      }

      req.body = dtoInstance;
      next();
    } catch (error) {
      console.error("Error in validationMiddleware:", error);
      res.status(500).json({ error: "Server error" });
    }
  };
};
