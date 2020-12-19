"use strict";

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, r) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, r) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
    return t
}
var body = document.body,
    codexText = document.getElementById("codex-text"),
    codexHeader = document.getElementById("codex-header"),
    nickname = document.getElementById("card-nickname"),
    ghoul = document.getElementById("card-ghoul"),
    cardGenerateButton = document.getElementById("card-generate-button"),
    getRandomNumber = function(e, r) {
        return Math.floor((r - e) * Math.random()) + e
    },
    getBackgroundImageGenerator = function(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) n[t - 1] = arguments[t];
        for (var o = [], a = n.length, u = 0, i = 0; i < a; i++) {
            var c = getRandomNumber(0, n.length);
            o.push.apply(o, _toConsumableArray(n.splice(c, 1)))
        }
        return function() {
            e.style.backgroundImage = 'url("'.concat(o[u], '")'), ++u === a && (u = 0)
        }
    };
if (Number.parseInt(getComputedStyle(body).fontSize) > 13) {
    var backgroundImageSelector = getBackgroundImageGenerator(body, "https://steamuserimages-a.akamaihd.net/ugc/941704820301887979/AEFED44B6323629356DD52649524815C6340CD6D/", "https://steamuserimages-a.akamaihd.net/ugc/932679864996007511/F208B767E630050169114CE60884669B920A99C9/", "https://steamuserimages-a.akamaihd.net/ugc/456362427309814695/B8522BB8BC0448685F4409CBCDDB4B0325FF7B82/", "https://i.pinimg.com/originals/34/9e/21/349e219de6b420862defe8f92117f1bd.gif", "https://thumbs.gfycat.com/DopeyFrighteningFossa-size_restricted.gif");
    backgroundImageSelector(), setInterval(backgroundImageSelector, 5e3)
}
var dark = document.getElementById("dark"),
    resize = function() {
        dark.style.height = body.offsetHeight + "px", ghoul.style.height = ghoul.offsetWidth + "px"
    };
window.addEventListener("resize", resize);
var codex = ["1. <b>dead inside ghoul</b> - это не стиль общения, не плейстайл pos 1/2 no roll, и даже не чб ава с Эксом в наушниках. Гуль - это образ жизни, даже скорее образ мышления. Ты можешь называться гулем, если не смотришь на людей как на равных, и осознаешь, что это все лишь скот. Да, ты должен преподносить себя как кого-то, кто по умолчанию лучше других, однако это нужно оправдывать.", "2. Гулем может быть каждый, но не каждый тру, и не каждый гуль - SSS rank. Если у тебя 2к птс ты все еще можешь быть гулем, но нужно знать свое место. Если ты слабый игрок, то не нужно высирать в чат союзнику (или еще лучше, противнику) чел, го zxc, я тебя разъебу 1v1, ты выглядишь как клоун. Если ты смеешь считать себя гулем, то не позорься, ты выше этого. Проиграл игру? Стань лучше и выиграй следующие 2. И еще, написал что то игроку, у которого больше чем на 500 птс больше, чем у тебя - ты выскочка, а не гуль.", '3. Ты не клоун. Да, это было в рофельном кодексе, но здесь я попробую описать все, что делает из тебя клоуна, а не гуля. Нужно разделять ситуации, когда тебе ♥♥♥♥♥♥♥♥♥♥ на то, что думают людишки о твоем поведении, и когда ты правда выглядишь как клоун и только позоришь себя и dead inside culture. Если у тебя счет не 10/0 и ты оскорбляешь энэми в чате - ты клоун. Если у тебя счет не 10/0 и ты пишешь не фидящему союзнику, что он бездарь - ты клоун. Если ты ставишь паузу не после смерти энэми мидера до 3 минуты или супер глупого размена по хп (например, 3 рейзов), а после каждого килла - ты клоун. Если на каждый мув высuраешь "?" в чат - ты клоун. Общаешься всю игру с энэми в чате (речь о ситуации, когда вы друг друга оскорбляете)? гц тебя, ты клоун. Если челы что-то тебе пишут - mute all chat, zitrax mode.', "4. Насчет ника и аватара. Конечно, если ты хочешь, что бы все знали, что ты гуль, то ставь чб аву, прифотошопленный к чару глаз или скрин из гуля, и ник dead inside, но это не обязательно. Просто аватар и ник должны быть эстетичными. По кайфу играю, по кайфу одет (с).", '5. Тебе плевать на всех, но ты должен вести себя уважительно с сильными игроками, особенно теми, кто сильнее тебя. Не оскорбляй тех, кто этого не заслуживает. Тебя не волнуют чужие чувства, но ты ведешь себя как агрессивный ребенок, а не как SSS rank, когда с 0 секунды пишешь в чат: "Бездари, вы животные а не игроки, дайте мне мид я выиграю вам игру".', "6. zitrax mode11, zxczxczxczxczxczxczxc. Ты должен выигрывать, твои цифры это твоя кровь и плоть, цифры энеми- твоя еда. Если ты разбиваешь шмотки после каждой ошибки суппорта на лайне - ты не гуль, ты выскочка подросток, который не может контролировать свои эмоции. Ты имеешь право сломать вещи в игре, где команда сама тебе специально руинит. В остальных случаях ты должен показывать людишкам, кто здесь гуль. Не получилось? Становись сильнее.", "7. Этот пункт вытекает из предыдущего. Хочешь побеждать? Играй на pos 1/2. Ты можешь играть и на других позициях, если ты хорош на них. Суть в том, что бы вывозить 10/10 игр, если у тебя получается делать это на суппорте - гц.", "8. Отвечай за базар, а значит следи за ним. Сказал что вынесешь в лоббаке? Выноси, а не умирай на второй минуте от рейзов лвл 2. Сказал, что сломаешь вещи? Ломай. Это не значит, что нужно каждую игру ломать вещи, это значит, что не нужно быть клоуном, который 24/7 кидается фразами в чат.", "9. Ты родился дважды, второй раз в Люксембурге. Ты должен уметь выносить челов в zxc, это краеугольный камень бытия ghoul'ем.", "10. Не дожирай за кем то. Не стоит копировать ник/аватар/фразы Алохи, или еще кого-то. Если ты гуль - ты личность, а личность должна быть уникальной."],
    ghouls = ["https://sun9-57.userapi.com/c206716/v206716085/9d0e3/Fy3sD4m6G7s.jpg", "https://thumbs.gfycat.com/ComfortableDishonestJavalina-small.gif", "https://giffiles.alphacoders.com/132/13253.gif", "https://steamuserimages-a.akamaihd.net/ugc/2422250057100818175/60D9BC0DB904F7CB073F9C56EECF9DF0089CD9BE/"],
    ghoulCount = 0,
    ghoulCountNeed = getRandomNumber(2, 4),
    currentCodex = 0;

function nextCodex() {
    codexText.innerHTML = codex[currentCodex], ++currentCodex === codex.length && (currentCodex = 0), resize()
}
nextCodex();
var symbols = "彡༒☬☠︎♕彡༒☬☠︎♕乡☬牡マキグナルファマキグナルファ系路克瑞大阪市立学鎰命科ャマ能力ϒ人は妻スティ要通り玉宏¥サ丹谷Ѫ灯影伝鶐能力ϒ人は妻スティ",
    warpSymbols = function(e, r, n) {
        for (var t = getRandomNumber(r, n), o = "", a = 0; a < t; a++) o += symbols[getRandomNumber(0, symbols.length)];
        return "".concat(o).concat(e).concat(o.split("").reverse().join(""))
    },
    sfix = [function() {
        for (var e = getRandomNumber(1, 4), r = "", n = 0; n < e; n++) r += "zxc";
        return r
    }, function() {
        for (var e = getRandomNumber(1, 4), r = "", n = 0; n < e; n++) r += "zxc";
        return r
    }, function() {
        var e = ["", "or feed", "or feed", "or leave", "or leave", "or afk", "or afk", "or afk", "or suicide", "или пудж с момкой", "или фид", "или лес", "or jungle"];
        return "".concat(getRandomNumber(1, 6), "-").concat(getRandomNumber(1, 6), " pos ").concat(e[getRandomNumber(0, e.length)])
    }, function() {
        var e = ["", "or feed", "or leave", "or afk", "or suicide", "или пудж с момкой", "или фид", "или лес", "or jungle"];
        return "".concat(getRandomNumber(0, 6), "-").concat(getRandomNumber(0, 6), " pos ").concat(e[getRandomNumber(0, e.length)])
    }, function() {
        return "dead inside"
    }, function() {
        return "dead inside"
    }, function() {
        return "dead outside"
    }, function() {
        return warpSymbols("дед внутри", 0, 2)
    }, function() {
        return "clown"
    }, function() {
        return warpSymbols("rotting", 0, 2)
    }, function() {
        return warpSymbols("мёртв", 0, 2)
    }, function() {
        return "мёртв внутри"
    }, function() {
        return warpSymbols("anti social", 0, 2)
    }, function() {
        return "anti social"
    }, function() {
        return "crying"
    }, function() {
        return warpSymbols("eternal despair", 0, 2)
    }, function() {
        return warpSymbols("blood tears", 0, 2)
    }, function() {
        return "hurt"
    }, function() {
        return "hopeless"
    }, function() {
        return getRandomNumber(8, 17) + " y.o."
    }, function() {
        return warpSymbols("sad", 0, 3)
    }, function() {
        return "sad"
    }, function() {
        return warpSymbols("sad", 0, 2)
    }, function() {
        return "1000-7"
    }, function() {
        return "чудище"
    }, function() {
        return "hate"
    }, function() {
        return warpSymbols("hate", 0, 2)
    }, function() {
        for (var e = getRandomNumber(1, 3), r = "", n = 0; n < e; n++) r += "666";
        return r
    }, function() {
        return warpSymbols("bury me alive", 1, 3)
    }, function() {
        return '"i tired of this place"'
    }, function() {
        return warpSymbols("плевать на всех", 1, 3)
    }, function() {
        return warpSymbols("no brain", 0, 2)
    }, function() {
        return warpSymbols("feeling alive", 1, 3)
    }, function() {
        return "mode: "
    }, function() {
        return "pudge abuzer"
    }, function() {
        return "sf abuzer"
    }, function() {
        return warpSymbols("dying as a lifestyle", 1, 3)
    }, function() {
        return warpSymbols("hate me as you do", 1, 2)
    }, function() {
        return warpSymbols("tilted", 0, 2)
    }, function() {
        return warpSymbols("ugly god", 0, 3)
    }, function() {
        return warpSymbols("ugly god", 0, 3)
    }, function() {
        return "дед инсайд если че"
    }, function() {
        return "broken"
    }, function() {
        return warpSymbols("kill me", 0, 3)
    }, function() {
        return "death"
    }, function() {
        return warpSymbols("death", 1, 3)
    }, function() {
        return "ghoul"
    }, function() {
        return warpSymbols("ghoul", 1, 3)
    }, function() {
        return warpSymbols("pain", 1, 3)
    }, function() {
        return warpSymbols("pain", 1, 3)
    }, function() {
        return symbols[getRandomNumber(0, symbols.length)]
    }, function() {
        return "".concat(getRandomNumber(0, 9), "k pts")
    }, function() {
        return "".concat(["SSS", "SS+", "SS", "S+", "S", "A", "B", "C"][getRandomNumber(0, 8)], " ранг")
    }];

function generate() {
    ghoulCount++ === ghoulCountNeed && (ghoulCount = 0, ghoulCountNeed = getRandomNumber(3, 6), ghoul.style.backgroundImage = 'url("' + ghouls[getRandomNumber(0, ghouls.length)] + '")');
    for (var e = getRandomNumber(2, 4), r = [], n = "", t = 0; t < sfix.length; t++) r.push(t);
    for (var o = 0; o < e; o++) n += sfix[r.splice(getRandomNumber(0, r.length), 1)[0]]() + " ";
    nickname.innerHTML = n, resize()
}
generate(), codexHeader.addEventListener("click", nextCodex), cardGenerateButton.addEventListener("click", generate);
