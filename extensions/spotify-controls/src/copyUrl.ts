import { showToast, ToastStyle } from "@raycast/api";
import { runAppleScript } from "run-applescript";
import { buildScriptEnsuringSpotifyIsRunning } from "./utils";

export default async () => {
  const script = buildScriptEnsuringSpotifyIsRunning(`
    set spotifyURL to spotify url of the current track
    
    set AppleScript's text item delimiters to ":"
    set idPart to third text item of spotifyURL

    set the clipboard to ("https://open.spotify.com/track/" & idPart)
  `);

  try {
    await runAppleScript(script);
    await showToast(ToastStyle.Success, "Copied URL to clipboard");
  } catch (_) {
    await showToast(ToastStyle.Failure, "Failed copying URL");
  }
};
