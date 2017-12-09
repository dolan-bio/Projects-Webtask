import "babel-polyfill";
import * as mongoose from "mongoose";

import { Project } from "./project-model";

module.exports = async (context, cb) => {
    mongoose.connect(context.secrets.MONGODB_URI);

    console.log("Getting skills");
    const data = await Project.find();

    cb(null, data);
};
