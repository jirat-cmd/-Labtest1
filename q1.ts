export{};
class fs{
    constructor(public age:string, public disc:boolean){
    }
    calcule( age: string): number {
        let price: number= 0;
        if( age === "น้อยกว่า12ปี"){
            price = 60;
        }else if(age === "ระหว่าง12-59ปี"){
            price =120;
        }else if(age === "60ปีขึ้นไป"){
            price =100;
        }
        return price;
    }
    oder():void{
        let price2 = 0;
        let price = this.calcule(this.age);
        console.log(price);
        if(this.disc === true){
            price2 = price*0.10;
        }
        console.log("อายุ %s ราคาปกติ %d บาท",this.age,price);
        console.log(`ได้รับส่วนลด 10% ราคาสุทธิ ${price-price2}`);
    }

}
let oder1 = new fs("น้อยกว่า12ปี",true);
oder1.oder();