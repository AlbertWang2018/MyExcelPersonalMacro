// ==UserScript==
// @name    AC-baidu:重定向优化百度搜狗谷歌必应搜索_favicon_双列
// @name:en    AC-baidu:google_sogou_bing_RedirectRemove_favicon_adaway_TwoLine
// @name:zh    AC-baidu:重定向优化百度搜狗谷歌必应搜索_favicon_双列
// @name:zh-CN  AC-baidu:重定向优化百度搜狗谷歌必应搜索_favicon_双列
// @name:ja    AC-baidu:重定向最適化Baiduの搜狗のGoogleのBing検索結果のリダイレクト除去+favicon
// @description  1.繞過百度、搜狗、谷歌、好搜搜索結果中的自己的跳轉鏈接，直接訪問原始網頁-反正都能看懂 2.新增自定义网站拦截功能 3添加Favicon显示 4.页面CSS 5.添加计数 6.开关选择以上功能 7.自动翻页功能
// @description:en  1.bypass the redirect link at baidu\sogou\google\haosou; 2.remove ads at baidu; 3.add Favicon for each website; 4.render your own style; 5.counter; 6.Switch to handle all 7.Auto Pager
// @description:ja  1.迂回Baidu、Sogou、Google、Haosou検索検索結果の中の自分の遷移リンク; 2.Baiduの余分な広告を取り除く; 3.コメントを追加; 4.ページのカスタムCSP; 5.カウントを追加; 6.スイッチは以上の機能を選択します; 7.自動ページめくり.
// @icon    https://img.tujidu.com/image/5e7ba0d6b0062.jpg
// @author    AC
// @license    GPL-3.0-only
// @create    2015-11-25
// @run-at    document-start
// @version    24.7
// @connect    www.baidu.com
// @include    *://ipv6.baidu.com/*
// @include    *://www.baidu.com/*
// @include    *://www1.baidu.com/*
// @include    *://m.baidu.com/*
// @include    *://xueshu.baidu.com/s*
// @include    *://www.so.com/s?*
// @include    *://*.bing.com/*
// @include    *://encrypted.google.*/search*
// @include    *://*.google*/search*
// @include    *://*.google*/webhp*
// @include    *://*.zhihu.com/*
// @include    *://*duckduckgo.com/*
// @include    *://*.dogedoge.com/*
// @exclude    *://*.google*/sorry*
// @namespace  1353464539@qq.com
// @supportURL  https://ac.tujidu.com/
// @home-url  https://greasyfork.org/zh-TW/scripts/14178
// @home-url2  https://github.com/langren1353/GM_script
// @homepageURL  https://greasyfork.org/zh-TW/scripts/14178
// @copyright  2015-2020, AC
// @lastmodified  2020-08-06
// @feedback-url  https://ac.tujidu.com
// @note    2020.08-06-V24.07 修复保存无效的问题；修复百度在单列居中的时候错位的问题
// @note    2020.08-05-V24.06 修复自定义偶尔打不开的问题；修复定时器可能会造成的失效的问题；修复当存在多个脚本可能造成的冲突问题
// @note    2020.08-03-V24.05 更新修复护眼模式的问题；修复扩展上偶尔失效的问题；旧Edge似乎经常有保存不生效的问题，测试不是我的原因
// @note    2020.08-02-V24.04 动态样式切换，多列效果一键切换，无需刷新 修复各种样式问题 修复必应翻页问题 测试兼容GM和VM.彻底不支持搜狗搜索--别问为什么，我还想多活几年
// @note    2020.07-27-V24.2&3 更换Vue为75团的地址 修复百度的lite模式切换无效的问题
// @note    2020.07-27-V24.01 更新支持Linux下的Firefox emm修复上次提交过于着急导致的样式未提交 更新支持DogeDoge多吉搜索-但不处理重定向
// @note    2020.07-26-V24.00 部分内容更换为Vue初始化，减少一定的资源占用 && 新增DuckGoGo的样式效果 - 考虑到DuckGoGo的特性，不对其进行广告过滤
// @note    2020.07-09-V23.33 修复bing的顶部切换错位的问题；增加ww1.baidu.com域；修复各种样式(百度、谷歌、好搜、必应)错位的问题
// @note    2020.04-24-V23.32 版本倒退：安全起见：默认关闭搜狗的自定义域名拦截功能和重定向功能-以后考虑更换方式；默认不开启重定向功能、默认不开启广告拦截功能；更新部分说明内容；同时也对部分支持不到位的，兼容不好的效果向大家说一声抱歉，之后我会更加努力让搜索结果更加方便查看和使用
// @note    2020.03-27-V23.31 修复google由于页面结构更新导致的block功能失效的问题，同时修复谷歌护眼模式也失效的问题。新增翻页的按钮事件，新增使用在线config，避免由于页面结构改动又需要重新提交脚本更新
// @note    2020.03-26-V23.30 小改代码with GoogleLOGO && 修复在inject极速模式下的小问题 && 修复各种样式问题 && 自定义样式开启动态模式 && 新增自动翻页功能-妈妈再也不用担心我翻页问题了-[推荐更新]
// @note    2019.12-16-V23.29 自定义英文和中文的显示效果 && 修复上个版本导致的block按钮丢失的问题 && 修复部分百度内容无法拦截的情况
// @note    2019.12-15-V23.28 由于域名备案丢失了，只能换一个 && 修复自己认为的谷歌favicon已存在的问题，实际上谷歌favicon并没有显示
// @note    2019.11-28-V23.27 修复上次更新导致的某些模式下window对象无法获取导致的异常进而导致的脚本无法运行的bug & 优化百度样式内容和谷歌单列的偏右的情况以及必应中英文的偏移位置 修复屏蔽功能失效的bug
// @note    2019.10-05-V23.25 修复谷歌样式、必应样式、百度的部分样式问题.修复屏蔽模式在chrome内核上的小bug 新增自动全英文模式 修复被翻译导致的bug
// @note    2019.09-13-V23.24 修复谷歌由于页面改动导致的插入之后的样式变化 & 修复上次更新导致的重定向失效的问题
// @note    2019.09-12-V23.23 紧急修复谷歌页面的bug & 增加时间判断是否重置最新的自定样式 & 修复整体页面的内存占用以及采用RAF来替代setInterval & 优化拦截列表并修复列表数据过多的删除失败的问题 & 新增支持通配符拦截模式 & 全部使用处理结果后的顺序
// @note    2019.08-09-V23.22 1.移除手机百度的广告内容 2.更换数据来源地址为ibaidu.ntaow.com降低服务器负载 3.变更:页面加载不载入iframe，点击显示后载入iframe 4.未启用自定义样式时间过长会更新最新的样式表 5.修复各大搜索的样式问题-侧移+背景透明 6.修复edge首页的问题 7.block屏蔽之后可以直接取消了 8.采用错误页支持后续的google的iframe嵌入
// @note    2019.06.16-V23.21 修复在屏蔽列表中加入异常数据导致的部分数据异常，同时还无法移除的bug && 修改Baidu学术的生效页面，避免导致其他学术页面的显示出问题 && 修复在缩放150%的情况下搜索框位置异常的问题
// @note    2019.06.15-V23.20 尽量修改在adguard上的部分兼容问题--如果有问题记得叫我
// @note    2019.06.05-V23.19 修复由于去广告其他插件导致的本脚本异常的问题 修复必应上的样式部分异常问题 修复图标的地址异常问题
// @note    2019.05.06-V23.18 修复Baidu学术的异常，上次修改了，但是代码没有生效 && 新增BaiduLite的样式效果-from yiclear _ pan_cao && 优化页面显示效果，加快样式的载入速度 && 根据申杰老司机的推荐修改了许多残留的bug并且优化了页面的数据提示
// @note    2019.05.05-V23.17 修复Baidu首页的图标异常的问题
// @note    2019.04.26-V23.15 修复护眼色调节；新增不显示lock按钮选项；新增谷歌伪装百度；修复谷歌和百度页面的搜索样式；修复百度学术页面异常
// @note    2019.03.30-V23.14 更新一下说明文档 && 添加一个github的跳转按钮 && 新增背景色
// @note    2019.03.28-V23.13 更新-移除部分异常的百度白屏问题.新域名baidu.mx并不是百度旗下的地址，所以跳过。顺便刷一个版本，修复谷歌的recapture的问题，感谢老司机“breath365”
// @note    2019.02.16-V23.12 修复上次更新导致的一堆bug & 更换资源。。。腾讯CDN真的不够你们用，还是用百度的免费cdn吧
// @note    2019.02.15-V23.11 修复和Google Search Extra Button的兼容问题。修复地址有时候不能访问的问题。修复旧ff上的forEach和innerText不能用的问题。删除部分旧日志
// @note    2019.02.14-V23.10 安静点，我有女朋了i_i。& 修复百度图片失效的问题
// @note    2019.02.13-V23.09 提供选项-直接删除已屏蔽的内容，避免看到一些垃圾无用信息；修复残留bug在单列时相关搜索宽度异常；优化百度图标为透明图标
// @note    2019.01.29-V23.08 修复从首页进入的导致的block功能失效的问题；修复移动预测按钮失效的问题；新增并修复百度手机版的兼容问题-支持手机版重定向；新增原始地址展示，减少百度更新导致的看不到地址的问题；优化拦截列表的展示和刷新的问题
// @note    2019.01.25-V23.07 修复Favion加载失败的问题-这下就可以自定义favicon了，以前遗留了很久的bug了 && 移除部分LOG减小代码
// @note    2019.01.25-V23.06 修复由于代码优化，导致的Huyan功能开启后脚本失效的问题
// @note    2019.01.25-V23.05 假装大家没发现bug，赶紧更新搜狗页面的bug
// @note    2019.01.25-V23.03 优化提示效果; 修复有时候自定义按钮无法显示的情况；新增搜狗页面的多列效果
// @note    2019.01.23-V23.02 修复初始化的时候数据异常导致的block拦截无效的问题
// @note    2019.01.23-V23.01 新增说明-感谢大神Jefferson Scher的拦截脚本https://greasyfork.org/zh-CN/scripts/1682. Thanks for the script of Jefferson Scher Without his help I can't Implement this Function.
// @note    2019.01.23-V23.00 新增拦截模式，可以自定义的选择拦截某个域名，拦截掉你不想看的内容
// @note    2018.12.25-V22.06 移除谷歌底部广告
// @note    2018.12.22-V22.05 修复小细节问题
// @note    2018.12.22-V22.04 修复百度搜索“咨询”栏目下没有搜索结果的问题 && 同时修改部分样式 && 修复输入框右侧无法点击输入的问题
// @note    2018.12.22-V22.03 修复edge的样式错乱问题 && 修复谷歌双列样式问题 && 修复百度顶部大空白的问题 && 修复支持DarkReader
// @note    2018.12.20-V22.02 修复样式加载 && 修复护眼模式效果
// @note    2018.12.20-V22.01 更换样式表插入模式，尽量避免闪烁问题; 修复edge上该模式的兼容问题
// @note    2018.12.19-V21.15 修复上次更新导致的护眼模式失效的问题
// @note    2018.12.19-V21.14 修复在edge上样式没有生效的问题
// @note    2018.12.19-V21.13 修复上次更新代码忘记修改导致的bug，修复百度移动预测的遗留bug
// @note    2018.12.18-V21.12 继续加快移除广告的内容，尽量减少闪烁的情况；
// @note    2018.12.18-V21.11 修复在特殊情况下的样式表没有生效的问题，同时能够更快速的移除广告内容
// @note    2018.12.18-V21.10 修复特殊关键内容搜索下，由于移除广告导致的页面顶部特殊标记显示不正确的问题。
// @note    2018.12.18-V21.9 再次优化样式表加载速度，能更好的更快速的加载样式而不影响代码运行
// @note    2018.12.08-V21.8 修复srcElement在firefox旧版本上不支持的问题
// @note    2018.12.07-V21.7 修复护眼色的引入；修复GM小于4.0版本的兼容问题；优化选项的位置，避免过长
// @note    2018.12.06-V21.6 感谢Mooncan对谷歌样式调整的建议，已经采用了该样式，效果特别好; 同时修复了谷歌右侧栏的位置问题
// @note    2018.12.06-V21.5 P_P修复上一版没有测试导致的支持ViolentMonkey但是有不支持GreaseMonkey的问题；更换css地址；修复护眼色在百度上的部分样式问题
// @note    2018.12.06-V21.4 修复ViolentMonkey的支持；至此已经完全支持三只猴子(TamperMonkey、ViolentMonkey、GreaseMonkey)了；如果还有BUG-直接加群反馈
// @note    2018.12.06-V21.3 修复在edge上样式错乱的问题 && 修复宽度过宽的问题
// @note    2018.12.05-V21.2 移除默认的护眼模式。。。
// @note    2018.12.05-V21.1 修复GreaseMonkey不支持GM_getResourceText导致的样式无法引入的问题，使用自己的服务器中转
// @note    2018.12.05-V21.0 新增必应单列、双列、多列展示；新增护眼模式，各种颜色自定义设置；修复谷歌已浏览的网址未变色问题；优化一定的资源占用
// @note    2018.10.18-V20.5 修复由于谷歌更新导致的样式问题
// @note    2018.10.08-V20.4 修复由于去广告导致的卡顿问题 & 重写favicon添加的位置元素-减少错位产生
// @note    2018.10.03-V20.3 国庆无事,刷版本; 修复在侧边栏开启需要在1920的分辨率下的问题，默认关闭侧边栏的样式操作，如果需要开启的话，在自定义样式中设置开启即可，增加三列|四列模式
// @note    2018.10.01-V20.2 修复拦截广告过多导致的页面显示问题-有些正常地址也被拦截了->似乎发现不是这个脚本的bug;那就刷个版本吧，正好处理下样式缓存问题 & 大家国庆节快乐
// @note    2018.09.21-V20.1 修复在ViolentMonkey的兼容问题 && 样式加载缓慢的问题
// @note    2018.09.21-V20.0 修复闪烁频繁的问题；修复由于扩展和脚本模式两个CSS同时加载导致的问题；新增点击任意位置关闭设置按钮；修复在bing上的计数器位置错误；调整页面单页的样式，这次是真的居中了
// @note    2018.09.19-V19.8 修复TamperMonkey和扩展模式下的兼容问题
// @note    2018.09.19-V19.7 分离去广告功能和自定义样式功能
// @note    2018.09.18-V19.6 修复由于infinity扩展的地址导致的百度样式没有载入的问题；修复万年bug之搜索预测无效的问题
// @note    2018.09.18-V19.5 新增支持扩展模式-推荐使用扩展；修复谷歌地图页面的载入问题；配置脚本GPL协议；支持旧版本的chrome上的自定义显示结果却在最底部的问题-无法解决旧版本chrome上双列的问题
// @note    2018.08.31-V19.4 修复1.google页面中计数器Counter在账号登录后的显示错位问题； 2.排除掉百度可能存在的error情况的地址； 3.更换css样式地址，我的CDN流量撑不住了
// @note    2018.08.24-V19.3 修复谷歌图片在单列模式下的错位问题
// @note    2018.08.17-V19.2 修复谷歌和百度的部分样式问题
// @note    2018.08.16-V19.1 继续修复谷歌和百度双列的问题，这次尽量采用css样式表来调整，感觉效果还可以
// @note    2018.08.14-V18.9 修复谷歌双列的翻页错位的问题; 百度搜索结果的阴影模式; 高分屏等我找到一台高分的显示器再说吧
// @note    2018.08.11-V18.8 紧急-修复更新规则导致的谷歌失效的问题
// @note    2018.08.10-V18.7 推荐升级：修改生效规则，尽量避免弹出提示更新窗口；修复-chrome4x版本的bug；预计下次更新处理高分屏显示界面问题
// @note    2018.08.08-V18.6 更新脚本命名; 尝试解决http没有自动https的问题--------刷版本号
// @note    2018.08.04-V18.5 修复在chrome上脚本偶尔没有生效的问题；修复百度搜索顶部侧移的情况；一定情况下修复双页的分列
// @note    2018.07.25-V18.4 仅做文本说明修改-en-jp; 下次预计修改百度首页的广告问题
// @note    2018.07.25-V18.3 减少了偶尔从首页加载进来的时候样式表没有载入的问题~能遇到部分样式表加载失效的情况很少;优化广告移除
// @note    2018.07.24-V18.2 修复从百度首页加载进入页面时样式表没有载入的问题
// @note    2018.07.24-V18.1 整体优化样式表加载速度-百度和谷歌的界面美化一下就载入了特别快；修复百度搜索的小链接的重定向没有改；修复下划线移除选项的下划线移除模式
// @note    2018.07.21-V18.0 修复搜狗搜索没有获取到真实链接的问题；处理百度重定向速度又快又好；这次更新就支持edge了，同时理论上支持safari，希望测试；其次优化谷歌的界面样式
// @note    2018.07.12-V17.9 修改检测参数，兼容支持Opera浏览器；暂时还是不支持EDGE的链接重定向功能
// @note    2018.07.07-V17.8 修复由于上次更新世界杯界面时导致的shadowDOM关闭，然后广告出现的问题；优化整体去广告规则---有工具何必自己造轮子-本次用了百度自带jquery的查询函数has()
// @note    2018.06.29-V17.7 修复右边栏导致的右侧过高，左侧看不见，以及自定义页面样式丢失的问题
// @note    2018.06.27-V17.6 暂时关闭ShadowDOM的移除功能-尽量保留搜索世界杯功能完善。修复在某些页面上脚本无法运行的情况。新增自定义样式的输入框
// @note    2018.06.26-V17.5 默认关闭右边栏-昨天忘了关闭了
// @note    2018.06.25-V17.4 1.修复谷歌双列问题；2.修复右边栏展示-好些人说去掉之后不好看；3.似乎上个版本又有多次插入导致的页面卡顿情况-再次修复。。。其他的似乎没有了，想起再说
// @note    2018.06.14-V17.3 由于edge中还是不支持返回真实链接，于是暂时屏蔽掉edge浏览器总的请求，等猴子更新了再开启这个功能；connect元素中添加baidu.com避免抽风
// @note    2018.06.13-V17.2 加快查询速度-同时不再弹窗说新连接，无需设置特殊参数；缺点：LOG中会有许多Refused to connect to "xxx": Request was redirected to a not whitelisted URL
// @note    2018.05.25-V17.1 新增支持百度学术的重定向功能
// @note    2018.05.25-V17.0 拆分关键词高亮这个功能，保证功能尽量不交叉，如果需要这个功能的，请安装搜索关键词自动高亮脚本
// @note    2018.05.22-V16.5 尝试缓解内存的问题，避免对其他的进行干扰，同时减少了head标签触发
// @note    2018.05.22-V16.4 彻底拆分双击高亮和自动高亮功能，同时保持两个功能都是关闭状态
// @note    2018.05.22-V16.3 设置添加双击高亮按钮
// @note    2018.05.22-V16.2 不再使用MO方式，百度的原因导致MO彻底无法使用，于是全都用DOM操作来判断吧
// @note    2018.05.21-V16.1 优化ac_redirectstatus高亮的问题; 同时修复了一个高亮关键词的bug；在一个老司机的指点下，添加了referer参数
// @note    2018.05.21-V16.0 谢谢朋友们关心5.20我还是一个人过的很好；大版本：修正计数器的计数问题，修正MO失效之后脚本的触发问题；新增搜索关键词高亮选项，默认关闭
// @note    2018.05.06-V15.3 简单移除好搜的广告
// @note    2018.04.20-V15.2 修复bing的Favicon效果，避免显示在不同行上
// @note    2018.04.04-V15.1 继续尝试修复bug,优化整体页面效果以及谷歌其余页面的效果展示;同时将百度样式写入到#wrapper>#head中去,刷新或者更换页面时就不会异常闪烁并且很平滑了
// @note    2018.04.02-V14.9 更新谷歌整体效果,并尝试修复图片新闻等显示问题的bug
// @note    2018.04.01-V14.8 --日狗问题，忘了改代码，只是更新了说明。。
// @note    2018.04.01-V14.7 经过老司机(没ID)提供的反馈，发现上一版更新的依旧有bug，修复调小触发参数导致的触发没有生效的问题--偶尔双列失效的问题
// @note    2018.04.01-V14.6 经过老司机(没ID)提供的反馈，排查发现chrome上脚本首次载入失效的问题，已经修复
// @note    2018.04.01-V14.5 更新并添加谷歌双列、待测试，如果有问题，可以直接反馈
// @note    2018.03.28-V14.4 移除jquery的require，疑似jquery引起冲突问题，于是彻底弃用jquery来处理页面数据，改用原声JS处理页面
// @note    2018.03.27-V14.3 刷一个版本号，同时优化CSS载入过多的问题，但是载入过慢的问题又出现了，下次处理
// @note    2018.03.26-V14.2 修复由于上次更新过于流畅的bug，同时修正首页的样式显示
// @note    2018.03.25-V14.1 再次抄点代码，借鉴老司机:浮生@未歇的部分优化代码完善已有的（@resource、GM_getResourceText、GM_addStyle），避免页面闪烁一下，同时解决部分css载入重复的问题
// @note    2018.03.23-V14.0 1.尝试修复在百度贴吧和百度知道的文字显示异常的问题; 2.修复编号奇怪的异常问题
// @note    2018.03.18-V13.9 更新谷歌的favicon丢失的问题
// @note    2018.03.04-V13.8 更新图库为https模式，避免那啥显示不安全
// @note    2018.02.16-V13.7 1.新增关闭百度搜索预测；2.新增未知图标时切换； 3.移除百度搜索建议的顶部一条
// @note    2018.01.12-V13.6 1.新增移除右边栏的按钮；2.新增版本显示文字；3.修正favicon位置；4.修复favicon的图片错误时候的值，万年BUG
// @note    2017.12.27-V13.5 修复由于上个版本更新处理白屏，导致的默认标准模式的右侧栏不见了
// @note    2017.12.20-V13.4 感谢ID：磁悬浮青蛙的反馈，已经修复小概率搜索之后点击结果白屏的问题-貌似之前处理过，但是没有彻底处理掉，这次彻底了，改用CSS隐藏
// @note    2017.12.04-V13.3 新增设置，针对百度系列的重定向问题，不常用百度系列的朋友可以开启这个功能
// @note    2017.11.23-V13.2 感谢卡饭坛友@Apollo8511提供反馈，已经修复部分知乎的重定向问题，更多问题可以直接反馈我
// @note    2017.11.22-V13.1 移除百度系的重定向，虽然处理了，但是百度系直连会导致文字无法直接显示，其他直连不影响
// @note    2017.11.17-V12.13 进一步移除百度的广告，右边部分广告的处理和移除
// @note    2017.11.15-V12.12 搜狗的搜索地址又变了，加一个
// @note    2017.11.02-V12.11 新增在手机mobile模式下百度的重定向处理，其余网站以后再说吧，估计没有需求
// @note    2017.10.27-V12.10 1.修复逼死强迫症的问题；2.移除完整模式-避免出现各种拦截；3.修复www.so.com的重定向问题
// @note    2017.09.18-V12.9 更新原因：1.勿忘国耻918；2.更新百度偶尔重定向没成功的问题；3.修复页面的小问题；4.新增文字下划线开关
// @note    2017.09.15-V12.8 紧急修复谷歌上页面卡顿的问题，排查得知为百度规则的扩展出了问题，非常感谢众多朋友的支持，没有你们的反馈就没有这个脚本。修复并移除了百度官方采用的新方式广告模式，貌似只在chrome上出现
// @note    2017.09.13-V12.7 1.修复N年前更新导致的部分网址重定向无效，继续使用GET方法，因为好些网站不支持HEAD方法，获取成功之后就断开，尽量减少了网络开支; 2.修复搜狗的部分搜索异常; 3.修复百度在chrome61上的链接异常问题
// @note    2017.09.13-V12.6 开学之后的第二个版本，修复上次更新导致的百度首页错乱，修复firefox上的触发，修复SuperPreloader的翻页展示
// @note    2017.09.12-V12.5 开学之后的第一个版本，修复在百度上偶尔不触发的问题【从首页搜索的时候触发】，其次在兄弟XXX(我也忘了哪个P_P)的帮助下，修复了偶尔会全屏特殊推广模式的问题
// @note    2017.09.06-V12.4 修复上个版本更新导致的百度知道再次异常问题;更新知乎上的重定向问题-自己的脚本
// @note    2017.09.06-V12.3 修复双列的模式的显示问题，如果有问题希望反馈一下，顺便切换css来源
// @note    2017.09.04-V12.2 特意修复在ViolentMonkey上的设置无效的问题以及在360浏览器上的设置不显示问题
// @note    2017.09.04-V12.1 百度页面直接添加设置入口；360浏览器设置可能在底部页面；支持单列和双列模式，界面更美观from浮生@未歇；可能是最近一段时间的最后版本了，要开学了~~
// @note    2017.09.02-V11.10 添加两个选项，可以选择性移除部分设置
// @note    2017.09.01-V11.9 修复上次更新导致的百度去广告不灵的问题
// @note    2017.08.30-V11.8 新增：1.GM设置栏目中加入设置 2.baidu-使用HEAD方式获取，减少数据传输，搜狗特殊，继续GET方式
// @note    2017.08.29-V11.7 方便朋友们-移除知乎重定向
// @note    2017.08.07-V11.6 调整：移除小绿点，换为点击Favicon或者是计数器弹出窗口，更换为加群链接
// @note    2017.08.06-V11.5 修复，保存异常；预期之后会添加百度搜索页面的大调整
// @note    2017.08.05-V11.4 新增：反馈和建议地址增加
// @note    2017.08.04-V11.3 修复：由于英语不好导致的拼写错误，感谢shj兄弟指出
// @note    2017.08.03-V11.2 新增：谷歌链接新标签打开; 移除搜索结果链接的下划线
// @note    2017.07.22-V11.1 新增了开关模式，可以开启或者关闭某些自己不喜欢的功能，开关在右上角，和SuperPreload共用
// @note    2017.06.25-V10.1 修复上次更新导致的百度去广告的问题
// @note    2017.06.25-V10.0 修复上次更新导致的百度知道再次出现老问题
// @note    2017.06.24-V9.9 更新了翻页的问题，经过多次的尝试应该没有太大问题了
// @note    2017.06.24-V9.8 更新了bing上的图片favicon地址;并且尽量减少了MO触发次数，避免页面卡顿;修复搜狗的重定向问题
// @note    2017.06.23-V9.7 上传错了~重新来，顺带处理了谷歌favicon问题
// @note    2017.06.23-V9.6 修复了谷歌重定向的问题~~我的锅
// @note    2017.06.11-V9.5 不再使用DOM方式来监听页面了，使用timer+MO来处理，极大减少了cpu占用时间和瞬时网速占用
// @note    2017.05.26-V9.4 恢复favicon模式，现在这个脚本基本上全了，有需要以后再说
// @note    2017.05.15-V9.3 暂时移除百度右边侧栏的广告移除模式，准备下次优化好了再继续
// @note    2017.05.12-V9.2 暂时移除谷歌的安全搜索模式，因为很复杂的原因
// @note    2017.05.12-V9.1 暂时移除Favicon的显示，因为这样就杂了，有需要的人自己去装这个脚本吧，保留百度去广告
// @note    2017.05.12-V9.0 集合了去重定向+去广告+Favicon显示
// @note    2017.05.12-V8.7 集合了去广告的脚本，以前的那个去广告的脚本就不用了
// @note    2017.05.12-V8.6 修复谷歌安全搜索的BUG V2
// @note    2017.05.12-V8.4 新增：默认屏蔽谷歌的安全搜索功能
// @note    2017.05.05-V8.3 修复include范围太小导致的百度知道的屏蔽问题
// @note    2017.05.04-V8.2 终于修复了百度知道图片替换了文字的这个大BUG; 顺便处理了superapi.zhidao.baidu.com; 新增谷歌搜索结果重定向去除
// @note    2017.05.04-V8.1 终于修复了百度知道图片替换了文字的这个大BUG，顺便处理了superapi.zhidao.baidu.com
// @note    2017.05.04-V8.0 终于修复了百度知道图片替换了文字的这个大BUG，待测试
// @note    2017.03.28-V7.6 修复在ViolentMonkey上的不支持的问题
// @note    2017.03.28-V7.5 尝试修复chrome上的问题
// @note    2017.03.21-V7.4 尝试处理Edge上不支持的问题，结果发现是Edge本身的TamperMonkey支持有问题
// @note    2017.03.19-V7.3 修复打开百度之后再次点击“百度一下”导致的无法更新重定向问题
// @note    2017.03.19-V7.2 未知原因chrome的MutationObserver无法使用了，继续回归以前的DOMNodeInserted
// @note    2017.02.17-V7.0 修复搜狗的搜索结果重定向问题+改个名字
// @note    2017.02.17-V6.9 修复搜狗的搜索结果重定向问题
// @note    2016.12.10-V6.8 ***
// @note    2016.10.27-V6.7 修复了以前的重复请求，现在的请求数应该小了很多，网络也就不卡了，感觉萌萌哒
// @note    2016.04.24-V6.6 恢复以前的版本，因为兼容性问题
// @note    2015.12.01-V5.0 加入搜狗的支持，但是支持不是很好
// @note    2015.11.25-V2.0 优化，已经是真实地址的不再尝试获取
// @note    2015.11.25-V1.0 完成去掉百度重定向的功能
// @resource  baiduCommonStyle   http://ibaidu.htt5.com/newcss/baiduCommonStyle.css?t=24.04
// @resource  baiduOnePageStyle  http://ibaidu.htt5.com/newcss/baiduOnePageStyle.css?t=24.06
// @resource  baiduTwoPageStyle  http://ibaidu.htt5.com/newcss/baiduTwoPageStyle.css?t=24.04
// @resource  baiduLiteStyle     http://ibaidu.htt5.com/newcss/baiduLiteStyle.css?t=24.04
// @resource  googleCommonStyle  http://ibaidu.htt5.com/newcss/googleCommonStyle.css?t=24.04
// @resource  googleOnePageStyle   http://ibaidu.htt5.com/newcss/googleOnePageStyle.css?t=24.04
// @resource  googleTwoPageStyle   http://ibaidu.htt5.com/newcss/googleTwoPageStyle.css?t=24.04
// @resource  bingCommonStyle    http://ibaidu.htt5.com/newcss/bingCommonStyle.css?t=24.04
// @resource  bingOnePageStyle   http://ibaidu.htt5.com/newcss/bingOnePageStyle.css?t=24.04
// @resource  bingTwoPageStyle   http://ibaidu.htt5.com/newcss/bingTwoPageStyle.css?t=24.04
// @resource  duckCommonStyle    http://ibaidu.htt5.com/newcss/duckCommonStyle.css?t=24.04
// @resource  duckOnePageStyle   http://ibaidu.htt5.com/newcss/duckOnePageStyle.css?t=24.04
// @resource  duckTwoPageStyle   http://ibaidu.htt5.com/newcss/duckTwoPageStyle.css?t=24.04
// @resource  dogeCommonStyle    http://ibaidu.htt5.com/newcss/dogeCommonStyle.css?t=24.04
// @resource  dogeOnePageStyle   http://ibaidu.htt5.com/newcss/dogeOnePageStyle.css?t=24.04
// @resource  dogeTwoPageStyle   http://ibaidu.htt5.com/newcss/dogeTwoPageStyle.css?t=24.04
// @resource  MainHuYanStyle     http://ibaidu.htt5.com/newcss/HuYanStyle.css?t=24.04
// @resource  SiteConfigRules    http://ibaidu.htt5.com/newcss/SiteConfigRules.conf?t=24.04
// @require https://lib.baomitu.com/vue/2.6.11/vue.js
// @grant    GM_getValue
// @grant    GM.getValue
// @grant    GM_setValue
// @grant    GM.setValue
// @grant    GM_addStyle
// @grant    GM_getResourceUrl
// @grant    GM.getResourceUrl
// @grant    GM_xmlhttpRequest
// @grant    GM_getResourceText
// @grant    GM_registerMenuCommand
// @grant    unsafeWindow
// ==/UserScript==


!function () {
  let isdebug = false;
  let isLocalDebug = isdebug || false;
  let debug = isdebug ? console.log.bind(console) : function () {
  };
  let acCssLoadFlag = false;

  let inExtMode = typeof (isExtension) !== "undefined";
  let inGMMode = typeof (GM_info.scriptHandler) !== "undefined"; // = "Greasemonkey" || "Tampermonkey" || "ViolentMonkey"
  // 新版本的GreaseMonkey是带有scriptHandler，但是没有GM_getResourceText；旧版本不带scriptHandler，但是有GM_getResourceText
  // let isNewGM = typeof(GM_info.scriptHandler) !== "undefined" && GM_info.scriptHandler.toLowerCase() === "greasemonkey";
  let isNewGM = false;
  // inExtMode & inGMMode
  // true    true =扩展下的GM代码 不执行
  // true    false=扩展下代码 执行
  // false  true =仅GM代码 执行
  // false  false=异常 但是还是要执行代码
  debug("程序开始");
  if (inExtMode === true && inGMMode === true || typeof(window.AC666Init) !== 'undefined') {
    console.log("扩展模式-脚本不启用");
    return;
  }
  window.AC666Init = true
  if (typeof (GM) === "undefined") {
    // 这个是ViolentMonkey的支持选项
    GM = {};
    GM.setValue = GM_setValue;
    GM.getValue = GM_getValue;
  }
  (function () {
    debug("程序执行");
    let needDisplayNewFun = true; // 本次更新是否有新功能需要展示
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
    if (!Array.prototype.acpush) {
      /**
       * 进行不重复插入，插入后执行回调函数
       * @param data 待插入数据
       * @param callback 回调函数
       */
      Array.prototype.acpush = function (data, callback) {
        // 如果是垃圾数据，那么可以丢弃的
        if (data == null || data == "") return;
        // 如果数据中有回车，那数据也是无效的正文而已
        if (data.replace(/({|}|,|\+|：|。|\n)/) !== data) return;
        if (this.findIndex(m => m === data) < 0) {
          this.push(data);
          callback && callback(this);
        }
      };
      Array.prototype.acremove = function (data, callback) {
        let delId = this.findIndex(m => m === data);
        if (delId >= 0) {
          this.splice(delId, 1);
          callback && callback(this);
        } // 删除delId的数据，删除一个
      };
    }
    // let RedirectMap = new Map();
    let ACConfig = {};
    let DBConfig = {}; // 仅作为普通ACConfig的原始备份，在其他非关键位置时进行保存使用
    /*存在对未初始化变量的初始化赋值-无需担心迭代兼容问题*/
    let DefaultConfig = {
      isRedirectEnable: false,  // 是否开启重定向功能
      isAdsEnable: false, // 是否开启去广告模式
      isAutopage: true,  // 是否开启自动翻页功能
      isBlockEnable: false, // 是否开启去拦截模式
      isBlockDisplay: false, // 是否删除已拦截的条目
      isBlockBtnNotDisplay: false, // 是否显示block按钮
      AdsStyleEnable: true, // 是否开启自定义样式模式

      baidu: {
        name: 'baidu',  // CSS load 的前缀标志
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-百度
      },
      google: {
        name: 'google',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-谷歌
      },
      bing: {
        name: 'bing',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-必应
      },
      duck: {
        name: 'duck',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-DuckGOGO
      },
      doge: {
        name: 'doge',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-DuckGOGO
      },
      sogou: {
        name: 'sogou',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-搜狗
      },

      Style_BaiduLite: false, // Baidu_Lite样式表

      defaultHuYanColor: "#DEF1EF",
      isUserColorEnable: true, // 是否开启favicon图标功能
      isFaviconEnable: true, // 是否开启favicon图标功能
      defaultFaviconUrl: "https://ae01.alicdn.com/kf/HTB1dRY0X8OD3KVjSZFFq6An9pXay.jpg", // 默认图标地址
      doDisableSug: true, // 是否禁止百度搜索预测
      isRightDisplayEnable: false, // 是否开启右侧边栏
      isCounterEnable: false, // 是否显示计数器
      isALineEnable: false, // 是否禁止下划线
      isUserStyleEnable: false, // 是否开启自定义样式
      normalizeDuck: true, // 是否按照常用习惯去配置DuckDuckGo
      isEnLang: false,
      isGooleInBaiduModeEnable: false, // 是否开启谷歌搜索结果页的百度图标显示
      UserBlockList: [],
      UserStyleText:
        `/**计数器的颜色样式*/
div .AC-CounterT{
  background: #FD9999;
}
/**右侧栏的样式-其实不开启更好看一些*/
#content_right{
  padding: 20px 15px 15px;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
}
/****可以加一些自己的背景图片,替换引号内的内容为可外链的图片即可****/
body{
  background-repeat: repeat-y;
  background-size: 100%;
  background-attachment:fixed;
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564756277250&di=868b9eac9be14df1dedd8c7d6a710844&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130530%2FImg377502333.jpg');
}
/*****窗口背景的透明虚化效果*****/
body>#wrapper,body>.wrap,body>#main,body #appbar,body #hdtbSum{
  background: rgba(225,225,225,0.8);
}
/**隐藏首页的大图标-修复可能导致外援样式异常**/
body[baidu] #s_lg_img_new{
  display:none !important;
}
#wrapper #content_left .result, #wrapper #content_left .c-container{
  border-radius: 5px;
}`,
      oldVersion: "",
      lastSaveTime: new Date().getTime(),
    };
    let CONST = {
      hasNewFuncNeedDisplay: true,
      sortIndex: 1,
      isGoogleImageUrl: false,
      useItem: {},
      StyleManger: function () {
      },
    };

    var curSite = {
      SiteTypeID: 1,  // 当前站点的ID
      MainType: "",    // 主体节点，很多个的父节点
      Stype_Normal: "", // 重定向选择器，只有百度-搜狗-好搜
      FaviconType: "",  // favicon的域名检查器cite，用于获取host用
      FaviconAddTo: "", // favicon选择器，用于插入到title之前的
      CounterType: "",  // 计数器添加的位置，一般和favicon位置一致
      BlockType: "",  // 屏蔽按钮的位置，一般在title之后
    };
    let DBSite = {
      baidu: {
        SiteTypeID: 1,
        MainType: "#content_left .c-container",
        Stype_Normal: "h3.t>a, .c-container article a",
        FaviconType: ".c-showurl",
        FaviconAddTo: "h3",
        CounterType: "#content_left>#double>div[srcid] *[class~=t],[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t],[class~=op_best_answer_question]",
        BlockType: "h3 a",
        pager: {
          nextLink: '//div[@id="page"]//a[contains(text(),"下一页")][@href]',
          pageElement: "css;div#content_left > *",
          HT_insert: ["css;div#content_left", 2],
          replaceE: "css;#page",
          stylish: ".autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}",
        }
      },
      sogou: {
        SiteTypeID: 2,
        MainType: "#main .results>div",
        Stype_Normal: "h3.pt>a, h3.vrTitle>a",
        FaviconType: "cite[id*='cacheresult_info_']",
        FaviconAddTo: "h3",
        CounterType: ".results>div",
        BlockType: "h3 a",
        pager: {
          nextLink: "//div[@id=\"pagebar_container\"]//a[@id=\"sogou_next\"]",
          pageElement: "//div[@class=\"results\"]/div",
          HT_insert: ["//div[@class=\"results\"]", 2],
          replaceE: "id(\"pagebar_container\")"
        }
      },
      haosou: {
        SiteTypeID: 3,
        MainType: ".res-list",
        Stype_Normal: ".res-list h3>a",
        FaviconType: ".res-linkinfo cite",
        FaviconAddTo: "h3",
        CounterType: ".results>div",
        BlockType: "h3 a",
        pager: {
          nextLink: "//div[@id='page']//a[text()='下一页>'] | id('snext')",
          pageElement: "//div[@id='container']/div",
          HT_insert: ["//div[@id='container']", 2],
          replaceE: "id('page')"
        }
      },
      google: {
        SiteTypeID: 4,
        MainType: "#rso .g",
        FaviconType: ".iUh30",
        FaviconAddTo: "h3",
        CounterType: "#rso .g *[class~=r] h3,._yE>div[class~=_kk] h3",
        BlockType: ".rc>.r>a",
        pager: {
          nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',
          pageElement: '//div[@id="res"]',
          HT_insert: ["css;#res", 2],
          replaceE: '//div[@id="navcnt"] | //div[@id="foot"][@role="navigation"]'
        }
      },
      bing: {
        SiteTypeID: 5,
        MainType: "#b_results>li",
        FaviconType: ".b_attribution>cite",
        FaviconAddTo: "h2",
        CounterType: "#b_results>li[class~=b_ans]>h2,#b_results>li[class~=b_algo]>h2,#b_results>li[class~=b_algo]>h2",
        BlockType: "h2 a",
        pager: {
          nextLink: "//a[contains(@class,\"sb_pagN\")]",
          pageElement: "id(\"b_results\")/li[not(contains(@class,\"b_pag\") or contains(@class,\"b_ans b_top\"))]",
          HT_insert: ["id(\"b_results\")/li[@class=\"b_pag\"]", 1],
          replaceE: "id(\"b_results\")//nav[@role=\"navigation\"]",
        }
      },
      duck: {
        SiteTypeID: 10,
        MainType: "#links_wrapper #links .results_links_deep",
        FaviconType: ".results_links_deep .result__url__domain",
        FaviconAddTo: "h2",
        CounterType: "#links_wrapper #links .results_links_deep h2",
        BlockType: "h2 a",
        pager: {
          nextLink: "//a[contains(@class,\"sb_pagN\")]",
          pageElement: "id(\"b_results\")/li[not(contains(@class,\"b_pag\") or contains(@class,\"b_ans b_top\"))]",
          HT_insert: ["id(\"b_results\")/li[@class=\"b_pag\"]", 1],
          replaceE: "id(\"b_results\")//nav[@role=\"navigation\"]",
        }
      },
      doge: {
        SiteTypeID: 11,
        MainType: "#links_wrapper #links .results_links_deep",
        FaviconType: ".results_links_deep .result__url__domain",
        FaviconAddTo: "h2",
        CounterType: "#links_wrapper #links .results_links_deep h2",
        BlockType: "h2 a",
        pager: {
          nextLink: "//a[contains(@class,\"sb_pagN\")]",
          pageElement: "id(\"b_results\")/li[not(contains(@class,\"b_pag\") or contains(@class,\"b_ans b_top\"))]",
          HT_insert: ["id(\"b_results\")/li[@class=\"b_pag\"]", 1],
          replaceE: "id(\"b_results\")//nav[@role=\"navigation\"]",
        }
      },
      mBaidu: {
        SiteTypeID: 6,
        MainType: "#b_results>li",
        FaviconType: ".b_attribution>cite",
        FaviconAddTo: "h2",
        CounterType: "#b_results>li[class~=b_ans]>h2,#b_results>li[class~=b_algo]>h2,#b_results>li[class~=b_algo]>h2",
        BlockType: "h2 a",
      },
      zhihu: {
        SiteTypeID: 7,
      },
      baidu_xueshu: {
        SiteTypeID: 8,
        MainType: "#content_left .result",
        Stype_Normal: "h3.t>a, #results .c-container>.c-blocka",
        FaviconType: ".result-op, .c-showurl", // baidu 似乎要改版了？
        FaviconAddTo: "h3",
        CounterType: "#content_left>#double>div[srcid] *[class~=t],[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t],[class~=op_best_answer_question]",
        BlockType: "h3 a",
      },
      other: {
        SiteTypeID: 9,
      }
    };
    let SiteType = {
      BAIDU: DBSite.baidu.SiteTypeID,
      MBAIDU: DBSite.mBaidu.SiteTypeID,
      SOGOU: DBSite.sogou.SiteTypeID,
      SO: DBSite.haosou.SiteTypeID,
      GOOGLE: DBSite.google.SiteTypeID,
      BING: DBSite.bing.SiteTypeID,
      DUCK: DBSite.duck.SiteTypeID,
      DOGE: DBSite.doge.SiteTypeID,
      ZHIHU: DBSite.zhihu.SiteTypeID,
      BAIDU_XUESHU: DBSite.baidu_xueshu.SiteTypeID,
      OTHERS: 8
    };
    let otherData = {
      other: {
        showSecondPanel: false, // 展示第二panel
        showBlockListArea: false, // blockList展示位textarea
        addBlockItem: "",     // 用户手动输入的拦截规则
        curHosts: [],
      }
    };  // 到时候挂载到other上
    let AllData = {
      ACConfig: {},
      other: otherData.other,
      lan: {
        use: {},
        zh_cn: {
          menu_text: "自定义",
          curLang: "zh_cn",
          fieldset_panel: {
            panel_title: "AC-重定向设置 " + GM_info.script.version + (inExtMode? 'Ext':''),
            setting_panel: {
              redirect_text: "主功能-重定向功能",
              redirect_title: "重定向功能的开启与否",
              useEn_text: "En-Language",
              useEn_title: "Using English language to display",
              ads_text: "附加1-去广告功能",
              ads_title: "去除部分页面的广告信息，还你一个干净整洁的页面",
              autopage_text: "自动翻页",
              autopage_title: "自动翻页",
              blockenable_text: "附加2-自主拦截域名",
              blockenable_title: "点击页面block按钮添加你想要隐藏的地址，脚本将自动隐藏部分结果为小横幅，DIY按钮中点击表格内容可以取消隐藏",
              blockDiyBtn_text: "DIY",
              blockDiyBtn_title: "自定义BLOCK",
              blockAutoRemove_text: "自动移除",
              blockAutoRemove_title: "自动移除已经屏蔽的域名",
              blockBtnShow_text: "隐藏block按钮",
              blockBtnShow_title: "隐藏掉block按钮的显示",

              userStyle_text: "附加3-自定义样式",
              userStyle_baidu_lable: "展开百度设置>>",
              userStyle_baidu_origin: "百度-原始模式",
              userStyle_baidu_huyan: "百度-护眼模式",
              userStyle_baidu_baiduLite: "百度Lite样式",
              userStyle_baidu_1line: "单列",
              userStyle_baidu_1line_enter: "单列居中",
              userStyle_baidu_2line: "双列",
              userStyle_baidu_3line: "三列",
              userStyle_baidu_4line: "四列",

              userStyle_google_lable: "展开谷歌设置>>",
              userStyle_google_origin: "谷歌-原始模式",
              userStyle_google_huyan: "谷歌-护眼模式",
              userStyle_google_googleLite: "谷歌-伪装百度",
              userStyle_google_1line: "单列",
              userStyle_google_1line_enter: "单列居中",
              userStyle_google_2line: "双列",
              userStyle_google_3line: "三列",
              userStyle_google_4line: "四列",

              userStyle_bing_lable: "展开必应设置>>",
              userStyle_bing_origin: "必应-原始模式",
              userStyle_bing_huyan: "必应-护眼模式",
              userStyle_bing_1line: "单列",
              userStyle_bing_1line_enter: "单列居中",
              userStyle_bing_2line: "双列",
              userStyle_bing_3line: "三列",
              userStyle_bing_4line: "四列",

              userStyle_sogou_lable: "展开搜狗设置>>",
              userStyle_sogou_origin: "搜狗-原始模式",
              userStyle_sogou_huyan: "搜狗-护眼模式",
              userStyle_sogou_1line: "单列",
              userStyle_sogou_1line_enter: "单列居中",
              userStyle_sogou_2line: "双列",
              userStyle_sogou_3line: "三列",
              userStyle_sogou_4line: "四列",

              userStyle_duck_lable: "展开鸭鸭搜设置>>",
              userStyle_duck_origin: "鸭鸭-原始模式",
              userStyle_duck_huyan: "鸭鸭-护眼模式",
              userStyle_duck_normal: "鸭鸭-常见配置",
              userStyle_duck_1line: "单列",
              userStyle_duck_1line_enter: "单列居中",
              userStyle_duck_2line: "双列",
              userStyle_duck_3line: "三列",
              userStyle_duck_4line: "四列",

              userStyle_doge_lable: "展开多吉设置>>",
              userStyle_doge_origin: "多吉-原始模式",
              userStyle_doge_huyan: "多吉-护眼模式",
              userStyle_doge_normal: "多吉-常见配置",
              userStyle_doge_1line: "单列",
              userStyle_doge_1line_enter: "单列居中",
              userStyle_doge_2line: "双列",
              userStyle_doge_3line: "三列",
              userStyle_doge_4line: "四列",

              huyanMode_text: "附加4-护眼颜色配置-自定义3中需对应开启",
              huyanMode_title: "！需要在自定义样式中启用护眼模式",
              huyanColor_text: "默认护眼颜色：",
              huyanColor_title: "自定义的护眼颜色：",
              huyanColorMore_text: "更多颜色选择",

              favicon_text: "附加5-Favicon功能",
              favicon_title: "AC-添加Favicon",
              favicon_defaultIcon_text: "Favicon默认图标：",

              searchOrigin_text: "附加6-移除百度搜索预测(文字自动搜索)",
              searchOrigin_title: "AC-移除搜索预测",

              showRight_text: "附加7-显示右侧栏",
              showCounter_text: "附加8-编号功能",
              showALine_text: "附加9-文字下划线",
              showUserStyle_text: "附加10-自定义样式",

              contactMe_text: "联系作者,提建议,寻求帮助,自定义样式,脚本定制点我",
              contactMe_url: "https://ac.tujidu.com",

              setting_panel_second: {
                backBtn_text: "<-返回",
                blockLabel_text: " 拦截列表  想要生效的话需要手动保存",
                blockEditBtn_text: "编辑列表",
                blockEditBtnEnd_text: "结束编辑",
                addBlockLabel_text: "全匹配拦截：",
                addBtnLabel_text: "添加",
              },
              cancelBtn_text: "取消",
              okBtn_text: "保存",
            }
          }
        },
        en: {
          menu_text: "CUSTOM",
          curLang: "en",
          fieldset_panel: {
            panel_title: "AC Redirect Settings " + GM_info.script.version + (inExtMode? 'Ext':''),
            setting_panel: {
              redirect_text: "Main-RedirectFunc",
              redirect_title: "Turn on or off redirect",
              useEn_text: "En-Language",
              useEn_title: "使用英文显示页面",
              ads_text: "Add1-Remove Ads",
              ads_title: "Remove the ads on the page, and return you a clean page",
              autopage_text: "Auto Pager",
              autopage_title: "Auto Pager",
              blockenable_text: "Add2-Block host",
              blockenable_title: "Click the Block button to add the address which you want to hide. The script will hide it with small banner automatically. DIY button for editting the hiding list",
              blockDiyBtn_text: "DIY",
              blockDiyBtn_title: "Edit BLOCK",
              blockAutoRemove_text: "Auto remove",
              blockAutoRemove_title: "remove the block results automatically",
              blockBtnShow_text: "Hide 'Block' button",
              blockBtnShow_title: "Hide 'Block' button",

              userStyle_text: "Add3-CustomStyle",
              userStyle_baidu_lable: "Expand Baidu Settings>>",
              userStyle_baidu_origin: "Baidu-Origin",
              userStyle_baidu_huyan: "Baidu-EyeSave",
              userStyle_baidu_baiduLite: "BaiduLiteStyle",
              userStyle_baidu_1line: "SingleRow",
              userStyle_baidu_1line_enter: "SingleCenter",
              userStyle_baidu_2line: "Two",
              userStyle_baidu_3line: "Three",
              userStyle_baidu_4line: "Four",

              userStyle_google_lable: "Expand Google Settings>>",
              userStyle_google_origin: "Google-Origin",
              userStyle_google_huyan: "Google-EyeSave",
              userStyle_google_googleLite: "Fake Baidu",
              userStyle_google_1line: "SingleRow",
              userStyle_google_1line_enter: "SingleCenter",
              userStyle_google_2line: "Two",
              userStyle_google_3line: "Three",
              userStyle_google_4line: "Four",

              userStyle_bing_lable: "Expand Bing Settings>>",
              userStyle_bing_origin: "Bing-Origin",
              userStyle_bing_huyan: "Bing-EyeSave",
              userStyle_bing_1line: "SingleRow",
              userStyle_bing_1line_enter: "SingleCenter",
              userStyle_bing_2line: "Two",
              userStyle_bing_3line: "Three",
              userStyle_bing_4line: "Four",

              userStyle_sogou_lable: "Expand SoGou Settings>>",
              userStyle_sogou_origin: "SoGou-Origin",
              userStyle_sogou_huyan: "SoGou-EyeSave",
              userStyle_sogou_1line: "SingleRow",
              userStyle_sogou_1line_enter: "SingleCenter",
              userStyle_sogou_2line: "Two",
              userStyle_sogou_3line: "Three",
              userStyle_sogou_4line: "Four",

              userStyle_duck_lable: "Expand DuckDuckGo Settings>>",
              userStyle_duck_origin: "DuckDuck-Origin",
              userStyle_duck_huyan: "DuckDuck-EyeSave",
              userStyle_duck_normal: "DuckDuck-Normal",
              userStyle_duck_1line: "SingleRow",
              userStyle_duck_1line_enter: "SingleCenter",
              userStyle_duck_2line: "Two",
              userStyle_duck_3line: "Three",
              userStyle_duck_4line: "Four",

              userStyle_doge_lable: "Expand DogeDoge Settings>>",
              userStyle_doge_origin: "DogeDoge-Origin",
              userStyle_doge_huyan: "DogeDoge-EyeSave",
              userStyle_doge_normal: "DogeDoge-Normal",
              userStyle_doge_1line: "SingleRow",
              userStyle_doge_1line_enter: "SingleCenter",
              userStyle_doge_2line: "Two",
              userStyle_doge_3line: "Three",
              userStyle_doge_4line: "Four",

              huyanMode_text: "Add4-EyeSave Color Setting-Need opened in Add3",
              huyanMode_title: "！Open EyeSave Mode in CustomStyle is Must",
              huyanColor_text: "Default EyeSave Color：",
              huyanColor_title: "The color of EyeSave：",
              huyanColorMore_text: "More Color",

              favicon_text: "Add5-Favicon.Func",
              favicon_title: "AC-AddFavicon",
              favicon_defaultIcon_text: "FaviconFailedImg：：",

              searchOrigin_text: "AC-Remove Baidu AutoPredict in text search",
              searchOrigin_title: "Add6-Remove Baidu AutoPredict in text search",

              showRight_text: "Add7-Right Side Column",
              showCounter_text: "Add8-NumFunc",
              showALine_text: "Add9-TextUnderLine",
              showUserStyle_text: "Add10-Your own Style",

              contactMe_text: "For contact the writter, suggests, ask for help then click me",
              contactMe_url: "https://github.com/langren1353/GM_script/",

              setting_panel_second: {
                backBtn_text: "<-Back",
                blockLabel_text: "&nbsp;Block List&nbsp;&nbsp;Click Save Button if you want wo save the list",
                blockEditBtn_text: "Edit List",
                blockEditBtnEnd_text: "End Edit",
                addBlockLabel_text: "Add Block item：",
                addBtnLabel_text: "Add",
              },
              cancelBtn_text: "Cancel",
              okBtn_text: "Save",
            }
          }
        }
      }
    };
    let vueVM = null;
    /**初始化所有的设置**/
    Promise.all([GM.getValue("Config")]).then(function (data) {
      if (data[0] != null) {
        try {
          ACConfig = JSON.parse(data[0]);
        } catch (e) {
          ACConfig = data[0];
        }
      } else {
        ACConfig = DefaultConfig;
      }
      for (var key in DefaultConfig) {
        if (typeof (ACConfig[key]) == "undefined") {
          ACConfig[key] = DefaultConfig[key];
        }
      }
      if (ACConfig.isUserStyleEnable === false && (new Date().getTime() - ACConfig.lastSaveTime > 2592000000)) { // 大约30天时间
        // 如果用户取消了设置，并且长时间(3天)没有进行过处理，那么直接将数据置空 -> 用于刷新数据
        console.log("ac-baidu css reset for time");
        ACConfig.lastSaveTime = new Date().getTime();
        ACConfig.UserStyleText = DefaultConfig.UserStyleText;
      }
      AllData.ACConfig = ACConfig;
      DBConfig = JSON.parse(JSON.stringify(ACConfig)); // 暂时作为一个原始保存
      AllData.lan.use = ACConfig.isEnLang ? AllData.lan.en : AllData.lan.zh_cn;
      // 初始化完成之后才能调用正常函数
      callback();
    }).catch(function (except) {
      console.log(except);
    });

    function Reg_Get(HTML, reg) {
      let RegE = new RegExp(reg);
      try {
        return RegE.exec(HTML)[1];
      } catch (e) {
        return "";
      }
    }

    function getElementByXpath(e, t, r) {
      r = r || document, t = t || r;
      try {
        return r.evaluate(e, t, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      } catch (t) {
        return void console.error("无效的xpath");
      }
    }

    function getAllElementsByXpath(e, t, r) {
      return r = r || document, t = t || r, r.evaluate(e, t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    }

    function getAllElements(e, t, r, n, o) {
      var i, s = [];
      if (!e) return s;
      if (r = r || document, n = n || window, o = o || void 0, t = t || r, "string" == typeof e) i = 0 === e.search(/^css;/i) ? function getAllElementsByCSS(e, t) {
        return (t || document).querySelectorAll(e);
      }(e.slice(4), t) : getAllElementsByXpath(e, t, r); else {
        if (!(i = e(r, n, o))) return s;
        if (i.nodeType) return s[0] = i, s;
      }
      return function makeArray(e) {
        var t, r, n, o = [];
        if (e.pop) {
          for (t = 0, r = e.length; t < r; t++) (n = e[t]) && (n.nodeType ? o.push(n) : o = o.concat(makeArray(n)));
          return a()(o);
        }
        if (e.item) {
          for (t = e.length; t;) o[--t] = e[t];
          return o;
        }
        if (e.iterateNext) {
          for (t = e.snapshotLength; t;) o[--t] = e.snapshotItem(t);
          return o;
        }
      }(i);
    }

    function callback() {
      if (ACConfig.oldVersion === GM_info.script.version) {
        CONST.hasNewFuncNeedDisplay = false;
      } else {
        CONST.hasNewFuncNeedDisplay = needDisplayNewFun;
      }

      !function () {
        let insertLocked = false;
        if (typeof GM_getResourceText == 'undefined') {
          GM.getResourceText = GM_getResourceText = async function (aResourceName) {
            let res = await (await fetch(await GM.getResourceUrl(aResourceName))).text();
            let saveRes = await GM.getValue(aResourceName);
            if (typeof (saveRes) === 'undefined') {
              GM.setValue(aResourceName, res);
            } else {
              return saveRes;
            }
            return res;
          }
        }
        if (GM_getResourceText) {
          // 仅在支持GM_getResourceText的容器上进行动态数据更新
          // 且能防止谷歌百度页面规则大变动又需要更新脚本 - 特别是涉及翻页参数
          let config = GM_getResourceText("SiteConfigRules");
          eval(config);
          if (typeof (onlineDB) == "undefined") {
            console.error("线上数据为空");
          } else {
            DBSite = onlineDB;
          }
        }
        if (location.host.indexOf("xueshu.baidu.com") > -1) {
          curSite = DBSite.baidu_xueshu;
        } else if (location.host.indexOf(".baidu.com") > -1) {
          if (navigator.userAgent.replace(/(android|mobile|iphone)/igm, "") !== navigator.userAgent) {
            curSite = DBSite.mBaidu;
          } else {
            curSite = DBSite.baidu;
          }
        } else if (location.host.indexOf("zhihu.com") > -1) {
          curSite = DBSite.zhihu;
        } else if (location.host.indexOf("sogou") > -1) {
          curSite = DBSite.sogou;
        } else if (location.host.indexOf("so.com") > -1) {
          curSite = DBSite.haosou;
        } else if (location.host.indexOf("google") > -1) {
          curSite = DBSite.google;
        } else if (location.host.indexOf("bing") > -1) {
          curSite = DBSite.bing;
        } else if (location.host.indexOf("duckduckgo") > -1) {
          curSite = DBSite.duck;
        } else if (location.host.indexOf("dogedoge") > -1) {
          curSite = DBSite.doge;
        } else {
          curSite = DBSite.other;
        }
        curSite.pageNum = 1; // 当前页数
        curSite.pageLoading = false;
        curSite.pageUrl = "";
        if (curSite.SiteTypeID === SiteType.GOOGLE && location.href.replace(/tbm=(isch|lcl|shop|flm)/, "") !== location.href) {
          // 图片站 、地图站、购物站
          console.log("特殊站,不加载样式，不添加menu");
          CONST.isGoogleImageUrl = true;
        }

        if (curSite.SiteTypeID === SiteType.BAIDU) {
          CONST.useItem = ACConfig.baidu;
        } else if (curSite.SiteTypeID === SiteType.GOOGLE) {
          CONST.useItem = ACConfig.google;
        } else if (curSite.SiteTypeID === SiteType.BING) {
          CONST.useItem = ACConfig.bing;
        } else if (curSite.SiteTypeID === SiteType.DUCK) {
          CONST.useItem = ACConfig.duck;
        } else if (curSite.SiteTypeID === SiteType.DOGE) {
          CONST.useItem = ACConfig.doge;
        } else if (curSite.SiteTypeID === SiteType.SOGOU) {
          CONST.useItem = ACConfig.sogou;
        } else {
          CONST.useItem = ACConfig.baidu;
        }

        if (ACConfig.AdsStyleEnable) {
          CONST.StyleManger = FSBaidu(); // 添加设置项-单双列显示
        }

        console.log("%c[AC-Redirect] %cLet Me Introduce you a Very Good Search Engine：%c %s %cSearch Engine.", "font-weight:bold;color:cornflowerblue", "color:0", "font-weight:bold;color:darkorange", CONST.useItem.name.replace(CONST.useItem.name[0], CONST.useItem.name[0].toUpperCase()), "font-weight:normal;color:0");

        let bodyNameresetTimer = setInterval(function () {
          if (document.body != null) {
            document.body.setAttribute(CONST.useItem.name, "1");
            if (curSite.SiteTypeID === SiteType.BAIDU && location.href.indexOf("tn=news") >= 0) {
              document.body.setAttribute("news", "1");
            } else {
              document.body.removeAttribute("news");
            }
            // clearInterval(bodyNameresetTimer);
          }
        }, 800);
        let SiteBlock = {
          /**
           * 初始化Block样式
           */
          initStyle: function () {
            AC_addStyle("button.ghhider.ghhb[ac-user-alter='1']::before{content:'取消 - ';}#sp-ac-container .ac-block-item{color:#AAA;margin-left:48px;}#sp-ac-container .ac-block-itemdel{float:right;margin-left:0;padding:0 20px;cursor:pointer;}#sp-ac-container .ac-block-itemdel:hover{color:red;}#sp-ac-container .ac-block-high{color:#000;}.ac-blockList li:hover{background-color:#a3caff;color:white !important;cursor:pointer;} *[ac-needhide] *{display:none} *[ac-needhide] .blockShow{display:unset;cursor:pointer;} *[ac-needhide] .blockShow:hover{border:1px solid #DDD}button.ghhider{color:#555;background-color:#fcfcfc;font-family:sans-serif;margin:auto 2px;border:1px solid #ccc;border-radius:4px;padding:2px 3px}button.ghhider{font-size:12px}button.ghhider:hover{color:#006aff;background:#fff}",
              "AC-BlockStyle");
          },
          /**
           * 初始化屏蔽按钮加载
           */
          init: function () {
            let checkNodes = document.querySelectorAll(curSite.MainType + ":not([acblock])");
            for (let i = 0; i < checkNodes.length; i++) {
              try {
                let curNode = checkNodes[i];
                let faviconNode = curNode.querySelector(curSite.FaviconType);
                // if(curNode.hasAttribute("acblock")) continue;
                let host = getBaiduHost(faviconNode);
                // if(host == null) continue;
                let faNode = curNode.querySelector(curSite.BlockType);
                let nodeStyle = "display:unset;";
                if (ACConfig.isBlockBtnNotDisplay) {
                  nodeStyle = "display:none;";
                }
                faNode.insertAdjacentHTML("afterend", `<button style='${nodeStyle}' class='ghhider ghhb' href="${faviconNode.href || faviconNode.innerText}" meta="${host}" data-host="${host}" title='点击即可屏蔽 ${host} 放开，需要在自定义中手动配置放开'>block</button>`);

                curNode.setAttribute("acblock", "0");
                curNode.setAttribute("acblock", "0");
              } catch (e) {
              }
            }
            this.initListener();
            this.renderDisplay();
          },
          initListener: function () {
            let checkNodes = document.querySelectorAll("button.ghhider:not([acEnv])");
            for (let i = 0; i < checkNodes.length; i++) {
              checkNodes[i].addEventListener("click", this.doHideEnv);
              checkNodes[i].setAttribute("acEnv", "0");
            }
          },
          doHideEnv: function (env) {
            // 先插入数据---记得还要写入存储
            let node = env.sourceTarget || env.target;
            let host = node.dataset.host;
            if (node.getAttribute("ac-user-alter") == 1) {
              // 已经屏蔽之后，再次点击block应该是取消状态
              node.removeAttribute("ac-user-alter");
              ACConfig.UserBlockList.acremove(host);
            } else {
              // 正常屏蔽操作
              node.removeAttribute("ac-user-alter");
              ACConfig.UserBlockList.acpush(host);
            }
            DBConfig.UserBlockList = ACConfig.UserBlockList;
            GM_setValue("Config", JSON.stringify(DBConfig)); // 点击一次，保存一次
            SiteBlock.renderDisplay();
            env.stopPropagation();
          },
          // 刷新显示效果--耗时操作
          renderDisplay: function () {
            let checkNodes = document.querySelectorAll(curSite.MainType);
            let flag = "ac-needhide";
            for (let i = 0; i < checkNodes.length; i++) {
              try {
                let curNode = checkNodes[i];
                let curHost = getBaiduHost(curNode.querySelector(curSite.FaviconType));
                if (curHost == null) continue;
                {
                  let BlockBtn = curNode.querySelector(".ghhider.ghhb");
                  BlockBtn.dataset.host = BlockBtn.dataset.meta = curHost;
                }
                if (curNode.querySelector("button[ac-user-alter]") != null) continue; // 用户手动点过显示的，那么跳过check
                let regList = vueVM.cal_UserBlockListRegex; // 使用Vue的computed属性计算的数据值，一般根本不更新
                if (regList.findIndex(one => {
                  try {
                    return one.test(curHost); // 耗时操作
                  } catch (e) {
                    return m === curHost;
                  }
                }) >= 0) {
                  // 只检查在屏蔽表中的数据
                  if (!curNode.hasAttribute(flag)) {
                    if (ACConfig.isBlockDisplay) { // 对于不显示的数据可以进行移除操作
                      curNode.remove();
                      continue;
                    }
                    let curTitle = curNode.querySelector(curSite.BlockType);
                    curTitle = curTitle.innerText || curTitle.textContent;

                    if (curNode.hasAttribute(flag)) {
                      console.log("冲突了！！！");
                      continue;
                    }

                    curNode.setAttribute(flag, "1");
                    curNode.insertAdjacentHTML("afterBegin", `<span class="blockShow" title="如果需要一直显示，请在自定义中DIY目录移除本地址">${curTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -block by ${curHost}</span>`);

                    (function (xcur) {
                      // 已经屏蔽之后的内容，点击一下显示原始内容
                      xcur.querySelector(".blockShow").addEventListener("click", function (env) {
                        this.parentNode.querySelector("button.ghhider").setAttribute("ac-user-alter", "1"); // 这个属性用于保持在DOM更新时，按钮不变
                        xcur.removeAttribute(flag);
                        safeFunction(function () {
                          xcur.querySelector(".blockShow").remove();
                        });
                        env.stopPropagation();
                      });
                    })(curNode);
                  }
                } else {
                  curNode.removeAttribute(flag);
                  safeFunction(function () {
                    curNode.querySelector(".blockShow").remove();
                  });
                }
              } catch (e) {
              }
            }
          }
        };

        function addStyle(css) { //添加CSS的代码--copy的
          let pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" must="false" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
          );
          return document.insertBefore(pi, document.documentElement);
        }

        if (ACConfig.isAdsEnable) {
          // display已经无法隐藏他们了，需要用绝对的隐藏
          addStyle("#bottomads{display:none;} #content_left>div:not([id])>div[cmatchid], #content_left>div[id*='300']:not([class*='result']),#content_right td>div:not([id]),#content_right>br{position:absolute;top:-6666px;}");
        }
        if (curSite.SiteTypeID === SiteType.GOOGLE && ACConfig.isGooleInBaiduModeEnable) {
          safeWaitFunc("#logo img, #logocont img", function (node) {
            let faNode = node.parentNode.parentNode;
            faNode.classList.add("baidu");
            node.removeAttribute("src");
            node.src = "https://pic.rmb.bdstatic.com/c86255e8028696139d3e3e4bb44c047b.png";
            node.width = "125";
            node.removeAttribute("height");
          });
          safeWaitFunc("#main .logo img[alt='Google']", function (node) {
            node.removeAttribute("srcset");
            node.src = "https://www.baidu.com/img/bd_logo1.png?where=super";
            node.setAttribute("height", "59");
          }, 300);
          safeWaitFunc("form[role='search'] .logo img", function (node) {
            node.removeAttribute("srcset");
            node.src = "https://www.baidu.com/img/bd_logo1.png?where=super";
            node.setAttribute("height", "59");
          }, 300);
          document.title = document.title.replace(/^Google/, "百度一下，你就知道")
            .replace(/ - Google 搜索/, "_百度搜索")
            .replace(/ - Google Search/, "_百度搜索");
          safeWaitFunc("head", function () {
            let linkTarget = document.querySelector("link[type='image/x-icon']") || document.createElement('link');
            linkTarget.type = 'image/x-icon';
            linkTarget.rel = 'shortcut icon';
            linkTarget.href = 'https://www.baidu.com/favicon.ico';
            document.head.appendChild(linkTarget);
          })
        }
        if (ACConfig.normalizeDuck && curSite.SiteTypeID === SiteType.DUCK) {
          setTimeout(function () {
            try {
              DDG.settings.set("kn", 1, {  // 新窗口打开页面
                saveToCloud: true,
                forceTheme: true
              });
              DDG.settings.set("kav", 1, { // 连续显示搜索结果
                saveToCloud: true,
                forceTheme: true
              });
            } catch (e) {
            }
          }, 5000);
        }
        try {
          if (curSite.SiteTypeID !== SiteType.OTHERS) {
            document.addEventListener('DOMNodeInserted', MainCallback, false);
            document.addEventListener('keyup', MainCallback, false);
            RAFInterval(function () {
              rapidDeal(); // 定期调用，避免有时候DOM插入没有执行导致的问题
            }, 800);
          }

        } catch (e) {
          console.log(e);
        }
        safeWaitFunc("#sp-ac-content", function (checkNode) {
          var options = {
            el: checkNode,
            data: function () {
              return AllData;
            },
            methods: {
              labelShowHideEnv(e) {
                let cur = e.srcElement || e.target;
                let className = cur.parentNode.className.replace("container-label ", "");
                AC_addStyle(".XX>label,.XX>br{display:unset !important;}.XX>.label_hide{display:none !important;}".replace(/XX/gm, className),
                  "AC-ShowHideItem-" + className, "body");
                e.stopPropagation();
              },
              syncToBlockList(env) {
                this.ACConfig.UserBlockList = env.target.value.split("\n").filter(item => item !== '');
              },
              removeABlockListItem(e) {
                // 点击移除某个host数据时
                let target = e.srcElement || e.target;
                if (target.tagName.toLowerCase() === "label") {
                  let host = target.dataset.host;
                  ACConfig.UserBlockList.acremove(host);
                }
              },
              ckAddRule() {
                // 手动增加移除规则
                ACConfig.UserBlockList.acpush(this.other.addBlockItem);
                this.other.addBlockItem = "";
              },
              loadCustomStyle() {
                AC_addStyle(ACConfig.UserStyleText, "AC-userStyle", "head", true); // 用户自定义的样式表
              },
              saveConfig() {
                this.ACConfig.lastSaveTime = new Date().getTime();
                GM_setValue("Config", JSON.stringify(this.ACConfig));
                if(!this.ACConfig.doDisableSug){
                  acSetCookie("ORIGIN", 1, "www.baidu.com", new Date().getTime() - 86400000);
                  acSetCookie("ISSW", 1, null, new Date().getTime() - 86400000);
                  acSetCookie("ISSW", 1, "www.baidu.com", new Date().getTime() - 86400000);
                }
                setTimeout(function () {
                  window.location.reload();
                }, 200);
              },
              useThisHuyanColor(env) {
                this.ACConfig.defaultHuYanColor = env.target.value || env.target.dataset.value;
                console.log(this.ACConfig.defaultHuYanColor);
                CONST.StyleManger.loadHuYanStyle(this.ACConfig.defaultHuYanColor);
              },
              getUserBlockListRegex() {
                var list = [];
                this.ACConfig.UserBlockList.forEach(one => {
                  one !== null && list.push(new RegExp(one.replace("*", ".*")));
                })
                if (typeof (this.other.addBlockItem) !== "undefined" && this.other.addBlockItem !== "") {
                  list.push(new RegExp(this.other.addBlockItem.replace("*", ".*")));
                }
                return list;
              }
            },
            computed: {
              getBlockList() { // 会自动的render到html上去，不用手动去渲染一遍
                let insHTML = "";
                let UserBlockRegList = this.cal_UserBlockListRegex;
                for (let i = 0; i < this.ACConfig.UserBlockList.length; i++) {
                  let insClass = this.other.curHosts.findIndex(m => {
                    try {
                      return UserBlockRegList[i].test(m);
                    } catch (e) {
                      return m === ACConfig.UserBlockList[i];
                    }
                  }) >= 0 ? " ac-block-high" : ""; // 如果当前页面存在，则高亮
                  insHTML += `<li><label class="ac-block-item${insClass}" data-host="${this.ACConfig.UserBlockList[i]}">${this.ACConfig.UserBlockList[i]}</label><label class="ac-block-item ac-block-itemdel" data-host="${this.ACConfig.UserBlockList[i]}">x</label></li>\n`;
                }
                return insHTML;
              },
              cal_diyBlockListBtn() {
                if (this.other.showBlockListArea) {
                  return this.lan.use.fieldset_panel.setting_panel.setting_panel_second.blockEditBtnEnd_text;
                } else {
                  return this.lan.use.fieldset_panel.setting_panel.setting_panel_second.blockEditBtn_text;
                }
              },
              cal_UserBlockListRegex() {
                var list = [];
                this.ACConfig.UserBlockList.forEach(one => {
                  one !== null && list.push(new RegExp(one.replace("*", ".*")));
                })
                if (typeof (this.other.addBlockItem) !== "undefined" && this.other.addBlockItem !== "") {
                  list.push(new RegExp(this.other.addBlockItem.replace("*", ".*")));
                }
                return list;
              },
              AdsStyleModeChange() {
                return {value: CONST.useItem.AdsStyleMode, another: ACConfig.Style_BaiduLite};
              }
            },
            watch: {
              AdsStyleModeChange(data) {
                // 需要先删除原有的节点数据
                while (true) {
                  const {res, node} = checkDocmentHasNode("AC-")
                  if (res) node.remove();
                  else break;
                }
                safeRemove("style[class='AC-Style-expand'],style[class='AC-TwoPageExStyle'],style[class='AC-ThreePageExStyle'],style[class='AC-FourPageExStyle'],style[class='AC-style-logo'],style[class='AC-baiduLiteStyle']");
                acCssLoadFlag = false;
                CONST.StyleManger.init();
              }
            }
          };
          if (typeof (Vue) != "undefined") {
            if (Vue.version.charAt(0) == 2) {
              vueVM = new Vue(options);
            } else {
              vueVM = Vue.createApp(options).mount(checkNode);
            }
          } else {
            console.error("Vue 未完成初始化--程序无法有效执行");
          }
        }, 250);

        function MainCallback(e) {
          if (e.target != null && typeof (e.target.className) == "string" && e.target.className.toUpperCase().indexOf("AC-") == 0) {
            return;
          } //屏蔽掉因为增加css导致的触发insert动作
          rapidDeal();
          InsertSettingMenu();
          setTimeout(function () {
            ShowSetting();
          }, 1000) // 滞后窗口的加载，减少前期CPU争用
        }

        /*以下代码大部分来源于SuprePreloader 感谢 swdyh && ywzhaiqi && NLF 以及 mach6 大佬*/
        function ac_spfunc(e) {
          e.stopPropagation();
          var t, r = e.currentTarget;
          var Tween = {
                Linear: function Linear(e, t, r, n) {
                  return r * e / n + t;
                },
                Quad: {
                  easeIn: function easeIn(e, t, r, n) {
                    return r * (e /= n) * e + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return -r * (e /= n) * (e - 2) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return (e /= n / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t;
                  }
                },
                Cubic: {
                  easeIn: function easeIn(e, t, r, n) {
                    return r * (e /= n) * e * e + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return r * ((e = e / n - 1) * e * e + 1) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return (e /= n / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t;
                  }
                },
                Quart: {
                  easeIn: function easeIn(e, t, r, n) {
                    return r * (e /= n) * e * e * e + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return -r * ((e = e / n - 1) * e * e * e - 1) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return (e /= n / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t;
                  }
                },
                Quint: {
                  easeIn: function easeIn(e, t, r, n) {
                    return r * (e /= n) * e * e * e * e + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return r * ((e = e / n - 1) * e * e * e * e + 1) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return (e /= n / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t;
                  }
                },
                Sine: {
                  easeIn: function easeIn(e, t, r, n) {
                    return -r * Math.cos(e / n * (Math.PI / 2)) + r + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return r * Math.sin(e / n * (Math.PI / 2)) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return -r / 2 * (Math.cos(Math.PI * e / n) - 1) + t;
                  }
                },
                Expo: {
                  easeIn: function easeIn(e, t, r, n) {
                    return 0 == e ? t : r * Math.pow(2, 10 * (e / n - 1)) + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return e == n ? t + r : r * (1 - Math.pow(2, -10 * e / n)) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return 0 == e ? t : e == n ? t + r : (e /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (2 - Math.pow(2, -10 * --e)) + t;
                  }
                },
                Circ: {
                  easeIn: function easeIn(e, t, r, n) {
                    return -r * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return r * Math.sqrt(1 - (e = e / n - 1) * e) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return (e /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
                  }
                },
                Elastic: {
                  easeIn: function easeIn(e, t, r, n, a, o) {
                    return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
                      i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) + t);
                    var i;
                  },
                  easeOut: function easeOut(e, t, r, n, a, o) {
                    return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
                      i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), a * Math.pow(2, -10 * e) * Math.sin((e * n - i) * (2 * Math.PI) / o) + r + t);
                    var i;
                  },
                  easeInOut: function easeInOut(e, t, r, n, a, o) {
                    return 0 == e ? t : 2 == (e /= n / 2) ? t + r : (o || (o = n * (.3 * 1.5)), !a || a < Math.abs(r) ? (a = r,
                      i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * -.5 + t : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * .5 + r + t);
                    var i;
                  }
                },
                Back: {
                  easeIn: function easeIn(e, t, r, n, a) {
                    return null == a && (a = 1.70158), r * (e /= n) * e * ((a + 1) * e - a) + t;
                  },
                  easeOut: function easeOut(e, t, r, n, a) {
                    return null == a && (a = 1.70158), r * ((e = e / n - 1) * e * ((a + 1) * e + a) + 1) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n, a) {
                    return null == a && (a = 1.70158), (e /= n / 2) < 1 ? r / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + t : r / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + t;
                  }
                },
                Bounce: {
                  easeIn: function easeIn(e, t, r, n) {
                    return r - Tween.Bounce.easeOut(n - e, 0, r, n) + t;
                  },
                  easeOut: function easeOut(e, t, r, n) {
                    return (e /= n) < 1 / 2.75 ? r * (7.5625 * e * e) + t : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t;
                  },
                  easeInOut: function easeInOut(e, t, r, n) {
                    return e < n / 2 ? .5 * Tween.Bounce.easeIn(2 * e, 0, r, n) + t : .5 * Tween.Bounce.easeOut(2 * e - n, 0, r, n) + .5 * r + t;
                  }
                }
              },
              TweenM = ["Linear", "Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Elastic", "Back", "Bounce"],
              TweenEase = ["easeIn", "easeOut", "easeInOut"];
          var prefs = {
            s_method: 3,
            s_ease: 2,
            s_FPS: 60,
            s_duration: 333,
          };

          function getRelativeDiv(e) {
            var t = r.id;
            return (t = t.replace(/(sp-separator-)(.+)/, (function (t, r, n) {
              return r + String(Number(n) + ("pre" == e ? -1 : 1));
            }))) ? document.getElementById(t) : null;
          }

          function sp_transition(e, t) {
            var r = sp_transition.TweenF;
            r || (r = (r = Tween[TweenM[prefs.s_method]])[TweenEase[prefs.s_ease]] || r, sp_transition.TweenF = r);
            var n = 1e3 / prefs.s_FPS, a = 0, o = e, i = t - e, s = Math.ceil(prefs.s_duration / n),
                c = window.scrollX;
            !function transition() {
              var e = Math.ceil(r(a, o, i, s));
              window.scroll(c, e), a < s && (a++, setTimeout(transition, n));
            }();
          }

          function scrollIt(e, t) {
            sp_transition(e, t);
          }

          switch (e.target.id) {
            case "sp-sp-gotop":
              scrollIt(window.scrollY, 0);
              break;

            case "sp-sp-gopre":
              var n = getRelativeDiv("pre");
              if (!n) return;
              t = window.scrollY;
              var a = n.getBoundingClientRect().top;
              a = t - (r.getBoundingClientRect().top - a);
              scrollIt(t, a);
              break;

            case "sp-sp-gonext":
              var o = getRelativeDiv("next");
              if (!o) return;
              t = window.scrollY;
              var i = o.getBoundingClientRect().top;
              i = t + (-r.getBoundingClientRect().top + i);
              scrollIt(t, i);
              break;

            case "sp-sp-gobottom":
              scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
          }
        }

        function windowscroll(fn) {
          var beforeScrollTop = document.documentElement.scrollTop,
              fn = fn || function () {};
          setTimeout(function () { // 延时执行，避免刚载入到页面就触发翻页事件
            window.addEventListener("scroll", function (e) {
              var afterScrollTop = document.documentElement.scrollTop,
                  delta = afterScrollTop - beforeScrollTop;
              if (delta == 0) return false;
              fn(delta > 0 ? "down" : "up", e);
              beforeScrollTop = afterScrollTop;
            }, false);
          }, 1000)
        }

        windowscroll(function (direction, e) {
          if (direction === "down") { // 下滑才准备翻页
            let spl = document.querySelector("#sp-fw-a_enable");
            // 开启后，且在非（suprepreloader启用）时均可
            if (ACConfig.isAutopage === true && !(spl && spl.checked === true)) {
              var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
              let scrollDelta = 666;
              if (curSite.SiteTypeID === SiteType.GOOGLE) scrollDelta = 1024; // 毕竟谷歌加载缓慢的问题
              if (document.documentElement.scrollHeight <= document.documentElement.clientHeight + scrollTop + scrollDelta && curSite.pageLoading === false) {
                curSite.pageLoading = true;
                if (curSite.SiteTypeID === SiteType.DUCK) { // 可以用已有的方法来实现了
                  if (!ACConfig.normalizeDuck || parseInt(ACConfig.duck.AdsStyleMode) >= 3) {  // 如果没有开启，那么手动翻页 || 如果是双列的时候，似乎并不会自动触发翻页效果
                    document.querySelector("#links .result--more a").click();
                    setTimeout(function () {
                      curSite.pageLoading = false;
                    }, 5000);
                  }
                } else {
                  ShowPager.loadMorePage();
                }
              }
            }
          }
        });
        var ShowPager = {
          getFullHref: function (e) {
            if(e == null) return '';
            "string" != typeof e && (e = e.getAttribute("href"));
            var t = this.getFullHref.a;
            return t || (this.getFullHref.a = t = document.createElement("a")), t.href = e, t.href;
          },
          createDocumentByString: function (e) {
            if (e) {
              if ("HTML" !== document.documentElement.nodeName) return (new DOMParser).parseFromString(e, "application/xhtml+xml");
              var t;
              try {
                t = (new DOMParser).parseFromString(e, "text/html");
              } catch (e) {
              }
              if (t) return t;
              if (document.implementation.createHTMLDocument) t = document.implementation.createHTMLDocument("ADocument"); else try {
                (t = document.cloneNode(!1)).appendChild(t.importNode(document.documentElement, !1)),
                  t.documentElement.appendChild(t.createElement("head")), t.documentElement.appendChild(t.createElement("body"));
              } catch (e) {
              }
              if (t) {
                var r = document.createRange();
                r.selectNodeContents(document.body);
                var n = r.createContextualFragment(e);
                t.body.appendChild(n);
                for (var a, o = {
                  TITLE: !0,
                  META: !0,
                  LINK: !0,
                  STYLE: !0,
                  BASE: !0
                }, i = t.body, s = i.childNodes, c = s.length - 1; c >= 0; c--) o[(a = s[c]).nodeName] && i.removeChild(a);
                return t;
              }
            } else console.error("[AC-Script]", "没有找到要转成DOM的字符串");
          },
          loadMorePage: function () {
            if (curSite.pager) {
              let curPageEle = getElementByXpath(curSite.pager.nextLink);
              var url = this.getFullHref(curPageEle);
              if(url === '') return;
              var sepImgs = {
                top: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==",
                bottom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==",
                pre: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==",
                next: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC",
                next_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==",
                pre_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC",
              };
              AC_addStyle(".sp-separator{line-height:1.8 !important;opacity:1 !important;position:relative !important;float:none !important;top:0 !important;left:0 !important;min-width:366px;width:auto;text-align:center !important;font-size:14px !important;display:block !important;padding:3px 0 !important;margin:5px 10px 8px;clear:both !important;border-style:solid !important;border-color:#cccccc !important;border-width:1px !important;-moz-border-radius:30px !important;border-radius:30px !important;background-color:#ffffff !important;}.sp-separator:hover{box-shadow:0 0 11px rgba(33,33,33,0.2);}#sp-separator-hover{display:none;}.sp-separator:hover #sp-separator-hover{display:block;}.sp-separator .sp-someinfo{position:absolute !important;right:10px !important;font-size:12px !important;font-style:italic !important;background:none !important;}.sp-separator span{vertical-align: middle;cursor: pointer;padding: 0;margin: 0 5px;display: inline-block; width:22px;height:22px;}.sp-separator a{margin:0 20px 0 -6px !important;display:inline !important;text-shadow:#fff 0 1px 0 !important;background:none !important;color:#595959 !important;}.sp-separator input{padding:0 !important;line-height:23px !important;}.sp-separator .sp-md-span{font-weight:bold !important;margin:0 20px !important;}#sp-sp-md-number{width:6ch !important;vertical-align:middle !important;display:inline-block !important;text-align:left !important;}" +
                `.ac_sp_top{background-image:url('${sepImgs.top}')}` +
                `.ac_sp_pre{background-image:url('${sepImgs.pre}')}` +
                `.ac_sp_next{background-image:url('${sepImgs.next}')}` +
                `.ac_sp_bottom{background-image:url('${sepImgs.bottom}')}` +
                `.ac_sp_next_gray{background-image:url('${sepImgs.next_gray}')}` +
                `.ac_sp_pre_gray{background-image:url('${sepImgs.pre_gray}')}`,
                "AC-Preload")
              if (curSite.pageUrl === url) {
                console.error("[AC-Script]", "翻页到达底部了 - 或者异常 - 出现异常请直接反馈作者修改");
                return;
              }// 不会重复加载相同的页面
              curSite.pageUrl = url;
              // 对url的数据进行读取
              curSite.pager.startFilter && curSite.pager.startFilter();
              GM_xmlhttpRequest({
                url: url,
                method: "GET",
                timeout: 5000,
                onload: function (response) {
                  try {
                    var newBody = ShowPager.createDocumentByString(response.responseText);
                    // xx.evaluate(xpath, xx)
                    let pageElems = getAllElements(curSite.pager.pageElement, newBody, newBody);
                    let toElement = getAllElements(curSite.pager.HT_insert[0])[0];
                    if (pageElems.length >= 0) {
                      // 处理最后一个翻页按钮
                      let nextEs = document.querySelectorAll("#sp-sp-gonext");
                      if (nextEs.length > 0) {
                        let lastE = nextEs[nextEs.length - 1];
                        lastE.classList.replace("ac_sp_next_gray", "ac_sp_next");
                      }
                      // 插入翻页按钮元素
                      curSite.pageNum++;
                      let addTo = "beforeend";
                      if (curSite.pager.HT_insert[1] == 1) addTo = "beforebegin";
                      toElement.insertAdjacentHTML(addTo, `<div class='sp-separator AC' id='sp-separator-ACX'>
                          <a class='sp-sp-nextlink' target='_blank'><b>第 <span style='color:#595959!important;'>ACX</span> 页</b></a>
                          <span id="sp-sp-gotop" class='ac_sp_top' title='去到顶部'></span>
                          <span id="sp-sp-gopre" class='${curSite.pageNum <= 2 ? "ac_sp_pre_gray" : "ac_sp_pre"}' title='上滚一页' ></span>
                          <span id="sp-sp-gonext" class='ac_sp_next_gray' title='下滚一页'></span>
                          <span id="sp-sp-gobottom" class='ac_sp_bottom' title='去到底部' ></span></div>`
                        .replace(/ACX/gm, curSite.pageNum));
                      // 插入新页面元素
                      pageElems.forEach(function (one) {
                        toElement.insertAdjacentElement(addTo, one);
                      });
                      document.querySelectorAll(".sp-separator.AC:not([bind])").forEach(function (per) {
                        per.setAttribute("bind", 1);
                        per.addEventListener("click", ac_spfunc);
                      });
                      // 替换待替换元素
                      try {
                        let oriE = getAllElements(curSite.pager.replaceE);
                        let repE = getAllElements(curSite.pager.replaceE, newBody, newBody);
                        if (oriE.length === repE.length) {
                          for (var i = 0; i < oriE.length; i++) {
                            oriE[i].outerHTML = repE[i].outerHTML;
                          }
                        }
                      } catch (e) {
                        console.log(e);
                      }
                    }
                  } catch (e) {
                    console.log(e);
                  }
                  curSite.pageLoading = false;
                },
                onerror: function () {
                  curSite.pageLoading = false;
                }
              });
            }
          },
        };

        function AutoRefresh() {
          if (!ACConfig.isRightDisplayEnable) {
            // 移除右边栏 -注意在#wrapper>#con-at>#result-op xpath-log有时候很重要，不能隐藏
            AC_addStyle("#content_right{display:none !important;}#content_right td>div:not([id]){display:none;}#content_right .result-op:not([id]){display:none!important;}#rhs{display:none;}",
              "AC-RightRemove");
          } else {
            if (CONST.useItem.AdsStyleMode == 2) {
              // 非双列模式下尽可能的显示右侧栏
              AC_addStyle("@media screen and (min-width: 1250px) {#container{width: 80% !important;}.container_l #content_right{margin-right: calc(18% - 210px);position: absolute;right: -200px;display:block !important;overflow:hidden;width: 22vw !important;}",
                "AC-RightRemove");
            }
          }
          if (!ACConfig.isALineEnable) {
            AC_addStyle("a,a em{text-decoration:none}", "AC-NoLine");// 移除这些个下划线
          }
          if (ACConfig.isUserStyleEnable) {
            AC_addStyle(ACConfig.UserStyleText, "AC-userStyle");// 用户自定义的样式表
          } else {
            safeRemove("style[class='AC-userStyle']")
          }
          AC_addStyle(
            ".opr-recommends-merge-imgtext{display:none!important;}" + // 移除百度浏览器推广
            ".res_top_banner{display:none!important;}" + // 移除可能的百度HTTPS劫持显示问题
            ".headBlock, body>div.result-op{display:none;}" // 移除百度的搜索结果顶部一条的建议文字 & 移除可能出现的白屏现象
            , "AC-special-BAIDU"
          );
          /*"自定义"按钮效果*/
          AC_addStyle(".achide{display:none;} .newFuncHighLight{color:red;font-weight: 100;background-color: yellow;font-weight: 600;}#sp-ac-container label{display:inline;}#u{width:319px}#u #myuser{display:inline-block;margin: 13px -10px 0 24px;}.site-wrapper #myuser,.sogou-set-box #myuser,#gbw #myuser{margin-right:15px;} #myuser,#myuser .myuserconfig{padding:0;margin:0}#myuser{display:inline-block;}#myuser .myuserconfig{display:inline-block;line-height:1.5;background:#4e6ef2;color:#fff;font-weight:700;text-align:center;padding:6px;border:2px solid #E5E5E5;}#myuser .myuserconfig{box-shadow:0 0 10px 3px rgba(0,0,0,.1);border-radius: 6px}#myuser .myuserconfig:hover{background:#4662d9 !important;color:#fff;cursor:pointer;border:2px solid #73A6F8;}",
            "AC-MENU_Btn");
          /*自定义页面内容效果*/
          AC_addStyle('body[baidu] #sp-ac-container .container-label:not([class*="baidu"])>label:not([class="label_hide"]),\n' +
            '  body[google] #sp-ac-container .container-label:not([class*="google"])>label:not([class="label_hide"]),\n' +
            '  body[bing] #sp-ac-container .container-label:not([class*="bing"])>label:not([class="label_hide"]),\n' +
            '  body[sogou] #sp-ac-container .container-label:not([class*="sogou"])>label:not([class="label_hide"]),\n' +
            '  body[duck] #sp-ac-container .container-label:not([class*="duck"])>label:not([class="label_hide"]),\n' +
            '  body[doge] #sp-ac-container .container-label:not([class*="doge"])>label:not([class="label_hide"]),\n' +
            '  body[baidu] #sp-ac-container .container-label:not([class*="baidu"])>br,\n' +
            '  body[google] #sp-ac-container .container-label:not([class*="google"])>br,\n' +
            '  body[bing] #sp-ac-container .container-label:not([class*="bing"])>br,\n' +
            '  body[duck] #sp-ac-container .container-label:not([class*="duck"])>br,\n' +
            '  body[doge] #sp-ac-container .container-label:not([class*="doge"])>br,\n' +
            '  body[sogou] #sp-ac-container .container-label:not([class*="sogou"])>br,\n' +
            '  body[baidu] #sp-ac-container .container-label[class*="baidu"]>.label_hide,\n' +
            '  body[google] #sp-ac-container .container-label[class*="google"]>.label_hide,\n' +
            '  body[bing] #sp-ac-container .container-label[class*="bing"]>.label_hide,\n' +
            '  body[sogou] #sp-ac-container .container-label[class*="sogou"]>.label_hide,\n' +
            '  body[duck] #sp-ac-container .container-label[class*="duck"]>.label_hide,\n' +
            '  body[doge] #sp-ac-container .container-label[class*="doge"]>.label_hide\n' + // 注意尾部逗号
            '{' +
            'display:none;\n' +
            '}#sp-ac-container .label_hide{cursor:pointer;margin-left:8%;color:blue}#sp-ac-container .linkhref,#sp-ac-container .label_hide:hover{color:red}#sp-ac-container .linkhref:hover{font-weight:bold}#sp-ac-container label.menu-box-small{max-width:16px;max-height:16px;cursor:pointer;display:inline-block}.AC-CounterT{background:#FD9999}body  #sp-ac-container{position:fixed;top:3.9vw;right:8.8vw}#sp-ac-container{z-index:999999;text-align:left;background-color:white}#sp-ac-container *{font-size:13px;color:black;float:none}#sp-ac-main-head{position:relative;top:0;left:0}#sp-ac-span-info{position:absolute;right:1px;top:0;font-size:10px;line-height:10px;background:none;font-style:italic;color:#5a5a5a;text-shadow:white 0px 1px 1px}#sp-ac-container input{vertical-align:middle;display:inline-block;outline:none;height:auto;padding:0px;margin-bottom:0px;margin-top:0px}#sp-ac-container input[type="number"]{width:50px;text-align:left}#sp-ac-container input[type="checkbox"]{border:1px solid #B4B4B4;padding:1px;margin:3px;width:13px;height:13px;background:none;cursor:pointer;visibility:visible;position:static}#sp-ac-container input[type="button"]{border:1px solid #ccc;cursor:pointer;background:none;width:auto;height:auto}#sp-ac-container li{list-style:none;margin:3px 0;border:none;float:none;cursor:default;}#sp-ac-container fieldset{border:2px groove #ccc;-moz-border-radius:3px;border-radius:3px;padding:4px 9px 6px 9px;margin:2px;display:block;width:auto;height:auto}#sp-ac-container legend{line-height:20px;margin-bottom:0px}#sp-ac-container fieldset > ul{padding:0;margin:0}#sp-ac-container ul#sp-ac-a_useiframe-extend{padding-left:40px}#sp-ac-rect{position:relative;top:0;left:0;float:right;height:10px;width:10px;padding:0;margin:0;-moz-border-radius:3px;border-radius:3px;border:1px solid white;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8);-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8);box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8);opacity:0.8}#sp-ac-dot,#sp-ac-cur-mode{position:absolute;z-index:9999;width:5px;height:5px;padding:0;-moz-border-radius:3px;border-radius:3px;border:1px solid white;opacity:1;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9);-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9);box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)}#sp-ac-dot{right:-3px;top:-3px}#sp-ac-cur-mode{left:-3px;top:-3px;width:6px;height:6px}#sp-ac-content{padding:0;margin:0px;-moz-border-radius:3px;border-radius:3px;border:1px solid #A0A0A0;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3);-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3);box-shadow:-2px 2px 5px rgba(0,0,0,0.3)}#sp-ac-main{padding:5px;border:1px solid white;-moz-border-radius:3px;border-radius:3px;background-color:#F2F2F7;background:-moz-linear-gradient(top,#FCFCFC,#F2F2F7 100%);background:-webkit-gradient(linear,0 0,0 100%,from(#FCFCFC),to(#F2F2F7))}#sp-ac-foot{position:relative;left:0;right:0;min-height:20px}#sp-ac-savebutton{position:absolute;top:0;right:2px}#sp-ac-container .endbutton{margin-top:8px}#sp-ac-container .sp-ac-spanbutton{border:1px solid #ccc;-moz-border-radius:3px;border-radius:3px;padding:2px 3px;cursor:pointer;background-color:#F9F9F9;-webkit-box-shadow:inset 0 10px 5px white;-moz-box-shadow:inset 0 10px 5px white;box-shadow:inset 0 10px 5px white}#sp-ac-container .sp-ac-spanbutton:hover{background-color:#DDD}label[class="newFunc"]{color:blue}',
            "AC-MENU_Page");
        }

        AutoRefresh();
        try {
          GM_registerMenuCommand('AC-重定向脚本设置', function () {
            document.querySelector("#sp-ac-content").style.display = 'block';
          });
        } catch (e) {
        }

        /**这东西以后会用上**/
        function getSearchValue() {
          let kvl = location.search.substr(1).split("&");
          let searchV = "";
          for (let i = 0; i < kvl.length; i++) {
            let value = kvl[i].replace(/^(wd|query|q)=/, "");
            if (value !== kvl[i]) {
              searchV = value;
            }
          }
          //  '+' 百度、搜狗、必应、谷歌、好搜
          searchV = searchV.replace("+", " ");
          return searchV;
        }

        function rapidDeal() {
          try {
            if (insertLocked === false && curSite.SiteTypeID !== SiteType.OTHERS) {
              insertLocked = true;
              ACHandle(); // 处理主重定向
              AutoRefresh();
              if (ACConfig.isAdsEnable) { // 放进来，减少卡顿
                removeAD_baidu_sogou();
              }
              if (ACConfig.AdsStyleEnable) { // 单独不需要定时器-頻繁触发-载入css
                FSBaidu();
              }
              if (ACConfig.isFaviconEnable) { // 显示favicon图标
                addFavicon(document.querySelectorAll(curSite.FaviconType)); // 添加Favicon显示
              }
              if (ACConfig.doDisableSug) { // 不启用移动预测[默认]
                acSetCookie("ORIGIN", 2, "www.baidu.com");
                acSetCookie("ISSW", 1);
                acSetCookie("ISSW", 1, "www.baidu.com");
              }
              if (ACConfig.isAdsEnable) { // 移除多余的广告内容
                removeAD_baidu_sogou();
              }
              if (ACConfig.isCounterEnable) { // 显示计数器
                addCounter(document.querySelectorAll(curSite.CounterType));
              }else{
                document.querySelectorAll(".AC-CounterT").forEach(one => {
                  one.parentElement.removeAttribute('SortIndex');
                  one.remove()
                })
              }
              if (ACConfig.isBlockEnable && curSite.SiteTypeID !== SiteType.SOGOU) { // 启用屏蔽功能- 对每一个新增的地址都要处理
                SiteBlock.initStyle();
                SiteBlock.init();
              }
              setTimeout(function () {
                insertLocked = false;
              }, 200);
            }
          } catch (e) {
            console.log(e);
          }
        }

        function acSetCookie(cname, cvalue, domain, exdays) {
          exdays = exdays || 30;
          let d = new Date();
          domain = (domain ? "domain=" + domain : "") + ";";
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          let expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + domain + expires + ";path=/";
        }
        function getBaiduHost(sitetpNode) {
          if (curSite.SiteTypeID === SiteType.BAIDU) {
            var href = null;
            if (sitetpNode instanceof HTMLElement) {
              href = sitetpNode.getAttribute("href")
            }
            if (href != null && href.indexOf("baidu.com/link") < 0) {
              // 已经解析出来了
              return getHost(href);
            }
          }
          return getHost(sitetpNode.innerText || sitetpNode.textContent);
        }

        function ACHandle() {
          // 处理主重定向
          if (curSite.SiteTypeID === SiteType.OTHERS || curSite.SiteTypeID === SiteType.SOGOU) return;
          if (ACConfig.isRedirectEnable) {
            if (curSite.Stype_Normal !== null && curSite.Stype_Normal !== "") {
              // 百度搜狗去重定向-普通模式【注意不能为document.query..】
              resetURLNormal(document.querySelectorAll(curSite.Stype_Normal));
              if (checkISBaiduMain()) {
                document.querySelectorAll(".s_form .index-logo-src[src*='gif'], .s_form .index-logo-srcnew[src*='gif']").forEach(function (per) {
                  per.src = "https://pic.rmb.bdstatic.com/c86255e8028696139d3e3e4bb44c047b.png";
                  // 神奇的百度百家号
                  // https://imgsa.baidu.com/fex/pic/item/8718367adab44aedcc91ab2bbe1c8701a08bfb26.jpg
                  // https://baidu.ntaow.com/newcss/baidu.png
                });
              }
            }
            if (curSite.SiteTypeID === SiteType.GOOGLE) removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
            if (curSite.SiteTypeID === SiteType.MBAIDU) removeMobileBaiduDirectLink(); // 处理百度手机版本的重定向地址
            removeRedirectLinkTarget(); // 只移除知乎的重定向问题 & 百度学术重定向问题
            safeRemove(".res_top_banner"); // 移除百度可能显示的劫持
          }

          try { // 放入异常捕获，防止由于html插入过慢导致的js终止
            if (!document.querySelector("#sp-ac-style").checked) {
              document.querySelectorAll("input[name*='sp-ac-a_force_style_']").forEach(per => {
                per.setAttribute("disabled", "disabled");
                per.parentNode.setAttribute("title", "请开启自定义样式")
              });
            } else {
              document.querySelectorAll("input[name*='sp-ac-a_force_style_']").forEach(per => {
                per.removeAttribute("disabled");
                per.parentNode.setAttribute("title", "AC-自定义样式内容")
              });
            }
            if (!document.querySelector("#sp-ac-block").checked) {
              document.querySelectorAll("#sp-ac-removeBlock, #sp-ac-blockBtnDisplay").forEach(per => {
                per.setAttribute("disabled", "disabled");
                per.parentNode.setAttribute("title", "请开启自定义样式")
              });
            } else {
              document.querySelectorAll("#sp-ac-removeBlock, #sp-ac-blockBtnDisplay").forEach(per => {
                per.removeAttribute("disabled");
                per.parentNode.setAttribute("title", "AC-自主拦截功能")
              });
            }
          } catch (e) {
          }
        }

        function ACtoggleSettingDisplay(e) {
          e.stopPropagation();
          // 显示？隐藏设置界面
          if (document.querySelector(".iframe-father iframe") == null) {
            document.querySelector(".iframe-father").insertAdjacentHTML("beforeend", "<iframe src='https://ghbtns.com/github-btn.html?user=langren1353&repo=GM_script&type=star&count=true' frameborder='0' scrolling='0' style='height: 20px;max-width: 108px;padding-left:5px;box-sizing: border-box;margin-bottom: -5px;display:unset !important;'></iframe>");
          }
          setTimeout(function () {
            if (document.querySelector("#sp-ac-content").style.display === 'block') {
              document.querySelector("#sp-ac-content").style.display = 'none';
            } else {
              DBConfig.oldVersion = ACConfig.oldVersion = GM_info.script.version; // 只需要写出一部分的关键数据即可
              GM_setValue("Config", JSON.stringify(DBConfig));
              document.querySelector(".ac-newversionDisplay").style.display = 'none';
              document.querySelector("#sp-ac-content").style.display = 'block';
            }
          }, 100);
          return false;
        }

        function ShowSetting() {
          if (curSite.SiteTypeID === SiteType.OTHERS) return;
          // 如果不存在的话，那么自己创建一个-copy from superPreload
          if (document.body !== null && document.querySelector("#sp-ac-container") === null) {
            let Container = document.createElement('div');
            Container.id = "sp-ac-container";
            Container.innerHTML =
              `<div id="sp-ac-content" style="display: none;">
                <div id="sp-ac-main">
                  <fieldset id="sp-ac-autopager-field" style="display:block;">
                    <legend class="iframe-father">
                       <a class="linkhref" href="https://www.ntaow.com/aboutscript.html" target="_blank" v-text="lan.use.fieldset_panel.panel_title"></a>
                    </legend>
                    <ul class="setting-main" v-show="!other.showSecondPanel">
                      <li>
                        <label :title="lan.use.fieldset_panel.setting_panel.redirect_title">
                          <input id="sp-ac-redirect" name="sp-ac-a_separator" type="checkbox"  v-model="ACConfig.isRedirectEnable">
                          {{ lan.use.fieldset_panel.setting_panel.redirect_text }}
                        </label>
                        <label>
                          <input id="sp-ac-isEnLang" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isEnLang">
                          {{ lan.use.fieldset_panel.setting_panel.useEn_text }}
                        </label>
                      </li>
                      <li>
                        <label :title="lan.use.fieldset_panel.setting_panel.ads_title">
                          <input id="sp-ac-ads" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isAdsEnable">
                          {{ lan.use.fieldset_panel.setting_panel.ads_text }}
                        </label>
                        <label :title="lan.use.fieldset_panel.setting_panel.autopage_title" class="">
                          <input id="sp-ac-isAutopage" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isAutopage">
                          {{ lan.use.fieldset_panel.setting_panel.autopage_text }}
                        </label>
                      </li>
                      <li>
                        <label title="lan.use.fieldset_panel.setting_panel.blockenable_title">
                          <input id="sp-ac-block" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isBlockEnable">
                          {{ lan.use.fieldset_panel.setting_panel.blockenable_text }}
                        </label>
                        <span id="sp-ac-blockdiybutton" class="sp-ac-spanbutton" @click="other.showSecondPanel = true" :title="lan.use.fieldset_panel.setting_panel.blockDiyBtn_title" style="margin-left: 5px;color: #888888;" v-text="lan.use.fieldset_panel.setting_panel.blockDiyBtn_text"></span>
                        <label :title="lan.use.fieldset_panel.setting_panel.blockenable_text">
                          <input :title="lan.use.fieldset_panel.setting_panel.blockAutoRemove_title" v-model="ACConfig.isBlockDisplay" id="sp-ac-removeBlock" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.blockAutoRemove_text }}
                        </label>
                        <label :title="lan.use.fieldset_panel.setting_panel.blockBtnShow_title">
                          <input :title="lan.use.fieldset_panel.setting_panel.blockBtnShow_title"  v-model="ACConfig.isBlockBtnNotDisplay" id="sp-ac-blockBtnDisplay" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.blockBtnShow_text }}
                        </label>
                      </li>
                      <li>
                        <label :title="lan.use.fieldset_panel.setting_panel.userStyle_text">
                          <input id="sp-ac-style" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.AdsStyleEnable">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_text }}
                        </label>
                      </li>
                      <li>
                        <!------------百度样式-------------->
                        <label class="container-label baidu">
                          <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_baidu_lable" @click="labelShowHideEnv"></label>
                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_baidu" value="0" v-model="ACConfig.baidu.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_origin }}
                          </label>
                          <label>
                          <input  name='sp-ac-huyan_style_baidu' type='checkbox' v-model="ACConfig.baidu.HuYanMode">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_huyan }}
                          </label>
                          <label class=""><input name="sp-ac-a_force_style_baidulite" type="checkbox" v-model="ACConfig.Style_BaiduLite">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_baiduLite }}
                          </label>
                          <br>
                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_baidu" value="1" v-model="ACConfig.baidu.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_1line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_baidu" value="2" type="radio" v-model="ACConfig.baidu.AdsStyleMode">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_1line_enter }}
                          </label>
                          <label><input name="sp-ac-a_force_style_baidu" value="3" type="radio" v-model="ACConfig.baidu.AdsStyleMode">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_2line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_baidu" value="4" type="radio" v-model="ACConfig.baidu.AdsStyleMode">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_3line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_baidu" value="5" type="radio" v-model="ACConfig.baidu.AdsStyleMode">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_4line }}
                          </label>
                          <br>
                        </label>
                        <!------------百度样式-------------->
                        <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;"></div>
                        <!------------谷歌样式-------------->
                        <label class="container-label google">
                          <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_google_lable" @click="labelShowHideEnv"></label>
                          <label style="margin-left:20px">
                          <input name="sp-ac-a_force_style_google" value="0" type="radio" v-model="ACConfig.google.AdsStyleMode">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_origin }}
                          </label>
                          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_google_huyan"><input name="sp-ac-huyan_style_google" v-model="ACConfig.google.HuYanMode" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_huyan }}
                          </label>
                          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_google_googleLite" style=""><input name="sp-ac-google_in_baidumode" v-model="ACConfig.isGooleInBaiduModeEnable" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_googleLite }}
                          </label>
                          <br>
                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_google" value="1" v-model="ACConfig.google.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_1line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_google" value="2" v-model="ACConfig.google.AdsStyleMode" type="radio" checked="">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_1line_enter }}
                          </label>
                          <label><input name="sp-ac-a_force_style_google" value="3" v-model="ACConfig.google.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_2line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_google" value="4" v-model="ACConfig.google.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_3line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_google" value="5" v-model="ACConfig.google.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_google_4line }}
                          </label>
                          <br>
                        </label>
                        <!------------谷歌样式-------------->
                        <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;"></div>
                        <!------------必应样式-------------->
                        <label class="container-label bing">
                          <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_bing_lable" @click="labelShowHideEnv"></label>
                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_bing" v-model="ACConfig.bing.AdsStyleMode" value="0" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_origin }}
                          </label>
                          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_bing_huyan"><input name="sp-ac-huyan_style_bing" v-model="ACConfig.bing.HuYanMode" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_huyan }}
                          </label>
                          <br>
                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_bing" v-model="ACConfig.bing.AdsStyleMode" value="1" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_1line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_bing" value="2" v-model="ACConfig.bing.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_1line_enter }}
                          </label>
                          <label><input name="sp-ac-a_force_style_bing" value="3" v-model="ACConfig.bing.AdsStyleMode" type="radio" checked="">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_2line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_bing" value="4" v-model="ACConfig.bing.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_3line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_bing" value="5" v-model="ACConfig.bing.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_4line }}
                          </label>
                        </label>
                        <!------------必应样式-------------->
<!--                        <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;"></div>-->
<!--                        &lt;!&ndash;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;搜狗样式&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
<!--                        <label class="container-label sogou">-->
<!--                          <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_sogou_lable" @click="labelShowHideEnv"></label>-->
<!--                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_sogou" v-model="ACConfig.sogou.AdsStyleMode" value="0" type="radio">-->
<!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_origin }}-->
<!--                          </label>-->
<!--                          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_sogou_huyan"><input name="sp-ac-huyan_style_sogou" v-model="ACConfig.sogou.HuYanMode" type="checkbox">-->
<!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_huyan }}-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label style="margin-left:20px">-->
<!--                          <input name="sp-ac-a_force_style_sogou" value="1" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
<!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_1line }}-->
<!--                          </label>-->
<!--                          <label><input name="sp-ac-a_force_style_sogou" value="2" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
<!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_1line_enter }}-->
<!--                          </label>-->
<!--                          <label><input name="sp-ac-a_force_style_sogou" value="3" v-model="ACConfig.sogou.AdsStyleMode" type="radio" checked="">-->
<!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_2line }}-->
<!--                          </label>-->
<!--                          <label><input name="sp-ac-a_force_style_sogou" value="4" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
<!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_3line }}-->
<!--                          </label>-->
<!--                          <label><input name="sp-ac-a_force_style_sogou" value="5" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
<!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_4line }}-->
<!--                          </label>-->
<!--                        </label>-->
<!--                        &lt;!&ndash;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;搜狗样式&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
                        <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;"></div>
                        <!------------鸭鸭搜样式-------------->
                        <label class="container-label duck">
                          <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_duck_lable" @click="labelShowHideEnv"></label>
                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_duck" v-model="ACConfig.duck.AdsStyleMode" value="0" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_origin }}
                          </label>
                          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_duck_huyan"><input name="sp-ac-huyan_style_duck" v-model="ACConfig.duck.HuYanMode" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_huyan }}
                          </label>
                           <label :title="lan.use.fieldset_panel.setting_panel.userStyle_duck_normal" style=""><input v-model="ACConfig.normalizeDuck" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_normal }}
                          </label>
                          <br>
                          <label style="margin-left:20px">
                          <input name="sp-ac-a_force_style_duck" value="1" v-model="ACConfig.duck.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_1line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_duck" value="2" v-model="ACConfig.duck.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_1line_enter }}
                          </label>
                          <label><input name="sp-ac-a_force_style_duck" value="3" v-model="ACConfig.duck.AdsStyleMode" type="radio" checked="">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_2line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_duck" value="4" v-model="ACConfig.duck.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_3line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_duck" value="5" v-model="ACConfig.duck.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_4line }}
                          </label>
                        </label>
                        <!------------鸭鸭搜样式-------------->
                        <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;"></div>
                        <!------------多吉样式-------------->
                        <label class="container-label doge">
                          <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_doge_lable" @click="labelShowHideEnv"></label>
                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_doge" v-model="ACConfig.doge.AdsStyleMode" value="0" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_origin }}
                          </label>
                          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_doge_huyan"><input name="sp-ac-huyan_style_doge" v-model="ACConfig.doge.HuYanMode" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_huyan }}
                          </label>
                           <label :title="lan.use.fieldset_panel.setting_panel.userStyle_doge_normal" style=""><input v-model="ACConfig.normalizeDoge" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_normal }}
                          </label>
                          <br>
                          <label style="margin-left:20px">
                          <input name="sp-ac-a_force_style_doge" value="1" v-model="ACConfig.doge.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_1line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_doge" value="2" v-model="ACConfig.doge.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_1line_enter }}
                          </label>
                          <label><input name="sp-ac-a_force_style_doge" value="3" v-model="ACConfig.doge.AdsStyleMode" type="radio" checked="">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_2line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_doge" value="4" v-model="ACConfig.doge.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_3line }}
                          </label>
                          <label><input name="sp-ac-a_force_style_doge" value="5" v-model="ACConfig.doge.AdsStyleMode" type="radio">
                          {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_4line }}
                          </label>
                        </label>
                      <!------------多吉样式-------------->
                      </li>
                      <!------------护眼模式设置-------------->
                      <li>
                        <label :title="lan.use.fieldset_panel.setting_panel.huyanMode_title">
                          <input id="sp-ac-usercolor" v-model="ACConfig.isUserColorEnable" name="sp-ac-a_force" type="checkbox" checked="">
                          {{ lan.use.fieldset_panel.setting_panel.huyanMode_text }}
                        </label>
                      </li>
                      <li>
                        <label class="menu-box-container" :title="lan.use.fieldset_panel.setting_panel.huyanMode_title">
                          <label style="margin-left:20px;" v-text="lan.use.fieldset_panel.setting_panel.huyanColor_text"></label>
                          <input class="sp-ac-menuhuyanColor" @input.stop="useThisHuyanColor" v-model="ACConfig.defaultHuYanColor" type="color" :title="lan.use.fieldset_panel.setting_panel.huyanColor_title" style="cursor: pointer;margin-top:-0.05rem;height:23px;">
                          <label class="menu-box-small" data-value="#DEF1EF" @click.stop="useThisHuyanColor" style="background-color:#DEF1EF;">&nbsp;&nbsp;&nbsp;&nbsp;</label>
                          <label class="menu-box-small" data-value="#F3F2EE" @click.stop="useThisHuyanColor" style="background-color:#F3F2EE;">&nbsp;&nbsp;&nbsp;&nbsp;</label>
                          <label class="menu-box-small" data-value="#E5E5E5" @click.stop="useThisHuyanColor" style="background-color:#E5E5E5;">&nbsp;&nbsp;&nbsp;&nbsp;</label>
                          <label class="linkhref" data-href="https://www.ntaow.com/colorpicker.html" style="cursor:pointer;margin-right: 10px;" onclick="window.open(this.dataset.href)" v-text="lan.use.fieldset_panel.setting_panel.huyanColorMore_text"></label>
                        </label>
                      </li>
                      <!------------Favicon图标设置-------------->
                      <li>
                        <label>
                          <input :title="lan.use.fieldset_panel.setting_panel.favicon_title" v-model="ACConfig.isFaviconEnable" id="sp-ac-favicon" name="sp-ac-a_force" type="checkbox" checked="">
                          {{ lan.use.fieldset_panel.setting_panel.favicon_text }}
                        </label>
                      </li>
                      <li>
                        <label>
                          <label style="margin-left:20px;" v-text="lan.use.fieldset_panel.setting_panel.favicon_defaultIcon_text"></label>
                          <input id="sp-ac-faviconUrl" name="sp-ac-a_force" v-model="ACConfig.defaultFaviconUrl" value="https://ae01.alicdn.com/kf/HTB1dRY0X8OD3KVjSZFFq6An9pXay.jpg" style="width:55%;margin-top:-0.3em;" type="input">
                        </label>
                      </li>
                      <!------------移除百度搜索预测-------------->
                      <li>
                        <label>
                          <input :title="lan.use.fieldset_panel.setting_panel.searchOrigin_title" v-model="ACConfig.doDisableSug" id="sp-ac-sug_origin" name="sp-ac-a_force" type="checkbox" checked="">
                          {{ lan.use.fieldset_panel.setting_panel.searchOrigin_text }}
                        </label>
                      </li>
                      <!------------附加7、8、9-------------->
                      <li>
                        <label>
                          <input id="sp-ac-right" v-model="ACConfig.isRightDisplayEnable" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.showRight_text }}
                        </label>
                        <label>
                          <input id="sp-ac-counter" v-model="ACConfig.isCounterEnable" name="sp-ac-a_force" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.showCounter_text }}
                        </label>
                        <label>
                          <input id="sp-ac-aline" v-model="ACConfig.isALineEnable" name="sp-ac-a_force" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.showALine_text }}
                        </label>
                      </li>
                      <!------------自定义样式内容-------------->
                      <li>
                        <label>
                          <input id="sp-ac-userstyle" v-model="ACConfig.isUserStyleEnable" name="sp-ac-a_force" type="checkbox">
                          {{ lan.use.fieldset_panel.setting_panel.showUserStyle_text }}
                        </label>
                      </li>
                      <li>
                        <textarea id="sp-ac-userstyleTEXT" v-model="ACConfig.UserStyleText" @keyup="loadCustomStyle" @change="loadCustomStyle" @paste="loadCustomStyle" name="sp-ac-a_force" style="width:85%;height: 66px;margin-left:30px;" type="input" ></textarea>
                      </li>
                      <li>
                        <a class="linkhref" target="_blank" :href="lan.use.fieldset_panel.setting_panel.contactMe_url" v-text="lan.use.fieldset_panel.setting_panel.contactMe_text"></a>
                      </li>
                    </ul>
                    <!------------拦截域名设置panel-------------->
                    <ul class="setting-second" v-show="other.showSecondPanel">
                      <li style='margin-bottom: 8px !important;'>
                        <label>
                          <span id='sp-ac-blockdiybutton-back' @click="other.showSecondPanel = other.showBlockListArea = false" class='sp-ac-spanbutton'>{{ lan.use.fieldset_panel.setting_panel.setting_panel_second.backBtn_text }}</span>
                        </label>
                        {{ lan.use.fieldset_panel.setting_panel.setting_panel_second.blockLabel_text }}}
                      </li>
                      <li style='margin-bottom: 8px !important;'>
                        <span id='sp-ac-blockdiybutton-diylist' class='sp-ac-spanbutton' @click="other.showBlockListArea = !other.showBlockListArea" v-text="cal_diyBlockListBtn"></span>
                      </li>
                      <li class='ac-blockList' @click="removeABlockListItem" style='max-height:60vh;overflow-y: scroll;'>
                        <ul v-show="!other.showBlockListArea" v-html="getBlockList"></ul>
                      </li>
                      <li class='ac-blockBoxCon' style='max-height: 60vh;text-align: center;margin-left: 26px;'>
                        <textarea v-show="other.showBlockListArea"  @keyup="syncToBlockList" @change="syncToBlockList" @paste="syncToBlockList" rows="20" v-text="ACConfig.UserBlockList.join('\\n')"></textarea>
                      </li>
                      <li>
                        {{ lan.use.fieldset_panel.setting_panel.setting_panel_second.addBlockLabel_text }}<input class="sp-ac-addRuleOne" @keyup.enter="ckAddRule" v-model="other.addBlockItem" style='width:55%;'>
                        <span id='sp-ac-addRulebutton' class='sp-ac-spanbutton endbutton' @click="ckAddRule" style='position: relative !important;line-height: 17px;' v-text="lan.use.fieldset_panel.setting_panel.setting_panel_second.addBtnLabel_text">新增</span>
                      </li>
                    </ul>
                    <!------------保存、取消按钮-------------->
                    <span id="sp-ac-cancelbutton" class="sp-ac-spanbutton endbutton" :title="lan.use.fieldset_panel.setting_panel.cancelBtn_text" style="position: relative;float: left;" v-text="lan.use.fieldset_panel.setting_panel.cancelBtn_text"></span>
                    <span id="sp-ac-savebutton" @click="saveConfig" class="sp-ac-spanbutton endbutton" :title="lan.use.fieldset_panel.setting_panel.okBtn_text" style="position: relative;float: right;" v-text="lan.use.fieldset_panel.setting_panel.okBtn_text"></span>
                  </fieldset>
                </div>
              </div>`;
            try {
              document.body.appendChild(Container);
            } catch (e) {
              console.log(e);
            }
          }
          let allNodes = document.querySelectorAll(".AC-faviconT, .AC-CounterT");
          for (let i = 0; i < allNodes.length; i++) {
            if (allNodes[i].getAttribute('acClick') == null) {
              allNodes[i].setAttribute('acClick', '1');
              try {
                allNodes[i].addEventListener('click', function (e) {
                  return ACtoggleSettingDisplay(e);
                }, true);
              } catch (e) {
                console.log(e);
              }
            }
          }
          try {
            document.querySelector("body #sp-ac-container").addEventListener('click', function (e) {
              e.stopPropagation(); // 阻止点击自身的时候关闭
            }, false);
            document.querySelector("body").addEventListener('click', function (e) {
              safeRemove(function () {
                document.querySelector("#sp-ac-content").style.display = 'none';
              });
            }, false);
          } catch (e) {
          }

        }

        function removeMobileBaiduDirectLink() {
          let nodes = document.querySelectorAll("#page #page-bd #results .result:not([ac_redirectStatus])");
          for (let i = 0; i < nodes.length; i++) {
            let curNode = nodes[i];
            safeFunction(function () {
              let curData = JSON.parse(curNode.dataset.log.replace(/'/gm, "\""));
              let trueLink = curData.mu;
              curNode.querySelector("article").setAttribute("rl-link-href", trueLink);
              curNode.querySelectorAll("a").forEach(function (per) {
                per.setAttribute("href", trueLink);
              });
            });
            curNode.setAttribute("ac_redirectStatus", "1");
          }
        }

        function removeOnMouseDownFunc() {
          try {
            let resultNodes = document.querySelectorAll(".g .rc .r a");
            for (let i = 0; i < resultNodes.length; i++) {
              let one = resultNodes[i];
              one.setAttribute("onmousedown", ""); // 谷歌去重定向干扰
              one.setAttribute("target", "_blank"); // 谷歌链接新标签打开
            }
          } catch (e) {
            console.log(e);
          }
        }

        function removeRedirectLinkTarget() {
          if (curSite.SiteTypeID === SiteType.ZHIHU) {
            let nodes = document.querySelectorAll(".RichText a[href*='//link.zhihu.com/?target']");
            for (let i = 0; i < nodes.length; i++) {
              let url = decodeURIComponent(nodes[i].href.replace(/https?:\/\/link\.zhihu\.com\/\?target=/, ""));
              nodes[i].href = url;
            }
          } else if (curSite.SiteTypeID === SiteType.BAIDU_XUESHU) {
            let xnodes = document.querySelectorAll("a[href*='sc_vurl=http']");
            for (let j = 0; i < xnodes.length; j++) {
              let xurl = getUrlAttribute(xnodes[j].href, "sc_vurl", true);
              xnodes[j].href = xurl;
            }
          }
        }

        // 提取url元素的参数值
        function getUrlAttribute(url, attribute, needDecode) {
          let searchValueS = (url.substr(1) + "").split("&");
          for (let i = 0; i < searchValueS.length; i++) {
            let key_value = searchValueS[i].split("=");
            let reg = new RegExp("^" + attribute + "$");
            if (reg.test(key_value[0])) {
              let searchWords = key_value[1];
              return needDecode ? decodeURIComponent(searchWords) : searchWords;
            }
          }
        }

        function resetURLNormal(list) {
          // 注意有重复的地址，尽量对重复地址进行去重
          var hasDealHrefSet = new Set();
          for (var i = 0; i < list.length; i++) {
            // 此方法是异步，故在结束的时候使用i会出问题-严重!
            // 采用闭包的方法来进行数据的传递
            let curNode = list[i];
            let curhref = curNode.href;
            if (list[i] !== null && list[i].getAttribute("ac_redirectStatus") == null) {
              list[i].setAttribute("ac_redirectStatus", "0");
              let len1 = hasDealHrefSet.size;
              hasDealHrefSet.add(curhref);
              let len2 = hasDealHrefSet.size;
              if (len1 === len2) continue; // 说明数据已经处理过，存在相同的记录
              if (curhref.indexOf("www.baidu.com/link") > -1 ||
                curhref.indexOf("m.baidu.com/from") > -1 ||
                curhref.indexOf("www.sogou.com/link") > -1 ||
                curhref.indexOf("so.com/link") > -1) {
                (function (c_curnode, c_curhref) {
                  let url = c_curhref.replace(/^http:/, "https:");
                  if (curSite.SiteTypeID === SiteType.BAIDU && url.indexOf("eqid") < 0) {
                    // 如果是百度，并且没有带有解析参数，那么手动带上
                    url = url + "&wd=&eqid=";
                  }
                  let gmRequestNode = GM_xmlhttpRequest({
                    // from: "acxhr",
                    extData: c_curhref, // 用于扩展
                    url: url,
                    headers: {"Accept": "*/*", "Referer": c_curhref.replace(/^http:/, "https:")},
                    method: "GET",
                    timeout: 5000,
                    onreadystatechange: function (response) {
                      // 由于是特殊返回-并且好搜-搜狗-百度都是这个格式，故提出
                      DealRedirect(gmRequestNode, c_curhref, response.responseText, "URL='([^']+)'")
                      // 这个是在上面无法处理的情况下，备用的 tm-finalurldhdg  tm-finalurlmfdh
                      if (response.responseHeaders.indexOf("tm-finalurl") >= 0) {
                        let relURL = Reg_Get(response.responseHeaders, "tm-finalurl\\w+: ([^\\s]+)");
                        if (relURL == null || relURL === "" || relURL.indexOf("www.baidu.com/search/error") > 0) return;
                        // TODO 这里出现了数据无法修改原始地址的问题
                        DealRedirect(gmRequestNode, c_curhref, relURL);
                      }
                    }
                  });
                })(curNode, curhref); //传递旧的网址过去，读作c_curhref
              }
              // curNode.addEventListener("mouseover", ()=> {
              //   const ABKey = RedirectMap.get(curNode.href); // 原始 -> 之后的链接
              //   if(ABKey) curNode.href = ABKey;
              // })
              // curNode.addEventListener("mouseout", ()=> {
              //   const BAKey = RedirectMap.get(curNode.href); // 之后的连接 -> 原始
              //   if(BAKey) curNode.href = BAKey;
              // })
            }
          }
          if (hasDealHrefSet.size > 0 && list.length - hasDealHrefSet.size > 0) console.log("丢弃掉", list.length - hasDealHrefSet.size, "个重复链接");
        }

        var DealRedirect = function (request, curNodeHref, respText, RegText) {
          if (respText == null || typeof (respText) == "undefined") return;
          let resultResponseUrl = "";
          if (RegText != null) {
            resultResponseUrl = Reg_Get(respText, RegText);
          } else {
            resultResponseUrl = respText;
          }
          if (resultResponseUrl !== null && resultResponseUrl !== "" && resultResponseUrl.indexOf("www.baidu.com/link") < 0) {
            try {
              if (curSite.SiteTypeID === SiteType.SOGOU) curNodeHref = curNodeHref.replace(/^https:\/\/www.sogou.com/, "");
              let host = getHost(resultResponseUrl);
              // RedirectMap.set(curNodeHref, resultResponseUrl); // 进行一个数据关联
              // RedirectMap.set(resultResponseUrl, curNodeHref); // 进行一个数据关联

              document.querySelectorAll("*[href*='" + curNodeHref + "']").forEach(function (per) {
                if (per.querySelector("span") != null) {
                  per.lastChild .insertAdjacentHTML("beforeEnd", "&nbsp;-&nbsp;" + host);
                }
                per.setAttribute("ac_redirectStatus", "2");
                per.setAttribute("href", resultResponseUrl);
                // per.setAttribute("data-orihref", per.href);
                if (per.hasAttribute("meta")) {
                  per.setAttribute("meta", host);
                  per.dataset.host = host;
                }
              });
              otherData.other.curHosts.acpush(host);
              request.abort();
            } catch (e) {
              // console.log(e);
            }
          }
        };

        function removeAD_baidu_sogou() { // 移除网站自有广告
          if (curSite.SiteTypeID === SiteType.BAIDU) {
            // safeRemove(".c-container /deep/ .c-container");
            // 移除shadowDOM广告；搜索关键字：淘宝；然后点击搜索框，广告会多次重现shadowdom
            safeFunction(function () {
              $('.c-container /deep/ .c-container').has('.f13>span:contains("广告")').remove();
            });
            safeFunction(function () {
              $('#content_right>div').has('a:contains("广告")').remove();
            });
            // 移除标准广告
            safeFunction(function () {
              $('#content_left>div').has('span:contains("广告")').remove();
            });
            // 移除右侧栏顶部-底部无用广告
            safeFunction(function () {
              $("#content_right td>div:not([id]),#content_right>br").remove();
            });
            // 移除顶部可能出现的 "为您推荐"
            safeFunction(function () {
              getAllElements("//div[@id='content_left']//div[contains(@class,'_rs')]").forEach(one => one.remove())
            });
          } else if (curSite.SiteTypeID === SiteType.MBAIDU) {
            /****移除手机模式上的部分广告****/
            safeFunction(function () {
              $('#page-bd #results>div:not([class*="result"])').remove();
            });
            safeFunction(function () {
              $('#page-bd #results>div:not([class])').remove();
            });
          } else if (curSite.SiteTypeID === SiteType.SOGOU) {
            // safeRemove("#promotion_adv_container");
            // safeRemove("#kmap_business_title");
            // safeRemove("#kmap_business_ul");
            // safeRemove(".sponsored");
            // try {
            //   document.querySelector(".rvr-model[style='width:250px;']").style = "display:none";
            // } catch (e) {
            // }
          } else if (curSite.SiteTypeID === SiteType.SO) {
            safeRemove("#so_kw-ad");
            safeRemove("#m-spread-left");
            safeRemove("#m-spread-bottom");
          } else if (curSite.SiteTypeID === SiteType.BING) {
            safeRemove(".b_ad");
          } else if (curSite.SiteTypeID === SiteType.GOOGLE) {
            safeRemove("#bottomads");
          }
        }

        function addCounter(citeList) {
          let cssText = "position:relative;z-index:1;margin-right:4px;display:inline-block;color:white;font-family:'微软雅黑';font-size:16px;text-align:center;width:22px;line-height:22px;border-radius:50%;";
          let div = document.createElement('div');
          for (let i = 0; i < citeList.length; i++) {
            let index = citeList[i].getAttribute('SortIndex');
            if (index === null || typeof (index) === "undefined") {
              citeList[i].setAttribute('SortIndex', CONST.sortIndex);
              citeList[i].inner = citeList[i].innerHTML;
              div.innerHTML = "<em class='AC-CounterT' style=" + cssText + ">" + CONST.sortIndex + "</em>";
              citeList[i].innerHTML = div.innerHTML + citeList[i].inner;
              CONST.sortIndex++;
            } else {
              if (index !== (i + 1) % 100) { // 按需更新
                citeList[i].querySelector(".AC-CounterT").innerText = (i + 1) % 100;
              }
            }
          }
        }

        var HostReg = new RegExp(/(https?:\/\/)?([^/\s]+)/i);

        function getHost(sbefore) {
          sbefore = (sbefore && sbefore.trim()).replace(/\s-\s\d{4}-\d{1,2}-\d{1,2}/, "") || "";
          let send;
          let result = sbefore.split('-');
          // --搜狗百度专用；如果第一个是中文的话，地址就是第二个
          if ((result.length > 1 && new RegExp("[\\u4E00-\\u9FFF]+", "g").test(sbefore)) && (curSite.SiteTypeID === SiteType.BAIDU || curSite.SiteTypeID === SiteType.SOGOU)) {
            sbefore = result[1];
          }
          // 此时sbefore几乎是等于网址了，但是有时候会有多的空格，多的内容，多的前缀http，多余的路径
          let res = HostReg.exec(sbefore);
          send = (res && res[2].trim()) || "";
          // send = sbefore.replace(/(\/[^/]*|\s*)/, "").replace(/<[^>]*>/g, "").replace(/https?:\/\//g, "").replace(/<\/?strong>/g, "").replace(/<\/?b>/g, "").replace(/<?>?/g, "").replace(/( |\/).*/g, "").replace(/\.\..*/, "");
          if (send === "") return null;
          if (send.indexOf(".") < 0) return null;
          if (send.indexOf("↵") >= 0) return null;
          return send.trim();
        }

        function addFavicon(citeList) {
          if (curSite.SiteTypeID !== SiteType.DOGE) {
            for (let index = 0; index < citeList.length; index++) {
              if (null == citeList[index].getAttribute("ac_faviconStatus")) {
                let curNode = citeList[index];
                let targetNode = curNode;
                let url = getBaiduHost(targetNode);
                if (url == null) { // 跳过baidu.click
                  continue;
                } else {
                  otherData.other.curHosts.acpush(url);
                }
                let faviconUrl = url;
                let II = 0;
                for (; II <= 5; II++) {
                  targetNode = targetNode.parentNode;
                  if (targetNode != null && targetNode.querySelector(curSite.FaviconAddTo) != null) {
                    break;
                  }
                }
                //console.log(index+"."+faviconUrl+"--"+II);
                if (II <= 5) {
                  // 先用父节点判断一下是否存在img
                  let tmpHTML = targetNode.innerHTML;
                  let pos = tmpHTML.indexOf("fav-url")
                    & tmpHTML.indexOf("favurl")
                    & tmpHTML.indexOf("tit-ico")
                    & tmpHTML.indexOf("img_fav rms_img")
                    & tmpHTML.indexOf("c-tool-")
                    & tmpHTML.indexOf("span class=\"c-icon c-icon-")
                    & tmpHTML.indexOf("img class=\"xA33Gc");
                  //他自己已经做了favicon了
                  if (pos > -1) {
                    // console.log("已有图片：");
                    curNode.setAttribute("ac_faviconStatus", "-2");
                    continue;
                  }
                  targetNode = targetNode.querySelector(curSite.FaviconAddTo);
                  // 特殊处理BING
                  // if (curSite.SiteTypeID == SiteType.BING) curNode = curNode.querySelector("h2");
                  //https://api.byi.pw/favicon/?url=???? 不稳定
                  //http://"+faviconUrl+"/cdn.ico?defaulticon=http://soz.im/favicon.ico 不稳定
                  //https://www.xtwind.com/api/index.php?url=???? 挂了。。。
                  //https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
                  //www.google.com/s2/favicons?domain=764350177.lofter.com
                  //如果地址不正确，那么丢弃
                  let host = faviconUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2");
                  if (targetNode.querySelector(".AC-faviconT") == null && host.length > 3) {
                    let insNode = document.createElement("img");
                    // curNode = curNode.children[0] || curNode.firstChild ; // firstChild容易遇到text对象
                    curNode.setAttribute("ac_faviconStatus", "1");
                    // curNode.insertBefore(insNode, curNode.firstChild);
                    insNode.className = "AC-faviconT";
                    insNode.setAttribute("referrerpolicy", "no-referrer");
                    insNode.style = "position:relative;z-index:1;vertical-align:sub;height:16px;width:16px;margin-right:5px;margin-bottom: 2px;";

                    insNode.src = "https://favicon.yandex.net/favicon/" + host;
                    insNode.setAttribute("faviconID", "0");
                    // curNode.innerHTML = insNode.outerHTML + curNode.innerHTML;
                    // curNode.insertAdjacentHTML("afterEnd", insNode.innerHTML);
                    let beforeIndex = 0;
                    if (targetNode.childNodes[beforeIndex].className === "AC-CounterT") {
                      beforeIndex = 1;
                    }
                    targetNode.insertBefore(insNode, targetNode.childNodes[beforeIndex]);
                    (function (xcur) {
                      insNode.onload = function (env) {
                        let imgNode = xcur.querySelector(".AC-faviconT");
                        if (imgNode.naturalWidth < 10) {
                          imgNode.setAttribute("old-src", imgNode.src);
                          imgNode.src = ACConfig.defaultFaviconUrl;
                        }
                        imgNode.onload = "javascript:void(0);";
                      };
                    })(targetNode);
                  }
                }
              }
            }
          } else {
            var checkNodes = document.querySelectorAll("#links_wrapper #links .results_links_deep");
            for (let faNode of checkNodes) {
              let faviconNode = faNode.querySelector(".result__icon img");
              let beforeNode = faNode.querySelector(".result__title a");
              if(faviconNode && beforeNode){
                faviconNode.style = "vertical-align:middle;margin-right:5px;";
                beforeNode.parentNode.insertBefore(faviconNode, beforeNode);
              }
            }
          }
        }

        function InsertSettingMenu() {
          if ((curSite.SiteTypeID !== SiteType.OTHERS) && document.querySelector("#myuser") == null) {
            try {
              let parent = document.querySelector("#u, #gb>div>div>div, #b_header>#id_h, .top-bar .sogou-set-box, #header_wrapper .js-hl-button, body[doge] #header_wrapper #header"); //baidu; google; bing; 搜狗
              parent.style = "width: auto;";
              let userAdiv = document.createElement("div");
              userAdiv.id = "myuser";
              if (ACConfig.isEnLang) {
                userAdiv.innerHTML = "<input type='submit' class='myuserconfig' value='CUSTOM'/><span class='ac-newversionDisplay' style='background-color: red;float: left;height: 8px;width: 8px;border-radius: 4px;display:" + (CONST.hasNewFuncNeedDisplay ? "unset" : "none") + "'>&nbsp;</span>";
              } else {
                userAdiv.innerHTML = "<input type='submit' class='myuserconfig' value='自定义'/><span class='ac-newversionDisplay' style='background-color: red;float: left;height: 8px;width: 8px;border-radius: 4px;display:" + (CONST.hasNewFuncNeedDisplay ? "unset" : "none") + "'>&nbsp;</span>";
              }
              parent.insertBefore(userAdiv, parent.childNodes[0]);
              document.querySelector("#myuser .myuserconfig").addEventListener("click", function (e) {
                return ACtoggleSettingDisplay(e);
              }, true);
            } catch (e) {
            }
          }
        }
      }(); // 读取个人设置信息
      /**
       * @param callback 回调函数，需要返回是否结束True、False、否则相当于定时器
       * callback return:
       *  true = 倒计时
       *  false = 计时器
       *  none = 计时器
       * @param period 周期，如:200ms
       * @param runNow 立即执行
       */
      function RAFInterval(callback, period, runNow) {
        // 一秒60次，对应1秒1000ms
        const needCount = period / 1000 * 60;
        let times = 0; // 已经计数的数量

        if(runNow === true){ // 对于立即执行函数的立即判定，否则进行
          const shouldFinish = callback();
          if(shouldFinish) return;
        }

        function step() {
          if(times < needCount){
            // 计数未结束-继续计数
            times++;
            requestAnimationFrame(step)
          }else{
            // 计数结束-停止计数，判定结果
            const shouldFinish = callback() || false;
            if(!shouldFinish){
              // 返回值为false，重启计数器
              times = 0;
              requestAnimationFrame(step)
            }else{
              // 返回值为true，结束计数器
              return
            }
          }
        }
        requestAnimationFrame(step);
      }

      function safeFunction(func) {
        safeRemove(func);
      }

      function safeWaitFunc(selector, callbackFunc, time, notClear) {
        time = time || 50;
        notClear = notClear || false;
        let doClear = !notClear;
        RAFInterval(function () {
          if ((typeof (selector) == "string" && document.querySelector(selector) != null)) {
            callbackFunc(document.querySelector(selector));
            if (doClear) return true;
          } else if ((typeof (selector) == "function" && selector().length > 0)) {
            callbackFunc(selector()[0]);
            if (doClear) return true;
          }
        }, time, true);
      }

      function AC_addStyle(css, className, addToTarget, isReload, initType) { // 添加CSS代码，不考虑文本载入时间，只执行一次-无论成功与否，带有className
        RAFInterval(function () {
          /**
           * addToTarget这里不要使用head标签,head标签的css会在html载入时加载，
           * html加载后似乎不会再次加载，body会自动加载
           * **/
          let addTo = document.querySelector(addToTarget);
          if (typeof (addToTarget) == "undefined")
            addTo = (document.head || document.body || document.documentElement || document);
          isReload = isReload || false; // 默认是非加载型
          initType = initType || "text/css";
          // 如果没有目标节点(则直接加) || 有目标节点且找到了节点(进行新增)
          if (typeof (addToTarget) == "undefined" || (typeof (addToTarget) != "undefined" && document.querySelector(addToTarget) != null)) {
            // clearInterval(tout);
            // 如果true 强行覆盖，不管有没有--先删除
            // 如果false，不覆盖，但是如果有的话，要退出，不存在则新增--无需删除
            if (isReload === true) {
              safeRemove("." + className);
            } else if (isReload === false && document.querySelector("." + className) != null) {
              // 节点存在 && 不准备覆盖
              return true;
            }
            let cssNode = document.createElement("style");
            if (className != null) cssNode.className = className;
            cssNode.setAttribute("type", initType);
            cssNode.innerHTML = css;
            try {
              addTo.appendChild(cssNode);
            } catch (e) {
              console.log(e.message);
            }
            return true;
          }
        }, 20, true);
      }

      function safeRemove(cssSelector_OR_NEWfunction) {
        if (typeof (cssSelector_OR_NEWfunction) == "string") {
          try {
            let removeNodes = document.querySelectorAll(cssSelector_OR_NEWfunction);
            for (let i = 0; i < removeNodes.length; i++)
              removeNodes[i].remove();
          } catch (e) {
          }
        } else if (typeof (cssSelector_OR_NEWfunction) == "function") {
          try {
            cssSelector_OR_NEWfunction();
          } catch (e) {
          }
        } else {
          console.log("未知命令：" + cssSelector);
        }
      }

      function checkISBaiduMain() { // 首页=true;非首页=false
        // 如果是百度 &&  没有(百度搜索结果的标志-[存在]百度的内容) return;
        return !(curSite.SiteTypeID === SiteType.BAIDU && !(location.href.replace(/(&|\?)(wd|word)=/, "") !== location.href || document.querySelector("#content_left") ||
            ((document.querySelector("#kw") && document.querySelector("#kw").getAttribute("value")) || "") !== "")
        )
      }

      /**
       * 检查document的子节点是否含有元素
       * @param nodeClass 待检查元素
       * @returns {boolean} T|F
       */
      function checkDocmentHasNode(nodeClass) {
        for (let i = 0; i < document.childNodes.length; i++) {
          if (document.childNodes[i].data && document.childNodes[i].data.indexOf(nodeClass) > 0)
            return {res: true, node: document.childNodes[i]};
        }
        return {res: false, node: null};
      }

      function FSBaidu() { // thanks for code from 浮生@未歇 @page https://greasyfork.org/zh-TW/scripts/31642
        // debug("初始化FSBAIDU");

        CONST.StyleManger = {
          /**
           * 导入css内容为【文本格式】！！！
           * @param data css内容
           * @param toClassName 预期的类名
           */
          importStyle: function (data, toClassName, useNormalCSS, mustLoad) {
            if (typeof (data) == "undefined") {
              // 这个居然在VM上出问题了，很奇怪
              console.error("GM_getResourceText获取内容数据异常");
              return
            }
            useNormalCSS = useNormalCSS || false;
            mustLoad = mustLoad || false;
            // 普通浏览器模式--但是似乎样式加载的优先级低于head中的style优先级
            if (!useNormalCSS) {
              // 通过must参数来判定style是否加载
              // data = data.replace(/baidu.com#\$#/igm, '');
              if (data.indexOf("http") !== 0) data = "data:text/css;utf-8," + encodeURIComponent(data);
              var {res,} = checkDocmentHasNode(toClassName);
              if (!res) {
                let pi = document.createProcessingInstruction(
                  "xml-stylesheet",
                  `type="text/css" must="${mustLoad}" class="${toClassName}" href="${data}"`
                ); // 注意必须要双引号
                document.insertBefore(pi, document.documentElement);
              }
            } else {
              /* **********多重样式-兼容edge && 黑夜脚本************ */
              AC_addStyle(data, toClassName, "head", false, "text/css");
              /* **********多重样式-兼容edge && 黑夜脚本************ */
            }
          },
          //加载普通样式
          loadCommonStyle: function () {
            this.loadStyle(CONST.useItem.name + "CommonStyle", CONST.useItem.name + "CommonStyle");
          },
          loadBaiduLiteStyle: function () {
            CONST.StyleManger.loadStyle("baiduLiteStyle", "baiduLiteStyle", null, false, true);
            CONST.StyleManger.loadPlainToCSS("baiduLiteStyle");
          },
          loadStyle: async function (styleName, insClassName, setUrl, useNormalCSS, mustLoad) {
            // 全部采用text/css的内容来载入
            // 如果是debug模式。或者是gm模式
            if (isLocalDebug) {
              debug("本地-加载样式：" + insClassName);
              setUrl = setUrl || "http://127.0.0.1/" + styleName + ".css";
              this.importStyle(setUrl, "AC-" + insClassName, useNormalCSS, mustLoad);
            } else if (isNewGM === true) {
              // 仅用于GreaseMonkey4.0+
              debug("特殊模式-加载样式：" + insClassName);
              setUrl = setUrl || "https://baidu.htt5.com/newcss/" + styleName + ".css";
              this.importStyle(setUrl, "AC-" + insClassName, useNormalCSS, mustLoad);
            } else {
              debug("加载样式：" + insClassName);
              // TamperMonkey + GreaseMonkey < 4.0 + ViolentMonkey (4.0GreaseMonkey不支持GetResource方法)
              this.importStyle(await GM_getResourceText(styleName), "AC-" + insClassName, useNormalCSS, mustLoad);
            }
          },
          //加载护眼模式样式
          loadHuYanStyle: function (color) {
            let style = "body[baidu],#wrapper #head,#wrapper #s_tab,form.fm .s_ipt_wr.bg{background-color:#fff}#container #content_left .result-op,#container #content_left .result,#container #rs,#container #content_right{background-color:#aaa;border:1px double #a2d7d4;border-radius:0}#container #content_left .result-op:hover,#container #content_left .result:hover{background-color:#ccc!important}#container #content_left .result-op h3,#container #content_left .c-container h3,#container #rs .tt{background-color:#bbb}.na_cnt .nws_itm,.nws_itmb,#b_content #b_results li,body #b_header{background-color:#aaa;border:1px double #a2d7d4;border-radius:0}#b_content #b_results li:hover{background-color:#ccc!important}#b_content #b_results li h2{background-color:#bbb}#rso .g,.bkWMgd>.g,.bkWMgd g-inner-card,#rhscol #rhs,#rhscol #rhs .g>div,.c2xzTb .g,.ruTcId .g,.fm06If .g,.cUnQKe .g,.HanQmf .g{background-color:#aaa;border:1px double #a2d7d4;border-radius:0}#rso .g:hover,.bkWMgd>.g:hover{background-color:#ccc!important}.bkWMgd .g div.r,#rso .g h3{background-color:#bbb}";
            if (ACConfig.isUserColorEnable) {
              color = color || ACConfig.defaultHuYanColor || "#FFFFFF";
            } else {
              color = color || "#FFFFFF";
            }
            if (color.indexOf("#") !== 0 || color.length < 7) return;
            if (isNewGM === false) {
              style = GM_getResourceText("MainHuYanStyle");
            }
            style = style
              .replace(/#aaa(a*)/igm, color)
              .replace(/#bbb(b*)/igm, this.Lighter(color, -40))
              .replace(/#ccc(c*)/igm, this.Lighter(color, 45));
            AC_addStyle(style, "AC-" + CONST.useItem.name + "HuYanStyle" + (isNewGM ? "" : "-File"), "head", true); // 需要修改的，所以为true
          },
          clip255: function (value) {
            if (value > 255) return 255;
            if (value < 0) return 0;
            return value;
          },
          Lighter: function (oriRGB, deltaY) {
            // 按比例缩放 + 1/deltaY
            // HEX 2 RGB
            let rgb = oriRGB.replace("#", "");
            let R = parseInt("0x" + rgb.substr(0, 2));
            let G = parseInt("0x" + rgb.substr(2, 2));
            let B = parseInt("0x" + rgb.substr(4, 2));
            // RGB 2 YUV
            let Y = ((66 * R + 129 * G + 25 * B + 128) >> 8) + 16;
            let U = ((-38 * R - 74 * G + 112 * B + 128) >> 8) + 128;
            let V = ((112 * R - 94 * G - 18 * B + 128) >> 8) + 128;
            Y = Y * (1 + 1.0 / deltaY);// 提高亮度
            // YUV 2 RGB
            R = this.clip255((298 * (Y - 16) + 409 * (V - 128) + 128) >> 8);
            G = this.clip255((298 * (Y - 16) - 100 * (U - 128) - 208 * (V - 128) + 128) >> 8);
            B = this.clip255((298 * (Y - 16) + 516 * (U - 128) + 128) >> 8);
            return "#" + ((R << 16) + (G << 8) + B).toString(16);
          },
          //加载单页样式
          loadOnePageStyle: function () {
            this.loadStyle(CONST.useItem.name + "OnePageStyle", CONST.useItem.name + "OnePageStyle");
          },
          //加载双页样式
          loadTwoPageStyle: function () {
            this.loadStyle(CONST.useItem.name + "TwoPageStyle", CONST.useItem.name + "TwoPageStyle");
            let cssHead = "";
            if (curSite.SiteTypeID === SiteType.BAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
            if (curSite.SiteTypeID === SiteType.GOOGLE) cssHead = ".srg, #rso";
            if (curSite.SiteTypeID === SiteType.BING) cssHead = "#b_content #b_results";
            if (curSite.SiteTypeID === SiteType.SOGOU) cssHead = "#main .results";
            if (curSite.SiteTypeID === SiteType.DUCK) cssHead = "#links_wrapper .results--main #links";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#links_wrapper .results--main #links";
            AC_addStyle(cssHead + "{grid-template-columns: repeat(2,minmax(50%,1fr));grid-template-areas:'xmain xmain';}.AC.sp-separator{grid-column-start: 1;grid-column-end: xmain-end;}",
              "AC-TwoPageExStyle", "head");
          },
          // 加载三列样式
          loadThreePageStyle: function () {
            let cssHead = "";
            if (curSite.SiteTypeID === SiteType.BAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
            if (curSite.SiteTypeID === SiteType.GOOGLE) cssHead = ".srg, #rso";
            if (curSite.SiteTypeID === SiteType.BING) cssHead = "#b_content #b_results";
            if (curSite.SiteTypeID === SiteType.SOGOU) cssHead = "#main .results";
            if (curSite.SiteTypeID === SiteType.DUCK) cssHead = "#links_wrapper .results--main #links";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#links_wrapper .results--main #links";
            AC_addStyle(cssHead + "{grid-template-columns: repeat(3,minmax(33%,1fr));grid-template-areas:'xmain xmain xmain';}",
              "AC-ThreePageExStyle", "head");
          },
          // 加载四列样式
          loadFourPageStyle: function () {
            let cssHead = "";
            if (curSite.SiteTypeID === SiteType.BAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
            if (curSite.SiteTypeID === SiteType.GOOGLE) cssHead = ".srg, #rso";
            if (curSite.SiteTypeID === SiteType.BING) cssHead = "#b_content #b_results";
            if (curSite.SiteTypeID === SiteType.SOGOU) cssHead = "#main .results";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#links_wrapper .results--main #links";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#links_wrapper .results--main #links";
            AC_addStyle(cssHead + "{grid-template-columns: repeat(4,minmax(25%,1fr));grid-template-areas:'xmain xmain xmain xmain';}",
              "AC-FourPageExStyle", "head");
          },
          loadPlainToCSS: function () {
            for (let i = 0; i < document.childNodes.length; i++) {
              let curNode = document.childNodes[i];
              if (curNode.del) curNode.remove();
            }
            safeRemove("style[class*='AC'][del='1']");
          },
          // 禁止独立的样式加载
          loadCSSToPlain: function () {
            for (let i = 0; i < document.childNodes.length; i++) {
              let curNode = document.childNodes[i];
              // 如果是存在css， 且非必须数据
              if (curNode.target === "xml-stylesheet" && curNode.data.indexOf("must=\"true") < 0) {
                curNode.data = "";
                curNode.del = true;

                // 对于edge和safari都特殊处理一下吧
                if (navigator.userAgent.toLowerCase().indexOf("edge") > 0 || navigator.userAgent.toLowerCase().indexOf("safari") > 0) {
                  curNode.remove();
                }
              }
            }
          },
          init() {
            ControlManager.init();
          }
        };
        var ControlManager = {
          //居中显示 --- 必须是百度和谷歌的搜索结果页面，其他页面不能加载的--已经通过脚本include标签限制了一部分
          centerDisplay: function () {
            // 如果是百度 && ((地址替换->包含wd关键词[替换之后不等-是百度结果页面]) || 有右边栏-肯定是百度搜索结果页 || value中存在搜索内容) return;
            if (!checkISBaiduMain()) {
              CONST.StyleManger.loadCSSToPlain();
              return;
            }

            AC_addStyle(".minidiv #logo img{width: 100px;height: unset;margin-top: 0.3rem;}", "AC-style-logo", "head");
            let result = parseInt(CONST.useItem.AdsStyleMode || -1);
            if (acCssLoadFlag === false && document.querySelector(".ACExtension") === null) {
              debug("in样式即将加载:" + result);
              let expandStyle = "#content_left .result-op:hover,#content_left .result:hover{box-shadow:0 0 2px gray;background:rgba(230,230,230,0.1)!important;}#wrapper #rs, #wrapper #content_left .result, #wrapper #content_left .c-container{min-width:670px;}.c-span18{width:78%!important;min-width:550px;}.c-span24{width: auto!important;}";
              if (result === 1) {
                AC_addStyle(expandStyle, "AC-Style-expand", "head");
                CONST.StyleManger.loadCommonStyle();
              } else if (result === 2) {//单页居中
                AC_addStyle(expandStyle, "AC-Style-expand", "head");
                CONST.StyleManger.loadCommonStyle();
                CONST.StyleManger.loadOnePageStyle();
              } else if (result === 3) { //双页居中
                CONST.StyleManger.loadCommonStyle();
                CONST.StyleManger.loadTwoPageStyle();
              } else if (result === 4) { // 三列
                CONST.StyleManger.loadCommonStyle();
                CONST.StyleManger.loadTwoPageStyle();
                CONST.StyleManger.loadThreePageStyle();
              } else if (result === 5) { // 四列
                CONST.StyleManger.loadCommonStyle();
                CONST.StyleManger.loadTwoPageStyle();
                CONST.StyleManger.loadFourPageStyle();
              }
              acCssLoadFlag = true;
              debug("in样式运行结束");
              if (curSite.SiteTypeID === SiteType.BAIDU && ACConfig.Style_BaiduLite === true) {
                AC_addStyle(GM_getResourceText("baiduLiteStyle"), "AC-baiduLiteStyle", "head")
                CONST.StyleManger.loadBaiduLiteStyle();
              }
            }

            if (curSite.SiteTypeID !== SiteType.BAIDU && curSite.SiteTypeID !== SiteType.BAIDU_XUESHU && curSite.SiteTypeID !== SiteType.GOOGLE && curSite.SiteTypeID !== SiteType.BING && curSite.SiteTypeID !== SiteType.SOGOU && curSite.SiteTypeID !== SiteType.DUCK && curSite.SiteTypeID !== SiteType.DOGE) return;

            // 如果是谷歌 && (地址替换->是谷歌图像页面 || 是地图页面)[替换要变] return;
            if (curSite.SiteTypeID === SiteType.GOOGLE && location.href.replace(/tbm=(isch|lcl|shop|flm)/, "") !== location.href) {
              CONST.StyleManger.loadCSSToPlain();
              return;
            }
            /**护眼Style最后载入**/
            if (CONST.useItem.HuYanMode === true || document.querySelector("style[class*='darkreader']") != null) CONST.StyleManger.loadHuYanStyle();

            CONST.StyleManger.loadPlainToCSS();
          },
          init: function () {
            if (CONST.isGoogleImageUrl) return;
            this.centerDisplay();
          }
        };
        // debug("调用加载自定义css");
        ControlManager.init();
        return CONST.StyleManger;
      }
    }
  })();
}();
