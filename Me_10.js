
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~176ede3b-2414-4432-b061-0dd37b108aa7; yz_log_seqb=1651291555264; yz_log_seqn=17; _kdt_id_=97284269; yz_ep_page_track=WetM1pVv1xRY0S2vH56oPw%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=e58f32771866281f1edb37714b93544b; loc_dfp=b2464f7c7bf7b2d28facf8c73acde349; rdfp=e58f32771866281f1edb37714b93544b; _efmdata=5%2BiYaRRmnqtuCPzLEMOBx5fXTVnsBUKprjBgu%2Bx76mT4dkm64vqNT0t9tYFzFwSwKa4eQfxBiHjZ5gVUwCB7nV8FLZx85Py%2BokDC2CQyup8%3D; _exid=BjNrA1smC%2By5Ets%2FaG7KWHiuGc45K%2Fcb4knHXQBaHdyAf1m1eBLMfd7kTbeZDdxdgfLIQO6l3p0k1UK87KiSow%3D%3D; ec=DF634T6c-1647508332342-7df777ad575fb1157619074; yz_fp_hash=2f9ea5d32d685ac8f45c26532a19a178; Hm_lvt_679ede9eb28bacfc763976b10973577b=1651127282; KDTSESSIONID=YZ969243587166769152YZzJ3Fjvpk; nobody_sign=YZ969243587166769152YZzJ3Fjvpk; KDTWEAPPSESSIONID=YZ969243572921995264YZo6sWXkxO; yz_log_ftime=1647508331645; yz_log_uuid=976f263a-ff85-1ddc-f216-7c32536ec8a2`,
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
    $notify("元初13221627932", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
