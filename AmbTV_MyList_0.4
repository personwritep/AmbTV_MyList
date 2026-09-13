// ==UserScript==
// @name        AmbTV MyList
// @namespace        http://tampermonkey.net/
// @version        0.4
// @description        AbemaTV マイリスト登録のコピーツール
// @author        AbemaTV User
// @match        https://abema.tv/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=abema.tv
// @grant        none
// @updateURL        https://github.com/personwritep/AmbTV_MyList/raw/main/AmbTV_MyList.user.js
// @downloadURL        https://github.com/personwritep/AmbTV_MyList/raw/main/AmbTV_MyList.user.js
// ==/UserScript==

let links=[]; // マイリスト登録のコピー用の配列


let target0=document.querySelector('head > title');
let monitor0=new MutationObserver(area_check);
monitor0.observe(target0, { childList: true });

area_check();


function area_check(){
    if(window.location.pathname=='/mylist'){
        let retry0=0;
        let interval0=setInterval(wait_target0, 40);
        function wait_target0(){
            retry0++;
            if(retry0>100){ // リトライ制限 100回 4secまで
                clearInterval(interval0); }
            let list_ul=document.querySelector(
                '.com-pages-mylist-MylistContentItemList, .com-my-list-MyListEmpty');
            if(list_ul){
                clearInterval(interval0);
                main(); }}}
    else{
        if(window.location.search.includes('amtv_addlist')){
            let urlParams=new URLSearchParams(window.location.search);
            let param=urlParams.get('amtv_addlist');
            let act_num=urlParams.get('num');
            if(param && act_num){
                add_list(param, act_num); }}}

} // list_check()




function add_list(par, a_num){
    let retry1=0;
    let interval1=setInterval(wait_target1, 300);
    function wait_target1(){
        retry1++;
        if(retry1>6){ // リトライ制限 2sec以内 🔴🔴
            localStorage.setItem('AmbTV_MyList', a_num/1+1);
            clearInterval(interval1); }
        let B_button=
            document.querySelector('.com-shared-my-list-MyListBaseCircleButton__button');
        if(B_button){
            add_action(B_button, par, a_num); }}


    function add_action(button, par, a_num){
        if(par==0){ // シリーズ動画の登録
            let button_default=
                button.querySelector('[class$="MyListBaseCircleButton__button-outline--default"]');
            if(button_default){ // 未登録
                button.click();
                setTimeout(()=>{
                    button_default=
                        button.querySelector('[class$="MyListBaseCircleButton__button-outline--default"]');
                    if(!button_default){
                        localStorage.setItem('AmbTV_MyList', a_num/1+1);
                        window.close(); }
                    else{
                        localStorage.setItem('AmbTV_MyList', a_num/1+1); }
                }, 200); }
            else{ // 登録済み
                localStorage.setItem('AmbTV_MyList', a_num/1+1);
                window.close(); }}

        else if(par==1){ // 個別動画の登録
            button.click();
            setTimeout(()=>{
                let BSL=
                    document.querySelectorAll('[class$="ButtonSelectListItem__container"]')[1];
                if(BSL){
                    let is_added=BSL.querySelector('[class$="Item__left-container--is-added"]');
                    if(!is_added){ // 未登録
                        BSL.click();

                        setTimeout(()=>{
                            let button_default=
                                button.querySelector('[class$="MyListBaseCircleButton__button-outline--default"]');
                            if(!button_default){
                                localStorage.setItem('AmbTV_MyList', a_num/1+1);
                                window.close(); }
                            else{
                                localStorage.setItem('AmbTV_MyList', a_num/1+1); }
                        }, 200);

                    } // !is_added
                    else{ // 登録済み
                        localStorage.setItem('AmbTV_MyList', a_num/1+1);
                        window.close(); }

                } // if(BSL)

            }, 400); }

        window.opener

    } // add_action(button)

} // add_list()




function main(){

    disp_now_count();


    let help_url='https://ameblo.jp/personwritep/entry-12971904361.html';

    let help_svg=
        '<svg width="20" height="20" style="vertical-align: -5px;" '+
        'viewBox="0 0 200 200">'+
        '<path style="fill: #3ca5da" d="M92 14C54 19 23 44 15 82C4 135 49 '+
        '192 105 186C143 181 175 156 183 118C195 64 149 7 92 14z"></path>'+
        '<path style="fill: #000" d="M63 69C70 67 76 64 82 61C92 58 116 58 110 '+
        '76C103 96 81 101 81 125L112 125C112 111 123 105 132 96C141 85 1'+
        '46 69 140 55C131 34 102 33 83 37C78 38 69 39 65 43C60 47 63 63 63 '+
        '69M83 143L83 169L111 169L111 143L83 143z"></path></svg>';

    let holder_svg=
        '<svg viewBox="0 0 200 200">'+
        '<path style="fill: #009688;" d="M33 31L32 32L30 33L29 33L28 33L'+
        '27 35L27 35L26 36L25 37L24 38L23 39L21 41L22 43L21 43L19 45L19 47L19'+
        ' 47L19 48L19 49L19 50L19 54L19 67L19 105L19 138L19 149L19 152L19 153'+
        'L19 155L19 156L20 157L20 157L21 158L21 159L21 160L23 161L23 161L24 1'+
        '62L25 163L27 165L29 164L30 165L30 166L32 167L34 167L36 167L37 167L38'+
        ' 167L43 167L57 167L102 167L147 167L161 167L165 167L167 167L167 167L1'+
        '68 167L169 167L171 167L173 165L173 164L175 165L176 164L177 163L179 1'+
        '62L179 161L180 161L181 160L181 159L181 158L182 157L183 156L183 154L1'+
        '83 154L183 153L183 152L183 151L183 148L183 136L183 101L183 72L183 62'+
        'L183 59L183 58L183 56L183 55L181 53L180 53L181 51L179 49L178 48L177 '+
        '47L177 47L176 45L174 46L173 46L173 45L171 43L170 43L168 43L167 44L16'+
        '5 44L164 44L162 44L151 44L108 44L94 44L91 44L90 44L88 44L87 44L86 44'+
        'L84 44L84 42L84 41L83 39L82 38L80 36L79 35L78 35L76 33L75 33L74 32L7'+
        '2 31L70 31L68 31L67 31L63 31L52 31L42 31L39 31L37 31L37 31L36 31L35 '+
        '31L33 31z"></path>'+
        '</svg>';

    let panel=
        '<div class="my_p2">'+
        '<button class="button1 com-shared-mypage-MypageSidebar__item">'+ holder_svg +
        '登録をファイルに保存</button>'+
        '<button class="button2 com-shared-mypage-MypageSidebar__item">'+ holder_svg +
        'ファイルから登録を読込む</button>'+
        '<input class="button2_file" type="file" style="display: none">'+
        '<button class="button3 com-shared-mypage-MypageSidebar__item">'+ holder_svg +
        'マイリストを自動登録</button>'+
        '<div class="counter">　現在の登録数：<span class="count_l"></span>　'+
        '<a href="'+ help_url + '" rel="noopener noreferrer" target="_blank">'+ help_svg+
        '</a></div>'+

        '<style>'+
        '.my_p2 { padding: 8px 0; margin: 24px 0; border-radius: 4px; outline: 1px solid #777; } '+
        '.button2_file { display: none; }'+
        '.button1, .button2, .button3 { '+
        'height: 36px; margin: 4px 0; padding-right: 0; width: 100%; } '+
        '.button1 svg, .button2 svg, .button3 svg { width: 28px; height: 20px; margin-left: -6px; } '+
        '.counter { font-size: 16px; color: #fff; margin: 8px 0 8px 23px; } '+
        '</style>'+
        '</div>';

    let sidebar=document.querySelector('.com-shared-mypage-MypageSidebar');

    if(sidebar && !document.querySelector('.my_p2')){
        sidebar.insertAdjacentHTML('beforeend', panel); }


    let button1=document.querySelector('.button1');
    let button2=document.querySelector('.button2');
    let button2_file=document.querySelector('.button2_file');
    let button3=document.querySelector('.button3');


    button1.onclick=function(){
        links=[]; // 配列初期化

        let list_link=document.querySelectorAll('.com-my-list-MyListBaseItem > a');
        for(let k=0; k<list_link.length; k++){
            let link_href=list_link[k].href;
            links.push(link_href); }


        let write_json=JSON.stringify(links); // 記録配列 links を書出す
        let blob=new Blob([write_json], {type: 'application/json'});

        let a_elem=document.createElement('a');
        a_elem.href=URL.createObjectURL(blob);
        a_elem.download='AmbMyList.json'; // 保存ファイル名
        a_elem.click();
        URL.revokeObjectURL(a_elem.href); }



    button2.onclick=function(){
        links=[]; // 配列初期化

        let ok=confirm(
            " 🔴 「AmbMyList(n).json」のファイルを読込んでください\n"+
            "　　(n)は同名ファイルがある場合の連番です");
        if(ok){
            button2_file.click(); }}


    button2_file.addEventListener("change", function(){
        if(!(button2_file.value)) return; // ファイルが選択されない場合
        let file_list=button2_file.files;
        if(!file_list) return; // ファイルリストが選択されない場合
        let file=file_list[0];

        if(!file) return; // ファイルが無い場合
        else{
            if(file.name.includes('AmbMyList')){ // AmbTV MyList のファイルのチェック

                let file_reader=new FileReader();
                file_reader.readAsText(file);
                file_reader.onload=function(){
                    let data_in=JSON.parse(file_reader.result);
                    links=data_in; // 記録配列  links を上書き
                    let write_json=JSON.stringify(links);

                    list_disp(); }}
            else{ // 間違ったファイルを読み込んだ場合
                alert(
                    " 🔴 「AmbMyList(n).json」のファイルを読込んでください\n"+
                    "　　(n)は同名ファイルがある場合の連番です"); }}

    });



    function list_disp(){
        let links_disp=
            '<div class="links_panel">';

        for(let k=0; k<links.length; k++){
            links_disp+=
                '<a href="'+ links[k] +'" target="_blank">'+getdouble(k+1)+
                '　<span>'+ links[k] +'</span></a>'; }

        links_disp+=
            '<style>'+
            '.links_panel { position: fixed; bottom: 20px; right: 10px; '+
            'font: normal 16px/20px Meiryo; color: #fff; background: #000; border: 2px solid #fff; '+
            'padding: 10px; width: 385px; height: 60vh; overflow-y: scroll; overflow-x: hidden; } '+
            '.links_panel a { display: inline-block; padding: 8px 4px; width: 350px; '+
            'overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-decoration: none; } '+
            '.links_panel a:hover { background: #444; } '+
            '</style></div>';

        if(document.querySelector('.links_panel')){
            document.querySelector('.links_panel').remove(); }
        document.body.insertAdjacentHTML('beforeend', links_disp);


        function getdouble(number){
            return ("0" + number).slice(-2); }


        let lines=document.querySelectorAll('.links_panel a');
        for(let k=0; k<lines.length; k++){
            lines[k].onclick=function(){
                if(lines[k].hasAttribute('style')){
                    lines[k].removeAttribute('style'); }
                else{
                    lines[k].style.outline='1px solid #2196f3'; }}}


        for(let k=0; k<lines.length; k++){
            let lines_span=lines[k].querySelector('span');
            if(lines_span.textContent.includes('slot-group/')){
                lines_span.style.color='red'; }}

    } // list_disp()



    button3.onclick=function(){
        if(links.length>0){
            list_color_clear();

            let link_id=0;
            open_roop(link_id);

            function open_roop(link_id){
                if(link_id<links.length){
                    let link_url=links[link_id];
                    open_win(link_id, link_url);

                    setTimeout(()=>{
                        if(link_id<localStorage.getItem('AmbTV_MyList')/1){ // 処理の終了をチェック
                            link_id=localStorage.getItem('AmbTV_MyList')/1;
                            open_roop(link_id); }
                    }, 2000); } // 🔴🔴 処理スピードのパラメーター

            } //open_roop(link_id)


            function open_win(link_id, link_url){
                if(link_url.includes('video/title/')){ // シリーズ動画の登録
                    let open_q=link_url+ '?amtv_addlist=0&num='+ link_id;
                    list_color(link_url);
                    let newwin=window.open(open_q); }
                else if(link_url.includes('video/episode')){ // 個別動画の登録
                    let open_q=link_url+ '?amtv_addlist=1&num='+ link_id;
                    list_color(link_url);
                    let newwin=window.open(open_q); }
                else{ // スロット等の登録はパス
                    localStorage.setItem('AmbTV_MyList', link_id+1); }

            } // open_win()


            function list_color(link_url){
                let list_span=document.querySelectorAll('.links_panel a span');
                for(let k=0; k<list_span.length; k++){
                    if(list_span[k].textContent==link_url){
                        list_span[k].style.background='#1069b3'; }}}

            function list_color_clear(){
                let list_span=document.querySelectorAll('.links_panel a span');
                for(let k=0; k<list_span.length; k++){
                    list_span[k].style.background=''; }}

        } // if(links.length>0)

    } // button3.onclick



    let my_list=document.querySelector('.com-pages-mylist-MylistContentItemList');
    if(my_list){
        let monitor1=new MutationObserver(disp_now_count);
        monitor1.observe(my_list, { childList: true }); }

    function disp_now_count(){
        let list_count=document.querySelectorAll('.com-pages-mylist-MylistContentItemList >li');
        let count_l=document.querySelector('.my_p2 .count_l');
        if(count_l){
            count_l.textContent=list_count.length; }
    } // disp_now_count()

} // main()
