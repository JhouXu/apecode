import { join, resolve } from "node:path";
import fs from "fs-extra";
import Git from "simple-git";
// import { $fetch } from "ohmyfetch";

export const git = Git();

export const DOCS_URL = "https://chodocs.cn";

export const DIR_ROOT = resolve(__dirname, "..");
export const DIR_SRC = resolve(__dirname, "../docs");

export function replacer(code: string, value: string, key: string, insert: "head" | "tail" | "none" = "none") {
  const START = `<!--${key}_STARTS-->`;
  const END = `<!--${key}_ENDS-->`;
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, "im");

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`;

  if (!code.match(regex)) {
    if (insert === "none") return code;
    else if (insert === "head") return `${target}\n\n${code}`;
    else return `${code}\n\n${target}`;
  }

  return code.replace(regex, target);
}
