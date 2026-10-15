let sumaly: number =0;
let staus: boolean =true;
let p :number =0;
while(staus){
    sumaly +=1;
    p = p +1;
    console.log("%d :วันที่ %d = %d บาท", p,sumaly);
    if(p == 30){
        staus = false
        console.log("คุณเก็บเงิน %d : วันที่ = %dบาท ",p, sumaly);
    }
}