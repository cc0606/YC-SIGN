
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~82dc2cce-d926-456d-bf2b-f1368e678197; yz_log_seqb=1652427117933; yz_log_seqn=32; _kdt_id_=97284269; yz_ep_page_track=PfeDS3adjUM2f2RVFh3obQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=7fe6a309cd2d089e4873cd4bed7d4e48; loc_dfp=3eb0810a04b85a96854185369d4ac859; rdfp=7fe6a309cd2d089e4873cd4bed7d4e48; _efmdata=%2F5Uc8bb3T3qYBaQPZggZFpOTERGOw7BY1fk49K8syE3JV14lDmXU5KTveAVmMF38ak6ccwD%2FH5QoBYQc2bJ2AFtdtevoXWMOolY0sY7Hqpc%3D; _exid=TiEdbTUQ23BGu9gF%2Fxu9TGAKrHlTED7EHKE54dJNol51mmKfX4uEaRlzqXiMQAv%2FnAqVal4CYZcex4U8ZYxA%2Fw%3D%3D; ec=en0OpdhA-1652427162207-b78972c6af4e88-1138855974; yz_fp_hash=adaff592cf64529780201f5ea8274f27; KDTSESSIONID=YZ967138782195826688YZD7Pfww2a; nobody_sign=YZ967138782195826688YZD7Pfww2a; Hm_lvt_679ede9eb28bacfc763976b10973577b=1650354804; KDTWEAPPSESSIONID=YZ965996012221034496YZIfyG6yc7; yz_log_ftime=1648103053059; yz_log_uuid=8d83fd03-48f6-441a-06b8-2067860811ef`,
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
    $notify("W11", "元初18658637058", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
