import telebot,requests,json,re,os
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

def check():
    cookies = {
        'ASP.NET_SessionId': 'i1rzmscfuhqmindkd14rbyke',
        'VisaBookingType': 'AU',
        '.ASPXAUTH': '2671346197FF38C5DB556AD9572E0EADEE95CA74D1DC085235CF67006B0DAA50571CAEB383080531963EE8C9F30FF406ABE63D2055ACA08003E8F77FA39E62F5A8C445C93D91931126CFA8E793B47CC1C4E1D7D0CFA84D65D5E74D0BCC775B4CAA5BFDDF9C55469A19D5EFB32FF43A0E6A47B10E8D135949F55FDF35F1F0E7C1',
        'AWSALB': 'O9DMxt4BNtEXHMZgFF3uin+lYqWTCqE0g+Xcc2Rhosp0GL7ISByXacEhtJL+DTzqvLyLKTGXWnLFL8XDWvD6EMqNQfDdsQpA0YRE6bzMtOAt7qvGNCk7WbceKHuF',
        'AWSALBCORS': 'O9DMxt4BNtEXHMZgFF3uin+lYqWTCqE0g+Xcc2Rhosp0GL7ISByXacEhtJL+DTzqvLyLKTGXWnLFL8XDWvD6EMqNQfDdsQpA0YRE6bzMtOAt7qvGNCk7WbceKHuF',
        'ADRUM': 's=1724327853775&r=https%3A%2F%2Fbmvs.onlineappointmentscheduling.net.au%2Foasis%2FLocation.aspx%3F0',
    }

    headers = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-AU;q=0.6',
        'cache-control': 'max-age=0',
        'content-type': 'application/x-www-form-urlencoded',
        # 'cookie': 'ASP.NET_SessionId=i1rzmscfuhqmindkd14rbyke; VisaBookingType=AU; .ASPXAUTH=2671346197FF38C5DB556AD9572E0EADEE95CA74D1DC085235CF67006B0DAA50571CAEB383080531963EE8C9F30FF406ABE63D2055ACA08003E8F77FA39E62F5A8C445C93D91931126CFA8E793B47CC1C4E1D7D0CFA84D65D5E74D0BCC775B4CAA5BFDDF9C55469A19D5EFB32FF43A0E6A47B10E8D135949F55FDF35F1F0E7C1; AWSALB=O9DMxt4BNtEXHMZgFF3uin+lYqWTCqE0g+Xcc2Rhosp0GL7ISByXacEhtJL+DTzqvLyLKTGXWnLFL8XDWvD6EMqNQfDdsQpA0YRE6bzMtOAt7qvGNCk7WbceKHuF; AWSALBCORS=O9DMxt4BNtEXHMZgFF3uin+lYqWTCqE0g+Xcc2Rhosp0GL7ISByXacEhtJL+DTzqvLyLKTGXWnLFL8XDWvD6EMqNQfDdsQpA0YRE6bzMtOAt7qvGNCk7WbceKHuF; ADRUM=s=1724327853775&r=https%3A%2F%2Fbmvs.onlineappointmentscheduling.net.au%2Foasis%2FLocation.aspx%3F0',
        'origin': 'https://bmvs.onlineappointmentscheduling.net.au',
        'priority': 'u=0, i',
        'referer': 'https://bmvs.onlineappointmentscheduling.net.au/oasis/Location.aspx',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
    }

    data = {
        '__EVENTTARGET': '',
        '__EVENTARGUMENT': '',
        '__VIEWSTATE': '/wEPDwUKMjEwNjc2OTI3MQ8WAh4MR29vZ2xlQXBpVXJsBVNodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeURqcUFXQ21idGxGeEx0R0VoY0RmU0FYV1BreERZcjlVVRYCZg9kFgICAw9kFgJmD2QWBgIBD2QWBAIBDxYCHgdWaXNpYmxlaGQCAg8PFgIeBFRleHQFF1N0ZXA6IENob29zZSBhIGxvY2F0aW9uZGQCAw8PFgIeEERpc3RhbmNlU2VhcmNoZWQFAzIwMGRkAgUPFgQeBWNsYXNzBRdibHVlLWJ1dHRvbiBncmV5LWJ1dHRvbh4IZGlzYWJsZWQFCGRpc2FibGVkZGRVfiDEU+mYNtamNuXJUYppbwUsfSQA6aRCmPtWyPXAXA==',
        '__VIEWSTATEGENERATOR': '08CE2E6F',
        '__EVENTVALIDATION': '/wEdABC8hCdSGzTiWDLopy7lE37EYbXED9+qOCVpnPsW1NfQM02oIekcKFYSGcuyWU5owvaj5PCS+9EoAtWOeDrA22ZxuRUWmFEFqwyIbqEA7Ju+sQsSpVtmd74LZfecBnrP/xRqePcz+HKYrbHRN6dckaeqZNBJq8K39m1cdBixXRDSBj4/MXdUic8EbDWQ/cYiBFbcAJzBTYyXOXbgzVPsDg1jLayys7d9xUAlofJw5EiWcur1Af1xEkA/m3hofu9irOAUSTzjIYa+VsFvCQP1VL/tbGufEMU5QrhvXXSVUykHHFFGs1zvEoPu1+SsaQT1XzzWVNhSvKNLKfqKNvafCHorrV3VgscR1Av5IGyMYoceHjvgdXi5PZsSmBRvT3wIMJg=',
        'ctl00$ContentPlaceHolder1$SelectLocation1$txtSuburb': 'Adelaide',
        'ctl00$ContentPlaceHolder1$SelectLocation1$ddlState': 'SA',
        'ctl00$ContentPlaceHolder1$SelectLocation1$btnSearch': 'search',
        'ctl00$ContentPlaceHolder1$SelectLocation1$hdnSearchCoord': '-34.928,138.601',
        'ctl00$ContentPlaceHolder1$hdnLocationID': '',
    }

    r = requests.post(
        'https://bmvs.onlineappointmentscheduling.net.au/oasis/Location.aspx',
        cookies=cookies,
        headers=headers,
        data=data,
    )
    temp=re.findall(r'(?<=<span>)(.*?)(?=</span>)',r.text)
    if len(temp[2])>20:
        res=' '.join(str(temp[2]).replace('<br />',' ').split(' ')[1:])
        rq=res.split(' ')[0]
        t=datetime.now()
        d2=(t+timedelta(days=15))
        d1 = datetime.strptime(rq, '%d/%m/%Y')
        if d1<d2:
            return 'OK '+ res
        else:
            return 'Waiting '+ res
    else:
        return 'Not Available'

bot.infinity_polling()