const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/send-message', async (req, res) => {
    const { embeds } = req.body;

    try {
        await axios.post('https://discord.com/api/v10/channels/1273600492676841482/messages', {
            embeds: embeds
        }, {
            headers: {
                'Authorization': 'Bot YOUR_BOT_TOKEN', // Replace with your bot token
                'Content-Type': 'application/json'
            }
        });
        res.status(200).send('Message sent');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Error sending message');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
