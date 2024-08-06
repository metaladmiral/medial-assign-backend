import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";
import { put } from "@vercel/blob";

function genRandFileName(originalFilename: String, fileExtension: String) {
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const editedFilename = uniqueSuffix + fileExtension;
  return editedFilename;
}

let fileUploadMiddleware: Function;

if (process.env.BLOB_READ_WRITE_TOKEN === undefined) {
  const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
      const randFileName = genRandFileName(
        file.originalname,
        path.extname(file.originalname)
      );
      cb(null, randFileName);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const filetypes = /jpeg|jpg|png/;
      const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimetype = filetypes.test(file.mimetype);

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        return cb(null, false);
      }
    },
  });

  fileUploadMiddleware = () => {
    return function (req: Request, res: Response, next: NextFunction) {
      upload.single("img")(req, res, function (err) {
        if (req.file === undefined) {
          return next();
        }
        if (err) {
          return res.status(500).send("Error in uploading file ");
        }

        const file = req.file;
        if (!file) {
          return res
            .status(500)
            .json({ success: "false", msg: "File Not Uploaded!" });
        }

        const filesize: number = file.size;
        const MAX_UPLOADEDFILE_SIZE: number =
          parseInt(process.env.MAX_UPLOADEDFILE_SIZE || "") || 4200000;

        if (filesize > MAX_UPLOADEDFILE_SIZE) {
          return res.status(403).json({
            success: "false",
            msg: "File size cannot be more than 4.2 MB when working with Vercel Env!",
          });
        }

        req.body.img = file.filename;

        next();
      });
    };
  };
} else {
  const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: function (req, file, cb) {
      const filetypes = /jpeg|jpg|png/;
      const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimetype = filetypes.test(file.mimetype);

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        return cb(null, false);
      }
    },
  });
  fileUploadMiddleware = function () {
    return async function (req: Request, res: Response, next: NextFunction) {
      upload.single("file")(req, res, async function (err: any) {
        if (err) {
          return res.status(500).send("err in uploading file ");
        }

        const file = req.file;
        if (!file) {
          return res
            .status(500)
            .json({ success: "false", msg: "File Not Uploaded!" });
        }

        const filesize: number = file.size;
        const MAX_UPLOADEDFILE_SIZE: number =
          parseInt(process.env.MAX_UPLOADEDFILE_SIZE || "") || 4200000;

        if (filesize > MAX_UPLOADEDFILE_SIZE) {
          return res.status(403).json({
            success: "false",
            msg: "File size cannot be more than 4.2 MB when working with Vercel Env!",
          });
        }

        const randFileName = genRandFileName(
          file.originalname,
          path.extname(file.originalname)
        );
        const { url } = await put("uploads/" + randFileName, file.buffer, {
          access: "public",
        });
        req.body.file = url;

        next();
      });
    };
  };
}

export default fileUploadMiddleware;
