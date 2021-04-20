import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private CreateUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.CreateUserUseCase.execute({
        name,
        email,
        password
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}