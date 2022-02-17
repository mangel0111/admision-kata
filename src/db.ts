import * as mongoose from "mongoose";

export const connectionString: string = "mongodb://127.0.0.1:27017/admision-kata";

export const initDB = (): void => {
  mongoose.connect(connectionString);
  mongoose.set("debug", true);
  const dbConnection: mongoose.Connection = mongoose.connection;
  dbConnection.on("error", console.error.bind(console, "connection error:"));
  dbConnection.once("open", function () {
    console.log("Database connected!");
  });
  mongoose.connection.on(
    "disconnected",
    console.log.bind(console, "Database Disconnected:")
  );
};
