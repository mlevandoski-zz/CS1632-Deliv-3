
<!DOCTYPE html>
<!--
  ,ad8888ba,   88888888ba         ,ad8888ba,    ,ad8888ba,
 d8"'    `"8b  88      "8b       d8"'    `"8b  d8"'    `"8b
d8'        `8b 88      ,8P      d8'           d8'
88          88 88aaaaaa8P'      88            88
88          88 88""""""'        88      88888 88      88888
Y8,        ,8P 88               Y8,        88 Y8,        88
 Y8a.    .a8P  88                Y8a.    .a88  Y8a.    .a88
  `"Y8888Y"'   88     dev@op.gg   `"Y88888P"    `"Y88888P"

     Copyright © 2013-2015 OP.GG. All rights reserved.
-->
<html lang="en_US">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title>OP.GG North America - League of Legends Summoners statistics and MMR</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=0.5">
<meta property="keywords" content="League of Legends, Statistics, Stats, Champion Stats, Spectate, Summoners, Ranking, LoL, LOLKing, LOLNexus, MMR"><meta property="description" content="Check your Summoner statistics, MMR, realtime spectate and using powerful global LoL Charts!"><meta property="fb:app_id" content="677811765617932"><meta property="og:site_name" content="OP.GG North America"><meta property="og:description" content="Check your Summoner statistics, MMR, realtime spectate and using powerful global LoL Charts!"><meta property="og:type" content="website"><meta property="og:image" content="http://sk2.op.gg/images/logo/icon-144.png"><meta property="og:title" content="OP.GG North America"><link rel="icon" type="image/x-icon" href="/favicon.ico?3" />
<link rel="apple-touch-icon-precomposed" href="//sk2.op.gg/icon/Icon-72.png?v2"/>
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="//sk2.op.gg/icon/Icon-72.png?v2"/>
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="//sk2.op.gg/icon/Icon@2x.png?v2"/>
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="//sk2.op.gg/icon/Icon-144.png?v2"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
<meta name="format-detection" content="telephone=no">
<meta name="autocomplete" content="off">
<link href="//sk2.op.gg/css2/min.css?1445350757" rel="stylesheet" type="text/css">
<link href="//sk2.op.gg/css2/min.page.css?1445350757" rel="stylesheet" type="text/css">
<link href="//sk2.op.gg/css2/min.page2.css?1445350757" rel="stylesheet" type="text/css">
<link href="//sk2.op.gg/css2/min.mobile.css?1445350757" rel="stylesheet" type="text/css">
<link href="//sk2.op.gg/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
<!--[if IE 7]>
<link href="//sk2.op.gg/lib/font-awesome/css/font-awesome-ie7.min.css" rel="stylesheet">
<![endif]-->
<!--[if !(IE)]><!-->
<!--<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open Sans:300,400,700">-->
<!--<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato:300,700">-->
<!--<![endif]-->
<script type="text/javascript" src="//sk2.op.gg/js2/lib/jquery-1.11.1.min.js"></script>

</head>
<!--[if IE 8]><body class="ie8"><![endif]-->
<!--[if gt IE 8]><!--><body><!--<![endif]-->
<script type="text/javascript" src="//sk2.op.gg/js2/lib/nprogress.js"></script>
<script>
NProgress.start();
</script><script>
$(function(){
if (
false
//			(OS.isWinXP && isIE() && isIE() <= 8)
//		||	(isIE() && isIE() <= 7)
) {
var nn = noty({
text: 'Install <b>Chrome</b> and experience OP.GG at Rammus speed!.',
type: 'success',
layout: 'topRight',
timeout: false,
callback:{
onClose: function(){
window.open("http://www.google.com/intl/ko/chrome/browser/");
}
}
});
}

$("#searchInput").focus();

$.get("/r/ajax/popularArticles.json/", function(json) {
$("#RForumIndexWidget").html(json.html);
}, 'json');
})
</script>
<style>
.GlobalWrapper { min-width: 0; }
.GlobalFooterContainer { min-width: 0; }
</style>
<div class="GlobalWrapper">
<div class="IndexContainer">
<div class="nFullLayoutContainer">
<div class="nContentLayout">
<form action="/summoner/" method="get">
<div class="IndexHeader">
<div class="IndexHeaderBackground"></div>
<div class="IndexHeaderGNB">
<div class="GnbMenuWrap">
<!--script>
$(function(){
setTimeout(function(){
document.getElementById('forumMenuTitle').className = 'animated tada';
}, 1000);
});
</script-->
<ul class="GnbMenu">

<li class="Menu ">
<a href="/summoner/" style="">
Summoner</a>
</li>

<li class="Menu ">
<a href="/spectate/" style="">
Spectate</a>
</li>

<li class="Menu ">
<a href="/ranking/" style="">
Rankings</a>
</li>

<li class="Menu ">
<a href="/statistics/" style="">
Statistics</a>
</li>

<li class="Menu ">
<a href="/multi/" style="">
Multi-Search</a>
</li>

<!--li class="Menu "><a href="/forum/" class="animated rotateInDownRight" id="forumMenuTitle"><i class="icon-pencil"></i> Forum</a></li-->
</ul>

<ul class="GlobalTools">
<li class="Menu ">
<a href="/help/">Help</a>
</li>


<li class="Region ToggleTool">

<div class="Link" onclick="OPGGWeb.GlobalToggle.toggle(this);">
<i class="icon-cloud icon-large"></i>
NA
</div>

<div class="BoxEnabled RegionTable">
<div class="RegionTable">
<table class="RegionTable">


<tr>


<td class="Region">
<a href="//www.op.gg/" class="Region ">Korea</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>






<td class="Region">
<a href="//na.op.gg/" class="Region active">North America</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>
</tr>


<tr>


<td class="Region">
<a href="//euw.op.gg/" class="Region ">Europe West</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>






<td class="Region">
<a href="//eune.op.gg/" class="Region ">Europe Nordic & East</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>
</tr>


<tr>


<td class="Region">
<a href="//oce.op.gg/" class="Region ">Oceania</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>






<td class="Region">
<a href="//br.op.gg/" class="Region ">Brazil</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>
</tr>


<tr>


<td class="Region">
<a href="//las.op.gg/" class="Region ">LAS</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>






<td class="Region">
<a href="//lan.op.gg/" class="Region ">LAN</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>
</tr>


<tr>


<td class="Region">
<a href="//ru.op.gg/" class="Region ">Russia</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>






<td class="Region">
<a href="//tr.op.gg/" class="Region ">Turkey</a>
</td>
<td class="ServerStatus tip" title="LOL Server">
<span style="color:lime"><i class="icon-ok"></i></span>
</td>
<td class="RenewStatus tip" title="Renew Stats">
<span style="color:lime"><i class="icon-refresh"></i></span>
</td>
</tr>


</table>
</div>
</div>
</li>
<li class="Localization ToggleTool">
<div class="Link" onclick="OPGGWeb.GlobalToggle.toggle(this);">
<i class="icon-globe icon-large"></i>
English
</div>

<div class="BoxEnabled LocaleList">
<div class="LocaleList">

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('ko_KR');return false;">
한국어
</a>

<a href="#" class="Locale active" onclick="OPGGWeb.i18n.setLocale('en_US');return false;">
English
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('pl');return false;">
język polski
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('fr');return false;">
français
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('de');return false;">
Deutsch
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('es');return false;">
español
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('nl');return false;">
Nederlands
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('da');return false;">
dansk
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('sv');return false;">
Svenska
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('no');return false;">
Norsk
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('ru');return false;">
русский язык
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('hu');return false;">
magyar
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('fi');return false;">
suomi
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('ja');return false;">
日本語
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('tr');return false;">
Türkçe
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('ro');return false;">
limba română
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('pt');return false;">
português
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('zh');return false;">
中文
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('sr');return false;">
српски језик
</a>

<a href="#" class="Locale " onclick="OPGGWeb.i18n.setLocale('it');return false;">
italiano
</a>

</div>
<div class="Contribute"><a href="/translate/">Contribute to better translation</a></div>
</div>
</li>




</ul>
<div class="cb" style="clear: both;"></div></div>
</div>
<div class="IndexHeaderSearch">
<div class="IndexHeaderLogo">
<h1 id="siteLogo">
<a href="/" style="margin: 0px 0; max-width: 95%; width: 450px;">
<img src="http://attach.s.op.gg/logo/20151013181833.98f464b39b3a822afdbcb671f1eef65e.png" title="Elise, the Spider Queen" style="max-width: 95%; width: 450px;">
</a>
</h1>
</div>
<!--<div class="IndexHeaderLogo"><h1 id="siteLogo"><a href="/" style="height: 30px;"><img src="//sk2.op.gg/images/global_logo_index.png" height="100%"></a></h1></div>-->
<div class="IndexHeaderInput">
<input type="text" name="userName" placeholder="Enter the summoner's name." id="searchInput">
<a class="CurrentRegion opButton primary" onclick="window.scrollTo(0,0); OPGGWeb.GlobalToggle.toggle('.Region.ToggleTool'); return false;">
NA</a>
</div>
<div class="IndexHeaderButton"><input type="submit" class="opButton blue" value="Search a summoner"></div>
<script>
function fakeOPGG() {
$.cookie('aprl', '', {expires: 1, path: '/'});
link(location.href);
return false;
}
$(function(){
Summoner.Favorite.loadList('index');
Summoner.History.loadList('index');
});
</script>

<div class="IndexFavoriteSummoners" id="FavoriteSummoners" style="display: none;">
<dl class="SummonerNameList"></dl>
</div>
<div class="IndexHeaderAdditionalButton">
<a href="/multi/" class="opButton green small">Multi-Search</a>
</div>

<div style="text-align: center;" id="RForumIndexWidget"></div>

<div style="text-align: center; margin: 15px 0 0 0;">
<ins class="adsbygoogle"
 style="display:inline-block;width:728px;height:90px"
 data-ad-client="ca-pub-8377914384184168"
 data-ad-slot="6913543137"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>
</div>
</div>
</form>

<div class="IndexFooterContainer">
<div class="IndexFooterCopyright">
&copy; 2012-2015 OP.GG. Data based on League of legends North America.
</div>
<div class="IndexLinks">
<a href="/about/">About OP.GG</a>
|
<a href="/about/logos/">Logo History</a>
</div>
<div class="IndexSocial">
<a href="http://www.op.gg/translate/" class="Icon tip" title="Translate" target="_blank" style="color: #27AE60"><i class="icon-globe"></i></a>
<a href="http://dribbble.com/opgg" class="Icon tip" title="Dribbble" target="_blank"><i class="icon-dribbble"></i></a>
<a href="http://www.facebook.com/lolopgg" class="Icon tip" title="Facebook" target="_blank"><i class="icon-facebook"></i></a>
<a href="http://twitter.com/globalopgg" class="Icon tip" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
<a href="http://vk.com/lolopgg" class="Icon tip" title="VK" target="_blank"><i class="icon-vk"></i></a>
<a href="http://weibo.com/opggchina" class="Icon tip" title="Weibo" target="_blank"><i class="icon-weibo"></i></a>
</div>
</div>
<div style="position: fixed; right: 0px; bottom: 5px;">
<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Flolopgg&amp;width=100&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;send=false&amp;appId=231036913605879" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px; vertical-align: middle;" allowTransparency="true"></iframe>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript" src="//sk2.op.gg/js2/min.js?1445248745"></script>
<script type="text/javascript" src="//sk2.op.gg/lib/feedback/feedback.js"></script>
<script type="text/javascript" src="//sk2.op.gg/lib/feedback/html2canvas.js"></script>
<link href="//sk2.op.gg/lib/feedback/feedback.css" rel="stylesheet">
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script> <script type="text/javascript"> if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "55c48ac9e22bec"; wcs_do(); </script>
<script type="text/javascript">
OPGGWeb.dynamicDate.diffLocal = Math.round(new Date().getTime() / 1000) - 1446147200;
OPGGWeb.i18n.stringList = {"SUMMONER_FAVORITE_LIMIT_EXCEED_IELOW":"Internet Explorer can only save {{limit}} summoners. If you wish to add more favorites, please use Google Chrome or higher version of Internet Explorer.","NOTICE_WONDERINGABOUTMMR":"If you have any questions, please check <a href=\"\/help\/mmr\/\">Help<\/a> first.","MMR_SUBTITLE":"This service estimates your MMR by using OP.GG's algorithm that compares and analyzes the tier information of the summoners you have been matched with.","MMR \uc815\ud655\ub3c4":"MMR Accuracy","\uc11c\ubc84\uc5d0 \ubd80\ud558\uac00 \uc2ec\ud574 \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.":"Due to overload on server, loading data has failed. Please try again later.","\uc5bc\ub9c8\ub098 \ubbff\uc744\ub9cc\ud55c\uc9c0\uc758 \uc218\uce58\uc785\ub2c8\ub2e4.":"This is the reliability and accuracy of the numbers.","SPECTATE_SETLOLDIRECTORY_PROMPT":"Please locate your League of Legends directory path where your RADS folder is. (Ex: D:\\Game\\Riot Games\\League of Legends KR)","SPECTATE_SETLOLDIRECTORY_REMOVED":"Directory path setting has been deleted","SPECTATE_SETLOLDIRECTORY_SETTED":"Directory path set to [{{directoryPath}}].","FAVORITE_SUMMONERS_TITLE":"Favorites","CHART_NOTICE_ABOVE_BRONZE":"Summoners above Bronze","CHART_TITLE_PICK_RATE_PER_GAME":"Pick ratio per game","CHART_TITLE_BAN_RATE_PER_GAME":"Ban ratio per game","CHART_TITLE_KDA_PER_GAME":"KDA per game","CHART_TITLE_CS_PER_GAME":"CS per game","CHART_TITLE_AVG_EA_PER_GAME":"Average per game {{count}}","CHART_TITLE_AVG_GOLD_PER_GAME":"Average gold per game: {{gold}}","CHART_TITLE_GOLD_OBTAIN_PER_GAME":"Gold earned per game","CHART_TITLE_WARDS_OBTAIN_PER_GAME":"Wards purchased per game","CHART_TITLE_LEAVE_PER_10K_GAMES":"Leaver count per 10k games","CHART_NOTICE_NO_DATA_THIS_OPTION":"This option does not have any data. Please choose a different option.","CHART_TITLE_ACCUM_PLAY_COUNT":"Total games played","CHART_NOTICE_ORDER_BY_WINRATE_MOUSE_HOVER_TO_SEE_CHAMP_PLAYCOUNT":"They are in order of win ratios, and you can see their number of games played by putting your mouse cursor over them.","CHART_TITLE_PLAY_COUNT":"Games played","COMMON_AVERAGE":"Average","STATISTICS_FILTER_CHART_WINRATIO":"Win rate","TIER_RANK_DISTRIBUTION_CHART_TITLE":"League Distribution","RANK":"Ranked"};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

var opts = {
ajaxURL: '/_ajax/feedback.json/'
};
var tpl = {
description:
'<div id="feedback-welcome">' +
'<div class="feedback-logo">피드백 보내기</div>' +
'<p>OP.GG를 개선 할 수 있는 아이디어나 의견을 제안해주시거나 버그리포팅을 해주세요.</p>' +
'<p>의견을 입력해주세요:</p>' +
'<textarea id="feedback-note-tmp"></textarea>' +
'<p>Next we\'ll let you identify areas of the page related to your description.</p>' +
'<button id="feedback-welcome-next" class="feedback-next-btn feedback-btn-gray">Next</button>' +
'<div id="feedback-welcome-error">설명을 입력해주세요.</div><div class="feedback-wizard-close"></div></div>',

highlighter:	'<div id="feedback-highlighter">' +
'<div class="feedback-logo">피드백 보내기</div>' +
'<p>클릭이나 드래그를 해서 이 페이지에서 강조하고 싶은 부분을 선택해주시면 저희가 더 쉽게 이해 할 수 있습니다.</p>' +
'<p>답변을 보내드릴 순 없습니다. 답변을 원하신다면 contact@op.gg 로 이메일 문의를 해주시기 바랍니다.</p>' +
'<div class="feedback-buttons">' +
'<button id="feedback-highlighter-next" class="feedback-next-btn feedback-btn-gray">다음</button>' +
'<button id="feedback-highlighter-back" class="feedback-back-btn feedback-btn-gray">뒤로</button>' +
'</div><div class="feedback-wizard-close"></div></div>',
overview:		'<div id="feedback-overview">' +
'<div class="feedback-logo">피드백 보내기</div>' +
'<p>답변을 보내드릴 순 없습니다. 답변을 원하신다면 contact@op.gg 로 이메일 문의를 해주시기 바랍니다.</p>' +
'<div id="feedback-overview-description"><div id="feedback-overview-description-text">' +
'<h3>설명</h3>' +
'<h3 class="feedback-additional">아래의 정보도 같이 전송됩니다.</h3><div id="feedback-additional-none"><span>없음</span></div>' +
'<div id="feedback-browser-info"><span>브라우저 정보</span></div>' +
'<div id="feedback-page-info"><span>페이지 정보</span></div>' +
'<div id="feedback-page-structure"><span>페이지 구조</span></div></div></div>' +
'<div id="feedback-overview-screenshot"><h3>스크린샷</h3></div>' +
'<div class="feedback-buttons">' +
'<button id="feedback-submit" class="feedback-submit-btn feedback-btn-blue">보내기</button>' +
'<button id="feedback-overview-back" class="feedback-back-btn feedback-btn-gray">뒤로</button></div>' +
'<div id="feedback-overview-error">설명을 입력해주세요.</div><div class="feedback-wizard-close"></div></div>',
submitSuccess:	'<div id="feedback-submit-success">' +
'<div class="feedback-logo">피드백 보내기 성공!</div>' +
'<p>피드백을 보내주셔서 감사합니다. 서비스 개선에 참고하겠습니다.</p>' +
'<p>답변을 보내드릴 순 없습니다. 답변을 원하신다면 contact@op.gg 로 이메일 문의를 해주시기 바랍니다.</p>' +
'<button class="feedback-close-btn feedback-btn-blue">확인</button><div class="feedback-wizard-close"></div></div>',
submitError:	'<div id="feedback-submit-error">' +
'<div class="feedback-logo">피드백 보내기 실패!</div>' +
'<p>안타깝게도 피드백을 전송하던중에 오류가 발생했습니다. 다시 한번 시도해보시거나 contact@op.gg 로 이메일 문의를 해주세요.</p>' +
'<button class="feedback-close-btn feedback-btn-blue">확인</button><div class="feedback-wizard-close"></div></div>'
};

ga('create', 'UA-37377845-1', 'na.op.gg');
ga('send', 'pageview');

var sc_project = 8630180;
var sc_invisible = 1;
var sc_security = "e6464510";

(function () {
var s = document.getElementsByTagName('script')[0];
var sc = document.createElement('script');
sc.type = 'text/javascript'; sc.async = true;
sc.src = ('https:' == document.location.protocol ? 'https://secure' : 'http://www') + '.statcounter.com/counter/counter.js';

s.parentNode.insertBefore(sc, s);
})();
$(function() {

setTimeout(function(){
$(".GlobalHeaderGNBContainer").scrollToFixed({
zIndex: 1001
});
}, 1000);
NProgress.done();
feedback = new $.feedback(opts);
});
</script>
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</body>
</html>
