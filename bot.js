const TelegramApi = require('node-telegram-bot-api')

const Token = ''

const Bot = new TelegramApi(Token, {polling: true})
//список комманд
Bot.setMyCommands([
    {command: '/start', description: '))'}
])
//ещё один, для UnknownCommandHandler`a
const CommandsArray = ['/start']


const Main = () => 
{
    Bot.on('message',  async Message => 
    {
        const Text = Message.text
        const ChatId = Message.chat.id

        async function AnswerWithPicture(ReceivedMessage, Picture)
        {
            if (Text === ReceivedMessage)
            {
                await Bot.sendPhoto(ChatId, Picture)
            }
        }

        async function AnswerWithSticker(ReceivedMessage, StickerURL)
        {
            if (Text === ReceivedMessage)
            {
                await Bot.sendSticker(ChatId, StickerURL)
            }
        }

        async function AnswerWithText(ReceivedMessage, MessageToSend )
        {
            if (Text === ReceivedMessage)
            {
                await Bot.sendMessage(ChatId, MessageToSend)
            }   
        }

        async function UnknownCommandHandler(ReceivedMessage)
        {
            try
            {
                if (CommandsArray.includes(ReceivedMessage) === false)
                {
                    throw new UnknownCommandError()
                }
            }
            catch (UnknownCommandError)
            {
                Bot.sendMessage(ChatId,'Нет такой команды')
            }
        }

        UnknownCommandHandler(Text)
    }) 
}
Main()


