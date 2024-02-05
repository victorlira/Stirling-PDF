import "@stirling-pdf/shared-operations/src/i18next.config";

import express from "express";
const app = express();
const PORT = 8000;

// server-node: backend api
import api from "./routes/api/api-controller";
app.use("/api", api);

// serve
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
