/**
 * @name AutoJoinVoiceChannel
 * @description Automatically joins a specific voice channel on a specific server when Discord starts.
 * @version 1.0.2
 * @author Sir_Coleslaw
 * @source https://github.com/SirColeslaw/AutoJoinVoiceChannel
 * @updateUrl https://github.com/SirColeslaw/AutoJoinVoiceChannel/raw/main/AutoJoinVoiceChannel.plugin.js
 */

module.exports = class AutoJoinVoiceChannel {
    start() {
        console.log("AutoJoinVoiceChannel started");

        // Add a delay to ensure Discord is fully loaded
        setTimeout(() => {
            this.joinVoiceChannel('YOUR_SERVER_ID', 'YOUR_CHANNEL_ID');
        }, 5000);  // 5 seconds delay
    }

    stop() {
        console.log("AutoJoinVoiceChannel stopped");
    }

    async joinVoiceChannel(guildId, channelId) {
        try {
            const voiceModule = BdApi.findModule(m => m.selectVoiceChannel);

            if (voiceModule && voiceModule.selectVoiceChannel) {
                console.log("Joining voice channel", channelId, "in server", guildId);
                voiceModule.selectVoiceChannel(channelId);
            } else {
                console.error("Failed to get voiceModule or selectVoiceChannel function");
            }
        } catch (error) {
            console.error("Error joining voice channel:", error);
        }
    }
}
