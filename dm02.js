
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~5b960a8e-4955-491b-a334-03ad86ae31db; yz_log_seqb=1652518578576; yz_log_seqn=45; KDTSESSIONID=YZ975079120410644480YZK29KorLO; _kdt_id_=97284269; nobody_sign=YZ975079120410644480YZK29KorLO; captcha_sid=YZ975079408727969792YZeaTzMjlM; dfp=a5f62ddcce4c185df673113c7cf3a043; loc_dfp=29b73d1138b32a922ae1e00f7a573829; yz_log_ftime=1652518578516; yz_log_uuid=c8a4cac4-b133-ddbe-3f2a-3b11af22f141`,
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
    $notify("吊毛2", "18602010510", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

