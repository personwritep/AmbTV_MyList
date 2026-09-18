// ==UserScript==
// @name        AmbTV MyList
// @namespace        http://tampermonkey.net/
// @version        0.7
// @description        AbemaTV マイリスト登録のコピーツール
// @author        AbemaTV User
// @match        https://abema.tv/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=abema.tv
// @grant        none
// @run-at        document-idle
// @updateURL        https://github.com/personwritep/AmbTV_MyList/raw/main/AmbTV_MyList.user.js
// @downloadURL        https://github.com/personwritep/AmbTV_MyList/raw/main/AmbTV_MyList.user.js
// ==/UserScript==


let mylist=[]; // マイリスト登録のコピー用配列


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
            monitor0.disconnect();
            let urlParams=new URLSearchParams(window.location.search);
            let param=urlParams.get('amtv_addlist');
            let act_num=urlParams.get('num');
            if(param && act_num){
                setTimeout(()=>{
                    add_list(param, act_num);
                }, 1200); // 読込み遅延に対処 🔴🔴
            }}}

} // list_check()




function add_list(par, a_num){
    let retry1=0;
    let interval1=setInterval(wait_target1, 200);
    function wait_target1(){
        retry1++;
        if(retry1>3){ // 制限 ページロード後 2secまで 🔴🔴
            localStorage.setItem('AmbTV_MyList', a_num/1+1);
            clearInterval(interval1); }
        let B_button=
            document.querySelector('.com-shared-my-list-MyListBaseCircleButton__button');
        if(B_button){
            clearInterval(interval1);
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
                    if(!button_default){ // 登録完了
                        result(a_num, 1);
                    }
                    else{ // 登録失敗
                        result(a_num, 0); }
                }, 400); }
            else{ // 登録済
                result(a_num, 1);
            }

        } // if(par==0)

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
                            if(!button_default){ // 登録完了
                                result(a_num, 1); }
                            else{ // 登録失敗
                                result(a_num, 0); }
                        }, 400);

                    } // !is_added
                    else{ // 登録済み
                        result(a_num, 1); }

                } // if(BSL)
                else{ //「slots」で「今回のみ追加」ボタンが disabledの場合
                    result(a_num, 0); }

            }, 400);

        } // if(par==1)


        function result(index, n){
            if(n==1){ // 処理成功 ストレージで結果を伝達
            }

            localStorage.setItem('AmbTV_MyList', a_num/1+1);

            setTimeout(()=>{
                window.close();
            }, 200); }

    } // add_action(button)

} // add_list()




function main(){
    let help_url='https://ameblo.jp/personwritep/entry-12971904361.html';

    setTimeout(()=>{
        disp_now_count();
    }, 400);


    let help_svg=
        '<svg width="20" height="20" style="vertical-align: -4px;" '+
        'viewBox="0 0 200 200">'+
        '<path style="fill: #3ca5da" d="M92 14C54 19 23 44 15 82C4 135 49 '+
        '192 105 186C143 181 175 156 183 118C195 64 149 7 92 14z"></path>'+
        '<path style="fill: #000" d="M63 69C70 67 76 64 82 61C92 58 116 58 110 '+
        '76C103 96 81 101 81 125L112 125C112 111 123 105 132 96C141 85 1'+
        '46 69 140 55C131 34 102 33 83 37C78 38 69 39 65 43C60 47 63 63 63 '+
        '69M83 143L83 169L111 169L111 143L83 143z"></path></svg>';

    let holder_svg=
        '<svg viewBox="0 0 280 210">'+
        '<path style="fill: #009688;" d="M46 13C35 16 26 25 25 36C24 48 '+
        '25 62 25 74L25 147C25 160 22 178 31 189C42 202 66 197 82 197L184 197'+
        'L216 197C222 197 228 198 234 196C244 194 250 187 252 177C254 168 253'+
        ' 158 253 148L253 93C253 82 255 69 247 60C239 51 228 52 218 52L181 52'+
        'C175 52 168 53 162 52C144 48 140 26 126 17C119 12 109 13 101 13L66 1'+
        '3C59 13 52 12 46 13z"></path>'+
        '</svg>';

    let panel=
        '<div class="my_p2">'+
        '<button class="button1 com-shared-mypage-MypageSidebar__item">'+ holder_svg +
        '登録をファイルに保存</button>'+
        '<button class="button2 com-shared-mypage-MypageSidebar__item">'+ holder_svg +
        'ファイルから登録を読込む</button>'+
        '<input class="button2_file" type="file" style="display: none">'+
        '<button class="lp_con">'+
        '<span class="dispA">□ パネルを隠す</span>'+
        '<span class="dispB">□ パネルを表示する</span></button>'+
        '<button class="button3 com-shared-mypage-MypageSidebar__item">'+ holder_svg +
        'マイリストを自動登録</button>'+
        '<div class="counter">　現在の登録数：<span class="count_l"></span>　'+
        '<a href="'+ help_url + '" rel="noopener noreferrer" target="_blank">'+ help_svg+
        '</a></div>'+

        '<style>'+
        'nav.com-shared-mypage-MypageSidebar a { font-size: 18px !important; } '+
        'nav a[href="/purchased/payperview"] { order: 1; } '+
        'nav a[href="/viewing-history"] { order: 2; } '+
        'nav a[href="/mylist"] { order: 3; } '+
        '.my_p2 { order: 5; '+
        'margin: 10px 0 20px; padding: 8px 0; border-radius: 4px; outline: 1px solid #777; } '+
        '.button2_file { display: none; }'+
        '.button1, .button2, .button3 { '+
        'height: 36px; margin: 4px 0; padding-right: 0; width: 100%; } '+
        '.button1 svg, .button2 svg, .button3 svg { width: 28px; height: 16px; margin-left: -8px; } '+
        '.lp_con { font: 16px Meiryo; color: #00d2bf; margin-left: 38px; display: none; } '+
        '.lp_con .dispA, .lp_con.hide .dispB { display: inline-block; width: 180px; text-align: left; } '+
        '.lp_con.hide .dispA, .lp_con .dispB { display: none; } '+
        '.counter { font-size: 16px; color: #fff; margin: 8px 0 8px 23px; } '+

        '.com-a-ResponsiveMainContent { '+
        'padding: 0 0 0 40px !important; height: calc(100vh - 68px); } '+
        '.com-a-ResponsiveMainContent__inner { margin: 0; } '+
        'h1.com-a-PageTitle { display: none; } '+
        '.com-shared-mypage-MypageLayout__content { gap: 10px; } '+
        '.com-shared-mypage-MypageLayout__main { margin: -48px 0 0; } '+
        '.com-pages-mylist-MylistContentItemList { '+
        'overflow-y: scroll; padding: 0 8px 0 2px; height: calc(100vh - 145px); } '+
        '.c-application-FooterContainer { display: none; } '+
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
        mylist=[]; // 配列初期化

        let list=document.querySelectorAll('.com-my-list-MyListBaseItem');
        for(let k=0; k<list.length; k++){
            let item_url='';
            let link_a=list[k].querySelector('a');
            if(link_a){
                item_url=link_a.getAttribute('href'); }
            let title_elem='';
            let item_title='';
            let ep_elem='';
            let item_ep='';
            title_elem=list[k].querySelector('.com-my-list-EpisodeListItem__series-title');
            if(title_elem){ // エピソードリンクの場合
                ep_elem=list[k].querySelector('.com-my-list-EpisodeListItem__title'); }
            else{ // エピソードリンク以外の場合
                title_elem=list[k].querySelector(
                    '.com-my-list-SeriesListItem__title, '+
                    '.com-my-list-SlotGroupListItem__title, '+
                    '.com-my-list-SlotListItem__title'); }

            if(title_elem){
                item_title=title_elem.textContent; }
            if(ep_elem){
                item_ep=ep_elem.textContent; }

            mylist.push({
                url: item_url,
                title: item_title,
                ep: item_ep
            }); } // 配列にリストデータを入れる

        let write_json=JSON.stringify(mylist); // 記録配列 mylist を書出す
        let blob=new Blob([write_json], {type: 'application/json'});

        let a_elem=document.createElement('a');
        a_elem.href=URL.createObjectURL(blob);
        a_elem.download='Amb_MyList.json'; // 保存ファイル名
        a_elem.click();
        URL.revokeObjectURL(a_elem.href); }



    button2.onclick=function(){
        mylist=[]; // 配列初期化

        let ok=confirm(
            " 🔴 「Amb_MyList(n).json」のファイルを読込んでください\n"+
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
            if(file.name.includes('Amb_MyList')){ // AmbTV MyList のファイルのチェック

                let file_reader=new FileReader();
                file_reader.readAsText(file);
                file_reader.onload=function(){
                    let data_in=JSON.parse(file_reader.result);
                    mylist=data_in; // 記録配列  mylist を上書き

                    list_disp(); }}
            else{ // 間違ったファイルを読み込んだ場合
                alert(
                    " 🔴 「Amb_MyList(n).json」のファイルを読込んでください\n"+
                    "　　(n)は同名ファイルがある場合の連番です"); }}

    });



    function list_disp(){

        let links_disp=
            '<div class="links_panel">';

        for(let k=0; k<mylist.length; k++){
            links_disp+=
                '<a href="'+ mylist[k].url +'" target="_blank">'+
                '<div class="num">'+ getdouble(k+1)+ '</div>'+
                '<div class="titles">'+
                '<div class="title">'+ mylist[k].title +'</div>'+
                '<div class="ep">'+ mylist[k].ep +'</div></div></a>'; }

        links_disp+=
            '<style>'+
            '.links_panel { position: fixed; top: 125px; right: 10px; font: 16px/20px Meiryo; '+
            'color: #fff; background: #000; border: 1px solid #00bcd4; '+
            'padding: 5px; width: 385px; min-height: 50vh; max-height: calc(100vh - 145px); '+
            'overflow-y: scroll; overflow-x: hidden; overscroll-behavior: contain; } '+
            '.links_panel a { display: flex; flex-direction: row; align-items: center; '+
            'margin: 1px 0; padding: 3px 4px 0; width: 360px; min-height: 43px; '+
            'white-space: nowrap; text-decoration: none; } '+
            '.links_panel a:hover { background: #444; } '+
            '.links_panel a.active { outline: 1px solid #2196f3; outline-offset: -1px; } '+
            '.links_panel a.done { box-shadow: inset 0 0 0 30px #0288d160; } '+
            '.links_panel .num { font-size: 14px; color: #3ca5da; } '+
            '.links_panel .titles { display: flex; flex-direction: column; margin: 0 8px; width: 320px; } '+
            '.links_panel a.slot_group .titles { color: red; } '+
            '.links_panel .title, .links_panel .ep { overflow: hidden; text-overflow: ellipsis; } '+
            '.links_panel .ep { opacity: 0.8; } '+
            '.links_panel.hide { display: none; } '+
            '</style></div>';

        if(document.querySelector('.links_panel')){
            document.querySelector('.links_panel').remove(); }
        let main=document.querySelector('.c-application-DesktopAppContainer__main');
        if(main){
            main.insertAdjacentHTML('beforeend', links_disp); }


        function getdouble(number){
            return ("0" + number).slice(-2); }


        let lines=document.querySelectorAll('.links_panel a');
        for(let k=0; k<lines.length; k++){
            lines[k].onclick=function(){
                lines[k].classList.toggle('active'); }

            lines[k].oncontextmenu=function(){
                lines[k].classList.toggle('active'); }}

        for(let k=0; k<lines.length; k++){
            let lines_href=lines[k].getAttribute('href');
            if(lines_href.includes('/slot-group')){
                lines[k].classList.add('slot_group'); }}


        let links_panel=document.querySelector('.links_panel');
        let lp_con=document.querySelector('.lp_con');
        if(links_panel && lp_con){
            lp_con.style.display='block';
            lp_con.onclick=()=>{
                lp_con.classList.toggle('hide');
                let is_hide=lp_con.classList.contains('hide');
                links_panel.classList.toggle('hide', is_hide); }} // 第2引数 true:クラス追加、false:削除

    } // list_disp()



    button3.onclick=function(){
        if(mylist.length>0){
            list_color_clear();

            let storage_handle=null;

            let link_id=0;
            open_roop(link_id);

            function open_roop(link_id){
                if(link_id<mylist.length){
                    let link_url=mylist[link_id].url;
                    let not_pass=open_win(link_id, link_url);

                    if(storage_handle){
                        window.removeEventListener('storage', storage_handle); }

                    if(not_pass){
                        storage_handle=(event)=>{
                            if(event.key==='AmbTV_MyList' && event.newValue!==null){
                                let newIndex=parseInt(event.newValue);
                                if(newIndex>link_id && newIndex<=mylist.length){
                                    window.removeEventListener('storage', storage_handle);
                                    open_roop(newIndex); }}}

                        window.addEventListener('storage', storage_handle); } // 🔴🔴 シーケンス処理

                    else{ // 対象urlがスロットグループの場合
                        setTimeout(()=>{
                            localStorage.setItem('AmbTV_MyList', link_id+1);
                            open_roop(link_id+1);
                        }, 200); }

                } // if(link_id<mylist.length)

            } //open_roop(link_id)


            function open_win(link_id, link_url){
                if(link_url.includes('video/title/')){ // シリーズ動画の登録
                    let open_q=link_url+ '?amtv_addlist=0&num='+ link_id;
                    list_color(link_url);
                    let newwin=window.open(open_q);
                    return true; }
                else if(link_url.includes('video/episode') ||
                        link_url.includes('/slots/')){ // 個別動画の登録
                    let open_q=link_url+ '?amtv_addlist=1&num='+ link_id;
                    list_color(link_url);
                    let newwin=window.open(open_q);
                    return true; }
                else{ // スロットグループの登録はパス
                    return false; } // パスの場合は falseを返す

            } // open_win()


            let lines=document.querySelectorAll('.links_panel a');
            for(let k=0; k<lines.length; k++){
                lines[k].onclick=function(){
                    lines[k].classList.toggle('active'); }

                lines[k].oncontextmenu=function(){
                    lines[k].classList.toggle('active'); }}

            function list_color(link_url){
                let lines=document.querySelectorAll('.links_panel a');
                for(let k=0; k<lines.length; k++){
                    if(lines[k].getAttribute('href')==link_url){
                        lines[k].classList.add('done'); }}}

            function list_color_clear(){
                let lines=document.querySelectorAll('.links_panel a');
                for(let k=0; k<lines.length; k++){
                    lines[k].classList.remove('done'); }}

        } // if(mylist.length>0)

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
