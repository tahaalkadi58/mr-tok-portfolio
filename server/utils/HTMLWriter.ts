import { Response } from "express";
import FileReader from "./FIleReader.js";
const HTMLWriter = async function (
  filename: string,
  spliter: string,
  callback: Function,
  res: Response,
) {
  try {
    const [head, tail] = (await FileReader(filename)).split(spliter);
    res.write(head);
    callback(res);
    res.write(tail);
  } catch (err) {
    console.log(err);
  }
};
export default HTMLWriter;
