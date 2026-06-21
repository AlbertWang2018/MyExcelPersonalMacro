import telebot,requests,json,re,os
import threading
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from datetime import datetime,timedelta

BOT_TOKEN = os.environ.get("TG_BOT_TOKEN", "你的备用Token")
bot = telebot.TeleBot("BOT_TOKEN")

def push(s):
    text="当前SA电价： A$ "+str(s)
    id="-994605039"
    id1="576692594"
    bot.send_message(id, text)
    # bot.send_message(id1, text)
    
url="https://visualisations.aemo.com.au/aemo/apps/api/report/ELEC_NEM_SUMMARY"
a=datetime.now()

def getdata():
    res=requests.get(url).text
    resj=json.dumps(res)
    data=json.loads(json.loads(resj))
    price=round(data['ELEC_NEM_SUMMARY_PRICES'][2]['RRP']/1000,2)
    text="当前SA电价： A$ "+str(price)
    return text
    # a=datetime.now()+timedelta(hours=1.5)
    # if price>0.5 or (0<=a.minute<5 and a.hour%2==0):
        # print(price)
        # push(price)

def soc(volt):
    from scipy.interpolate import interp1d
    
    # 创建一维数据点
    x = [3372,3336,3334,3333,3332,3332,3331,3331,3322,3297,3293,3292,3292,3291,3288,3272,3266,3234,3209,3189,3128,3068,3010,2962,2886]
    y = [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5,4,3,2,1,0]
    
    # 创建插值函数
    f = interp1d(x, y, kind='linear')
    volt=float(volt)
    if volt<5:volt*=1000
    y1=f(volt)
    return str(round(y1*1,2))+'%'
    
def cap(volt1,volt2):
    from scipy.interpolate import interp1d
    
    # 创建一维数据点
    x = [3372,3336,3334,3333,3332,3332,3331,3331,3322,3297,3293,3292,3292,3291,3288,3272,3266,3234,3209,3189,3128,3068,3010,2962,2886]
    y = [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5,4,3,2,1,0]
    
    # 创建插值函数
    f = interp1d(x, y, kind='linear')
    volt1=float(volt1)    
    volt2=float(volt2)
    if volt1<5:volt1*=1000
    if volt2<5:volt2*=1000
    y1=f(volt1)/100
    y2=f(volt2)/100
    capdef=280*abs(y2-y1)
    return str(round(capdef,2))+'Ah'

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
	bot.reply_to(message, "Howdy, how are you doing?")

@bot.message_handler(commands=['a','price'])
def send_price(message):
    with open('./tglog.txt','a') as f:
        f.write(str(a)+'  '+getdata()+'\n')
    bot.reply_to(message, getdata())

@bot.message_handler(func=lambda message: True)
def echo_all(message):
    # print(message.text)
    # print(message.text.find(' '),message.text.find('/'),len(message.text))
    if message.text.find(' ')>-1 and message.text.find('/')>-1 and len(message.text)<20:
        a= message.text.split(' ')
        # print(a[1])
        if len(a)==2 and a[0]=='/soc' and (2.886<=float(a[1])<=3.372 or 2886<=float(a[1])<=3372):
            bot.reply_to(message, soc(float(a[1])))
        elif len(a)==3 and a[0]=='/cap' and (2.886<=float(a[1])<=3.372 or 2886<=float(a[1])<=3372):
            bot.reply_to(message, cap(float(a[1]),float(a[2])))
        else:
            bot.reply_to(message, "please input '/soc volt', volt is a value between 2886mv and 3372mv, 2.886-3.372 both OK. /cap volt1 volt2 can get delta capacity.")
    elif message.text=='/check':
        bot.reply_to(message, check())
    else:
    	bot.reply_to(message, "please input '/soc volt', volt is a value between 2886mv and 3372mv, 2.886-3.372 both OK. /cap volt1 volt2")

def run_fake_web_server():
    # Render 会动态分配一个 PORT 环境变量，如果没有就默认 10000
    import os
    port = int(os.environ.get("PORT", 10000))
    server_address = ('0.0.0.0', port)
    
    # 简单的 HTTP 服务器，假装自己是个网页应用
    httpd = TCPServer(server_address, SimpleHTTPRequestHandler)
    print(f"Fake Web Server running on port {port}...")
    httpd.serve_forever()

if __name__ == "__main__":
    print("Bot is starting...")
    
    # 1. 开启一个后台线程去跑假的网页服务，应付 Render 的检测
    web_thread = threading.Thread(target=run_fake_web_server, daemon=True)
    web_thread.start()
    
    # 2. 主线程继续死循环跑你的 Telegram Bot
    bot.infinity_polling()
