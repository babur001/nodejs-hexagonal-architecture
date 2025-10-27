import type { MediaCreateDto } from "@/modules/media/application/dto/media.create.dto";
import type { MediaReponseDto } from "@/modules/media/application/dto/media.response.dto";
import { CreateMediaUseCase } from "@/modules/media/application/use-cases/create-media";
import { inject } from "inversify";

export class MediaController {
  constructor(
    @inject(CreateMediaUseCase) private createMediaUseCase: CreateMediaUseCase
  ) {}

  async create(dto: MediaCreateDto): Promise<MediaReponseDto[]> {
    const data = await this.createMediaUseCase.execute(dto);

    return [
      {
        id: "media_1",
        file_name: "1627384950_image.png",
        mime_type: "image/png",
        file_size: 204800,
        width: 1024,
        height: 768,
        created_at: new Date(),
        updated_at: new Date(),
        file_ext: "png",
        folder_id: null,
        url: "/media/1627384950_image.png",
      },
    ];
  }
}
