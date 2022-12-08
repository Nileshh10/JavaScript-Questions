// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Given Equation : y=2x-2


function x_intercept(y){
    x=(y+2)/2;
    return x;
} 

function y_intercept(x){
    y = 2*x -2;
    return y;
}

console.log(x_intercept(0),y_intercept(0)); 

// so points are (1,0) and (0,-2)

function slope(y2,y1,x2,x1){
        m = (y2-y1)/(x2-x1);
        return m;
    }

    console.log(slope(-2,0,0,1)); 