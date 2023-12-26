module.exports = {
 config: {
 name: "imagine4",
 aliases: ["img4", "imgne4"],
 version: "1.0",
 author: "JARiF",
 countDown: 5,
 role: 0,
 longDescription: {
 vi: "",
 en: "get images from text.",
 },
 category: "AI-IMAGE",
 guide: {
 vi: "",
 en:
 "Type -imagine or -t2i with your prompts | (number which model do you want)\Here are the Supported models:\1: IMAGINE_V4_Beta\2: V4_CREATIVE\3: IMAGINE_V3\4: IMAGINE_V1\5: PORTRAIT\6: REALISTIC\7: ANIME\8: ANIME_V2\9: COSMIC\10: COMIC_V2\11: MARBLE\12: MINECRAFT\13: DISNEY\14: MACRO_PHOTOGRAPHY\15: GTA\16: STUDIO_GHIBLI\17: DYSTOPIAN\18: STAINED_GLASS\19: PRODUCT_PHOTOGRAPHY\20: PSYCHEDELIC\21: SURREALISM\22: GRAFFITI\23: GHOTIC\24: RAINBOW\25: AVATAR\26: PALETTE_KNIFE\27: CANDYLAND\28: CLAYMATION\29: EUPHORIC\30: ORIGAMI\31: POP_ART\32: RENAISSANCE\33: FANTASY\34: EXTRA_TERRESTRIAL\35: WOOLITIZE\36: NEO_FAUVISM\37: AMAZONIAN\38: SHAMROCK_FANTASY\39: ABSTRACT_VIBRANT\40: NEON\41: CUBISM\42: ROCOCO\43: LOGO\44: HAUNTED\45: KAWAII_CHIBI\46: FIREBENDER\47: WATERBENDER\48: FORESTPUNK\49: ELVEN\50: SAMURAI\51: AQUASTIC\52: VIBRAN_VIKING\53: ABSTRACT_CITYSCAPE\54: FIREBENDER\55: ILLUSTRATION\56: PAINTING\57: ICON\58: RENDER\59: COLORING_BOOK\60: PAPERCUT_STYLE\61: KNOLLING_CASE\62: ARCHITECTURE\63: INTERIOR\64: CYBERPUNK\67: LANDSCAPESTICKER\68: GLASS_ART\69: RETRO\70: POSTER_ART\71: INK\72: JAPANESE_ART\74: VAN_GOGH\75: STEAMPUNK\76: RETROWAVE\77: POLY_ART\78: VIBRANT\79: MYSTICAL\80: CINEMATIC_RENDER\81: FUTURISTIC\82: POLAROID\84: PICASO\85: SKETCH\86: COMIC_BOOK\87: DREAM_SHAPER\88: IMAGINE_V41\89: REV_ANIMATED\90: TOON_YOU\91: UR5\92: EPIC_REALISM\93: MEINA_MIX\94: RENDER3D\95: DELIBERATE\96: MAJIK_MIX\97: DISNEY\98: ORANGE_MIX\99: LYRIEL\100: RPG\\Supported Ratio's:\1. 1:1\2. 9:16\3. 16:9",
 },
 },

 onStart: async function ({ api, args, message, event }) {
 try {
 const text = args.join(" ");
 if (!text) {
 return message.reply("Please provide a prompt.");
 }

 let prompt, model, ratio;
 if (text.includes("|")) {
 const [promptText, modelText, ratioText] = text
 .split("|")
 .map((str) => str.trim());
 prompt = promptText;
 model = modelText;
 ratio = ratioText;
 } else {
 prompt = text;
 model = "3";
 ratio = "1";
 }
 api.setMessageReaction("⏳", event.messageID, () => {}, true);
 const waitingMessage = await message.reply("✅| Creating your Imagination...");

 const API = `https://midjourney.jarifemma.repl.co/generate?prompt=${encodeURIComponent(
 prompt
 )}&model=${model}&ratio=${ratio}`;
 const imageStream = await global.utils.getStreamFromURL(API);

 await message.reply({
 attachment: imageStream,
 });
 api.setMessageReaction("✅", event.messageID, () => {}, true);
 await api.unsendMessage(waitingMessage.messageID);
 } catch (error) {
 console.log(error);
 message.reply("Failed.").then(() => {
 message.delete(); 
 });
 }
 },
};