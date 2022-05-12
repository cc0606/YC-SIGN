
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~ce343adc-5a88-44bc-9ccb-c6839549bcf4; yz_log_seqb=1652282645667; yz_log_seqn=52; _kdt_id_=97284269; dfp=cdf62d8abb5e92f97c1ccc4c28376f1c; rdfp=cdf62d8abb5e92f97c1ccc4c28376f1c; KDTSESSIONID=YZ974089545327075328YZEQTF5iVY; nobody_sign=YZ974089545327075328YZEQTF5iVY; captcha_sid=YZ974089674981310464YZ7iAavfaJ; loc_dfp=7a37a754bff16776675ae643c3eb466b; yz_log_ftime=1652282645478; yz_log_uuid=4d6b32ed-89a5-6e86-8492-6bb2bd6e9c8f`,
'Accept' : `application/json, text/plain, */*`,
'Connection' : `keep-alive`,
'Referer' : `https://shop97476437.youzan.com/wscump/checkin/result?kdt_id=97284269`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `shop97476437.youzan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x1800142f) NetType/WIFI Language/zh_CN`,
'x-yz-action-id' : `wsc-h5-ump-0ae889d3-1651277541513-316802`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $notify("吊毛15", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

