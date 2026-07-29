import { createReadStream } from "fs";

export function creatFileStream(filePath = "") {
  try {
    if (filePath === "") {
      return {
        success: false,
        message: "Please porvide file path or type.",
        data: null,
      };
    }

    return createReadStream(filePath, {
      encoding: "utf-8",
      highWaterMark: 64 * 1024,
    });
  } catch (error) {
    console.error("Error in reading file", error);
  }
}
