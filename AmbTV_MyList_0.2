// ==UserScript==
// @name        AmbTV MyList
// @namespace        http://tampermonkey.net/
// @version        0.2
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
    let interval1=setInterval(wait_target1, 50);
    function wait_target1(){
        retry1++;
        if(retry1>80){ // リトライ制限 4secまで
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




function main(list_ul){

    disp_now_count();

    let panel=
        '<div class="my_p">'+
        '<button class="button1 com-shared-mypage-MypageSidebar__item">'+
        '登録をファイルに保存</button>'+
        '<button class="button2 com-shared-mypage-MypageSidebar__item">'+
        'ファイルから登録を読込む</button>'+
        '<input class="button2_file" type="file" style="display: none">'+
        '<button class="button3 com-shared-mypage-MypageSidebar__item">'+
        'マイリストを自動登録</button>'+
        '</div>';

    let sidebar=document.querySelector('.com-shared-mypage-MypageSidebar');

    if(sidebar && !document.querySelector('.my_p')){
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

        alert(
            " 🔴 「AmbMyList(n).json」のファイルを読込んでください\n"+
            "　　(n)は同名ファイルがある場合の連番です");
        button2_file.click(); }

    button2_file.addEventListener("change", function(){
        if(!(button2_file.value)) return; // ファイルが選択されない場合
        let file_list=button2_file.files;
        if(!file_list) return; // ファイルリストが選択されない場合
        let file=file_list[0];
        if(!file) return; // ファイルが無い場合

        let file_reader=new FileReader();
        file_reader.readAsText(file);
        file_reader.onload=function(){
            let data_in=JSON.parse(file_reader.result);
            links=data_in; // 記録配列  links を上書き
            let write_json=JSON.stringify(links);

            list_disp(); }
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
                    }, 3000); } // 🔴🔴 処理スピードのパラメーター

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
                else{ // スロット等の登録
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
        let disp_order=document.querySelector('.com-m-SelectMenuForDesktop');
        if(disp_order){
            let list_count=document.querySelectorAll('.com-pages-mylist-MylistContentItemList >li');
            let count_disp=
                '<div class="count_d" style="color: #fff">現在の登録数：'+ list_count.length +'</div>';

            if(document.querySelector('.count_d')){
                document.querySelector('.count_d').remove(); }
            disp_order.insertAdjacentHTML('beforebegin', count_disp); }

    } // disp_now_count()


} // main()
