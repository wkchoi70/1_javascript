        let x = 9999999999999999;
        let y = BigInt("9999999999999999");
        document.getElementById("nums").innerHTML = x + "<br>" + y;

        let hex = 0x20000000000003n;
        let oct = 0o400000000000000003n;
        let bin = 0b100000000000000000000000000000000000000000000000000011n;

        document.getElementById("hex").innerHTML = hex + "<br>" + oct + "<br>" + bin;
        /*
        진법 : 숫자를 표현할 때 기준이 되는 숫자체계
        우리가 일상에서 쓰는건 10진법 0~9
        
        */