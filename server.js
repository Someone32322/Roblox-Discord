const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080; // Use port 8080 or another port as required

app.use(express.json());

app.post('/send-message', async (req, res) => {
    const { embeds } = req.body;

    if (!embeds) {
        return res.status(400).send('Invalid request');
    }

    try {
        const response = await axios.post('https://discord.com/api/v10/channels/1273600492676841482/messages', {
            embeds: embeds
        }, {
            headers: {
                'Authorization': 'Bot MTI3MzYxMDgzNzA4MDQwODIyNQ.GQlMU1.b2fzoJyWBGZE9FoSFFp8Gr3d7FpAapHcPnWIj8', // Replace with your actual bot token
                'Content-Type': 'application/json'
            }
        });
        console.log('Response from Discord:', response.status);
        res.status(200).send('Message sent');
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
        res.status(500).send('Error sending message');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
