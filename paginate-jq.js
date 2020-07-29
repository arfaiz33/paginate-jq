$('<style>').text('.pg-item-none{display: none;} .pg-item-active{display:;}').appendTo('head');
var pg_var = { count: 0, max_item: 0, page_now: 0, max_page: 0 };
var pg_name = [];

function pg_update(name) {
    for (var i = 1; i <= pg_name[name].count; i++) {
        $($(name).data("pg-target-ch") + ":nth-child(" + i + ")").addClass("pg-item-none");
    }
    for (var i = (pg_name[name].page_now * pg_name[name].max_item) + 1; i <= (pg_name[name].page_now + 1) * pg_name[name].max_item; i++) {
        $($(name).data("pg-target-ch") + ":nth-child(" + i + ")").removeClass("pg-item-none");
        $($(name).data("pg-target-ch") + ":nth-child(" + i + ")").addClass("pg-item-active");
    }
    $("." + name.substr(1) + "-no").text((pg_name[name].page_now + 1) + ' of ' + (pg_name[name].max_page + 1))
}

function pg_move(name, method, count) {
    if (method == "inc") {
        if (pg_name[name].page_now !== pg_name[name].max_page) {
            pg_name[name].page_now++;
            pg_update(name);
        }
    } else if (method == "dec") {
        if (pg_name[name].page_now !== 0) {
            pg_name[name].page_now--;
            pg_update(name);
        }
    } else if (method == "mv") {
        if (count >= 0 && count <= pg_name[name].max_page) {
            pg_name[name].page_now = count;
            pg_update(name);
        }
    } else if (method == "first") {
        if (pg_name[name].page_now !== 0) {
            pg_name[name].page_now = 0;
            pg_update(name);
        }
    } else if (method == "last") {
        if (pg_name[name].page_now !== pg_name[name].max_page) {
            pg_name[name].page_now = pg_name[name].max_page;
            pg_update(name);
        }
    }
}

function paginate_jq(name) {
    pg_name.push(name);
    pg_name[name] = pg_var;
    pg_name[name].count = $($(name).data("pg-target")).children().length;
    pg_name[name].max_item = $(name).data('max-item');
    pg_name[name].page_now = 0;
    pg_name[name].max_page = Math.ceil(pg_name[name].count / pg_name[name].max_item) - 1;
    $(name).append('<li onclick=\"pg_move(\'' + name + '\',\'first\')\" class=\"' + $(name).data('item-class') + '\"><<</li>');
    $(name).append('<li onclick=\"pg_move(\'' + name + '\',\'dec\')\" class=\"' + $(name).data('item-class') + '\"><</li>');
    $(name).append('<li class=\"' + name.substr(1) + '-no ' + $(name).data('item-class') + '\"></li>');
    $(name).append('<li onclick=\"pg_move(\'' + name + '\',\'inc\')\" class=\"' + $(name).data('item-class') + '\">></li>');
    $(name).append('<li onclick=\"pg_move(\'' + name + '\',\'last\')\" class=\"' + $(name).data('item-class') + '\">>></li>');
    pg_update(name);
}
