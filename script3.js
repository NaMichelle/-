'use strict';






const search = Vue.createApp({
  // dataは初期値。動的なものを入れられない
  data() {
    return {
      // fiddle上では、jsonデータをここに入れています。
      records: [{
          "id": 1,
　　　　　"src": "./images/画像編集技法2023/課題2/001-青山ひびき-a22db002.jpg",
          "name":"青山ひびき",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 2,
　　　　　"src": "./images/画像編集技法2023/課題2/002-秋田陽菜乃-a22db003.jpg",
          "name":"秋田陽菜乃",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 3,
　　　　　"src": "./images/画像編集技法2023/課題2/003-安藤こずえ-a22db005.jpg",
          "name":"安藤こずえ",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 4,
　　　　　"src": "./images/画像編集技法2023/課題2/004-青木美咲希-a22db001.jpg",
          "name":"青木美咲希",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 5,
　　　　　"src": "./images/画像編集技法2023/課題2/005-浅井凜音-a22db004.jpg",
          "name":"浅井凜音",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 6,
　　　　　"src": "./images/画像編集技法2023/課題2/006-天野優愛-a22da002.jpg",
          "name":"天野優愛",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 7,
　　　　　"src": "./images/画像編集技法2023/課題2/007-後藤佳奈-a21da043.jpg",
          "name":"後藤佳奈",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 8,
　　　　　"src": "./images/画像編集技法2023/課題2/008-池田衣里-a22db009.jpg",
          "name":"池田衣里",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 9,
　　　　　"src": "./images/画像編集技法2023/課題2/009-稲吉菜緒-a21db016.jpg",
          "name":"稲吉菜緒",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 10,
　　　　　"src": "./images/画像編集技法2023/課題2/010-喜多清根-a22da031.jpg",
          "name":"喜多清根",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 11,
　　　　　"src": "./images/画像編集技法2023/課題2/011-河村侑未-a22db033.jpg",
          "name":"河村侑未",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 12,
　　　　　"src": "./images/画像編集技法2023/課題2/012-松原亜実-a22da072.jpg",
          "name":"松原亜実",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 13,
　　　　　"src": "./images/画像編集技法2023/課題2/013-前田晴香-a22da070.jpg",
          "name":"前田晴香",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 14,
　　　　　"src": "./images/画像編集技法2023/課題2/014-森菜々美-a22da077.jpg",
          "name":"森菜々美",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 15,
　　　　　"src": "./images/画像編集技法2023/課題2/015-宮崎友-a22da075.jpg",
          "name":"宮崎友",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 16,
　　　　　"src": "./images/画像編集技法2023/課題2/016-大橋彩花-a22db024.jpg",
          "name":"大橋彩花",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 17,
　　　　　"src": "./images/画像編集技法2023/課題2/017-奥田もえ-a21da026.jpg",
          "name":"奥田もえ",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 18,
　　　　　"src": "./images/画像編集技法2023/課題2/018-大沼愛菜佳-a22da017.jpg",
          "name":"大沼愛菜佳",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 19,
　　　　　"src": "./images/画像編集技法2023/課題2/019-小野美咲-a22db027.jpg",
          "name":"小野美咲",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 20,
　　　　　"src": "./images/画像編集技法2023/課題2/020-尾山怜花-a21da027.jpg",
          "name":"尾山怜花",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 21,
　　　　　"src": "./images/画像編集技法2023/課題2/021-鷺山あいか-a22db043.jpg",
          "name":"鷺山あいか",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 22,
　　　　　"src": "./images/画像編集技法2023/課題2/022-總見榛名-a22db055.jpg",
          "name":"總見榛名",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 23,
　　　　　"src": "./images/画像編集技法2023/課題2/023-佐藤未悠-a22db045.jpg",
          "name":"佐藤未悠",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 24,
　　　　　"src": "./images/画像編集技法2023/課題2/024-酒井里子-a20da061.jpg",
          "name":"酒井里子",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 25,
　　　　　"src": "./images/画像編集技法2023/課題2/025-鈴木梨音-a22da044.jpg",
          "name":"鈴木梨音",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 26,
　　　　　"src": "./images/画像編集技法2023/課題2/026-鈴木琉杏-a22db052.jpg",
          "name":"鈴木琉杏",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 27,
　　　　　"src": "./images/画像編集技法2023/課題2/027-杉山歌野-a22db050.jpg",
          "name":"杉山歌野",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 28,
　　　　　"src": "./images/画像編集技法2023/課題2/028-沢田柚奈-a22db047.jpg",
          "name":"沢田柚奈",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 29,
　　　　　"src": "./images/画像編集技法2023/課題2/029-建木菜々-a22da049.jpg",
          "name":"建木菜々",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 30,
　　　　　"src": "./images/画像編集技法2023/課題2/030-内田日菜-a22db021.jpg",
          "name":"内田日菜",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 31,
　　　　　"src": "./images/画像編集技法2023/課題2/031-渡邉柚那-a22da085.jpg",
          "name":"渡邉柚那",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 32,
　　　　　"src": "./images/画像編集技法2023/課題2/032-山田依里奈-a22db093.jpg",
          "name":"山田依里奈",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 33,
　　　　　"src": "./images/画像編集技法2023/課題2/033-山中菜都美-a21da113.jpg",
          "name":"山中菜都美",
          "topic": "TOPIC1",
          "subject":"da"
        },
        {
          "id": 34,
　　　　　"src": "./images/画像編集技法2023/課題2/034-山﨑颯香-a22db091.jpg",
          "name":"山﨑颯香",
          "topic": "TOPIC1",
          "subject":"db"
        },
        {
          "id": 35,
　　　　　"src": "./images/画像編集技法2023/課題3/001-青山ひびき-a22db002.jpg",
          "name":"青山ひびき",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 36,
　　　　　"src": "./images/画像編集技法2023/課題3/002-秋田陽菜乃-a22db003.jpg",
          "name":"秋田陽菜乃",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 37,
　　　　　"src": "./images/画像編集技法2023/課題3/003-安藤こずえ-a22db005.jpg",
          "name":"安藤こずえ",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 38,
　　　　　"src": "./images/画像編集技法2023/課題3/004-青木美咲希-a22db001.jpg",
          "name":"青木美咲希",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 39,
　　　　　"src": "./images/画像編集技法2023/課題3/005-浅井凜音-a22db004.jpg",
          "name":"浅井凜音",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 40,
　　　　　"src": "./images/画像編集技法2023/課題3/006-天野優愛-a22da002.jpg",
          "name":"天野優愛",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 41,
　　　　　"src": "./images/画像編集技法2023/課題3/007-後藤佳奈-a21da043.jpg",
          "name":"後藤佳奈",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 42,
　　　　　"src": "./images/画像編集技法2023/課題3/008-池田衣里-a22db009.jpg",
          "name":"池田衣里",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 43,
　　　　　"src": "./images/画像編集技法2023/課題3/009-稲吉菜緒-a21db016.jpg",
          "name":"稲吉菜緒",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 44,
　　　　　"src": "./images/画像編集技法2023/課題3/010-喜多清根-a22da031.jpg",
          "name":"喜多清根",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 45,
　　　　　"src": "./images/画像編集技法2023/課題3/011-松原亜実-a22da072.jpg",
          "name":"松原亜実",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 46,
　　　　　"src": "./images/画像編集技法2023/課題3/012-前田晴香-a22da070.jpg",
          "name":"前田晴香",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 47,
　　　　　"src": "./images/画像編集技法2023/課題3/013-森菜々美-a22da077.jpg",
          "name":"森菜々美",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 48,
　　　　　"src": "./images/画像編集技法2023/課題3/014-宮崎友-a22da075.jpg",
          "name":"宮崎友",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 49,
　　　　　"src": "./images/画像編集技法2023/課題3/015-大橋彩花-a22db024.jpg",
          "name":"大橋彩花",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 50,
　　　　　"src": "./images/画像編集技法2023/課題3/016-大沼愛菜佳-a22da017.jpg",
          "name":"大沼愛菜佳",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 51,
　　　　　"src": "./images/画像編集技法2023/課題3/017-小野美咲-a22db027.jpg",
          "name":"小野美咲",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 52,
　　　　　"src": "./images/画像編集技法2023/課題3/018-尾山怜花-a21da027.jpg",
          "name":"尾山怜花",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 53,
　　　　　"src": "./images/画像編集技法2023/課題3/019-鷺山あいか-a22db043.jpg",
          "name":"鷺山あいか",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 54,
　　　　　"src": "./images/画像編集技法2023/課題3/020-總見榛名-a22db055.jpg",
          "name":"總見榛名",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 55,
　　　　　"src": "./images/画像編集技法2023/課題3/021-佐藤未悠-a22db045.jpg",
          "name":"佐藤未悠",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 56,
　　　　　"src": "./images/画像編集技法2023/課題3/022-酒井里子-a20da061.jpg",
          "name":"酒井里子",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 57,
　　　　　"src": "./images/画像編集技法2023/課題3/023-鈴木琉杏-a22db052.jpg",
          "name":"鈴木琉杏",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 58,
　　　　　"src": "./images/画像編集技法2023/課題3/024-杉山歌野-a22db050.jpg",
          "name":"杉山歌野",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 59,
　　　　　"src": "./images/画像編集技法2023/課題3/025-沢田柚奈-a22db047.jpg",
          "name":"沢田柚奈",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 60,
　　　　　"src": "./images/画像編集技法2023/課題3/026-内田日菜-a22db021.jpg",
          "name":"内田日菜",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 61,
　　　　　"src": "./images/画像編集技法2023/課題3/027-山田依里奈-a22db093.jpg",
          "name":"山田依里奈",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 62,
　　　　　"src": "./images/画像編集技法2023/課題3/028-山中菜都美-a21da113.jpg",
          "name":"山中菜都美",
          "topic": "TOPIC2",
          "subject":"da"
        },
        {
          "id": 63,
　　　　　"src": "./images/画像編集技法2023/課題3/029-山﨑颯香-a22db091.jpg",
          "name":"山﨑颯香",
          "topic": "TOPIC2",
          "subject":"db"
        },
        {
          "id": 64,
　　　　　"src": "./images/画像編集技法2023/課題4/001-青山ひびき-Q1-a22db002.jpg",
          "name":"青山ひびき",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 65,
　　　　　"src": "./images/画像編集技法2023/課題4/003-秋田陽菜乃-Q1-a22db003.jpg",
          "name":"秋田陽菜乃",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 66,
　　　　　"src": "./images/画像編集技法2023/課題4/005-安藤こずえ-Q1-a22db005.jpg",
          "name":"安藤こずえ",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 67,
　　　　　"src": "./images/画像編集技法2023/課題4/007-青木美咲希-Q1-a22db001.jpg",
          "name":"青木美咲希",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 68,
　　　　　"src": "./images/画像編集技法2023/課題4/008-浅井凜音-Q1-a22db004.jpg",
          "name":"浅井凜音",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 69,
　　　　　"src": "./images/画像編集技法2023/課題4/010-天野優愛-Q1-a22da002.jpg",
          "name":"天野優愛",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 70,
　　　　　"src": "./images/画像編集技法2023/課題4/012-後藤佳奈-Q1-a21da043.jpg",
          "name":"後藤佳奈",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 71,
　　　　　"src": "./images/画像編集技法2023/課題4/014-池田衣里-Q1-a22db009.jpg",
          "name":"池田衣里",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 72,
　　　　　"src": "./images/画像編集技法2023/課題4/016-稲吉菜緒-Q1-a21db016.jpg",
          "name":"稲吉菜緒",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 73,
　　　　　"src": "./images/画像編集技法2023/課題4/018-喜多清根-Q1-a22da031.jpg",
          "name":"喜多清根",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 74,
　　　　　"src": "./images/画像編集技法2023/課題4/020-松原亜実-Q1-a22da072.jpg",
          "name":"松原亜実",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 75,
　　　　　"src": "./images/画像編集技法2023/課題4/022-前田晴香-Q1-a22da070.jpg",
          "name":"前田晴香",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 76,
　　　　　"src": "./images/画像編集技法2023/課題4/024-森菜々美-Q1-a22da077.jpg",
          "name":"森菜々美",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 77,
　　　　　"src": "./images/画像編集技法2023/課題4/026-宮崎友-Q1-a22da075.jpg",
          "name":"宮崎友",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 78,
　　　　　"src": "./images/画像編集技法2023/課題4/028-大橋彩花-Q1-a22db024.jpg",
          "name":"大橋彩花",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 79,
　　　　　"src": "./images/画像編集技法2023/課題4/030-岡留碧衣-Q1-a22db025.jpg",
          "name":"岡留碧衣",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 80,
　　　　　"src": "./images/画像編集技法2023/課題4/032-奥田もえ-Q1-a21da026.jpg",
          "name":"奥田もえ",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 81,
　　　　　"src": "./images/画像編集技法2023/課題4/034-大沼愛菜佳-Q1-a22da017.jpg",
          "name":"大沼愛菜佳",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 82,
　　　　　"src": "./images/画像編集技法2023/課題4/036-小野美咲-Q1-a22db027.jpg",
          "name":"小野美咲",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 83,
　　　　　"src": "./images/画像編集技法2023/課題4/038-尾山怜花-Q1-a21da027.jpg",
          "name":"尾山怜花",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 84,
　　　　　"src": "./images/画像編集技法2023/課題4/040-鷺山あいか-Q1-a22db043.jpg",
          "name":"鷺山あいか",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 85,
　　　　　"src": "./images/画像編集技法2023/課題4/042-總見榛名-Q1-a22db055.jpg",
          "name":"總見榛名",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 86,
　　　　　"src": "./images/画像編集技法2023/課題4/044-佐藤未悠-Q1-a22db045.jpg",
          "name":"佐藤未悠",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 87,
　　　　　"src": "./images/画像編集技法2023/課題4/046-酒井里子-Q1-a20da061.jpg",
          "name":"酒井里子",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 88,
　　　　　"src": "./images/画像編集技法2023/課題4/048-鈴木梨音-Q1-a22da044.jpg",
          "name":"鈴木梨音",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 89,
　　　　　"src": "./images/画像編集技法2023/課題4/050-鈴木琉杏-Q1-a22db052.jpg",
          "name":"鈴木琉杏",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 90,
　　　　　"src": "./images/画像編集技法2023/課題4/052-杉山歌野-Q1-a22db050.jpg",
          "name":"杉山歌野",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 91,
　　　　　"src": "./images/画像編集技法2023/課題4/054-沢田柚奈-Q1-a22db047.jpg",
          "name":"沢田柚奈",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 92,
　　　　　"src": "./images/画像編集技法2023/課題4/056-建木菜々-Q1-a22da049.jpg",
          "name":"建木菜々",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 93,
　　　　　"src": "./images/画像編集技法2023/課題4/058-内田日菜-Q1-a22db021.jpg",
          "name":"内田日菜",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 94,
　　　　　"src": "./images/画像編集技法2023/課題4/060-渡邉柚那-Q1-a22da085.jpeg",
          "name":"渡邉柚那",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 95,
　　　　　"src": "./images/画像編集技法2023/課題4/062-山田依里奈-Q1-a22db093.jpg",
          "name":"山田依里奈",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 96,
　　　　　"src": "./images/画像編集技法2023/課題4/064-山中菜都美-Q1-a21da113.jpg",
          "name":"山中菜都美",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 97,
　　　　　"src": "./images/画像編集技法2023/課題4/066-山﨑颯香-Q1-a22db091.jpg",
          "name":"山﨑颯香",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 98,
　　　　　"src": "./images/画像編集技法2023/課題4/002-青山ひびき-Q2-a22db002.jpg",
          "name":"青山ひびき",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 99,
　　　　　"src": "./images/画像編集技法2023/課題4/004-秋田陽菜乃-Q2-a22db003.jpg",
          "name":"秋田陽菜乃",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 100,
　　　　　"src": "./images/画像編集技法2023/課題4/006-安藤こずえ-Q2-a22db005.jpg",
          "name":"安藤こずえ",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 101,
　　　　　"src": "./images/画像編集技法2023/課題4/009-浅井凜音-Q2-a22db004.jpeg",
          "name":"浅井凜音",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 102,
　　　　　"src": "./images/画像編集技法2023/課題4/011-天野優愛-Q2-a22da002.jpg",
          "name":"天野優愛",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 103,
　　　　　"src": "./images/画像編集技法2023/課題4/013-後藤佳奈-Q2-a21da043.jpg",
          "name":"後藤佳奈",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 104,
　　　　　"src": "./images/画像編集技法2023/課題4/015-池田衣里-Q2-a22db009.jpg",
          "name":"池田衣里",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 105,
　　　　　"src": "./images/画像編集技法2023/課題4/017-稲吉菜緒-Q2-a21db016.jpg",
          "name":"稲吉菜緒",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 106,
　　　　　"src": "./images/画像編集技法2023/課題4/019-喜多清根-Q2-a22da031.jpg",
          "name":"喜多清根",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 107,
　　　　　"src": "./images/画像編集技法2023/課題4/021-松原亜実-Q2-a22da072.jpg",
          "name":"松原亜実",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 108,
　　　　　"src": "./images/画像編集技法2023/課題4/023-前田晴香-Q2-a22da070.jpg",
          "name":"前田晴香",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 109,
　　　　　"src": "./images/画像編集技法2023/課題4/025-森菜々美-Q2-a22da077.jpg",
          "name":"森菜々美",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 110,
　　　　　"src": "./images/画像編集技法2023/課題4/027-宮崎友-Q2-a22da075.jpg",
          "name":"宮崎友",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 111,
　　　　　"src": "./images/画像編集技法2023/課題4/029-大橋彩花-Q2-a22db024.jpg",
          "name":"大橋彩花",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 112,
　　　　　"src": "./images/画像編集技法2023/課題4/031-岡留碧衣-Q2-a22db025.jpg",
          "name":"岡留碧衣",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 113,
　　　　　"src": "./images/画像編集技法2023/課題4/033-奥田もえ-Q2-a21da026.jpg",
          "name":"奥田もえ",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 114,
　　　　　"src": "./images/画像編集技法2023/課題4/035-大沼愛菜佳-Q2-a22da017.jpg",
          "name":"大沼愛菜佳",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 115,
　　　　　"src": "./images/画像編集技法2023/課題4/037-小野美咲-Q2-a22db027.jpg",
          "name":"小野美咲",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 116,
　　　　　"src": "./images/画像編集技法2023/課題4/039-尾山怜花-Q2-a21da027.jpg",
          "name":"尾山怜花",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 117,
　　　　　"src": "./images/画像編集技法2023/課題4/041-鷺山あいか-Q2-a22db043.jpg",
          "name":"鷺山あいか",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 118,
　　　　　"src": "./images/画像編集技法2023/課題4/043-總見榛名-Q2-a22db055.jpg",
          "name":"總見榛名",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 119,
　　　　　"src": "./images/画像編集技法2023/課題4/045-佐藤未悠-Q2-a22db045.jpg",
          "name":"佐藤未悠",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 120,
　　　　　"src": "./images/画像編集技法2023/課題4/047-酒井里子-Q2-a20da061.jpg",
          "name":"酒井里子",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 121,
　　　　　"src": "./images/画像編集技法2023/課題4/049-鈴木梨音-Q2-a22da044.jpg",
          "name":"鈴木梨音",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 122,
　　　　　"src": "./images/画像編集技法2023/課題4/051-鈴木琉杏-Q2-a22db052.jpg",
          "name":"鈴木琉杏",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 123,
　　　　　"src": "./images/画像編集技法2023/課題4/053-杉山歌野-Q2-a22db050.jpg",
          "name":"杉山歌野",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 124,
　　　　　"src": "./images/画像編集技法2023/課題4/055-沢田柚奈-Q2-a22db047.jpg",
          "name":"沢田柚奈",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 125,
　　　　　"src": "./images/画像編集技法2023/課題4/057-建木菜々-Q2-a22da049.jpg",
          "name":"建木菜々",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 126,
　　　　　"src": "./images/画像編集技法2023/課題4/059-内田日菜-Q2-a22db021.jpg",
          "name":"内田日菜",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 127,
　　　　　"src": "./images/画像編集技法2023/課題4/061-渡邉柚那--Q2-a22da085.jpg",
          "name":"渡邉柚那",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 128,
　　　　　"src": "./images/画像編集技法2023/課題4/063-山田依里奈-Q2-a22db093.jpg",
          "name":"山田依里奈",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 129,
　　　　　"src": "./images/画像編集技法2023/課題4/065-山中菜都美-Q2-a21da113.jpg",
          "name":"山中菜都美",
          "topic": "TOPIC3",
          "subject":"da"
        },
        {
          "id": 130,
　　　　　"src": "./images/画像編集技法2023/課題4/067-山﨑颯香-Q2-a22db091.jpg",
          "name":"山﨑颯香",
          "topic": "TOPIC3",
          "subject":"db"
        },
        {
          "id": 131,
　　　　　"src": "./images/画像編集技法2023/課題5/001-青山ひびき-a22db002.jpg",
          "name":"青山ひびき",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 132,
　　　　　"src": "./images/画像編集技法2023/課題5/002-秋田陽菜乃-a22db003.jpg",
          "name":"秋田陽菜乃",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 133,
　　　　　"src": "./images/画像編集技法2023/課題5/003-安藤こずえ-a22db005.jpg",
          "name":"安藤こずえ",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 134,
　　　　　"src": "./images/画像編集技法2023/課題5/004-青木美咲希-a22db001.jpg",
          "name":"青木美咲希",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 135,
　　　　　"src": "./images/画像編集技法2023/課題5/005-浅井凜音-a22db004.jpg",
          "name":"浅井凜音",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 136,
　　　　　"src": "./images/画像編集技法2023/課題5/006-天野優愛-a22da002.jpg",
          "name":"天野優愛",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 137,
　　　　　"src": "./images/画像編集技法2023/課題5/007-後藤佳奈-a21da043.jpg",
          "name":"後藤佳奈",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 138,
　　　　　"src": "./images/画像編集技法2023/課題5/008-池田衣里-a22db009.jpg",
          "name":"池田衣里",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 139,
　　　　　"src": "./images/画像編集技法2023/課題5/009-稲吉菜緒-a21db016.jpg",
          "name":"稲吉菜緒",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 140,
　　　　　"src": "./images/画像編集技法2023/課題5/010-河村侑未-a22db033.jpg",
          "name":"河村侑未",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 141,
　　　　　"src": "./images/画像編集技法2023/課題5/011-松原亜実-a22da072.jpg",
          "name":"松原亜実",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 142,
　　　　　"src": "./images/画像編集技法2023/課題5/012-前田晴香-a22da070.jpg",
          "name":"前田晴香",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 143,
　　　　　"src": "./images/画像編集技法2023/課題5/013-森菜々美-a22da077.jpg",
          "name":"森菜々美",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 144,
　　　　　"src": "./images/画像編集技法2023/課題5/014-宮崎友-a22da075.jpg",
          "name":"宮崎友",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 145,
　　　　　"src": "./images/画像編集技法2023/課題5/015-大橋彩花-a22db024.jpg",
          "name":"大橋彩花",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 146,
　　　　　"src": "./images/画像編集技法2023/課題5/016-岡留碧衣-a22db025.jpg",
          "name":"岡留碧衣",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 147,
　　　　　"src": "./images/画像編集技法2023/課題5/017-奥田もえ-a21da026.jpg",
          "name":"奥田もえ",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 148,
　　　　　"src": "./images/画像編集技法2023/課題5/018-大沼愛菜佳-a22da017.jpg",
          "name":"大沼愛菜佳",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 149,
　　　　　"src": "./images/画像編集技法2023/課題5/019-小野美咲-a22db027.jpg",
          "name":"小野美咲",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 150,
　　　　　"src": "./images/画像編集技法2023/課題5/020-尾山怜花-a21da027.jpg",
          "name":"尾山怜花",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 151,
　　　　　"src": "./images/画像編集技法2023/課題5/021-鷺山あいか-a22db043.jpg",
          "name":"鷺山あいか",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 152,
　　　　　"src": "./images/画像編集技法2023/課題5/022-總見榛名-a22db055.jpg",
          "name":"總見榛名",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 153,
　　　　　"src": "./images/画像編集技法2023/課題5/023-佐藤未悠-a22db045.jpg",
          "name":"佐藤未悠",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 154,
　　　　　"src": "./images/画像編集技法2023/課題5/024-酒井里子-a20da061.jpg",
          "name":"酒井里子",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 155,
　　　　　"src": "./images/画像編集技法2023/課題5/025-鈴木梨音-a22da044.jpg",
          "name":"鈴木梨音",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 156,
　　　　　"src": "./images/画像編集技法2023/課題5/026-杉山歌野-a22db050.jpg",
          "name":"杉山歌野",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 157,
　　　　　"src": "./images/画像編集技法2023/課題5/027-沢田柚奈-a22db047.jpg",
          "name":"沢田柚奈",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 158,
　　　　　"src": "./images/画像編集技法2023/課題5/028-建木菜々-a22da049.jpg",
          "name":"建木菜々",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 159,
　　　　　"src": "./images/画像編集技法2023/課題5/029-内田日菜-a22db021.jpg",
          "name":"内田日菜",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 160,
　　　　　"src": "./images/画像編集技法2023/課題5/030-渡邉柚那-a22da085.jpg",
          "name":"渡邉柚那",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 161,
　　　　　"src": "./images/画像編集技法2023/課題5/031-山田依里奈-a22db093.jpg",
          "name":"山田依里奈",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 162,
　　　　　"src": "./images/画像編集技法2023/課題5/032-山中菜都美-a21da113.jpg",
          "name":"山中菜都美",
          "topic": "TOPIC4",
          "subject":"da"
        },
        {
          "id": 163,
　　　　　"src": "./images/画像編集技法2023/課題5/033-山﨑颯香-a22db091.jpg",
          "name":"山﨑颯香",
          "topic": "TOPIC4",
          "subject":"db"
        },
        {
          "id": 164,
　　　　　"src": "./images/画像編集技法2023/課題7/001-秋田陽菜乃-a22db003.png",
          "name":"秋田陽菜乃",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 165,
　　　　　"src": "./images/画像編集技法2023/課題7/002-安藤こずえ-a22db005.png",
          "name":"安藤こずえ",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 166,
　　　　　"src": "./images/画像編集技法2023/課題7/003-青木美咲希-a22db001.png",
          "name":"青木美咲希",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 167,
　　　　　"src": "./images/画像編集技法2023/課題7/004-浅井凜音-a22db004.png",
          "name":"浅井凜音",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 168,
　　　　　"src": "./images/画像編集技法2023/課題7/005-天野優愛-a22da002.png",
          "name":"天野優愛",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 169,
　　　　　"src": "./images/画像編集技法2023/課題7/006-後藤佳奈-a21da043.png",
          "name":"後藤佳奈",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 170,
　　　　　"src": "./images/画像編集技法2023/課題7/007-池田衣里-a22db009.png",
          "name":"池田衣里",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 171,
　　　　　"src": "./images/画像編集技法2023/課題7/008-稲吉菜緒-a21db016.png",
          "name":"稲吉菜緒",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 172,
　　　　　"src": "./images/画像編集技法2023/課題7/009-喜多清根-a22da031.png",
          "name":"喜多清根",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 173,
　　　　　"src": "./images/画像編集技法2023/課題7/010-松原亜実-a22da072.png",
          "name":"松原亜実",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 174,
　　　　　"src": "./images/画像編集技法2023/課題7/011-前田晴香-a22da070.png",
          "name":"前田晴香",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 175,
　　　　　"src": "./images/画像編集技法2023/課題7/012-森菜々美-a22da077.png",
          "name":"森菜々美",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 176,
　　　　　"src": "./images/画像編集技法2023/課題7/013-宮崎友-a22da075.png",
          "name":"宮崎友",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 177,
　　　　　"src": "./images/画像編集技法2023/課題7/014-大橋彩花-a22db024.png",
          "name":"大橋彩花",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 178,
　　　　　"src": "./images/画像編集技法2023/課題7/015-岡留碧衣-a22db025.png",
          "name":"岡留碧衣",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 179,
　　　　　"src": "./images/画像編集技法2023/課題7/016-奥田もえ-a21da026.png",
          "name":"奥田もえ",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 180,
　　　　　"src": "./images/画像編集技法2023/課題7/017-大沼愛菜佳-a22da017.png",
          "name":"大沼愛菜佳",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 181,
　　　　　"src": "./images/画像編集技法2023/課題7/018-小野美咲-a22db027.png",
          "name":"小野美咲",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 182,
　　　　　"src": "./images/画像編集技法2023/課題7/019-尾山怜花-a21da027.png",
          "name":"尾山怜花",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 183,
　　　　　"src": "./images/画像編集技法2023/課題7/020-鷺山あいか-a22db043.png",
          "name":"鷺山あいか",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 184,
　　　　　"src": "./images/画像編集技法2023/課題7/021-總見榛名-a22db055.png",
          "name":"總見榛名",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 185,
　　　　　"src": "./images/画像編集技法2023/課題7/022-佐藤未悠-a22db045.png",
          "name":"佐藤未悠",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 186,
　　　　　"src": "./images/画像編集技法2023/課題7/023-酒井里子-a20da061.png",
          "name":"酒井里子",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 187,
　　　　　"src": "./images/画像編集技法2023/課題7/024-鈴木梨音-a22da044.png",
          "name":"鈴木梨音",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 188,
　　　　　"src": "./images/画像編集技法2023/課題7/025-鈴木琉杏-a22db052.png",
          "name":"鈴木琉杏",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 189,
　　　　　"src": "./images/画像編集技法2023/課題7/026-杉山歌野-a22db050.png",
          "name":"杉山歌野",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 190,
　　　　　"src": "./images/画像編集技法2023/課題7/027-沢田柚奈-a22db047.png",
          "name":"沢田柚奈",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 191,
　　　　　"src": "./images/画像編集技法2023/課題7/028-建木菜々-a22da049.png",
          "name":"建木菜々",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 192,
　　　　　"src": "./images/画像編集技法2023/課題7/029-内田日菜-a22db021.png",
          "name":"内田日菜",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 193,
　　　　　"src": "./images/画像編集技法2023/課題7/030-渡邉柚那-a22da085.png",
          "name":"渡邉柚那",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 194,
　　　　　"src": "./images/画像編集技法2023/課題7/031-山田依里奈-a22db093.png",
          "name":"山田依里奈",
          "topic": "TOPIC5",
          "subject":"db"
        },
        {
          "id": 195,
　　　　　"src": "./images/画像編集技法2023/課題7/032-山中菜都美-a21da113.png",
          "name":"山中菜都美",
          "topic": "TOPIC5",
          "subject":"da"
        },
        {
          "id": 196,
　　　　　"src": "./images/画像編集技法2023/課題7/033-山﨑颯香-a22db091.png",
          "name":"山﨑颯香",
          "topic": "TOPIC5",
          "subject":"db"
        },


      ],
      topic: [{
          label: 'TOPIC1',
        },
        {
          label: 'TOPIC2',
        },
        {
          label: 'TOPIC3',
        },
        {
          label: 'TOPIC4',
        },
        {
          label: 'TOPIC5',
        },
      ],


      subject: [
        {
          label: 'da',
        },
        {
          label: 'db',
        },
      ],


       name: [
         {
          name: [
            '青山ひびき'
          ],
        },
         {
          name: [
            '秋田陽菜乃'
          ],
        },
         {
          name: [
            '安藤こずえ'
          ],
        },
         {
          name: [
            '青木美咲希'
          ],
        },
         {
          name: [
            '浅井凜音'
          ],
        },
         {
          name: [
            '天野優愛'
          ],
        },
         {
          name: [
            '後藤佳奈'
          ],
        },
         {
          name: [
            '池田衣里'
          ],
        },
         {
          name: [
            '稲吉菜緒'
          ],
        },
         {
          name: [
            '喜多清根'
          ],
        },
         {
          name: [
            '河村侑未'
          ],
        },
         {
          name: [
            '松原亜実'
          ],
        },
         {
          name: [
            '前田晴香'
          ],
        },
         {
          name: [
            '森菜々美'
          ],
        },
         {
          name: [
            '宮崎友'
          ],
        },
         {
          name: [
            '大橋彩花'
          ],
        },
         {
          name: [
            '岡留碧衣'
          ],
        },
         {
          name: [
            '奥田もえ'
          ],
        },
         {
          name: [
            '大沼愛菜佳'
          ],
        },
         {
          name: [
            '小野美咲'
          ],
        },
         {
          name: [
            '尾山怜花'
          ],
        },
         {
          name: [
            '鷺山あいか'
          ],
        },
         {
          name: [
            '總見榛名'
          ],
        },
         {
          name: [
            '佐藤未悠'
          ],
        },
         {
          name: [
            '酒井里子'
          ],
        },
         {
          name: [
            '鈴木梨音'
          ],
        },
         {
          name: [
            '鈴木琉杏'
          ],
        },
         {
          name: [
            '杉山歌野'
          ],
        },
         {
          name: [
            '沢田柚奈'
          ],
        },
         {
          name: [
            '建木菜々'
          ],
        },
         {
          name: [
            '内田日菜'
          ],
        },
         {
          name: [
            '渡邉柚那'
          ],
        },
         {
          name: [
            '山田依里奈'
          ],
        },
         {
          name: [
            '山中菜都美'
          ],
        },
         {
          name: [
            '山﨑颯香'
          ],
        },
      ],

      selectedTopic: [],
      selectedSubject: [],
      selectedItems: [],
      selectedName: [],
      searchKeywords: [],
      filteredItems: []
    }
  },
  mounted() {
  
/*     var json = './mountaion.json';
    axios.get(json).then(x => {
      this.records = x.data
    }).catch((error) => alert('正しくjsonデータが読み込まれていません。error:' + error)); */

  },
  methods: {
    // 検索のチェックをリセット
    resetSearch() {
      this.selectedTopic = [];
      this.selectedSubject = [];
      this.selectedName = [];
    },

  },
  computed: {
    filterItems() {
      let filtered = this.records;

      if (this.selectedTopic.length > 0) {
        // filterに該当のものを、配列でreturn
        filtered = filtered.filter((item) => {
          // チェックボックスにチェックされているかを、分岐
          for (let i = 0; i < this.selectedTopic.length; i++) {

            // this.selectedAreaはオブジェクトなので、[i]をつけることで、配列の項目を一つずつ取り出して、参照している
            if (item.topic.includes(this.selectedTopic[i])) {
              // includesで一致する場合は true を返して、フィルタリングする
              return true;
            }
          }
          return false;
        });
      }


      if (this.selectedSubject.length > 0) {
        filtered = filtered.filter((item) => {
          if (item.subject.includes(this.selectedSubject)) {
            return true;
          }
          return false;
        });
      }

      if (this.selectedName.length > 0) {
        filtered = filtered.filter((item) => {
          if (item.name.includes(this.selectedName)) {
            return true;
          }
          return false;
        });
      }


      // キーワード検索
      if (this.searchKeywords.length > 0) {

        const searchKeywords = this.searchKeywords.split(/\s/);
        filtered = filtered.filter((item) => {
          for (let i = 0; i < searchKeywords.length; i++) {
            console.log(searchKeywords[i]);
            // 名前にヒットしない場合は、falseを返す
            if  ((!item.name.includes(searchKeywords[i])) && (!item.category.includes(searchKeywords[i]))){
              return false
              break;
            }
          }
          return true
        });
      }
      if(this.category){
        filtered = filtered.filter((item) => !item.category.indexOf(this.category) );

      }

      return filtered;
   },
  /*filterByCategory() {
      return this.item.filter((item) => !item.category.indexOf(this.category));
    }
    */

  }
});



search.mount("#app");
