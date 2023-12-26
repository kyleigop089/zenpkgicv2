const axios = require("axios");

module.exports = {
 config: {
 name: "imagine3",
 aliases: ['img3','imgne3'],
 version: "2.0",
 author: "Samir Thakuri",
 countDown: 5,
 role: 0,
 shortDescription: "Generate Images.",
 longDescription: "Featuring Image Generator AI with Prompt Style and Ratio.",
 category: "AI-IMAGE",
 guide: {
 en: "{pn} <prompt> | <style> | <ratio>\vailable Ratios: 1:1, 16:9, 9:16\ere's Available Style:\]. IMAGINE_V4_Beta\]. V4_CREATIVE\]. IMAGINE_V3\]. IMAGINE_V1\]. PORTRAIT\]. REALISTIC\]. ANIME\]. ANIME_V2\]. COSMIC\0]. COSMIC_V2\1]. MARBLE\2]. MINECRAFT\3]. DISNEY\4]. MACRO_PHOTOGRAPHY\5]. GTA\6]. STUDIO_GHIBLI\7]. DYSTOPIAN\8]. STAINED_GLASS\9]. PRODUCT_PHOTOGRAPHY\0]. PSYCHEDELIC\1]. SURREALISM\2]. GRAFFITI\3]. GHOTIC\4]. RAINBOW\5]. AVATAR\6]. PALETTE_KNIFE\7]. CANDYLAND\8]. CLAYMATION\9]. EUPHORIC\0]. MEDIEVAL\1]. ORIGAMI\2]. POP_ART\3]. RENAISSANCE\4]. FANTASY\5]. EXTRA_TERRESTRIAL\6]. WOOLITIZE\7]. NEO_FAUVISM\8]. AMAZONIAN\9]. SHAMROCK_FANTASY\0]. ABSTRACT_VIBRANT\1]. NEON\2]. CUBISM\3]. BAUHAUS\4]. ROCOCO\5]. HAUNTED\6]. LOGO\7]. WATERBENDER\8]. FIREBENDER\9]. KAWAII_CHIBI\0]. FORESTPUNK\1]. ELVEN\2]. SAMURAI\3]. AQUASTIC\4]. VIBRAN_VIKING\5]. VIBRAN_VIKING\6]. ABSTRACT_CITYSCAPE\7]. ILLUSTRATION\8]. PAINTING\9]. ICON\0]. RENDER\1]. COLORING_BOOK\2]. PAPERCUT_STYLE\3]. KNOLLING_CASE\4]. PIXEL_ART\5]. INTERIOR\6]. STICKER\7]. CYBERPUNK\8]. LANDSCAPE\9]. ARCHITECTURE\0]. GLASS_ART\1]. SCATTER\2]. RETRO\3]. POSTER_ART\4]. INK\5]. JAPANESE_ART\6]. SALVADOR_DALI\7]. VAN_GOGH\8]. STEAMPUNK\9]. RETROWAVE\0]. POLY_ART\1]. VIBRANT\2]. MYSTICAL\3]. CINEMATIC_RENDER\4]. FUTURISTIC\5]. POLAROID\6]. PICASO\7]. SKETCH\8]. COMIC_BOOK"
}
 },
 onStart: async function ({ api, event, args, message }) {
 try {
 const [prompt, style, ratio] = args.join(' ').split('|').map(part => part.trim());

 if (!prompt) {
 return message.reply("⚠| Invalid input. Please provide prompt.");
 }
 let apiUrl = `https://api.samirthakuri.repl.co/api/generatev3?prompt=${encodeURIComponent(prompt)}`;

 if (style) {
 apiUrl += `&style=${encodeURIComponent(style)}`;
 }

 if (ratio) {
 apiUrl += `&ratio=${encodeURIComponent(ratio)}`;
 }

 const creatingMessage = await message.reply('⏳| Generating Image...\ease Wait A Moment.');

 const form = {
 body: `Here's your imagination 🖼.`
 };

 form.attachment = [];
 form.attachment[0] = await global.utils.getStreamFromURL(apiUrl);
 api.unsendMessage(creatingMessage.messageID);

 message.reply(form);
 } catch (error) {
 console.error(error);
 message.reply("An error occurred while fetching response");
 }
 }
};