import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const rl = new readline.Interface({ input, output });
