// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function() {
    console.log(myGameArea.message.docIsReady);
    myGameArea.start();
    this.myGamePiece = new Component(30,30,"red",10,120);
}

var myGamePiece;

// 환경정보를 가진 객체
var myGameArea = {
    canvas : document.createElement("canvas"),
    message : {
        docIsReady :"문서가 준비되었습니다."
    },
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        //document.body.insertBefore(무엇, 어디)    
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);   
        //var ctx = myGameArea.canvas.getContext("2d");
        this.context =this.canvas.getContext("2d");
        //타이머 적용
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}
// 컴포넌트 생성자 함수
function Component (w, h, c, x, y) {
//속성을 부여하는 영역
    this.x = x;
    this.y = y;
    this.c = c;
    this.w = w;
    this.h = h;
    // 외부 실행을 위해 함수에 포함
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = c;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}
//화면제어를 위한 함수
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x +=1;
    myGamePiece.update();
}