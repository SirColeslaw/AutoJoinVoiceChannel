# AutoJoinVoiceChannel

Automatically joins a specific voice channel on a specific server when Discord starts.

## Description

AutoJoinVoiceChannel is a BetterDiscord plugin that automatically joins a specific voice channel on a specific server when Discord starts. This can be useful for users who want to quickly join their favorite voice channel without having to manually navigate through Discord every time.

## Installation

1. Download the plugin from the [releases page](https://github.com/SirColeslaw/AutoJoinVoiceChannel/releases).
2. Move the downloaded file to your BetterDiscord plugins folder. You can find this folder by going to User Settings > Plugins > Open Plugins Folder in Discord.
3. Enable the plugin in the Plugins section of BetterDiscord.

## Configuration

To configure the plugin, you need to provide the IDs of the server and the voice channel you want to auto-join. Follow these steps to find and set the IDs:

### Finding Server and Channel IDs

1. **Enable Developer Mode:**
   - Open Discord and go to User Settings by clicking the gear icon at the bottom left of the screen.
   - Navigate to the "Advanced" section in the left sidebar.
   - Toggle on the "Developer Mode" switch.

2. **Get Server ID:**
   - Right-click on the server icon in the left sidebar.
   - Select "Copy ID" from the context menu.

3. **Get Channel ID:**
   - Navigate to the voice channel you want to auto-join.
   - Right-click on the voice channel name.
   - Select "Copy ID" from the context menu.

### Setting Server and Channel IDs

1. Open the `AutoJoinVoiceChannel.plugin.js` file with a text editor.
2. Locate the following lines:

   ```javascript
   this.joinVoiceChannel('YOUR_SERVER_ID', 'YOUR_CHANNEL_ID');
