class box {
    constructor(x,y,width,height) {
        var options = {
            restitution: 1
        }
        this.body = mb.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        mw.add(world,this.body)
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill('red');
        rect(pos.x,pos.y,this.width,this.height);
    }
}