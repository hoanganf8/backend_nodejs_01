// - Thú trong game: Chó, mèo, chim, cá, v.v
// - Chỉ số: damage (sức tấn công), hp (máu), df (phòng thủ),
// counterAttack (phản đòn)

// 1. Tạo ít nhất 2 thú, bao gồm đầy các chỉ số
// 2. Xây dựng chức tấn công:
//  nhanvata.hp = nhanvata.hp - nhanvatb.damage
// nhanvata.hp -= nhanvatb.damage

// Object/Function contructor -> Hàm tạo

function Monter(name, damage, hp, df, counterAttack) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.df = df;
    this.counterAttack = counterAttack;

    this.attack = function(monter) {
        monter.hp -= this.damage - monter.df;
        this.hp -= monter.counterAttack;
    }
    this.getHp = function() {
        return this.hp > 0 ? this.hp : 0;
    }
}

function Player(audios) {
    this.audios = audios;

    this.play = function() {
        // Play logic...
    }
    this.pause = function() {
        // Pause logic...
    }
}

const player = new Player([
    // path-to-mp3-1,
    // path-to-mp3-2,
    // vv
]);

player.play();
player.pause();


// 
function StudentManager() {
    const students = [];

    this.add = function(student) {
        students.push(student);
    }
    this.delete = function(index) {
        students.splice(index, 1);
    }
    this.update = function(index, student) {
        students.splice(index, 1, student);
    }
    this.getList = function() {
        return students;
    }
}

// Monter.prototype.type = 'Thổ'
// Monter.prototype.getType = function() {
//     return this.type;
// }
// Monter.prototype.getName = function() {
//     return this.name;
// }

// instance
const caMap = new Monter('Cá mập', 50, 600, 50, 50);
const daiBang = new Monter('Đại bàng', 200, 500, 200, 150);

caMap.type = 'Thủy';
daiBang.type = 'Thổ';

// const caMap = {
//     name: 'Cá mập',
//     damage: 50,
//     hp: 600,
//     df: 50,
//     counterAttack: 50,
//     attack: function(monter) {
//         monter.hp -= this.damage - monter.df;
//         this.hp -= monter.counterAttack;
//     },
//     getHp: function() {
//         return this.hp > 0 ? this.hp : 0;
//     }
// }

// const daiBang = {
//     name: 'Đại bàng',
//     damage: 200,
//     hp: 500,
//     df: 200,
//     counterAttack: 150,
//     attack: function(monter) {
//         monter.hp -= this.damage - monter.df;
//         this.hp -= monter.counterAttack;
//     },
//     getHp: function() {
//         return this.hp > 0 ? this.hp : 0;
//     }
// }

// 1. Không trừ máu về số âm (tối thiểu là 0)
// 2. Dùng vòng lặp, cho 2 thú đánh nhau và tìm ra thú chết.
// Và in ra thông tin thú bị chết

while (true) {
    caMap.attack(daiBang);

    if (daiBang.getHp() <= 0) {
        console.log('Nhân vật thua: ', daiBang);
        break
    }

    daiBang.attack(caMap);

    if (caMap.getHp() <= 0) {
        console.log('Nhân vật thua: ', caMap);
        break
    }

    console.table(daiBang);
    console.table(caMap);
}