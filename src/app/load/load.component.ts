import { Component, ElementRef, ViewChild, } from "@angular/core";

@Component({
  selector: "app-load",
  templateUrl: "./load.component.html",
  styleUrls: ["./load.component.css"]
})
export class LoadComponent {
  @ViewChild('canvasEl', { read: ElementRef }) canvasEl:ElementRef;

  private n = 0;
  private c = 5;
  private radius = 15;
  private angle = 30;
  private x = 0;
  private y = 0;
  private speed = 50;
  private context: CanvasRenderingContext2D;

  constructor() {
    setInterval(() => this.drawSpinner(), this.speed);
  }

  ngOnInit(): void {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
  }

  drawSpinner() {
    
    let pi = Math.PI;
    const ang = this.n * this.angle;
    const rad = this.c * this.radius;

    //coordinates
    this.y = rad * Math.sin((ang*pi/180)) + ((this.canvasEl.nativeElement as HTMLCanvasElement).height / 2);
    this.x = rad * Math.cos((ang*pi/180)) + ((this.canvasEl.nativeElement as HTMLCanvasElement).width / 2);

    this.context.fillStyle = 'rgba(' + ang % 220 + ',' + 20 + ',' +  135 + ',' + 0.9 + ')';
    this.context.beginPath();
    this.context.clearRect(this.x - this.radius - 1, this.y - this.radius - 1,
      this.radius * 2 + 2, this.radius * 2 + 2);
    this.context.arc(this.x, this.y, this.radius, 0, (pi * 2), true);
    this.context.fill();
    this.context.closePath();
    this.n++;
  }
}