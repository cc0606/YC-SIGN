
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~dd30cbb0-1528-4ea9-b6f2-2674fd782082; dfp=7fe6a309cd2d089e4873cd4bed7d4e48; rdfp=7fe6a309cd2d089e4873cd4bed7d4e48; yz_log_seqb=1651291324062; yz_log_seqn=16; loc_dfp=2c3d1d0b9642d2e4deb51cb25c49dcfd; _kdt_id_=97284269; yz_ep_page_track=PfeDS3adjUM2f2RVFh3obQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; _efmdata=%2F5Uc8bb3T3qYBaQPZggZFpOTERGOw7BY1fk49K8syE3JV14lDmXU5KTveAVmMF38lhqTf6EashbwVygiGL2Wp6C3DxL20ChkbcwbV2XboKI%3D; _exid=CVWjjvNhq%2FPQgJRncdKVuz%2F6awTtpj0QH3UmWOgQ2jo3QtjRUNcLFGP2u2P5L0BdEBFJAAN41YV8tqLMseihUw%3D%3D; ec=GdsTNkQK-1651242268827-51af8102afa798-1376888602; yz_fp_hash=e8daa70200dbb7a080ef6e13816124e6; KDTSESSIONID=YZ967138782195826688YZD7Pfww2a; nobody_sign=YZ967138782195826688YZD7Pfww2a; Hm_lvt_679ede9eb28bacfc763976b10973577b=1650354804; KDTWEAPPSESSIONID=YZ965996012221034496YZIfyG6yc7; yz_log_ftime=1648103053059; yz_log_uuid=8d83fd03-48f6-441a-06b8-2067860811ef`,
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
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
