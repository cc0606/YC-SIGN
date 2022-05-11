
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : ` trace_sdk_context_pv_id=/wscuser/membercenter~3a27d100-f2c3-4f8a-a827-770cf186a1f2; yz_log_seqb=1652199650379; yz_log_seqn=18; _kdt_id_=97284269; KDTSESSIONID=YZ973741435274051584YZkhB5MNbm; nobody_sign=YZ973741435274051584YZkhB5MNbm; captcha_sid=YZ973741574410944512YZzPE5B69J; dfp=049c43fa9062dcbf073ba0c2a8327e43; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652199649989; yz_log_uuid=3bbe120e-35b0-56e1-49f8-b422b7037a4f`,
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
    $notify("冻冻11", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

