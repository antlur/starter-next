import { BackstageClient } from "@antlur/backstage";
import config from "./config";

export const client = new BackstageClient(config);
