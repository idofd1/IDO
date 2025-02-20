# Discord Music Bot

A simple Discord bot with music-related commands.

---

## Setup Instructions

1. Install Node.js from [https://nodejs.org/](https://nodejs.org/) (version 16.9.0 or higher).

2. Clone this repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a new Discord Application:

   - Go to [Discord Developer Portal](https://discord.com/developers/applications).
   - Click **"New Application"**.
   - Give it a name.
   - Go to the **"Bot"** section.
   - Click **"Add Bot"**.
   - Copy the bot token.

5. Configure the bot:

   - Edit `config.json`.
   - Replace `YOUR_BOT_TOKEN_HERE` with your bot token.
   - In `deploy-commands.js`, replace `YOUR_CLIENT_ID_HERE` with your application's client ID.

6. Deploy slash commands:

   ```bash
   npm run deploy
   ```

7. Start the bot:

   ```bash
   npm start
   ```

---

## Available Commands

- `/top10` - Shows top 10 songs.
- `/playlist` - Shows your playlist.

---

## Adding the Bot to Your Server

1. Go to your application in the [Discord Developer Portal](https://discord.com/developers/applications).

2. Navigate to **OAuth2 > URL Generator**.

3. Select scopes: `bot` and `applications.commands`.

4. Select bot permissions: `Send Messages`, `Read Messages/View Channels`.

5. Copy the generated URL and open it in your browser.

6. Select your server and authorize the bot.

---

## Note

This is a basic implementation. You'll need to add your own logic for handling music playback, playlists, etc.
