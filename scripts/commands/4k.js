module.exports.config = {
  name: "bn",
  version: "1.0.1",
  permssion: 0,
  credits: "Islamick Chat",
  prefix: false,
  description: "Text translation",
  category: "media",
  usages: "[en/ko/ja/vi] [Text]",
  cooldowns: 5,
  dependencies: {
    "request":  ""
  }
};

  onStart: async  ({ message,event, api }) => {
   // let imageUrl;

    if (event.reply_to_message) {
      const botToken = "7533328541:AAHXn1DRTcV6nYFtkz0Lr0NvLpbTFiSWqcM"; 
      const fileId = event.reply_to_message.video.file_id;

      const response = await axios.get(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`);
      const filePath = response.data.result.file_path;
      const imageUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;

    try {
      const url = await tinyurl.shorten(imageUrl);
      const k = await a.get(`${await baseApiUrl()}/4k?imageUrl=${url}`);

      message.reply("✅ | Please wait...");

      const resultUrl = k.data.dipto;

      message.stream({ url: (await a.get(resultUrl,{responseType: 'stream'})).data,caption: "✅ | Image Upscaled." });
    } catch (error) {
      message.reply("❌ | Error: " + error.message);
    }
  }
  }
};
