import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// HTTP verbs
// GET - get some data from backend
// PUT - update or modify or mutate some data
// POST - send some data to create a new blog
// DELETE - send some data to delete
// connections and listeners
const PORT = process.env.PORT || 4000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open & Connected to Database"));
})
    .catch(err => console.log(err));
// run backend - npm run dev
//# sourceMappingURL=index.js.map