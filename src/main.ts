function Outputpyramid (totalLine:number):void{
    for(var currentLine : number = 1; currentLine <= totalLine; currentLine ++){
        var singleLine = "";        
        for(var spaceCount : number = 0; spaceCount < totalLine - currentLine; spaceCount++){
           singleLine = singleLine + " ";
        }
        for(var starCount : number = 1; starCount <= currentLine * 2 - 1; starCount++){
            singleLine = singleLine + "*";
        }
        console.log(singleLine);
    }
}

window.onload = () => {
    Outputpyramid(8);
};