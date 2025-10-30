import { InjectionKey } from "@/core/ioc/injection-keys";
import type { CreateMediaUseCase } from "@/modules/media/application/use-cases/create-media.usecase";
import { inject, injectable } from "inversify";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { MediaResponseDto } from "@/modules/media/application/dto/media-create.response";

@injectable()
export class MediaController {
  constructor(
    @inject(InjectionKey.CreateMediaUseCase) public createMediaUseCase: CreateMediaUseCase
  ) {}

  public async create(_req: Request, _res: Response) {
    const files = _req.files as Express.Multer.File[];
    const uploaded_files: MediaResponseDto[] = await this.createMediaUseCase.execute(
      files
    );

    return _res.status(StatusCodes.CREATED).json({
      data: uploaded_files,
      success: true,
    });
  }
}
