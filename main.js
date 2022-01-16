array_1 = [
    "apple",//0
    "boomerang",//1
    "ear",//2
    "UFO",//3
    "torch",//4
    "moon",//5
    "mouse (computer)",//6
    "aeroplane",//7
    "galaxy",//8
    "sun",//9
    "tortoise"//10
];

timer_counter = 0;
timer_check = "";
time = 0;
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = "";

random_num = Math.floor(Math.random()*array_1.length+1);
quick_draw_data_set = array_1[random_num];
console.log(quick_draw_data_set);
document.getElementById("objectToBeDrawn").innerHTML = "Object To Be Drawn = " + quick_draw_data_set;

function preload() {
    classifier = ml5.imageClassifier("DoodleNet");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function update_canvas() {
    
    background("white");
    random_num = Math.floor(Math.random()*array_1.length+1);
    quick_draw_data_set = array_1[random_num];
    sketch = quick_draw_data_set;
    console.log(sketch);
    document.getElementById("objectToBeDrawn").innerHTML = "Object To Be Drawn = " + quick_draw_data_set;
    timer_counter = 0;
    time = 0;
    timer_check = "";
    answer_holder = "";
}


function draw() {
    strokeWeight(6);
    check_sketch();
    stroke("black");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    if (drawn_sketch == sketch) {
        answer_holder = "set";
        score = score + 1;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
  
    }

    function check_sketch() {
        
        timer_counter++;
        document.getElementById("timer").innerHTML = "Timer:" + time + " (sec)";
        console.log(timer_counter + " (sec)");
         
        if (timer_counter > 100) {
            timer_counter = 0;
            time = time + 1
        }
        if (time == 120) {
            timer_check = "completed";
        }
        if (timer_check == "completed" || answer_holder == "set") {
            timer_check = "";
            answer_holder = "";
            update_canvas();
        }
         }