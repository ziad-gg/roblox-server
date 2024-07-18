const express = require('express');
const { default: axios } = require('axios');

const app = express();

app.use(express.json({ limit: '10MB' }));

const port = process.env.PORT || 3000;

app.get('/v1/groups/:id', async (req, res) => {
    const id = req.params.id;

    const response = await axios.get(`https://groups.roproxy.com/v1/groups/${id}`).catch(e => e.response);

    res.status(response.status).json({ data: response.data, status: response.status });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
