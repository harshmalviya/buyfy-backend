export const sendPfpUrl = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const response = await fetch(`https://discord.com/api/v9/users/${userId}`, {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_KEY}`,
      },
    });
    const json = await response.json();
    const { id, username, avatar, banner, accent_color } = json;
    const pfpUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatar}.jpg?size=1024`;
    const returnObj = { id, username, avatar, banner, accent_color, pfpUrl };
    res.send({
      status: 200,
      returnObj,
    });
  } catch (error) {
    console.log(error)
    res.send({
      status: 500,
      message: "Some error occurred",
    });
  }
};
