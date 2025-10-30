import "dotenv/config";
import "reflect-metadata";
import cors from "cors";
import express, { type NextFunction, type Request, type Response } from "express";
import { container } from "@/core/ioc/container";
import { inject_media_dependencies } from "@/modules/media/ioc/inject";
import { InjectionKey } from "@/core/ioc/injection-keys";
import { MediaController } from "@/modules/media/interface/media.controller";
import { multer_middleware } from "@/modules/media/interface/multer-middleware";
import { AsyncResource } from "node:async_hooks";

const app = express();

inject_media_dependencies(container);

/**
 https://github.com/expressjs/multer/issues/814#issuecomment-1218998366
 */
// function ensureAsyncContext(middleware: any) {
//   return (req: Request, res: Response, next: NextFunction) =>
//     middleware(req, res, AsyncResource.bind(next));
// }

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "",
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.json());

const MediaControllerIoc = container.get<MediaController>(InjectionKey.MediaController);

app.post(
  "/media/create",
  multer_middleware.array("images", Number(process.env.MAX_FILE_LIMIT)),
  MediaControllerIoc.create.bind(MediaControllerIoc)
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
